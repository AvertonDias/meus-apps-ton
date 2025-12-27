import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AppStoreButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function DeCasaEmCasaPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'de-casa-em-casa-hero');
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('de-casa-em-casa-screenshot'));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[300px] w-full">
          {heroImage && (
            <Image
              src={heroImage.imageUrl}
              alt={heroImage.description}
              fill
              className="object-cover"
              priority
              data-ai-hint={heroImage.imageHint}
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
            <div className="container">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                De Casa em Casa
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                A solução completa para organizar e gerenciar sua mudança residencial com tranquilidade.
              </p>
            </div>
          </div>
        </section>

        <section id="details" className="py-16 sm:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Sobre o App</h2>
                <p className="text-lg text-muted-foreground">
                  Planejar uma mudança nunca foi tão fácil. Com o "De Casa em Casa", você cria checklists, cataloga seus itens, define prazos e coordena todas as etapas do processo, desde o empacotamento até a montagem dos móveis na nova casa.
                </p>
                <p className="text-lg text-muted-foreground">
                  Nossa interface intuitiva ajuda a reduzir o estresse e a garantir que nada seja esquecido.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <AppStoreButton href="#" />
                  <PlayStoreButton href="#" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                 <Carousel className="w-full max-w-md">
                    <CarouselContent>
                      {screenshots.map((shot) => (
                        <CarouselItem key={shot.id}>
                          <Card>
                            <CardContent className="p-0">
                              <Image
                                src={shot.imageUrl}
                                alt={`Captura de tela de De Casa em Casa`}
                                width={800}
                                height={600}
                                className="rounded-lg object-cover aspect-video"
                                data-ai-hint={shot.imageHint}
                              />
                            </CardContent>
                          </Card>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="-left-4" />
                    <CarouselNext className="-right-4" />
                  </Carousel>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
