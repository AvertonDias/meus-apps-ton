'use client'

import { motion } from 'framer-motion';
import { ChevronDown, Smartphone } from 'lucide-react';
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-hero-gradient py-20 px-4">
      {/* Elementos de fundo (Efeito de luz/Blur) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge de introdução (Opcional, mas dá um ar premium) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mb-6 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest"
          >
            Inovação & Produtividade
          </motion.div>

          {/* Título Principal */}
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 tracking-tight"
          >
            Soluções Inteligentes para <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Organizar seu Dia a Dia
            </span>
          </motion.h1>

          {/* Subtítulo */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed"
          >
            Descubra aplicativos práticos e inovadores, criados para simplificar 
            suas tarefas e elevar sua produtividade a um novo patamar.
          </motion.p>

          {/* Botões de Ação */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="#apps" 
              className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 active:scale-95 group"
            >
              Conheça os Apps
              <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Mockup Flutuante com Animação Infinita */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-20 flex justify-center"
        >
           <motion.div 
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative group"
           >
              {/* Brilho atrás do ícone */}
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
              
              <div className="relative bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-white/10 shadow-2xl">
                 <Smartphone className="w-16 h-16 text-blue-400" strokeWidth={1.5} />
              </div>
           </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator (Opcional - para guiar o usuário para baixo) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-20 animate-bounce">
        <div className="w-1 h-10 rounded-full bg-gradient-to-b from-white to-transparent" />
      </div>
    </section>
  );
}