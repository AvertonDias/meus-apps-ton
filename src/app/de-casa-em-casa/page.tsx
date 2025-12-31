'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion, PanInfo } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { 
  BarChart2, BotMessageSquare, UserPlus, Route, ListChecks, 
  KeyRound, ArrowRight, Sparkles, CheckCircle2, ChevronLeft, ChevronRight,
  ZoomIn, ZoomOut, RotateCw
} from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Link from 'next/link';

const features = [
  {
    icon: UserPlus,
    title: 'Gestão de Acessos',
    description: 'Aprovação de novos usuários com um clique e definição de perfis para manter a segurança.',
    color: 'bg-purple-500/10 text-purple-500'
  },
  {
    icon: Route,
    title: 'Territórios Flexíveis',
    description: 'Organize quadras urbanas ou use diários de bordo para áreas rurais com facilidade.',
    color: 'bg-indigo-500/10 text-indigo-500'
  },
  {
    icon: ListChecks,
    title: 'Progresso em Tempo Real',
    description: 'Sincronização instantânea: quando uma casa é marcada, todos veem a atualização.',
    color: 'bg-blue-500/10 text-blue-500'
  },
  {
    icon: BotMessageSquare,
    title: 'Relatórios S-13',
    description: 'Geração automática de relatórios de congregação baseados na atividade real do campo.',
    color: 'bg-violet-500/10 text-violet-500'
  },
  {
    icon: BarChart2,
    title: 'Estatísticas Avançadas',
    description: 'Visão clara da cobertura de territórios e tempo médio de trabalho para planejamento.',
    color: 'bg-fuchsia-500/10 text-fuchsia-500'
  },
  {
    icon: KeyRound,
    title: 'Perfis de Acesso',
    description: '5 níveis de permissão garantem que cada usuário acesse apenas o que sua função exige.',
    color: 'bg-cyan-500/10 text-cyan-500'
  },
];

const faqs = [
    {
        question: "Como um publicador solicita o acesso?",
        answer: "Na tela de login, clique em 'Solicite seu acesso aqui', preencha seus dados e o número da sua congregação. Um administrador aprovará sua entrada."
    },
    {
        question: "O aplicativo funciona offline?",
        answer: "Sim! O app é um PWA (Progressive Web App). Você pode instalar e usar offline; os dados sincronizam assim que houver conexão."
    },
    {
        question: "É seguro usar este aplicativo?",
        answer: "Sim, a segurança é prioridade. O acesso é restrito e controlado por administradores locais, protegendo as informações da congregação."
    },
    {
        question: "Como funciona a geração de relatórios?",
        answer: "O sistema compila os dados de fechamento de território e gera o arquivo S-13 pronto para conferência, economizando horas de trabalho manual."
    }
];

