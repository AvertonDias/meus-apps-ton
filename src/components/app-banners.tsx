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
    description: 'A solução completa para organizar e gerenciar sua mudança residencial com tranquilidade e eficiência.',
    imageUrlId: 'banner-de-casa-em-casa',
    href: '/de-casa-em-casa',
  },
  {
    id: 'meu-orcamento',
    name: 'Meu Orçamento',
    description: 'Tome o controle das suas finanças pessoais. Acompanhe despesas, crie metas e visualize seus gastos.',
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

      <div className="mt-12 grid gap-8">
        {apps.map((app) => {
          const image = PlaceHolderImages.find((img) => img.id === app.imageUrlId);
          return (
            <Card key={app.id} className="overflow-hidden group rounded-none border-x-0">
              <Link href={app.href}>
                <CardContent className="p-0">
                  <div className="container grid md:grid-cols-2 items-center">
                    <div className="p-6">
                      <h3 className="text-2xl font-bold">{app.name}</h3>
                      <p className="mt-2 text-muted-foreground">{app.description}</p>
                      <Button variant="link" className="mt-4 px-0">
                        Saiba Mais <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                    <div className="h-full w-full overflow-hidden">
                      {image && (
                        <Image
                          src={image.imageUrl}
                          alt={`Banner para ${app.name}`}
                          width={600}
                          height={400}
                          className="object-cover h-full w-full transition-transform duration-300 group-hover:scale-105"
                          data-ai-hint={image.imageHint}
                        />
                      )}
                    </div>
                  </div>
                </CardContent>
              </Link>
            </Card>
          );
        })}
        
        {comingSoonApps.map((app, index) => {
          const image = PlaceHolderImages.find((img) => img.id === app.imageUrlId);
          return (
            <Card key={`coming-soon-${index}`} className="overflow-hidden bg-muted/50 rounded-none border-x-0">
              <CardContent className="p-0">
                <div className="container grid md:grid-cols-2 items-center">
                  <div className="p-6">
                    <h3 className="text-2xl font-bold flex items-center gap-2 text-muted-foreground">
                      <Clock className="h-6 w-6" />
                      {app.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground">{app.description}</p>
                  </div>
                  <div className="h-full w-full opacity-30 overflow-hidden">
                    {image && (
                        <Image
                          src={image.imageUrl}
                          alt={app.name}
                          width={600}
                          height={400}
                          className="object-cover h-full w-full"
                          data-ai-hint={image.imageHint}
                        />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
