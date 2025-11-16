import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { AppStoreButton, PlayStoreButton } from '@/components/store-buttons';

const apps = [
  {
    id: 1,
    name: 'Produtividade Pro',
    description: 'Organize suas tarefas, gerencie projetos e atinja seus objetivos com nossa suíte de produtividade completa.',
    iconId: 'app-icon-1',
    screenshotIds: ['app-screenshot-1', 'app-screenshot-2'],
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
  {
    id: 2,
    name: 'Conexão Social',
    description: 'Conecte-se com amigos, compartilhe momentos e descubra novas comunidades na rede social que mais cresce.',
    iconId: 'app-icon-2',
    screenshotIds: ['app-screenshot-3', 'app-screenshot-4'],
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
  {
    id: 3,
    name: 'Finanças Facil',
    description: 'Assuma o controle de suas finanças. Orçamento, controle de despesas e planejamento de investimentos na palma da sua mão.',
    iconId: 'app-icon-3',
    screenshotIds: ['app-screenshot-1', 'app-screenshot-4'],
    appStoreUrl: '#',
    playStoreUrl: '#',
  },
];

export function AppShowcase() {
  return (
    <section id="apps" className="py-16 sm:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Nossos Aplicativos em Destaque</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore a inovação e o design por trás de cada um dos nossos aplicativos.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {apps.map((app) => {
            const icon = PlaceHolderImages.find((img) => img.id === app.iconId);
            const screenshots = PlaceHolderImages.filter((img) => app.screenshotIds.includes(img.id));
            return (
              <Card key={app.id} className="flex flex-col">
                <CardHeader className="flex-row items-center gap-4">
                  {icon && (
                    <Image
                      src={icon.imageUrl}
                      alt={`Ícone de ${app.name}`}
                      width={64}
                      height={64}
                      className="rounded-xl"
                      data-ai-hint={icon.imageHint}
                    />
                  )}
                  <div>
                    <CardTitle>{app.name}</CardTitle>
                    <CardDescription>{app.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {screenshots.map((shot) => (
                        <CarouselItem key={shot.id}>
                          <div className="aspect-video w-full overflow-hidden rounded-lg">
                            <Image
                              src={shot.imageUrl}
                              alt={`Captura de tela de ${app.name}`}
                              width={800}
                              height={600}
                              className="object-cover"
                              data-ai-hint={shot.imageHint}
                            />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                </CardContent>
                <CardFooter className="flex flex-col sm:flex-row gap-2 justify-center">
                  <AppStoreButton href={app.appStoreUrl} />
                  <PlayStoreButton href={app.playStoreUrl} />
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
