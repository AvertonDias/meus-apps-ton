'use client'

import { motion } from 'framer-motion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'O app De Casa em Casa transformou minha rotina. Nunca fui tão organizado no trabalho de campo. É simples e poderoso!',
    author: 'Ana Silva',
    role: 'Coordenadora de Equipe',
    avatarId: 'user-avatar-1',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Finalmente uma ferramenta para orçamentos que entende o autônomo. O Meu Orçamento é intuitivo e me economiza horas.',
    author: 'Carlos Souza',
    role: 'Serralheiro e Empreendedor',
    avatarId: 'user-avatar-2',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Com o Lista Fácil, minhas compras ficaram muito mais rápidas. A interface é limpa e o compartilhamento funciona perfeitamente.',
    author: 'Juliana Pereira',
    role: 'Usuária Ativa',
    avatarId: 'user-avatar-3',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 overflow-hidden bg-slate-50/50 dark:bg-slate-950/50">
      {/* Detalhes de fundo sutis */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            O que nossos usuários dizem
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground"
          >
            A confiança da nossa comunidade é o que nos motiva a criar aplicativos cada vez melhores.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => {
            const avatar = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full flex flex-col justify-between border-slate-200/60 dark:border-slate-800/60 bg-white/80 dark:bg-slate-900/50 backdrop-blur-sm shadow-xl shadow-slate-200/20 dark:shadow-none">
                  <CardContent className="pt-8 relative">
                    {/* Ícone decorativo de aspas */}
                    <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-500/10 dark:text-blue-500/20" />
                    
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    
                    <blockquote className="text-slate-700 dark:text-slate-300 italic leading-relaxed text-base">
                      "{testimonial.quote}"
                    </blockquote>
                  </CardContent>
                  
                  <CardFooter className="pb-8 pt-4 flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 mt-4 mx-6 px-0">
                    <Avatar className="h-12 w-12 border-2 border-white dark:border-slate-800 shadow-sm">
                      {avatar && (
                        <AvatarImage
                          src={avatar.imageUrl}
                          alt={testimonial.author}
                        />
                      )}
                      <AvatarFallback className="bg-blue-600 text-white">
                        {testimonial.author.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col">
                      <p className="font-bold text-slate-900 dark:text-white leading-tight">
                        {testimonial.author}
                      </p>
                      <p className="text-xs font-medium text-blue-600 dark:text-blue-400">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}