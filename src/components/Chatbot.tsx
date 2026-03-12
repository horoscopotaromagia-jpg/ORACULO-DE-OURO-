import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";
import { MessageCircle, X, Send, Sparkles, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface Message {
  role: 'user' | 'model';
  text: string;
}

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Bem-vindo ao portal do Oráculo de Ouro. Como posso iluminar seu caminho hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const whatsappNumber = "5511999999999";
  const welcomeMessage = encodeURIComponent("Olá! Sinto que é o momento de buscar a Cura da Minha Alma. Gostaria de uma consulta com O Oráculo de Ouro.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${welcomeMessage}`;

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
      const model = ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: messages.concat({ role: 'user', text: userMessage }).map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `Você é o assistente virtual do 'O Oráculo de Ouro'. 
          Seu objetivo é tirar dúvidas sobre os serviços de Tarô e Cura da Alma. 
          Seja místico, acolhedor e profissional. 
          Sempre que o usuário demonstrar interesse em uma consulta ou parecer pronto para agendar, direcione-o gentilmente para o WhatsApp: ${whatsappUrl}. 
          Responda de forma concisa e empática. 
          Serviços: Tarô de Revelação (identifica bloqueios), Cura da Alma (limpeza energética e chakras). 
          Consultas são 100% online. Valores são informados no WhatsApp.`,
        }
      });

      const response = await model;
      const text = response.text || "Sinto uma interferência nas energias. Poderia repetir?";
      setMessages(prev => [...prev, { role: 'model', text }]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "As estrelas estão em silêncio no momento. Tente novamente em instantes ou fale conosco diretamente no WhatsApp." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[350px] h-[500px] glass-card rounded-2xl flex flex-col shadow-2xl border-gold/20 overflow-hidden shadow-mystic-violet/20"
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 bg-mystic-violet/40 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="serif text-sm uppercase tracking-widest text-gold">Oráculo Assistente</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-mystic-paper/50 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gold/20 bg-mystic-dark/40">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    m.role === 'user' 
                    ? 'bg-gold text-mystic-dark rounded-tr-none' 
                    : 'bg-mystic-blue/40 text-mystic-paper/80 rounded-tl-none border border-white/5'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 p-3 rounded-2xl rounded-tl-none border border-white/5">
                    <Loader2 className="w-4 h-4 animate-spin text-gold" />
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="relative">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Sua pergunta ao Oráculo..."
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:border-gold/50 transition-colors"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gold hover:text-gold-dark disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[9px] text-center mt-2 text-mystic-paper/30 uppercase tracking-widest">
                Respostas guiadas por IA e Sabedoria Ancestral
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gold text-mystic-dark flex items-center justify-center shadow-lg shadow-gold/20 hover:scale-110 transition-transform active:scale-95"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </div>
  );
};
