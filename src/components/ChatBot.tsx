import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const RESPONSES: Record<string, string> = {
  hello: "Hey there! 👋 I'm Eva's portfolio assistant. Ask me about her skills, projects, or how to get in touch!",
  hi: "Hey there! 👋 I'm Eva's portfolio assistant. Ask me about her skills, projects, or how to get in touch!",
  skills: "Eva is skilled in React, TypeScript, cloud technologies, and databases. She's currently learning Three.js, WebXR, and Unity for VR/AR development! 🚀",
  projects: "Eva is building her portfolio of projects right now! Check out her Instagram (@evainbowsk) to see her amazing art. She's passionate about AI, VR/AR, and creative tech.",
  contact: "You can reach Eva at evalps24@gmail.com or connect on LinkedIn. She'd love to hear from you! 💛",
  art: "Eva is a talented artist! Check out her Instagram @evainbowsk to see her paintings and drawings. 🎨",
  vr: "Eva is passionate about VR/AR development! She's learning WebXR and Unity to build immersive experiences. 🥽",
  ai: "Eva loves AI and uses it to enhance her web development workflow. She's an AI Web Developer who believes in making dreams come true step by step! ✨",
};

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const [key, value] of Object.entries(RESPONSES)) {
    if (lower.includes(key)) return value;
  }
  return "Great question! I'm a simple assistant for now — try asking about Eva's skills, projects, art, AI interests, VR/AR goals, or how to contact her. 😊";
}

const ChatBot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! 👋 I'm Eva's portfolio assistant. Ask me anything about her work, skills, or how to get in touch!" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = () => {
    const text = input.trim();
    if (!text) return;
    const userMsg: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: getResponse(text) },
      ]);
    }, 600);
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 left-6 z-50 p-4 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 active:scale-95 transition-transform"
        aria-label="Open chat"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-20 left-6 z-50 w-80 sm:w-96 max-h-[28rem] flex flex-col rounded-xl border border-border bg-card shadow-2xl overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border bg-secondary/50">
            <p className="font-heading font-semibold text-sm text-foreground">Eva's Assistant 🤖</p>
            <p className="text-xs text-muted-foreground">Ask me anything!</p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-lg text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-foreground"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-border flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && send()}
              placeholder="Type a message…"
              className="flex-1 px-3 py-2 rounded-lg border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <button
              onClick={send}
              className="p-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBot;
