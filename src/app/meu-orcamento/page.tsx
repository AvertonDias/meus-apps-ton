
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Wallet, BarChart2, PiggyBank, Shield, Repeat, PlusCircle } from 'lucide-react';


const features = [
  {
    icon: PlusCircle,
    title: 'Lançamentos Rápidos',
    description: 'Registre suas receitas e despesas em segundos. A simplicidade que você precisa no dia a dia.',
  },
  {
    icon: BarChart2,
    title: 'Gráficos Intuitivos',
    description: 'Visualize para onde seu dinheiro está indo com gráficos claros e fáceis de entender.',
  },
  {
    icon: Wallet,
    title: 'Múltiplas Carteiras',
    description: 'Gerencie diferentes contas (corrente, poupança, investimentos) em um só lugar.',
  },
  {
    icon: PiggyBank,
    title: 'Metas de Economia',
    description: 'Defina seus objetivos financeiros e acompanhe seu progresso para alcançá-los.',
  },
  {
    icon: Repeat,
    title: 'Transações Recorrentes',
    description: 'Agende despesas e receitas fixas, como aluguel e salário, para não precisar lançá-las todo mês.',
  },
  {
    icon: Shield,
    title: '100% Offline e Seguro',
    description: 'Seus dados financeiros ficam armazenados apenas no seu dispositivo, garantindo total privacidade.',
  },
];

const faqs = [
    {
        question: "Meus dados financeiros estão seguros?",
        answer: "Sim. O 'Meu Orçamento' funciona 100% offline. Todos os seus dados são armazenados localmente, apenas no seu celular ou computador. Nenhuma informação é enviada para a internet."
    },
    {
        question: "Posso usar o app em mais de um dispositivo?",
        answer: "Como o foco é na privacidade e no armazenamento local, o aplicativo não sincroniza dados entre dispositivos automaticamente. Você pode usá-lo em vários aparelhos, mas cada um terá seus próprios dados."
    },
    {
        question: "O aplicativo tem custos ou anúncios?",
        answer: "Não. O 'Meu Orçamento' é totalmente gratuito e não exibe nenhum tipo de anúncio, proporcionando uma experiência limpa e focada na gestão das suas finanças."
    },
    {
        question: "Consigo exportar meus dados?",
        answer: "Atualmente, a funcionalidade de exportação não está implementada, mas é um recurso planejado para futuras atualizações, visando dar a você ainda mais controle sobre suas informações."
    }
];

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
               <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <PwaButton href="https://meuorcamento.vercel.app/" />
                  <PlayStoreButton href="#" />
                </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 sm:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recursos para sua Saúde Financeira</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Ferramentas poderosas e fáceis de usar para você assumir o controle do seu dinheiro.
                    </p>
                </div>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
        
        <section id="gallery" className="py-16 sm:py-24 bg-secondary">
             <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Visualize Suas Finanças</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Acompanhe seus gastos e metas com uma interface clara e objetiva.
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
        </section>
        
        <section id="faq" className="py-16 sm:py-24">
            <div className="container mx-auto">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perguntas Importantes</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                       Sua privacidade e controle em primeiro lugar.
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
