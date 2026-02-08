'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CalendarClock, Users, Mic, History, Import, UserPlus, MessageCircle, Smartphone, CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

const features = [
  { 
    icon: CalendarClock, 
    title: 'Calendário Inteligente', 
    description: 'Visão unificada de discursos e eventos com trava automática de conflitos de datas.',
    color: 'bg-green-500/10 text-green-500'
  },
  { 
    icon: Users, 
    title: 'Agendamento de Visitas', 
    description: 'Fluxo simplificado para agendar oradores visitantes ou saídas para outras congregações.',
    color: 'bg-emerald-500/10 text-emerald-500'
  },
  { 
    icon: Mic, 
    title: 'Gestão de Oradores',
    description: 'Cadastre contatos de oradores e o repertório individual de temas de cada um.',
    color: 'bg-teal-500/10 text-teal-500'
  },
  { 
    icon: History, 
    title: 'Histórico de Temas', 
    description: 'Rastreie o uso de cada tema para garantir variedade e evitar repetições.',
    color: 'bg-cyan-500/10 text-cyan-500'
  },
  { 
    icon: Import, 
    title: 'Importação JW.org', 
    description: 'Cadastre novas congregações rapidamente colando o texto do site oficial.',
    color: 'bg-sky-500/10 text-sky-500'
  },
  { 
    icon: MessageCircle, 
    title: 'Comunicação via WhatsApp', 
    description: 'Envie notificações automáticas e formatadas para oradores e coordenadores.',
    color: 'bg-blue-500/10 text-blue-500'
  },
];

export default function AgendaDeOradoresPage() {
  const logo = PlaceHolderImages.find(img => img.id === 'banner-agenda-de-oradores');

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <main className="flex-1">
        
        {/* HERO SECTION */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-950 via-slate-900 to-emerald-950 py-20 text-white">
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/15 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-emerald-400/10 rounded-full blur-[120px] pointer-events-none" />

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
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-widest mb-8"
                >
                  <CalendarClock className="w-4 h-4" />
                  Gestão de Discursos Públicos
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                  Agenda de <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-emerald-300 to-green-500">
                    Oradores
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0">
                  A solução completa para coordenadores de oradores públicos. Gerencie discursos, intercâmbios e históricos com total eficiência.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <PwaButton href="#" className="shadow-green-500/25 bg-green-600 hover:bg-green-500" />
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
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-600 to-emerald-500 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 animate-pulse" />
                    <div className="relative bg-slate-900/60 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-2xl overflow-hidden">
                       {logo && (
                          <motion.div 
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                          >
                            <Image src={logo.imageUrl} alt="Agenda de Oradores Logo" width={200} height={200} className="drop-shadow-2xl"/>
                          </motion.div>
                       )}
                    </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
        <section id="features" className="w-full py-24 bg-slate-50 dark:bg-[#020817]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Tudo que um Coordenador Precisa</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Ferramentas inteligentes para economizar seu tempo e garantir que tudo corra bem.
                    </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
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

        {/* CTA FINAL */}
        <section className="py-24 bg-green-600">
          <div className="container px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic">
               Modernize a gestão de discursos na sua congregação.
             </h2>
             <p className="text-green-100 text-xl max-w-2xl mx-auto mb-12">
               Deixe a burocracia de lado e foque no que realmente importa: o alimento espiritual.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" asChild className="bg-white text-green-600 hover:bg-green-50 text-xl px-10 py-8 rounded-2xl shadow-2xl font-bold transition-transform active:scale-95">
                  <Link href="#">
                    Começar a Usar Gratuitamente
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
