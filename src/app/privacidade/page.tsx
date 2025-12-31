'use client';

import { Metadata } from 'next';
import { motion } from 'framer-motion';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description: 'Entenda como seus dados são coletados, usados e protegidos pela Ton Apps.',
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8"
  >
    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
      {title}
    </h2>
    <div className="space-y-4 text-base md:text-lg leading-relaxed text-slate-600 dark:text-slate-400">
      {children}
    </div>
  </motion.div>
);

export default function PrivacidadePage() {
  const lastUpdated = "25 de Julho de 2024";

  return (
    <div className="bg-slate-50 dark:bg-[#020817] py-24 sm:py-32">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-400">
              Política de Privacidade
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-500 dark:text-slate-400">
              Última atualização: {lastUpdated}
            </p>
          </motion.div>
          
          <div className="space-y-12">

            <Section title="1. Introdução">
              <p>
                Bem-vindo à Ton Apps. Sua privacidade é de extrema importância para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos suas informações quando você utiliza nossos aplicativos e serviços. Ao usar nossos serviços, você concorda com a coleta e uso de informações de acordo com esta política.
              </p>
            </Section>

            <Section title="2. Informações que Coletamos">
              <p>
                Podemos coletar informações sobre você de várias maneiras. As informações que podemos coletar através dos nossos aplicativos dependem do conteúdo e dos materiais que você usa e incluem:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Dados Pessoais:</strong> Informações de identificação pessoal, como seu nome e endereço de e-mail, que você nos fornece voluntariamente ao se registrar ou utilizar funcionalidades específicas de nossos aplicativos.
                </li>
                <li>
                  <strong>Dados de Uso:</strong> Informações que seu dispositivo nos envia automaticamente, como suas interações com o aplicativo e dados de erros, para nos ajudar a melhorar nossos serviços.
                </li>
              </ul>
            </Section>

            <Section title="3. Como Usamos Suas Informações">
              <p>
                Usamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Fornecer, operar e manter nossos aplicativos.</li>
                <li>Melhorar, personalizar e expandir nossos serviços.</li>
                <li>Entender e analisar como você usa nossos aplicativos.</li>
                <li>Desenvolver novos produtos, serviços, recursos e funcionalidades.</li>
                <li>Comunicar com você, seja diretamente ou através de um de nossos parceiros, para fins de atendimento ao cliente, para fornecer atualizações e outras informações relacionadas ao aplicativo.</li>
              </ul>
            </Section>

            <Section title="4. Compartilhamento de Suas Informações">
              <p>
                Nós não compartilhamos suas informações de identificação pessoal com terceiros, exceto nas seguintes situações:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  <strong>Com seu consentimento:</strong> Podemos compartilhar suas informações para qualquer outro propósito com o seu consentimento explícito.
                </li>
                <li>
                  <strong>Para cumprimento da lei:</strong> Podemos divulgar suas informações quando formos legalmente obrigados a fazê-lo para cumprir a lei aplicável, solicitações governamentais, ou processos judiciais.
                </li>
              </ul>
            </Section>

            <Section title="5. Segurança de Suas Informações">
              <p>
                Utilizamos medidas de segurança administrativas, técnicas e físicas para ajudar a proteger suas informações pessoais. Embora tenhamos tomado medidas razoáveis para proteger as informações pessoais que você nos fornece, esteja ciente de que, apesar de nossos esforços, nenhuma medida de segurança é perfeita ou impenetrável.
              </p>
            </Section>

            <Section title="6. Direitos do Usuário">
              <p>
                Você tem o direito de acessar, corrigir ou excluir suas informações pessoais. Se você deseja exercer esses direitos, entre em contato conosco através das informações de contato fornecidas abaixo.
              </p>
            </Section>

            <Section title="7. Alterações a Esta Política de Privacidade">
              <p>
                Podemos atualizar nossa Política de Privacidade de tempos em tempos. Notificaremos você sobre quaisquer alterações, publicando a nova Política de Privacidade nesta página e atualizando a data da "Última atualização".
              </p>
            </Section>

            <Section title="8. Contato">
              <p>
                Se você tiver alguma dúvida ou sugestão sobre nossa Política de Privacidade, não hesite em nos contatar em:
                <a href="mailto:contato@tonapps.com.br" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline ml-2">
                  contato@tonapps.com.br
                </a>
              </p>
            </Section>
            
          </div>
        </div>
      </div>
    </div>
  );
}
