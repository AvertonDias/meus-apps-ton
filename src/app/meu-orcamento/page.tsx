
'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  Calculator, FileText, Users, Box, BarChartHorizontal, 
  Cloud, Sparkles, CheckCircle2, TrendingUp, Smartphone
} from 'lucide-react';
import Link from 'next/link';

const features = [
  { 
    icon: Calculator, 
    title: 'Conversor de Bobinas', 
    description: 'Calcule o rendimento e custo exato por metro de bobinas de metal em segundos.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  { 
    icon: FileText, 
    title: 'Orçamentos em PDF', 
    description: 'Crie propostas profissionais com seu logo e envie direto pelo WhatsApp.',
    color: 'bg-cyan-500/10 text-cyan-500'
  },
  { 
    icon: Users, 
    title: 'Gestão de Clientes',
    description: 'Mantenha um histórico completo de orçamentos vinculado a cada cliente.',
    color: 'bg-indigo-500/10 text-indigo-500'
  },
  { 
    icon: Box, 
    title: 'Controle de Estoque', 
    description: 'Cadastre produtos, defina preços e receba alertas de estoque baixo.',
    color: 'bg-sky-500/10 text-sky-500'
  },
  { 
    icon: BarChartHorizontal, 
    title: 'Relatórios de Lucro', 
    description: 'Veja custos, margens e lucro total de cada projeto antes de fechar.',
    color: 'bg-blue-600/10 text-blue-600'
  },
  { 
    icon: Cloud, 
    title: 'Nuvem e Offline', 
    description: 'Trabalhe sem internet. Seus dados sincronizam assim que você se conectar.',
    color: 'bg-cyan-600/10 text-cyan-600'
  },
];

export default function MeuOrcamentoPage() {
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('meu-orcamento-screenshot'));

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <main className="flex-1">
        
        {/* HERO SECTION - TEMA DARK PREMIUM */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#030b1a] py-20 text-white">
          {/* Elementos de Brilho de Fundo */}
          <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

          <div className="container relative z-10 px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              
              {/* Lado Esquerdo: Conteúdo */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 text-center lg:text-left"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-8"
                >
                  <TrendingUp className="w-4 h-4" />
                  Mais Lucro, Menos Burocracia
                </motion.div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                  Meu <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                    Orçamento
                  </span>
                </h1>
                
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0">
                  A ferramenta definitiva para serralheiros, calheiros e autônomos profissionalizarem suas propostas e 
                  <span className="text-cyan-400 font-semibold"> garantirem o lucro em cada centímetro.</span>
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <PwaButton href="https://meuorcamento.vercel.app/" className="shadow-blue-500/25" />
                  <PlayStoreButton href="#" />
                </div>
              </motion.div>

              {/* Lado Direito: Visual */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex-1 relative hidden lg:flex justify-center"
              >
                <div className="relative group">
                  {/* Brilho atrás do ícone */}
                  <div className="absolute inset-0 bg-blue-500/30 rounded-[3rem] blur-3xl group-hover:bg-blue-500/50 transition duration-1000" />
                  
                  <div className="relative bg-slate-900/40 backdrop-blur-2xl rounded-[3rem] p-12 border border-white/10 shadow-2xl overflow-hidden">
                    <motion.div 
                      animate={{ y: [0, -15, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="relative z-10"
                    >
                      <Smartphone className="w-48 h-48 text-blue-400 opacity-90" strokeWidth={1} />
                      
                      {/* Ícone flutuante de lucro/tools */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                         <Image src="/MeuOrcamento/MeuOrcamentoLogo.jpg" alt="Meu Orçamento Logo" width={100} height={100} className="rounded-2xl shadow-xl" />
                      </div>
                    </motion.div>
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
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Potencialize seu Negócio</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Ferramentas pensadas por quem entende o dia a dia do profissional autônomo.
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
        
        {/* GALLERY COM MOCKUPS DE IPHONE */}
        <section id="gallery" className="w-full py-24 border-y border-slate-100 dark:border-slate-800">
             <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">O Escritório no seu Bolso</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Simplicidade no campo e precisão no orçamento. Veja como é fácil gerenciar seus dados.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Carousel className="w-full max-w-5xl">
                        <CarouselContent>
                        {screenshots.map((shot) => (
                            <CarouselItem key={shot.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                              <div className="relative group overflow-hidden rounded-[2.5rem] border-[10px] border-slate-900 shadow-2xl bg-slate-900">
                                <Image
                                    src={shot.imageUrl}
                                    alt="Captura de tela"
                                    width={400}
                                    height={800}
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                              </div>
                            </CarouselItem>
                        ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-12" />
                        <CarouselNext className="hidden md:flex -right-12" />
                    </Carousel>
                </div>
            </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-blue-600">
          <div className="container px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 italic">
               Cansado de perder tempo (e dinheiro) calculando à mão?
             </h2>
             <p className="text-blue-100 text-xl max-w-2xl mx-auto mb-12">
               Comece hoje a enviar orçamentos profissionais e tenha o controle total da sua lucratividade.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50 text-xl px-10 py-8 rounded-2xl shadow-2xl font-bold transition-transform active:scale-95">
                  <a href="https://meuorcamento.vercel.app/register" target="_blank" rel="noopener noreferrer">
                    Fazer meu Primeiro Orçamento
                  </a>
                </Button>
                <div className="flex flex-col items-start justify-center gap-2 text-white/80 text-sm">
                   <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> 100% Gratuito</div>
                   <div className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4" /> Multiplataforma</div>
                </div>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}
