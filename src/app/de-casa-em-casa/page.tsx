
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, Map, Shield, CheckCircle, BarChart2, Settings, UserCheck, Smartphone, Edit, FileText, BotMessageSquare, UserPlus, BookUser, KeyRound, Construction, Route, ListChecks } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const features = [
  {
    icon: UserPlus,
    title: 'Gestão de Acessos Simplificada',
    description: 'Novos usuários solicitam acesso, e os administradores aprovam com um clique, definindo perfis para manter tudo organizado.',
  },
  {
    icon: Route,
    title: 'Territórios Urbanos e Rurais',
    description: 'Organize territórios urbanos com quadras e casas, ou use um diário de bordo para registrar o trabalho em territórios rurais.',
  },
  {
    icon: ListChecks,
    title: 'Trabalho de Campo em Tempo Real',
    description: 'Marque casas como trabalhadas e veja o progresso ser atualizado instantaneamente para toda a congregação.',
  },
  {
    icon: BotMessageSquare,
    title: 'Módulo de Administração Inteligente',
    description: 'Designe territórios, defina datas, envie lembretes e gere o relatório S-13 automaticamente com base nos dados do sistema.',
  },
  {
    icon: BarChart2,
    title: 'Estatísticas e Visão Geral',
    description: 'Acesse gráficos sobre a cobertura dos territórios, tempo médio de trabalho e histórico para um planejamento eficiente.',
  },
  {
    icon: KeyRound,
    title: 'Perfis de Usuário Flexíveis',
    description: 'Cinco perfis de acesso (Administrador, Dirigente, Servo, Ajudante, Publicador) garantem que cada um veja apenas o necessário.',
  },
];

const faqs = [
    {
        question: "Como um publicador solicita o acesso?",
        answer: "Na tela de login, clique em 'Solicite seu acesso aqui', preencha seus dados, crie uma senha e insira o número da sua congregação. Um administrador precisará aprovar sua solicitação para você ter acesso completo."
    },
    {
        question: "O aplicativo funciona offline?",
        answer: "Sim! Você pode instalar o 'De Casa em Casa' no seu celular ou computador. Ele funciona mesmo sem conexão com a internet, sincronizando os dados assim que você se reconectar."
    },
    {
        question: "Posso mudar a ordem das casas em uma quadra?",
        answer: "Sim! Use o botão 'Reordenar' para arrastar e soltar os números na sequência exata do seu percurso, otimizando seu trabalho de campo."
    },
    {
        question: "É seguro usar este aplicativo?",
        answer: "Sim, a segurança é uma prioridade. O acesso é controlado por aprovação de administradores, e os perfis de usuário garantem que cada pessoa veja apenas as informações pertinentes à sua função na congregação."
    },
    {
      question: "Como funciona o fechamento de um território?",
      answer: "O administrador define uma data de fechamento para o território. Com base em todas as casas trabalhadas até essa data, o sistema compila e gera automaticamente os relatórios, incluindo o S-13, pronto para ser utilizado."
    },
    {
      question: "Qual a diferença do trabalho em territórios rurais?",
      answer: "Para territórios rurais, em vez de cadastrar cada casa, você usa um 'Diário de Bordo'. Nele, você pode adicionar notas sobre o trabalho do dia, como as ruas visitadas ou contatos importantes, oferecendo flexibilidade para áreas menos densas."
    },
    {
      question: "Todos na congregação podem ver o progresso do território?",
      answer: "Sim, todos os usuários com acesso ao território designado podem ver o mapa e o progresso em tempo real, incluindo quais casas já foram trabalhadas. Isso promove a colaboração e evita que a mesma casa seja visitada duas vezes."
    }
]

export default function DeCasaEmCasaPage() {
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('de-casa-em-casa-screenshot'));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[300px] w-full bg-gradient-to-t from-purple-900/80 via-purple-800/50 to-purple-900/80">
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center">
            <Image
                src="/DeCasaEmCasa/DeCasaEmCasaLLogo.png"
                alt="Logotipo De Casa em Casa"
                width={150}
                height={150}
                className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 hidden md:block"
            />
            <div className="mx-auto">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-white">
                De Casa em Casa
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-white/80">
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Uma Ferramenta Completa</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Organização, eficiência e colaboração em um só lugar. Do primeiro acesso à geração de relatórios.
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
            <div className="container mx-auto">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perguntas Frequentes</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Tudo o que você precisa saber para começar.
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
