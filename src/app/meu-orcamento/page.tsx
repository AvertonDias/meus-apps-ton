
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PwaButton, PlayStoreButton } from '@/components/store-buttons';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calculator, FileText, Users, Box, BarChartHorizontal, Cloud } from 'lucide-react';


const features = [
  {
    icon: Calculator,
    title: 'Conversor de Bobinas Inteligente',
    description: 'Calcule o rendimento e o custo exato por metro de suas bobinas de metal, eliminando prejuízos e garantindo a margem de lucro.',
  },
  {
    icon: FileText,
    title: 'Orçamentos Profissionais em PDF',
    description: 'Crie e envie propostas detalhadas com o logo da sua empresa em minutos, direto do app para o WhatsApp do cliente.',
  },
  {
    icon: Users,
    title: 'Gestão de Clientes (CRM)',
    description: 'Importe contatos da sua agenda e mantenha um histórico completo de todos os orçamentos para cada cliente.',
  },
  {
    icon: Box,
    title: 'Controle de Estoque e Catálogo',
    description: 'Cadastre produtos e serviços, defina preços e receba alertas de estoque baixo para nunca ser pego de surpresa.',
  },
  {
    icon: BarChartHorizontal,
    title: 'Relatórios Detalhados',
    description: 'Gere relatórios para o cliente (só com preço de venda) e para você (com custos, margens e lucro total).',
  },
  {
    icon: Cloud,
    title: 'Sincronização na Nuvem',
    description: 'Acesse seus dados em múltiplos dispositivos (celular, tablet, PC). Suas informações estão sempre seguras e sincronizadas.',
  },
];

const faqs = [
    {
        question: "O aplicativo funciona sem internet?",
        answer: "Sim! O 'Meu Orçamento' foi pensado para o dia a dia em campo. Você pode criar, editar e gerenciar orçamentos completamente offline. Assim que você se conectar à internet, os dados são sincronizados automaticamente com a nuvem."
    },
    {
        question: 'Como funciona o "Conversor de Bobinas"?',
        answer: "Essa é uma ferramenta exclusiva para evitar prejuízos! Você simplesmente insere os dados da sua bobina de metal:\n- Peso (kg)\n- Largura (mm)\n- Espessura (mm)\n- Tipo de metal (ex: Aço Galvanizado)\n\nCom base nisso, o sistema calcula o comprimento exato em metros (rendimento) e o custo preciso por metro, com base no valor que você pagou pela bobina. Assim, você pode adicionar o material ao seu estoque com o preço de custo correto, garantindo seu lucro em cada centímetro vendido."
    },
    {
        question: "Posso personalizar os orçamentos com a minha marca?",
        answer: "Com certeza. Você pode adicionar o logotipo da sua empresa, que aparecerá em todos os orçamentos em PDF que você enviar, transmitindo muito mais profissionalismo aos seus clientes."
    },
    {
        question: "O que acontece se eu já tiver um item cadastrado e comprar mais do mesmo?",
        answer: "O sistema é inteligente para lidar com isso. Ao usar o Conversor de Bobinas para um material que já existe, o app irá perguntar se você deseja atualizar o item existente. Você pode optar por somar a nova quantidade ao estoque e até mesmo atualizar o preço de custo, caso o valor da nova compra seja diferente. Isso mantém seu controle de custos sempre preciso."
    },
    {
        question: "Como o app me ajuda a controlar o lucro?",
        answer: "Para cada orçamento, o aplicativo gera um relatório interno (visível apenas para você) que detalha os custos de materiais e mão de obra, a margem aplicada e o lucro total do projeto. Isso te dá uma visão clara da saúde financeira do seu negócio."
    },
    {
        question: "É fácil cadastrar meus produtos e clientes?",
        answer: "Sim! Você pode cadastrar produtos e serviços diretamente no catálogo. Para clientes, você pode adicioná-los manualmente ou importar contatos diretamente da agenda do seu celular com apenas um clique."
    },
    {
        question: "Meus dados estão seguros na nuvem?",
        answer: "Sim. Seus dados são sincronizados de forma segura e automática na nuvem. Isso significa que, mesmo que você perca seu celular, suas informações estarão a salvo e acessíveis assim que você fizer login em um novo dispositivo."
    },
    {
        question: "Em quais dispositivos posso usar?",
        answer: "O 'Meu Orçamento' é multiplataforma. Você pode instalar o aplicativo em celulares Android e iOS e também acessá-lo pelo navegador do seu computador ou tablet. Todos os dados são sincronizados em tempo real entre todos os seus dispositivos."
    }
];

export default function MeuOrcamentoPage() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'meu-orcamento-hero');
  const screenshots = PlaceHolderImages.filter((img) => img.id.startsWith('meu-orcamento-screenshot'));

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-[50vh] min-h-[300px] w-full bg-gradient-to-t from-blue-900/80 via-blue-800/50 to-blue-900/80">
            <div className="container h-full grid md:grid-cols-[1fr_auto_1fr] items-center">
                <div className="hidden md:flex justify-end pr-8">
                    <Image
                        src="/MeuOrcamento/MeuOrcamentoLogo.jpg"
                        alt="Logotipo Meu Orçamento"
                        width={150}
                        height={150}
                    />
                </div>
                <div className="flex flex-col items-center text-center text-primary-foreground">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                    Meu Orçamento
                </h1>
                <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/80">
                    Menos Burocracia, Mais Lucro. A ferramenta definitiva para serralheiros, calheiros e autônomos que buscam mais lucro e menos burocracia.
                </p>
                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <PwaButton href="https://meuorcamento.vercel.app/" />
                    <PlayStoreButton href="#" />
                    </div>
                </div>
                <div className="hidden md:block"></div>
            </div>
        </section>

        <section id="features" className="w-full py-16 sm:py-24">
            <div className="container">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Funcionalidades que Impulsionam seu Negócio</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Do cálculo preciso de materiais ao envio de propostas profissionais, assuma o controle total.
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Visualize o App em Ação</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                        Uma interface clara e objetiva para gerenciar seu negócio com eficiência.
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
        
        <section id="faq" className="w-full py-16 sm:py-24">
            <div className="container">
                 <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Perguntas Frequentes</h2>
                    <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                       Respostas para as dúvidas mais comuns dos profissionais.
                    </p>
                </div>
                <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto text-left">
                    {faqs.map((faq, index) =>(
                        <AccordionItem value={`item-${index+1}`} key={index}>
                            <AccordionTrigger className="text-lg text-left">{faq.question}</AccordionTrigger>
                            <AccordionContent className="text-base text-muted-foreground text-left whitespace-pre-line">
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
