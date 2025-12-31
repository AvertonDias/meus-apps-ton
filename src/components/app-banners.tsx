'use client'

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const apps = [
  {
    id: 'de-casa-em-casa',
    name: 'De Casa em Casa',
    category: 'Organização',
    description: 'A ferramenta digital para organizar territórios, acompanhar o progresso em tempo real e otimizar o trabalho de campo.',
    imageUrlId: 'banner-de-casa-em-casa',
    href: '/de-casa-em-casa',
    color: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    id: 'meu-orcamento',
    name: 'Meu Orçamento',
    category: 'Finanças',
    description: 'A ferramenta definitiva para serralheiros e autônomos que buscam mais lucro e menos burocracia no dia a dia.',
    imageUrlId: 'banner-meu-orcamento',
    href: '/meu-orcamento',
    color: 'from-emerald-500/20 to-teal-500/20'
  },
  {
    id: 'lista-facil',
    name: 'Lista Fácil',
    category: 'Utilidades',
    description: 'Crie e compartilhe listas de compras de forma inteligente. Nunca mais esqueça um item essencial no mercado.',
    imageUrlId: 'banner-lista-facil',
    href: '/lista-facil',
    color: 'from-orange-500/20 to-yellow-500/20'
  },
];

export function AppBanners() {
  return (
    <section id="apps" className="w-full py-24 bg-slate-50/50 dark:bg-[#020817]">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-4"
          >
            <Sparkles className="w-4 h-4" />
            Ecossistema Ton Apps
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white">
            Nossos Aplicativos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Soluções desenhadas para resolver problemas reais com simplicidade e elegância.
          </p>
        </div>

        <div className="grid gap-10 max-w-5xl mx-auto">
          {apps.map((app, index) => {
            const image = PlaceHolderImages.find((img) => img.id === app.imageUrlId);
            return (
              <motion.div
                key={app.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={app.href} className="group block">
                  <Card className="overflow-hidden border-none shadow-sm group-hover:shadow-xl transition-all duration-500 bg-white dark:bg-slate-900/50 backdrop-blur-sm">
                    <CardContent className="p-0">
                      <div className="grid grid-cols-1 md:grid-cols-2 items-center">
                        <div className={cn(
                          "p-8 md:p-12 text-left",
                          index % 2 === 0 ? "order-2" : "order-2 md:order-1"
                        )}>
                          <span className="text-xs font-bold uppercase tracking-wider text-blue-500 mb-2 block">
                            {app.category}
                          </span>
                          <h3 className="text-2xl md:text-3xl font-bold group-hover:text-blue-600 transition-colors">
                            {app.name}
                          </h3>
                          <p className="mt-4 text-muted-foreground leading-relaxed">
                            {app.description}
                          </p>
                          <div className="mt-8 flex items-center text-blue-600 font-semibold gap-2">
                            Explorar Aplicativo 
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                          </div>
                        </div>
                        
                        <div className={cn(
                          "relative h-64 md:h-full min-h-[300px] flex items-center justify-center p-8 bg-gradient-to-br",
                          app.color,
                          index % 2 === 0 ? "order-1" : "order-1 md:order-2"
                        )}>
                          {image && (
                            <Image
                              src={image.imageUrl}
                              alt={app.name}
                              width={320}
                              height={180}
                              className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-110"
                            />
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Seção Em Breve - Agora em um grid menor */}
        <div className="mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground flex items-center gap-2">
              <Clock className="w-4 h-4" /> Lab: Em Breve
            </h3>
            <div className="h-px flex-1 bg-slate-200 dark:bg-slate-800" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div key={i} className="p-6 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 bg-transparent flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6 text-slate-400" />
                </div>
                <h4 className="font-bold text-slate-400">Novo Projeto</h4>
                <p className="text-sm text-slate-400 mt-2">Explorando novas formas de facilitar sua vida.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
