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
  ShoppingCart, QrCode, LayoutDashboard, Settings, Mail, 
  MessageSquare, LogIn, Sparkles, Send, UserCheck, Share, 
  CheckCircle2, ShoppingBag 
} from 'lucide-react';

const adminFeatures = [
  { icon: LayoutDashboard, title: 'Dashboard', description: 'Gerencie itens padrão e listas em tempo real.', color: 'bg-emerald-500/10 text-emerald-600' },
  { icon: Settings, title: 'Controle Total', description: 'Edite sua lista com autonomia absoluta.', color: 'bg-teal-500/10 text-teal-600' },
  { icon: ShoppingCart, title: 'Centralização', description: 'Veja o que outros adicionaram instantaneamente.', color: 'bg-cyan-500/10 text-cyan-600' },
  { icon: Mail, title: 'Avisos', description: 'Notificações por e-mail para cada novo item.', color: 'bg-blue-500/10 text-blue-600' },
  { icon: MessageSquare, title: 'Feedback', description: 'Receba sugestões via sua página pública.', color: 'bg-indigo-500/10 text-indigo-600' },
  { icon: QrCode, title: 'QR Code', description: 'Gere e imprima códigos exclusivos para sua lista.', color: 'bg-green-500/10 text-green-600' },
];

const collaboratorFeatures = [
    { icon: LogIn, title: 'Sem Login', description: 'Acesso rápido via link ou QR Code.', color: 'bg-orange-500/10 text-orange-600' },
    { icon: Sparkles, title: 'Design Limpo', description: 'Qualquer um adiciona itens em segundos.', color: 'bg-pink-500/10 text-pink-600' },
    { icon: Send, title: 'Mensagens', description: 'Comunicação direta com o dono da lista.', color: 'bg-rose-500/10 text-rose-600' }
];

const howItWorks = [
    { step: 1, title: "Crie sua Conta", description: "Cadastre-se e adicione os itens que você costuma comprar com frequência." },
    { step: 2, title: "Compartilhe", description: "Imprima seu QR Code e cole na geladeira ou envie seu link exclusivo." },
    { step: 3, title: "Colaboração", description: "Quem notar que algo acabou, escaneia e adiciona o item à lista na hora." },
    { step: 4, title: "Notificação", description: "Você recebe um alerta instantâneo sobre a nova demanda na sua lista." }
];

export default function ListaFacilPage() {
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('lista-facil-screenshot'));

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <main className="flex-1">
        
        {/* HERO SECTION - TEMA EMERALD REFINADO */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-[#021614] py-20 text-white">
          {/* Esferas de Luz (Melhoradas para visibilidade) */}
          <div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-emerald-500/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-teal-500/20 rounded-full blur-[120px] pointer-events-none" />
        
          <div className="container relative z-10 px-4">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
              {/* Lado Esquerdo: Conteúdo */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex-1 text-center lg:text-left"
              >
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-8"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Compras Inteligentes & Colaborativas
                </motion.div>
        
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.1]">
                  Lista <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">Fácil</span>
                </h1>
        
                <p className="text-lg md:text-xl text-slate-300 max-w-xl mb-12 leading-relaxed mx-auto lg:mx-0">
                  A maneira mais simples de gerenciar suprimentos em casas, escritórios ou repúblicas. 
                  <span className="text-emerald-400 font-semibold"> Centralize tudo com um simples QR Code.</span>
                </p>
        
                <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                  <PwaButton href="https://lista-de-limpeza-facil.vercel.app/" className="shadow-emerald-500/20" />
                  <PlayStoreButton href="#" />
                </div>
              </motion.div>
        
              {/* Lado Direito: Elemento Visual (Preenche o espaço vazio) */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="flex-1 relative hidden lg:flex justify-center"
              >
                <div className="relative">
                  {/* Círculo de Brilho */}
                  <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
        
                  <div className="relative bg-slate-900/40 backdrop-blur-xl rounded-[3rem] p-16 border border-white/10 shadow-2xl overflow-hidden">
                    {/* Ícones flutuantes decorativos */}
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ShoppingCart className="w-40 h-40 text-emerald-400" strokeWidth={1} />
                    </motion.div>
        
                    {/* QR Code Decorativo menor flutuando ao lado */}
                    <motion.div
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-8 right-8 bg-white p-3 rounded-xl shadow-lg"
                    >
                      <QrCode className="w-12 h-12 text-slate-900" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
        
            </div>
          </div>
        </section>

        {/* FEATURES - ADMIN vs COLABORADOR */}
        <section className="py-24 bg-slate-50 dark:bg-slate-950">
            <div className="container px-4">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Admin Side */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-10">
                            <UserCheck className="w-8 h-8 text-emerald-500" />
                            <h2 className="text-3xl font-bold italic">Para Administradores</h2>
                        </div>
                        <div className="grid gap-6">
                            {adminFeatures.map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                                    <Card className="border-none shadow-sm hover:shadow-md transition-all dark:bg-slate-900/50">
                                        <CardHeader className="flex flex-row items-center gap-4 py-4">
                                            <div className={`p-3 rounded-lg ${f.color}`}><f.icon className="w-5 h-5" /></div>
                                            <CardTitle className="text-lg">{f.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="pb-4 pt-0">
                                            <p className="text-sm text-muted-foreground">{f.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Collaborator Side */}
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-10">
                            <Share className="w-8 h-8 text-orange-500" />
                            <h2 className="text-3xl font-bold italic">Para Colaboradores</h2>
                        </div>
                        <div className="grid gap-6">
                            {collaboratorFeatures.map((f, i) => (
                                <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: (i + 3) * 0.1 }}>
                                    <Card className="border-none shadow-sm hover:shadow-md transition-all dark:bg-slate-900/50">
                                        <CardHeader className="flex flex-row items-center gap-4 py-4">
                                            <div className={`p-3 rounded-lg ${f.color}`}><f.icon className="w-5 h-5" /></div>
                                            <CardTitle className="text-lg">{f.title}</CardTitle>
                                        </CardHeader>
                                        <CardContent className="pb-4 pt-0">
                                            <p className="text-sm text-muted-foreground">{f.description}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* HOW IT WORKS - TIMELINE */}
        <section className="py-24 bg-emerald-600">
          <div className="container px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-16 italic underline decoration-emerald-300">Como Funciona</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {howItWorks.map((item) => (
                <div key={item.step} className="relative text-center group">
                  <div className="w-16 h-16 bg-white text-emerald-600 rounded-2xl flex items-center justify-center text-2xl font-black mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-emerald-50/80 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GALERIA & FAQ (Mantendo os dados originais mas com o novo estilo) */}
        {/* ... Resto da Galeria e FAQ com estilos de cards arredondados e shadows sutis conforme as páginas anteriores ... */}

        {/* CTA FINAL */}
        <section className="py-24 bg-slate-950">
          <div className="container px-4 text-center">
             <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}>
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Nunca mais esqueça um item.</h2>
               <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto italic">
                 "A geladeira está cheia, a despensa organizada e o mercado ficou muito mais rápido."
               </p>
               <Button size="lg" className="bg-emerald-600 hover:bg-emerald-500 text-white px-10 py-7 rounded-2xl text-lg font-bold">
                 Criar minha Lista Grátis
               </Button>
             </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
