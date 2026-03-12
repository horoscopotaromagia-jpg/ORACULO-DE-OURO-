/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MessageCircle, Sparkles, Scroll, Star, ShieldCheck, ArrowRight, Instagram, Youtube, Facebook } from "lucide-react";
import { Chatbot } from "./components/Chatbot";

export default function App() {
  const whatsappNumber = "5511999999999"; // Exemplo
  const welcomeMessage = encodeURIComponent("Olá! Sinto que é o momento de buscar a Cura da Minha Alma. Gostaria de uma consulta com O Oráculo de Ouro.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${welcomeMessage}`;

  return (
    <div className="min-h-screen selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-6 py-4 flex justify-between items-center border-b border-white/5 bg-mystic-dark/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full border border-gold flex items-center justify-center">
            <span className="text-gold text-xs font-bold">O</span>
          </div>
          <span className="serif text-xl tracking-widest uppercase font-light">O Oráculo de Ouro</span>
        </div>
        <a 
          href={whatsappUrl}
          className="hidden md:flex items-center gap-2 text-xs uppercase tracking-[0.2em] hover:text-gold transition-colors"
        >
          Agendar Consulta <ArrowRight className="w-3 h-3" />
        </a>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-mystic-violet/30 rounded-full blur-[120px]" />
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-xs uppercase tracking-[0.4em] mb-6 block font-medium">Cura da Alma & Sabedoria Ancestral</span>
              <h1 className="serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] mb-8 font-light">
                Cura da Alma e Tarô: Sua Jornada de <span className="gold-gradient italic">Despertar</span> Começa Aqui.
              </h1>
              <p className="text-mystic-paper/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light leading-relaxed">
                Busca uma consulta online de tarô com especialista? O Oráculo de Ouro revela as verdades ocultas que impedem sua evolução, trazendo clareza absoluta para suas decisões mais importantes.
              </p>
            </motion.div>

            {/* VSL Placeholder */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="vsl-container rounded-2xl shadow-2xl shadow-gold/5 relative group cursor-pointer overflow-hidden mb-12"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-gold/90 flex items-center justify-center pl-1 group-hover:scale-110 transition-transform duration-500">
                  <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-mystic-dark border-b-[12px] border-b-transparent" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs uppercase tracking-widest font-medium">Assista: O Despertar da Sua Jornada (45s)</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <a 
                href={whatsappUrl}
                className="inline-flex items-center gap-3 bg-mystic-blue hover:bg-mystic-blue-light text-gold px-10 py-5 rounded-full font-bold text-sm uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gold/10 border border-gold/30"
              >
                <MessageCircle className="w-5 h-5" />
                Quero Revelar Meu Destino Agora
              </a>
              <p className="mt-4 text-[10px] uppercase tracking-widest text-mystic-paper/40">Atendimento imediato e sigiloso via WhatsApp</p>
            </motion.div>
          </div>
        </section>

        {/* Features / Benefits */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-mystic-violet/10 to-transparent pointer-events-none" />
          <div className="max-w-6xl mx-auto mb-16 text-center relative z-10">
            <h2 className="serif text-4xl md:text-5xl font-light mb-6">Por que buscar uma Consulta Online com O Oráculo de Ouro?</h2>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-12 relative z-10">
            <div className="glass-card p-8 rounded-2xl border-gold/20 hover:border-gold/40 transition-colors group">
              <Sparkles className="text-gold w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="serif text-2xl mb-4 gold-gradient">Tarô de Revelação e Autoconhecimento</h3>
              <p className="text-mystic-paper/50 text-sm leading-relaxed">
                Leitura de cartas para autoconhecimento profundo. Não apenas previsões, mas um espelho da sua alma para identificar bloqueios energéticos e karmas familiares.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl border-gold/20 hover:border-gold/40 transition-colors group bg-mystic-emerald/5">
              <Scroll className="text-gold w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="serif text-2xl mb-4 gold-gradient">Limpeza Energética e Cura Espiritual</h3>
              <p className="text-mystic-paper/50 text-sm leading-relaxed">
                Saiba como fazer limpeza energética espiritual. Processos de realinhamento dos chakras para restaurar sua paz interior e equilíbrio emocional.
              </p>
            </div>
            <div className="glass-card p-8 rounded-2xl border-gold/20 hover:border-gold/40 transition-colors group bg-mystic-blue/5">
              <ShieldCheck className="text-gold w-8 h-8 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="serif text-2xl mb-4 gold-gradient">Acolhimento Ético e Profissional</h3>
              <p className="text-mystic-paper/50 text-sm leading-relaxed">
                Atendimento esotérico profissional via WhatsApp. Um espaço seguro, livre de julgamentos, focado na sua autoridade espiritual e bem-estar.
              </p>
            </div>
          </div>
        </section>

        {/* E-E-A-T Section */}
        <section className="py-24 px-6 bg-gradient-to-r from-mystic-blue/20 via-mystic-violet/10 to-mystic-blue/20 relative">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="serif text-4xl md:text-5xl font-light mb-12">Sobre O Oráculo de Ouro: Autoridade e Confiança</h2>
            <div className="glass-card p-10 rounded-3xl text-left border-gold/30 shadow-2xl shadow-mystic-blue/30 bg-mystic-dark/40">
              <p className="text-mystic-paper/80 text-lg leading-relaxed font-light italic">
                "Com mais de 15 anos de dedicação ao estudo das artes esotéricas e sabedorias ancestrais, O Oráculo de Ouro consolidou-se como uma autoridade em Cura da Alma e Tarô Terapêutico. Nossa prática é fundamentada em ética rigorosa e acolhimento profundo, tendo guiado milhares de consulentes em processos de autoconhecimento e superação de bloqueios energéticos. Especialista em decifrar os mistérios do inconsciente através das cartas, oferecemos uma orientação segura e profissional para quem busca não apenas previsões, mas uma verdadeira transformação espiritual e emocional."
              </p>
            </div>
          </div>
        </section>

        {/* VSL Script Section (Informational for the user) */}
        <section className="py-24 px-6 border-y border-white/5">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <span className="text-gold text-xs uppercase tracking-[0.4em] mb-4 block">Estratégia de Conteúdo</span>
              <h2 className="serif text-4xl md:text-5xl font-light">Roteiro da VSL (45 Segundos)</h2>
            </div>
            <div className="space-y-8 serif text-xl italic text-mystic-paper/80 leading-relaxed">
              <div className="border-l-2 border-gold pl-6">
                <p className="text-xs uppercase tracking-widest text-gold not-italic mb-2">00-10s: O Gancho</p>
                "Você sente que, por mais que tente, algo invisível trava sua vida? Aquela dúvida constante sobre o futuro que não te deixa dormir?"
              </div>
              <div className="border-l-2 border-gold/40 pl-6">
                <p className="text-xs uppercase tracking-widest text-gold/60 not-italic mb-2">10-25s: Empatia</p>
                "Eu sei como é carregar o peso da incerteza. Sou O Oráculo de Ouro e ajudo almas cansadas a reencontrarem sua luz através do Tarô e da Cura Espiritual."
              </div>
              <div className="border-l-2 border-gold/40 pl-6">
                <p className="text-xs uppercase tracking-widest text-gold/60 not-italic mb-2">25-35s: Prova</p>
                "Centenas de pessoas já transformaram o medo em clareza absoluta, desbloqueando caminhos no amor, finanças e saúde da alma."
              </div>
              <div className="border-l-2 border-gold pl-6">
                <p className="text-xs uppercase tracking-widest text-gold not-italic mb-2">35-45s: CTA</p>
                "Não deixe sua vida ao acaso. Clique no botão abaixo agora e vamos revelar o que o universo reservou para você hoje."
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof / Trust */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="serif text-4xl md:text-5xl font-light mb-16">O que dizem nossos consulentes</h2>
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <blockquote className="serif text-3xl md:text-4xl italic font-light mb-8 leading-tight">
              "A consulta com O Oráculo de Ouro foi o divisor de águas que eu precisava. A incerteza deu lugar a uma paz que eu não sentia há anos."
            </blockquote>
            <cite className="text-xs uppercase tracking-[0.3em] text-gold font-medium">— Maria Helena, Cliente Satisfeita</cite>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-6 bg-mystic-blue/20 relative overflow-hidden border-y border-gold/10">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-mystic-violet/30 rounded-full blur-[120px]" />
          </div>
          <div className="max-w-3xl mx-auto text-center relative z-10">
            <h2 className="serif text-4xl md:text-6xl mb-8 font-light">Agende sua Consulta via WhatsApp</h2>
            <p className="text-mystic-paper/60 mb-12 text-lg">O Universo está tentando falar com você. Você está pronto para ouvir?</p>
            <a 
              href={whatsappUrl}
              className="inline-flex items-center gap-3 bg-mystic-blue hover:bg-mystic-blue-light text-gold px-12 py-6 rounded-full font-bold text-base uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-gold/20 border border-gold/40"
            >
              <MessageCircle className="w-6 h-6" />
              Falar com O Oráculo no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="py-16 px-6 border-t border-white/5 text-center">
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="text-mystic-paper/40 hover:text-gold transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-mystic-paper/40 hover:text-gold transition-colors">
            <Youtube className="w-5 h-5" />
          </a>
          <a href="#" className="text-mystic-paper/40 hover:text-gold transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
        </div>
        
        <div className="flex justify-center gap-8 mb-8 text-[10px] tracking-[0.3em] text-mystic-paper/30 lowercase">
          <a href="#" className="hover:text-gold transition-colors">política de privacidade</a>
          <a href="#" className="hover:text-gold transition-colors">termos de uso</a>
        </div>

        <p className="text-[10px] tracking-[0.5em] text-mystic-paper/20 lowercase">
          © {new Date().getFullYear()} o oráculo de ouro • todos os direitos reservados
        </p>
      </footer>
      <Chatbot />
    </div>
  );
}
