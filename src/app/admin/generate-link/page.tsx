"use client";

import { useState } from "react";

export default function GenerateLinkPage() {
  const [adminSecret, setAdminSecret] = useState("");
  const [expiresAt, setExpiresAt] = useState("");
  const [result, setResult] = useState<{ url: string; expiresAt: string } | null>(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setResult(null);
    setCopied(false);

    if (!adminSecret || !expiresAt) {
      setError("Both fields are required.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/generate-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${adminSecret}`,
        },
        body: JSON.stringify({ expiresAt: new Date(expiresAt).toISOString() }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || "Something went wrong.");
        return;
      }

      setResult(data);
    } catch {
      setError("Failed to connect. Check your internet connection.");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!result) return;
    await navigator.clipboard.writeText(result.url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section className="flex min-h-[calc(100vh-72px)] items-center justify-center bg-parchment px-6">
      <div className="w-full max-w-lg">
        <div className="text-center mb-10">
          <h1 className="font-serif font-extralight uppercase tracking-[4px] text-2xl md:text-3xl text-ink">
            Generate Guest Link
          </h1>
          <div className="mx-auto mt-4 h-px w-20 bg-brass" />
          <p className="mt-4 font-sans text-sm text-text-muted">
            Create a magic link for your guest&apos;s house manual access.
          </p>
        </div>

        <form onSubmit={handleGenerate} className="space-y-5">
          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-text-muted mb-2">
              Admin Secret
            </label>
            <input
              type="password"
              value={adminSecret}
              onChange={(e) => setAdminSecret(e.target.value)}
              placeholder="Enter your admin secret"
              className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 font-sans text-sm text-text placeholder:text-text-muted/50 outline-none focus:border-brass transition-colors"
            />
          </div>

          <div>
            <label className="block font-sans text-xs uppercase tracking-wider text-text-muted mb-2">
              Link Expires On
            </label>
            <input
              type="date"
              value={expiresAt}
              onChange={(e) => setExpiresAt(e.target.value)}
              className="w-full rounded-lg border border-charcoal/20 bg-white px-4 py-3 font-sans text-sm text-text outline-none focus:border-brass transition-colors"
            />
            <p className="mt-1.5 font-sans text-xs text-text-muted">
              Set to the guest&apos;s checkout date.
            </p>
          </div>

          {error && (
            <p className="font-sans text-sm text-error">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-brass px-6 py-3 font-sans text-sm font-medium uppercase tracking-wider text-ink transition-colors hover:bg-brass-light disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate Link"}
          </button>
        </form>

        {result && (
          <div className="mt-8 rounded-xl bg-white border border-charcoal/10 p-6">
            <p className="font-sans text-xs uppercase tracking-wider text-text-muted mb-3">
              Guest Link (expires {new Date(result.expiresAt).toLocaleDateString()})
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                readOnly
                value={result.url}
                className="flex-1 rounded-lg border border-charcoal/10 bg-surface px-3 py-2.5 font-sans text-xs text-text truncate outline-none"
              />
              <button
                onClick={handleCopy}
                className="shrink-0 rounded-lg bg-ink px-4 py-2.5 font-sans text-xs font-medium uppercase tracking-wider text-parchment transition-colors hover:bg-charcoal"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
