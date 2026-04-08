"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .replace(/__(.+?)__/g, "$1")
    .replace(/_(.+?)_/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/^[-*+]\s+/gm, "- ")
    .replace(/`(.+?)`/g, "$1");
}

export default function ConciergeChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setToken(params.get("token") || "");
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  async function handleSend() {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const updated = [...messages, userMsg];
    setMessages(updated);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updated, token }),
      });

      if (!res.ok) throw new Error("Chat request failed");

      const reader = res.body?.getReader();
      if (!reader) throw new Error("No reader");

      const decoder = new TextDecoder();
      let assistantText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              assistantText += parsed.text;
            } catch {
              // skip malformed chunks
            }
          }
        }
      }

      setMessages([...updated, { role: "assistant", content: stripMarkdown(assistantText) }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Sorry, I'm having trouble connecting. Please try again or email stay@aframeofnapa.com." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Collapsed: sticky bottom bar, centered */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed z-50 flex items-center gap-2.5 font-serif uppercase"
          style={{
            bottom: "5px",
            left: "50%",
            transform: "translateX(-50%)",
            backgroundColor: "#1B4D2E",
            borderRadius: "12px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
            padding: "14px 24px",
            maxWidth: "calc(100% - 40px)",
            whiteSpace: "nowrap",
          }}
          aria-label="Chat with Concierge"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#D4A574" stroke="none">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
          <span
            style={{
              fontWeight: 300,
              fontSize: "14px",
              letterSpacing: "1.5px",
              color: "#F5F2ED",
            }}
          >
            Chat with Concierge
          </span>
        </button>
      )}

      {/* Expanded: full-width panel from bottom */}
      {open && (
        <div
          className="fixed z-50 flex flex-col"
          style={{
            bottom: 0,
            left: 0,
            right: 0,
            maxHeight: "80vh",
            borderRadius: "12px 12px 0 0",
            overflow: "hidden",
            boxShadow: "0 -4px 30px rgba(0,0,0,0.15)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between shrink-0"
            style={{
              backgroundColor: "#1B4D2E",
              padding: "14px 24px",
            }}
          >
            <div className="flex items-center gap-2.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#D4A574" stroke="none">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span
                className="font-serif uppercase"
                style={{
                  fontWeight: 300,
                  fontSize: "13px",
                  letterSpacing: "2px",
                  color: "#F5F2ED",
                }}
              >
                Concierge
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="transition-opacity"
              style={{ color: "#F5F2ED", opacity: 0.7 }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.7")}
              aria-label="Close chat"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto flex flex-col"
            style={{
              backgroundColor: "#F9F7F2",
              padding: "16px 24px",
              minHeight: "200px",
              maxHeight: "50vh",
              gap: "12px",
            }}
          >
            {messages.length === 0 && (
              <div className="text-center py-8">
                <p className="font-sans" style={{ fontSize: "14px", color: "#8B9D83" }}>
                  Welcome! Ask me anything about the A-Frame — WiFi, hot tub, local restaurants, and more.
                </p>
              </div>
            )}
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className="font-sans"
                  style={{
                    maxWidth: "85%",
                    padding: "10px 14px",
                    fontSize: "14px",
                    lineHeight: 1.5,
                    ...(msg.role === "user"
                      ? {
                          backgroundColor: "#1B4D2E",
                          color: "#F5F2ED",
                          borderRadius: "12px 12px 4px 12px",
                        }
                      : {
                          backgroundColor: "#FFFFFF",
                          color: "#4A4238",
                          border: "1px solid #e8e4de",
                          borderRadius: "12px 12px 12px 4px",
                        }),
                  }}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div
                  className="font-sans italic"
                  style={{
                    maxWidth: "85%",
                    padding: "10px 14px",
                    fontSize: "14px",
                    backgroundColor: "#FFFFFF",
                    color: "#8B9D83",
                    border: "1px solid #e8e4de",
                    borderRadius: "12px 12px 12px 4px",
                  }}
                >
                  Thinking...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3 shrink-0"
            style={{
              backgroundColor: "#FFFFFF",
              borderTop: "1px solid #e8e4de",
              padding: "12px 24px 14px",
            }}
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
              className="flex-1 font-sans outline-none"
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "11px 14px",
                fontSize: "14px",
                color: "#4A4238",
                backgroundColor: "#FFFFFF",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "#1B4D2E")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "#ddd")}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="shrink-0 flex items-center justify-center transition-opacity disabled:opacity-40"
              style={{
                backgroundColor: "#1B4D2E",
                borderRadius: "8px",
                padding: "0 16px",
                height: "42px",
              }}
              aria-label="Send message"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F5F2ED" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
