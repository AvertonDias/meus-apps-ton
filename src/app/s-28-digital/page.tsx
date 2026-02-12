'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  ClipboardList, Calculator, BookImage, Warehouse, Users, 
  BrainCircuit, Printer, Devices, CheckCircle2, BotMessageSquare
} from 'lucide-react';
import Link from 'next/link';

const features = [
  { 
    icon: ClipboardList, 
    title: 'Formulário S-28-T Digital', 
    description: 'Interface fiel ao modelo oficial, otimizada para qualquer dispositivo.',
    color: 'bg-indigo-500/10 text-indigo-500'
  },
  { 
    icon: Calculator, 
    title: 'Cálculos Automáticos', 
    description: 'Preencha o estoque atual e o sistema calcula a saída instantaneamente, sem erros.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  { 
    icon: BookImage, 
    title: 'Capas Oficiais',
    description: 'Visualize a capa das publicações ao clicar no nome para fácil identificação.',
    color: 'bg-violet-500/10 text-violet-500'
  },
  { 
    icon: Warehouse, 
    title: 'Inteligência de Estoque', 
    description: 'Alertas automáticos quando um item atinge o nível crítico baseado na média de consumo.',
    color: 'bg-fuchsia-500/10 text-fuchsia-500'
  },
  { 
    icon: Users, 
    title: 'Sistema de Ajudantes', 
    description: 'Gere um link de convite e permita que outros ajudem a gerenciar o inventário em tempo real.',
    color: 'bg-pink-500/10 text-pink-500'
  },
  { 
    icon: BrainCircuit, 
    title: 'Inteligência Artificial', 
    description: 'Receba sugestões de gestão e análise de tendências de consumo das publicações.',
    color: 'bg-rose-500/10 text-rose-500'
  },
  {
    icon: Printer,
    title: 'Impressão Profissional',
    description: 'Gere uma tabela A4 perfeita para os arquivos da congregação com um único clique.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: Devices,
    title: 'Web App Moderno',
    description: 'Instale na tela inicial do seu celular ou computador e use como um aplicativo nativo, com ou sem internet.',
    color: 'bg-cyan-500/10 text-cyan-500'
  }
];

export default function S28DigitalPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <main className="flex-1">
        
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 py-20 text-white">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10 px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest mb-8"
                >
                  <BotMessageSquare className="w-4 h-4" />
                  Gestão Inteligente de Publicações
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                  S-28 <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-300 to-indigo-500">
                    Digital
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0">
                  A solução definitiva para organizar o estoque de publicações da sua congregação com modernidade e precisão.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <PwaButton href="https://s-28-digital.vercel.app/" className="shadow-indigo-500/25 bg-indigo-600 hover:bg-indigo-500" />
                  <PlayStoreButton href="#" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex-1 relative hidden lg:flex justify-center"
              >
                 <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-indigo-600 to-purple-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse" />
                    <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] p-8 border border-white/10 shadow-2xl overflow-hidden">
                       <motion.div 
                          animate={{ y: [0, -10, 0] }}
                          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Image src="/S-28Digital/S-28Digital_Logo.png" alt="S-28 Digital Logo" width={256} height={256} className="drop-shadow-2xl rounded-2xl"/>
                        </motion.div>
                    </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        <section id="features" className="w-full py-24 bg-slate-50 dark:bg-[#020817]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tudo que um Dirigente de Publicações Precisa</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Modernize sua rotina, economize tempo e mantenha o estoque sempre organizado.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto">
                    {features.map((feature, idx) => (
                        <motion.div
                          key={feature.title}
                          whileHover={{ y: -5 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <Card className="h-full border-none shadow-md hover:shadow-xl transition-all dark:bg-slate-900/40">
                              <CardHeader>
                                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-2 ${feature.color}`}>
                                    <feature.icon className="h-6 w-6" />
                                  </div>
                                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                              </CardContent>
                          </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        <section className="py-24 bg-indigo-600">
          <div className="container px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic">
               Leve a gestão de publicações para o próximo nível.
             </h2>
             <p className="text-indigo-100 text-xl max-w-2xl mx-auto mb-12">
               Deixe as planilhas de lado e foque no que realmente importa.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" asChild className="bg-white text-indigo-600 hover:bg-indigo-50 text-xl px-10 py-8 rounded-2xl shadow-2xl font-bold transition-transform active:scale-95">
                  <Link href="https://s-28-digital.vercel.app/" target="_blank" rel="noopener noreferrer">
                    Experimente Agora
                  </Link>
                </Button>
                <div className="flex flex-col items-start justify-center gap-2 text-white/80 text-sm">
                   <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> 100% Gratuito</div>
                   <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Seguro e Confiável</div>
                </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
}
