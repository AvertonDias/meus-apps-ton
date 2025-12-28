
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Share2, Edit, Cloud, ShoppingCart, Repeat, ListChecks, QrCode, LayoutDashboard, Settings, Mail, MessageSquare, LogIn, Sparkles, Send, UserCheck, Share, Bell } from 'lucide-react';


const adminFeatures = [
  {
    icon: LayoutDashboard,
    title: 'Dashboard Intuitivo',
    description: 'Gerencie sua lista de itens padrão e sua lista de compras em tempo real.',
  },
  {
    icon: Settings,
    title: 'Controle Total',
    description: 'Adicione, edite e remova os itens que você usa com frequência com total autonomia.',
  },
  {
    icon: ShoppingCart,
    title: 'Lista de Compras Centralizada',
    description: 'Veja instantaneamente os itens que outras pessoas adicionaram à sua lista.',
  },
  {
    icon: Mail,
    title: 'Notificações por E-mail',
    description: 'Seja avisado por e-mail sempre que um novo item for adicionado ou ao receber uma mensagem.',
  },
  {
    icon: MessageSquare,
    title: 'Caixa de Entrada de Feedback',
    description: 'Receba e gerencie sugestões e dúvidas enviadas através da sua página pública.',
  },
  {
    icon: QrCode,
    title: 'Geração de QR Code',
    description: 'Crie e imprima um QR Code exclusivo para sua lista. Cole-o onde for mais conveniente!',
  },
];

const collaboratorFeatures = [
    {
        icon: LogIn,
        title: 'Acesso Rápido e Sem Login',
        description: 'Não é necessário criar uma conta. Basta acessar o link ou escanear o QR Code para colaborar.'
    },
    {
        icon: Sparkles,
        title: 'Interface Simples e Direta',
        description: 'Com um design limpo, qualquer pessoa pode adicionar um item à lista de compras em segundos.'
    },
    {
        icon: Send,
        title: 'Comunicação Direta',
        description: 'Deixe uma mensagem para o dono da lista, seja para sugerir um novo produto ou tirar uma dúvida.'
    }
]

const howItWorks = [
    {
        step: 1,
        title: "Cadastre-se e Crie",
        description: "Crie sua conta e adicione os itens que você costuma usar para montar sua lista padrão."
    },
    {
        step: 2,
        title: "Compartilhe",
        description: "Gere seu link público e QR Code. Envie o link ou imprima o QR Code e cole-o em um local visível."
    },
    {
        step: 3,
        title: "Colabore",
        description: "Alguém notou que um item acabou? Basta escanear o código e adicionar o item à sua lista de compras."
    },
    {
        step: 4,
        title: "Seja Notificado",
        description: "Você recebe um e-mail em tempo real informando sobre o novo item adicionado à sua lista."
    },
    {
        step: 5,
        title: "Compre com Inteligência",
        description: "Acesse seu painel e veja sua lista de compras sempre atualizada, pronta para a ida ao mercado."
    }
]

const faqs = [
    {
        question: "Como os outros adicionam itens à minha lista?",
        answer: "Eles simplesmente escaneiam o QR Code ou acessam seu link público. Uma página simples será exibida, permitindo que eles marquem um item que acabou ou adicionem um novo. Não é preciso instalar nada nem fazer login."
    },
    {
        question: "Onde posso colar o QR Code?",
        answer: "O ideal é colar em locais de alta visibilidade e conveniência, como na porta da geladeira, na despensa do escritório, em um quadro de avisos ou perto do estoque de suprimentos."
    },
    {
        question: "Preciso estar conectado à internet?",
        answer: "Para receber notificações em tempo real e ter a lista sincronizada, sim. O colaborador também precisa de internet para acessar sua página pública e adicionar um item."
    },
    {
        question: "Posso gerenciar mais de uma lista?",
        answer: "Inicialmente, cada administrador gerencia uma lista principal vinculada à sua conta. Futuras atualizações podem incluir a gestão de múltiplas listas para diferentes ambientes (casa, escritório, etc.)."
    }
];

export default function ListaFacilPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'lista-facil-hero');
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('lista-facil-screenshot'));

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
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
          <div className="absolute inset-0 bg-black/60" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-primary-foreground">
            <div className="container">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Lista Fácil: Suas Listas, Simples e Compartilhadas
              </h1>
              <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                Transforme a maneira como você gerencia listas em ambientes compartilhados como residências, escritórios e apartamentos.
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Uma Solução Inteligente e Colaborativa</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Centralize a gestão de suprimentos com funcionalidades poderosas para administradores e uma experiência simples para colaboradores.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2"><UserCheck className="h-7 w-7"/> Para Administradores</h3>
                        <div className="grid gap-8">
                            {adminFeatures.map((feature) => (
                                <Card key={feature.title} className="flex flex-col">
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <feature.icon className="h-8 w-8 text-primary" />
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2"><Share className="h-7 w-7"/> Para Colaboradores</h3>
                        <div className="grid gap-8">
                             {collaboratorFeatures.map((feature) => (
                                <Card key={feature.title}>
                                    <CardHeader className="flex flex-row items-center gap-4">
                                        <feature.icon className="h-8 w-8 text-primary" />
                                        <CardTitle className="text-xl">{feature.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-muted-foreground">{feature.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="how-it-works" className="w-full py-16 sm:py-24 bg-secondary">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Como Funciona</h2>
              <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                Em poucos passos, você organiza tudo e nunca mais fica sem o que precisa.
              </p>
            </div>
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block"></div>
              {howItWorks.map((item, index) => (
                <div key={item.step} className="relative flex md:items-center mb-8 md:mb-0">
                  <div className={`flex w-full items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                    <div className="hidden md:flex flex-col items-center w-1/3">
                        <div className="relative z-10 flex items-center justify-center h-12 w-12 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                            {item.step}
                        </div>
                    </div>
                    <div className="w-full md:w-2/3">
                      <Card>
                        <CardHeader>
                            <div className="flex items-center gap-4">
                                <div className="flex md:hidden items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground font-bold text-base">
                                    {item.step}
                                </div>
                                <CardTitle>{item.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <section id="gallery" className="w-full py-16 sm:py-24">
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
        
        <section id="faq" className="w-full py-16 sm:py-24 bg-secondary">
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

    