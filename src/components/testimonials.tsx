import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    quote:
      'O app Produtividade Pro transformou minha rotina. Nunca fui tão organizado. É simples de usar e incrivelmente poderoso!',
    author: 'Ana Silva',
    role: 'Gerente de Projetos',
    avatarId: 'user-avatar-1',
    rating: 5,
  },
  {
    id: 2,
    quote:
      'Finalmente uma rede social onde me sinto em casa. Conexão Social é intuitivo e tem uma comunidade fantástica.',
    author: 'Carlos Souza',
    role: 'Designer Freelancer',
    avatarId: 'user-avatar-2',
    rating: 5,
  },
  {
    id: 3,
    quote:
      'Com o Finanças Facil, finalmente consegui colocar minhas contas em ordem. A interface é limpa e os relatórios são muito úteis.',
    author: 'Juliana Pereira',
    role: 'Empreendedora',
    avatarId: 'user-avatar-3',
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">O Que Nossos Usuários Dizem</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A confiança e o feedback da nossa comunidade são nosso maior ativo.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {testimonials.map((testimonial) => {
            const avatar = PlaceHolderImages.find((img) => img.id === testimonial.avatarId);
            return (
              <Card key={testimonial.id}>
                <CardContent className="pt-6">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-lg text-foreground">"{testimonial.quote}"</blockquote>
                </CardContent>
                <CardFooter className="flex items-center gap-4">
                  {avatar && (
                    <Avatar>
                      <AvatarImage
                        src={avatar.imageUrl}
                        alt={`Avatar de ${testimonial.author}`}
                        data-ai-hint={avatar.imageHint}
                      />
                      <AvatarFallback>{testimonial.author.charAt(0)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
