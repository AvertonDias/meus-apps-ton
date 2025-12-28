
import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Clock } from 'lucide-react';

const apps = [
  {
    id: 'de-casa-em-casa',
    name: 'De Casa em Casa',
    description: 'A ferramenta digital para organizar territórios, acompanhar o progresso em tempo real e otimizar o trabalho de campo.',
    imageUrlId: 'banner-de-casa-em-casa',
    href: '/de-casa-em-casa',
  },
  {
    id: 'meu-orcamento',
    name: 'Meu Orçamento',
    description: 'A ferramenta definitiva para serralheiros e autônomos que buscam mais lucro e menos burocracia.',
    imageUrlId: 'banner-meu-orcamento',
    href: '/meu-orcamento',
  },
  {
    id: 'lista-facil',
    name: 'Lista Fácil',
    description: 'Crie e compartilhe listas de compras de forma inteligente. Nunca mais esqueça um item no mercado.',
    imageUrlId: 'banner-lista-facil',
    href: '/lista-facil',
  },
];

const comingSoonApps = Array(3).fill({
  name: 'Em Breve',
  description: 'Um novo aplicativo incrível está a caminho. Fique atento para mais novidades!',
  imageUrlId: 'banner-coming-soon',
});

export function AppBanners() {
  return (
    <section id="apps" className="py-16 sm:py-24 bg-secondary">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Aplicativos</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Explore as soluções que criamos para facilitar o seu dia a dia.
        </p>
      </div>

      <div className="container mt-12 grid gap-8">
          {apps.map((app) => {
            const image = PlaceHolderImages.find((img) => img.id === app.imageUrlId);
            return (
              <Link key={app.id} href={app.href} className="w-full max-w-4xl mx-auto">
                <Card className="overflow-hidden group rounded-lg">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center">
                      <div className="p-6 text-left">
                        <h3 className="text-2xl font-bold">{app.name}</h3>
                        <p className="mt-2 text-base text-muted-foreground">{app.description}</p>
                        <Button variant="link" className="mt-4 px-0">
                          Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                      <div className="p-6 flex justify-center md:justify-end">
                        {image && (
                          <Image
                            src={image.imageUrl}
                            alt={`Banner para ${app.name}`}
                            width={240}
                            height={120}
                            className="object-cover transition-transform duration-300 group-hover:scale-105 rounded-md"
                            data-ai-hint={image.imageHint}
                          />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
          
          {comingSoonApps.map((app, index) => {
            const image = PlaceHolderImages.find((img) => img.id === app.imageUrlId);
            return (
              <div key={`coming-soon-${index}`} className="w-full max-w-4xl mx-auto">
                <Card className="overflow-hidden bg-muted/50 rounded-lg">
                  <CardContent className="p-0">
                    <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] items-center">
                      <div className="p-6 text-left">
                        <h3 className="text-2xl font-bold flex items-center gap-2 text-muted-foreground">
                          <Clock className="h-5 w-5" />
                          {app.name}
                        </h3>
                        <p className="mt-2 text-base text-muted-foreground">{app.description}</p>
                      </div>
                      <div className="h-full opacity-30 p-6 flex justify-center md:justify-end">
                        {image && (
                            <Image
                              src={image.imageUrl}
                              alt={app.name}
                              width={240}
                              height={120}
                              className="object-cover rounded-md"
                              data-ai-hint={image.imageHint}
                            />
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
      </div>
    </section>
  );
}
