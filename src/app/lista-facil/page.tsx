
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Share2, Edit, Cloud, ShoppingCart, Repeat, ListChecks } from 'lucide-react';


const features = [
  {
    icon: ListChecks,
    title: 'Criação de Listas Inteligente',
    description: 'Adicione itens facilmente, categorize produtos e organize suas compras de forma rápida e intuitiva.',
  },
  {
    icon: Share2,
    title: 'Compartilhamento em Tempo Real',
    description: 'Compartilhe suas listas com familiares e amigos. As atualizações são sincronizadas instantaneamente para todos.',
  },
  {
    icon: Cloud,
    title: 'Sincronização na Nuvem',
    description: 'Acesse suas listas de qualquer dispositivo. Suas informações estão seguras e sempre disponíveis.',
  },
  {
    icon: Edit,
    title: 'Edição Colaborativa',
    description: 'Todos os membros da lista podem adicionar ou marcar itens, tornando as compras em grupo mais eficientes.',
  },
  {
    icon: Repeat,
    title: 'Reutilize Listas Antigas',
    description: 'Economize tempo aproveitando listas de compras anteriores para suas novas necessidades.',
  },
  {
    icon: ShoppingCart,
    title: 'Modo Compras',
    description: 'Um layout simplificado que facilita a visualização e marcação de itens enquanto você está no supermercado.',
  },
];

const faqs = [
    {
        question: "Como compartilho uma lista?",
        answer: "Basta criar uma lista, clicar no ícone de compartilhamento e enviar o link para quem você quiser. A pessoa terá acesso imediato e poderá colaborar em tempo real."
    },
    {
        question: "Preciso de internet para usar o aplicativo?",
        answer: "Para sincronização em tempo real, sim. No entanto, você pode acessar e modificar suas listas offline, e as alterações serão sincronizadas assim que você se conectar novamente."
    },
    {
        question: "Posso ter múltiplas listas ao mesmo tempo?",
        answer: "Sim! Crie quantas listas precisar: uma para o supermercado, outra para a farmácia, uma para a festa de aniversário, etc. Não há limites."
    },
    {
        question: "Os outros membros precisam ter o app instalado?",
        answer: "Para a melhor experiência, sim. No entanto, eles também podem acessar a lista através de um navegador web em qualquer dispositivo."
    }
];

export default function ListaFacilPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'lista-facil-hero');
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('lista-facil-screenshot'));

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
                Lista Fácil
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                Crie e compartilhe listas de compras de forma inteligente e colaborativa.
              </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <PwaButton href="https://lista-de-limpeza-facil.vercel.app/" />
                  <PlayStoreButton href="#" />
                </div>
            </div>
          </div>
        </section>

        <section id="features" className="w-full py-16 sm:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Tudo para Facilitar Suas Compras</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Do planejamento à ida ao mercado, o Lista Fácil está com você.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                    {features.map((feature) => (
                        <Card key={feature.title} className="flex flex-col">
                            <CardHeader className="flex flex-row items-center gap-4">
                                <feature.icon className="h-8 w-8 text-primary" />
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-muted-foreground">{feature.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
        
        <section id="gallery" className="w-full py-16 sm:py-24 bg-secondary">
             <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Simples e Poderoso</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Uma interface limpa que torna a organização de listas um prazer.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <Carousel className="w-full max-w-4xl">
                        <CarouselContent>
                        {screenshots.map((shot) => (
                            <CarouselItem key={shot.id} className="md:basis-1/2">
                            <Card>
                                <CardContent className="p-0">
                                <Image
                                    src={shot.imageUrl}
                                    alt={`Captura de tela de Lista Fácil`}
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
        </section>
        
        <section id="faq" className="w-full py-16 sm:py-24">
            <div className="container">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Suas Dúvidas, Resolvidas</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Respostas rápidas para as perguntas mais comuns.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-left">
                    {faqs.map((faq, index) =>(
                        <AccordionItem value={`item-${index+1}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground text-left">
                            {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
        
      </main>
      <Footer />
    </div>
  );
}
