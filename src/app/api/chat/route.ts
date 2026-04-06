import Anthropic from "@anthropic-ai/sdk";
import { getManualAsText } from "@/lib/parse-manual";

const client = new Anthropic();

const manualText = getManualAsText();

const SYSTEM_PROMPT = `You are the AI concierge for A-Frame of Napa, a luxury monthly vacation rental — a restored 1969 A-frame cabin on Mount Veeder in Napa Valley.

Answer guest questions about the property using the house manual knowledge below. Be warm, concise, and helpful. If you don't know something, say so and suggest the guest contact stay@aframeofnapa.com. Do not use markdown formatting in your responses — write in plain text only.

HOUSE MANUAL:
${manualText}`;

export async function POST(request: Request) {
  const { messages } = await request.json();

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
