
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Map, BarChart2, Book, Shield, Settings, HelpCircle, CheckCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const features = [
  {
    icon: Users,
    title: 'Gestão de Usuários Simplificada',
    description: 'Aprove e gerencie publicadores, dirigentes e servos de territórios com perfis e permissões específicas. Novos acessos são solicitados e aprovados em um fluxo simples e seguro.',
  },
  {
    icon: Map,
    title: 'Territórios Urbanos e Rurais',
    description: 'Organize territórios urbanos com quadras e casas, e acompanhe o progresso em tempo real. Para territórios rurais, utilize um diário de bordo para registrar cada visita e manter um histórico claro.',
  },
  {
    icon: Shield,
    title: 'Administração Poderosa',
    description: 'Designe territórios, acompanhe datas de devolução, envie lembretes e tenha uma visão geral da cobertura. Gere o relatório S-13 automaticamente com base nos dados do sistema.',
  },
  {
    icon: CheckCircle,
    title: 'Trabalho de Campo Eficiente',
    description: 'Publicadores marcam casas como trabalhadas com um clique, e todos na congregação veem o progresso instantaneamente. Reordene casas para seguir a rota da rua e otimizar o percurso.',
  },
   {
    icon: BarChart2,
    title: 'Estatísticas e Relatórios',
    description: 'Acesse gráficos sobre a cobertura dos territórios nos últimos 6 ou 12 meses e entenda o tempo médio para completar os trabalhos, ajudando no planejamento futuro.',
  },
  {
    icon: Settings,
    title: 'Personalização e Acessibilidade',
    description: 'Escolha entre tema claro ou escuro e ajuste o tamanho da fonte para uma leitura mais confortável. Instale o app no seu dispositivo para acesso rápido e funcionamento offline.',
  },
];

const faqs = [
    {
        question: "Como um publicador solicita o acesso?",
        answer: "Na tela de login, clique em 'Solicite seu acesso aqui', preencha seus dados e o número da sua congregação. Um administrador precisará aprovar sua solicitação."
    },
    {
        question: "O aplicativo funciona offline?",
        answer: "Sim! Você pode instalar o 'De Casa em Casa' no seu celular ou computador. Ele funciona mesmo sem conexão com a internet, sincronizando os dados assim que você se reconectar."
    },
    {
        question: "Como o relatório S-13 é gerado?",
        answer: "O administrador pode acessar a aba 'Relatório S-13' no módulo de administração. O sistema compila todo o histórico de designações do ano de serviço e gera o documento pronto para impressão."
    },
    {
        question: "É seguro usar este aplicativo?",
        answer: "Sim, a segurança é uma prioridade. O acesso é controlado por aprovação e os perfis de usuário garantem que cada um veja apenas as informações pertinentes à sua função."
    }
]

export default function DeCasaEmCasaPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'de-casa-em-casa-hero');
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('de-casa-em-casa-screenshot'));

  return (
    <div className="flex min-h-screen flex-col bg-background">
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
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-black/50" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center">
            <div className="container">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
                De Casa em Casa
              </h1>
              <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground">
                A ferramenta digital para revolucionar a organização dos seus territórios.
              </p>
               <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                  <PwaButton href="https://de-casa-em-casa.vercel.app/" />
                  <PlayStoreButton href="#" />
                </div>
            </div>
          </div>
        </section>

        <section id="features" className="py-16 sm:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Funcionalidades Pensadas para Você</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Organização, eficiência e colaboração em um só lugar.
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Veja o App em Ação</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Navegue pela interface limpa e intuitiva do "De Casa em Casa".
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
        </section>
        
        <section id="faq" className="py-16 sm:py-24">
            <div className="container max-w-3xl">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perguntas Frequentes</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Tudo o que você precisa saber para começar.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) =>(
                        <AccordionItem value={`item-${index+1}`} key={index}>
                            <AccordionTrigger className="text-lg">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground">
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