export default function DeCasaEmCasaPage() {
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('de-casa-em-casa-screenshot'));
  const [selectedImageUrl, setSelectedImageUrl] = useState<string | null>(null);

  // State for zoom and pan
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleWheel = (event: React.WheelEvent) => {
    const newScale = scale + event.deltaY * -0.001;
    // Clamp scale between 1 and 4
    const clampedScale = Math.min(Math.max(1, newScale), 4);
    setScale(clampedScale);
    if (clampedScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handlePan = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (scale > 1) {
      setPosition({
        x: position.x + info.delta.x,
        y: position.y + info.delta.y,
      });
    }
  };
  
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }

  const onOpenChange = (isOpen: boolean) => {
    if (!isOpen) {
      setSelectedImageUrl(null);
      resetZoom();
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <main className="flex-1">
        
        {/* HERO SECTION MODERNIZADA */}
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#0f0720] py-20">
          {/* Efeitos de Luz de Fundo */}
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
          
          <div className="container relative z-10 px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 text-center lg:text-left"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm font-medium mb-6">
                  <Sparkles className="w-4 h-4" />
                  Territórios Inteligentes
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                  De Casa <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-violet-300">
                    em Casa
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-10 leading-relaxed">
                  A ferramenta definitiva para organizar territórios, acompanhar o progresso em tempo real e otimizar o trabalho de campo da sua congregação.
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                  <PwaButton href="https://de-casa-em-casa.vercel.app/" className="shadow-purple-600/20" />
                  <PlayStoreButton href="#" />
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="flex-1 relative"
              >
                <div className="relative z-10 p-4 bg-white/5 backdrop-blur-2xl rounded-[2.5rem] border border-white/10 shadow-2xl">
                   <Image
                      src="/DeCasaEmCasa/DeCasaEmCasaLLogo.png"
                      alt="Logotipo De Casa em Casa"
                      width={400}
                      height={400}
                      className="drop-shadow-[0_0_50px_rgba(168,85,247,0.4)] animate-float"
                  />
                </div>
                {/* Elementos flutuantes decorativos */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-purple-500/20 rounded-full blur-xl animate-bounce" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES COM CARDS REFINADOS */}
        <section id="features" className="w-full py-24 bg-slate-50 dark:bg-[#020617]">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Uma Ferramenta Completa</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Desenvolvido para atender às necessidades reais do trabalho de campo, do administrador ao publicador.
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
                          <Card className="h-full border-none shadow-md hover:shadow-xl transition-all dark:bg-slate-900/50">
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
        
        {/* GALERIA COM MOCKUPS E ZOOM */}
        <section id="gallery" className="w-full py-24 border-y border-slate-100 dark:border-slate-800">
             <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight italic">O App em Suas Mãos</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
                        Interface limpa, rápida e intuitiva. Clique para ampliar e veja os detalhes.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Dialog onOpenChange={onOpenChange}>
                        <Carousel className="w-full max-w-5xl">
                            <CarouselContent>
                            {screenshots.map((shot, index) => (
                                <CarouselItem key={shot.id} className="md:basis-1/2 lg:basis-1/3 p-4">
                                    <DialogTrigger asChild onClick={() => setSelectedImageUrl(shot.imageUrl)}>
                                        <div className="relative group overflow-hidden rounded-[2rem] border-8 border-slate-900 shadow-2xl cursor-pointer">
                                            <Image
                                                src={shot.imageUrl}
                                                alt={`Captura de tela`}
                                                width={400}
                                                height={800}
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </div>
                                    </DialogTrigger>
                                </CarouselItem>
                            ))}
                            </CarouselContent>
                            <CarouselPrevious className="hidden md:flex -left-12" />
                            <CarouselNext className="hidden md:flex -right-12" />
                        </Carousel>
                        
                        <DialogContent 
                          className="max-w-none w-[90vw] md:w-auto h-auto md:h-[90vh] p-2 md:p-4 border-none bg-transparent flex items-center justify-center overflow-hidden"
                        >
                           <div className="sr-only">
                              <DialogTitle>Visualização de Imagem</DialogTitle>
                              <DialogDescription>
                                  Imagem da captura de tela do aplicativo ampliada para melhor visualização.
                              </DialogDescription>
                          </div>
                          {selectedImageUrl && (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <motion.div
                                    className="relative w-auto h-full cursor-grab active:cursor-grabbing"
                                    style={{
                                        scale,
                                        translateX: position.x,
                                        translateY: position.y,
                                    }}
                                    onWheel={handleWheel}
                                    onPan={handlePan}
                                    drag={scale > 1}
                                    dragConstraints={{ left: -200, right: 200, top: -200, bottom: 200 }}
                                    dragElastic={0.2}
                                >
                                    <Image 
                                      src={selectedImageUrl}
                                      alt="Screenshot ampliado"
                                      width={400}
                                      height={800}
                                      className="object-contain h-full w-auto rounded-lg pointer-events-none"
                                    />
                                </motion.div>
                            </div>
                          )}
                        </DialogContent>
                    </Dialog>
                </div>
            </div>
        </section>
        
        {/* FAQ REFINADO */}
        <section id="faq" className="w-full py-24 bg-slate-50 dark:bg-slate-950/50">
            <div className="container px-4">
                 <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Perguntas Frequentes</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Dúvidas comuns sobre o uso da plataforma.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible className="space-y-4">
                      {faqs.map((faq, index) =>(
                          <AccordionItem value={`item-${index+1}`} key={index} className="border rounded-xl px-6 bg-white dark:bg-slate-900 shadow-sm">
                              <AccordionTrigger className="text-base md:text-lg font-semibold hover:no-underline">
                                {faq.question}
                              </AccordionTrigger>
                              <AccordionContent className="text-slate-600 dark:text-slate-400 leading-relaxed pb-4">
                                {faq.answer}
                              </AccordionContent>
                          </AccordionItem>
                      ))}
                  </Accordion>
                </div>
            </div>
        </section>

        {/* NOVA SEÇÃO: CTA FINAL */}
        <section className="py-24 bg-purple-600">
          <div className="container px-4 text-center">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
               Pronto para organizar sua congregação?
             </h2>
             <p className="text-purple-100 text-lg max-w-2xl mx-auto mb-12">
               Junte-se a centenas de usuários que já otimizaram o trabalho de campo com eficiência e tecnologia.
             </p>
             <div className="flex flex-col sm:flex-row justify-center gap-6">
                <Button size="lg" asChild className="bg-white text-purple-600 hover:bg-purple-50 text-lg px-8 py-7 rounded-2xl shadow-xl">
                  <Link href="https://de-casa-em-casa.vercel.app/nova-congregacao">
                    Criar Conta Grátis
                  </Link>
                </Button>
                <div className="flex items-center justify-center gap-4 text-white/80">
                  <div className="flex items-center gap-1"><CheckCircle2 className="w-5 h-5" /> Sem custos</div>
                  <div className="flex items-center gap-1"><CheckCircle2 className="w-5 h-5" /> Online/Offline</div>
                </div>
             </div>
          </div>
        </section>

      </main>
    </div>
  );
}
