import Anthropic from "@anthropic-ai/sdk";
import { getManualAsText } from "@/lib/parse-manual";
import { verifyToken } from "@/lib/magic-link";

const client = new Anthropic();

const manualText = getManualAsText();

const SYSTEM_PROMPT = `You are the AI concierge for A-Frame of Napa, a luxury monthly vacation rental — a restored 1969 A-frame cabin on Mount Veeder in Napa Valley.

Answer guest questions about the property using the house manual knowledge below. Be warm, concise, and helpful. If you don't know something, say so and suggest the guest contact stay@aframeofnapa.com. Do not use markdown formatting in your responses — write in plain text only.

HOUSE MANUAL:
${manualText}`;

// In-memory rate limiter: 20 requests per hour per IP
const RATE_LIMIT = 20;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }

  if (entry.count >= RATE_LIMIT) return false;

  entry.count++;
  return true;
}

export async function POST(request: Request) {
  // Rate limit by IP
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";

  if (!checkRateLimit(ip)) {
    return Response.json(
      { error: "Too many requests. Please try again later." },
      { status: 429 }
    );
  }

  const { messages, token } = await request.json();

  // Verify magic link token
  if (!token || !verifyToken(token).valid) {
    return Response.json(
      { error: "Unauthorized. A valid guest link is required." },
      { status: 401 }
    );
  }

  const stream = client.messages.stream({
    model: "claude-sonnet-4-20250514",
    max_tokens: 1024,
    system: SYSTEM_PROMPT,
    messages: messages.map((m: { role: string; content: string }) => ({
      role: m.role,
      content: m.content,
    })),
  });

  const encoder = new TextEncoder();

  const readable = new ReadableStream({
    async start(controller) {
      stream.on("text", (text) => {
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\n\n`));
      });

      stream.on("end", () => {
        controller.enqueue(encoder.encode("data: [DONE]\n\n"));
        controller.close();
      });

      stream.on("error", (error) => {
        console.error("Stream error:", error);
        controller.error(error);
      });
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
