import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AppStoreButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function MeuOrcamentoPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'meu-orcamento-hero');
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('meu-orcamento-screenshot'));

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
                Meu Orçamento
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                Tome o controle das suas finanças pessoais de forma simples e visual.
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
                  Com o "Meu Orçamento", você acompanha suas receitas e despesas, cria metas de economia e visualiza para onde seu dinheiro está indo com gráficos fáceis de entender. Organize-se financeiramente e alcance seus objetivos.
                </p>
                <p className="text-lg text-muted-foreground">
                  A segurança dos seus dados é nossa prioridade, com tudo armazenado localmente no seu dispositivo.
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
                                alt={`Captura de tela de Meu Orçamento`}
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
