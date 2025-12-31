'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Mail, ArrowRight, Lightbulb, Users, Heart, BrainCircuit } from 'lucide-react';

const values = [
  {
    icon: Lightbulb,
    title: 'Inovação Prática',
    description: 'Buscamos soluções criativas para problemas reais, transformando ideias complexas em ferramentas simples e úteis.',
    color: 'text-blue-500',
  },
  {
    icon: Users,
    title: 'Foco no Usuário',
    description: 'Cada aplicativo é desenhado com a experiência do usuário no centro, garantindo interfaces intuitivas e funcionais.',
    color: 'text-purple-500',
  },
  {
    icon: Heart,
    title: 'Paixão por Código',
    description: 'Somos movidos pela arte de programar e pela satisfação de construir algo que realmente faz a diferença no dia a dia.',
    color: 'text-emerald-500',
  },
];

export default function SobrePage() {
  const creatorAvatar = PlaceHolderImages.find((img) => img.id === 'creator-avatar');

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <main className="flex-1">

        {/* HERO SECTION */}
        <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden bg-gradient-to-br from-[#030b1a] to-[#0f0720] py-20 text-white">
          <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="container relative z-10 px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
                Construindo o Futuro,
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-300">
                  Uma Linha de Código por Vez.
                </span>
              </h1>
              <p className="mx-auto mt-8 max-w-3xl text-lg md:text-xl leading-relaxed text-slate-300">
                A Ton Apps nasceu da paixão por tecnologia e do desejo de criar soluções digitais que simplificam a vida e impulsionam a produtividade.
              </p>
            </motion.div>
          </div>
        </section>

        {/* O CRIADOR SECTION */}
        <section className="w-full py-24 bg-slate-50 dark:bg-[#020817]">
          <div className="container px-4">
            <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                {creatorAvatar && (
                  <Avatar className="mx-auto h-64 w-64 md:h-80 md:w-80 border-8 border-white dark:border-slate-900 shadow-2xl">
                    <AvatarImage src={creatorAvatar.imageUrl} alt="Averton, o criador da Ton Apps" />
                    <AvatarFallback className="bg-blue-600 text-6xl text-white">A</AvatarFallback>
                  </Avatar>
                )}
                 <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-center md:text-left"
              >
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">O Criador</h2>
                <p className="mt-6 text-lg text-muted-foreground">
                  Olá! Eu sou o Averton, um desenvolvedor de sistemas autodidata e o fundador da Ton Apps. Minha jornada na programação começou com uma curiosidade insaciável e se transformou em uma carreira dedicada a resolver problemas reais através de software.
                </p>
                <p className="mt-4 text-muted-foreground">
                  Com foco em tecnologias modernas como Next.js, React e Firebase, busco criar aplicativos que não sejam apenas funcionais, mas também bonitos, intuitivos e acessíveis. Cada projeto é um novo desafio e uma oportunidade de aprender e crescer.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* VALORES SECTION */}
        <section className="w-full py-24 border-y dark:border-slate-800">
            <div className="container px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Nossos Pilares</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Os princípios que guiam cada decisão e cada linha de código.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
                    {values.map((value, idx) => (
                        <motion.div
                          key={value.title}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.2 }}
                        >
                          <Card className="h-full border-none text-center shadow-md hover:shadow-xl transition-all dark:bg-slate-900/50">
                              <CardHeader className="items-center">
                                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100 dark:bg-slate-800 mb-4">
                                    <value.icon className={`h-8 w-8 ${value.color}`} strokeWidth={1.5} />
                                  </div>
                                  <CardTitle className="text-xl">{value.title}</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                              </CardContent>
                          </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-24 bg-blue-600 text-white">
          <div className="container px-4 text-center">
             <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
             >
               <h2 className="text-3xl md:text-5xl font-bold mb-6">Vamos criar algo incrível juntos?</h2>
               <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                 Se você tem uma ideia, um projeto ou apenas quer conversar sobre tecnologia, ficarei feliz em ouvir.
               </p>
               <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-blue-50 text-lg px-8 py-7 rounded-2xl shadow-xl font-bold">
                  <a href="mailto:contato@tonapps.com.br">
                    <Mail className="mr-2" /> Entrar em Contato
                  </a>
                </Button>
             </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
}
