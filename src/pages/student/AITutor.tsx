import { useState, useRef, useEffect } from "react";
import { Send, Image as ImageIcon, Mic, Paperclip, ChevronLeft, Bot, User, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";

export default function AITutor() {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello Chidi! I am your PrepNaija AI Tutor. What subject should we tackle today? I can explain things in English, Pidgin, Hausa, Yoruba, or Igbo!" }
  ]);
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("English");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMsg = { role: "user", content: input };
    setMessages([...messages, newMsg]);
    setInput("");

    // Simulate AI thinking
    setTimeout(() => {
      let response = "That's a great question! Let me explain that for you...";
      if (input.toLowerCase().includes("pidgin")) {
        response = "Oya listen well well. This matter simple. If you look am from this side...";
      } else if (input.toLowerCase().includes("quadratic")) {
        response = "Quadratic equations are like balanced scales. We use the formula x = [-b ± √(b² - 4ac)] / 2a. Would you like a step-by-step example?";
      }
      
      setMessages(prev => [...prev, { role: "assistant", content: response }]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] lg:h-[calc(100vh-120px)] bg-white rounded-3xl overflow-hidden border shadow-sm">
      {/* Header */}
      <header className="p-4 border-b flex items-center justify-between bg-primary text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Bot size={24} />
          </div>
          <div>
            <h2 className="font-bold">AI Tutor</h2>
            <div className="flex items-center gap-1 text-[10px] text-white/80">
               <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
               Online | Expert in Nigerian Curricula
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" className="text-white hover:bg-white/10 rounded-full px-3 text-xs gap-2 border border-white/20">
            <Globe size={14} />
            {language}
          </Button>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/20">
        <AnimatePresence>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${msg.role === "user" ? "bg-primary text-white" : "bg-white border text-primary"}`}>
                   {msg.role === "user" ? <User size={14} /> : <Bot size={14} />}
                </div>
                <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.role === "user" ? "bg-primary text-white rounded-tr-none" : "bg-white border rounded-tl-none"}`}>
                  {msg.content}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Input */}
      <div className="p-4 border-t bg-white">
        <div className="flex items-center gap-2 mb-2">
          {["English", "Pidgin", "Hausa", "Yoruba", "Igbo"].map(lang => (
            <button 
              key={lang}
              onClick={() => setLanguage(lang)}
              className={`px-3 py-1 rounded-full text-[10px] font-bold border transition-all ${language === lang ? "bg-primary text-white border-primary" : "text-muted-foreground hover:bg-muted"}`}
            >
              {lang}
            </button>
          ))}
        </div>
        <div className="flex items-end gap-2">
          <div className="flex-1 relative glass border rounded-2xl p-1 px-2 focus-within:border-primary transition-colors">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && (e.preventDefault(), handleSend())}
              placeholder="Ask anything (e.g. explain photosynthesis in Pidgin)"
              className="w-full bg-transparent border-none focus:ring-0 text-sm p-2 resize-none max-h-32 min-h-[44px]"
            />
            <div className="flex items-center gap-2 pb-2 pl-2">
               <button className="text-muted-foreground hover:text-primary transition-colors">
                 <ImageIcon size={18} />
               </button>
               <button className="text-muted-foreground hover:text-primary transition-colors">
                 <Paperclip size={18} />
               </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Button size="icon" className="rounded-full h-12 w-12 bg-primary shadow-lg shadow-primary/20" onClick={handleSend}>
              <Send size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full h-12 w-12 border-primary/20 text-primary hover:bg-primary/5">
              <Mic size={20} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
