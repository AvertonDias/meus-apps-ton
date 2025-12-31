'use client';

import { motion } from 'framer-motion';

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

export default function TermosPage() {
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
              Termos de Uso
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-500 dark:text-slate-400">
              Última atualização: {lastUpdated}
            </p>
          </motion.div>
          
          <div className="space-y-12">

            <Section title="1. Aceitação dos Termos">
              <p>
                Ao acessar e utilizar os aplicativos e serviços da Ton Apps ("Serviços"), você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concorda com estes termos, não deve acessar ou usar nossos Serviços.
              </p>
            </Section>

            <Section title="2. Uso dos Serviços">
              <p>
                Você concorda em usar nossos Serviços apenas para fins legais e de acordo com estes Termos. Você não deve usar os Serviços:
              </p>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>
                  De qualquer forma que viole qualquer lei ou regulamento aplicável.
                </li>
                <li>
                  Para explorar, prejudicar ou tentar explorar ou prejudicar menores de qualquer forma.
                </li>
                <li>
                  Para se passar ou tentar se passar por outro usuário, pessoa ou entidade.
                </li>
              </ul>
            </Section>

            <Section title="3. Contas de Usuário">
              <p>
                Para acessar alguns recursos, pode ser necessário criar uma conta. Você é responsável por manter a confidencialidade de sua conta e senha e por restringir o acesso ao seu dispositivo. Você concorda em aceitar a responsabilidade por todas as atividades que ocorram sob sua conta ou senha.
              </p>
            </Section>

            <Section title="4. Propriedade Intelectual">
              <p>
                Os Serviços e seu conteúdo original (excluindo conteúdo fornecido pelos usuários), recursos e funcionalidades são e permanecerão como propriedade exclusiva da Ton Apps e de seus licenciadores. Nossos logotipos, nomes e designs são marcas registradas e não podem ser usados sem nossa permissão prévia por escrito.
              </p>
            </Section>

            <Section title="5. Limitação de Responsabilidade">
              <p>
                Em nenhuma circunstância a Ton Apps, nem seus diretores, funcionários, parceiros, agentes, fornecedores ou afiliados, serão responsáveis por quaisquer danos indiretos, incidentais, especiais, consequenciais ou punitivos, incluindo, sem limitação, perda de lucros, dados, uso, boa vontade ou outras perdas intangíveis, resultantes do seu acesso ou uso ou incapacidade de acessar ou usar os Serviços.
              </p>
            </Section>

             <Section title="6. Alterações nos Termos">
              <p>
                Reservamo-nos o direito, a nosso exclusivo critério, de modificar ou substituir estes Termos a qualquer momento. Se uma revisão for material, faremos esforços razoáveis para fornecer um aviso com pelo menos 30 dias de antecedência antes que quaisquer novos termos entrem em vigor.
              </p>
            </Section>

            <Section title="7. Contato">
              <p>
                Se você tiver alguma dúvida sobre estes Termos, entre em contato conosco em:
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
