import { createToken } from "@/lib/magic-link";

const ADMIN_SECRET = process.env.ADMIN_SECRET || "";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");

  if (!ADMIN_SECRET || authHeader !== `Bearer ${ADMIN_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { expiresAt } = await request.json();

  if (!expiresAt) {
    return Response.json({ error: "expiresAt date is required" }, { status: 400 });
  }

  const expiry = new Date(expiresAt);
  if (isNaN(expiry.getTime()) || expiry < new Date()) {
    return Response.json({ error: "expiresAt must be a valid future date" }, { status: 400 });
  }

  const token = createToken(expiry);
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.summithousenapa.com"}/manual?token=${token}`;

  return Response.json({ token, url, expiresAt: expiry.toISOString() });
}
