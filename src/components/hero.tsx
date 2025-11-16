import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full">
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
            A Vitrine Perfeita para Seus Aplicativos
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
            Crie uma página de destino deslumbrante para seus aplicativos com facilidade. Destaque recursos, mostre avaliações e cative seu público.
          </p>
          <div className="mt-8">
            <Button size="lg" asChild>
              <a href="#apps">
                Veja os Apps
                <ArrowDown className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
