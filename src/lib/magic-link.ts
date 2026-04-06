import { createHmac } from "crypto";

const SECRET = process.env.MAGIC_LINK_SECRET || "";

/**
 * Create a signed magic link token.
 * Token format: base64({ expiresAt }) + "." + hmacSignature
 */
export function createToken(expiresAt: Date): string {
  const payload = JSON.stringify({ expiresAt: expiresAt.toISOString() });
  const encoded = Buffer.from(payload).toString("base64url");
  const signature = createHmac("sha256", SECRET).update(encoded).digest("base64url");
  return `${encoded}.${signature}`;
}

/**
 * Verify a magic link token. Returns the expiry date if valid, null if invalid/expired.
 */
export function verifyToken(token: string): { valid: true; expiresAt: Date } | { valid: false } {
  if (!SECRET) return { valid: false };

  const parts = token.split(".");
  if (parts.length !== 2) return { valid: false };

  const [encoded, signature] = parts;
  const expectedSig = createHmac("sha256", SECRET).update(encoded).digest("base64url");

  if (signature !== expectedSig) return { valid: false };

  try {
    const payload = JSON.parse(Buffer.from(encoded, "base64url").toString());
    const expiresAt = new Date(payload.expiresAt);

    if (isNaN(expiresAt.getTime())) return { valid: false };
    if (expiresAt < new Date()) return { valid: false };

    return { valid: true, expiresAt };
  } catch {
    return { valid: false };
  }
}
