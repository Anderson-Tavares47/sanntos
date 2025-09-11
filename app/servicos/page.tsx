'use client';

import { motion } from "framer-motion";
import Image from "next/image";

import Icon1 from '@/assets/img/designer.webp';
import Icon2 from '@/assets/img/planejamento.webp';
import Icon3 from '@/assets/img/qualidade.jpg';
import Icon4 from '@/assets/img/montagem.webp';
import FundoServicos from '@/assets/img/fundoSv.webp';

const fadeFromLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeFromRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

export default function ServicosPage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 pt-28 sm:pt-32 md:pt-36 pb-16">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FundoServicos.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl w-full">
        {/* Título */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Nossos Serviços
        </motion.h2>

        {/* Texto introdutório */}
        <motion.p
          className="max-w-3xl text-lg md:text-xl text-center text-gray-200 leading-relaxed mb-16 mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Na Sanntos, transformamos sua visão em realidade através de um processo completo, 
          que une design inspirador e precisão técnica. Cada detalhe, do primeiro esboço ao 
          último parafuso, é executado com maestria para superar suas expectativas.
        </motion.p>

        {/* Grid de serviços */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Card 1 */}
          <motion.div
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-8 text-center"
            variants={fadeFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-[400px] mb-6 overflow-hidden rounded-[5px]">
              <Image src={Icon1} alt="Consultoria" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Consultoria e Design de Interiores</h3>
            <p className="text-gray-200 leading-relaxed text-justify">
              Tudo começa com uma escuta atenta. Nesta primeira etapa, nossa equipe de designers 
              mergulha em suas inspirações, necessidades e no seu estilo de vida para cocriar um projeto exclusivo. 
              Transformamos suas referências e desejos em soluções inteligentes e visualmente impressionantes, 
              apresentadas em um projeto 3D realista, para que você possa visualizar cada detalhe do seu 
              futuro ambiente antes mesmo da produção.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-8 text-center"
            variants={fadeFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-[400px] mb-6 overflow-hidden rounded-[5px]">
              <Image src={Icon2} alt="Planejamento" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Planejamento Técnico e Estrutural</h3>
            <p className="text-gray-200 leading-relaxed text-justify">
              É aqui que nosso grande diferencial entra em cena: o DNA de montagem. 
              Com um conhecimento profundo sobre a estrutura interna de cada móvel, nossa equipe técnica 
              analisa o design para garantir que ele não seja apenas belo, mas perfeitamente executável, 
              durável e sólido. Planejamos cada encaixe, selecionamos as ferragens ideais e otimizamos os materiais, 
              prevenindo surpresas e assegurando a integridade do seu investimento a longo prazo.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-8 text-center"
            variants={fadeFromLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-[400px] mb-6 overflow-hidden rounded-[5px]">
              <Image src={Icon3} alt="Produção" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Produção de Qualidade</h3>
            <p className="text-gray-200 leading-relaxed text-justify">
              A qualidade de um móvel planejado está diretamente ligada à matéria-prima. 
              Por isso, trabalhamos apenas com fornecedores selecionados e materiais de ponta, 
              que garantem não apenas um acabamento sofisticado, mas também a resistência e a durabilidade que seu lar merece. 
              Cada peça é produzida com tecnologia de precisão, seguindo rigorosamente o planejamento técnico 
              para garantir um encaixe perfeito.
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div
            className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl p-8 text-center"
            variants={fadeFromRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="w-full h-[400px] mb-6 overflow-hidden rounded-[5px]">
              <Image src={Icon4} alt="Montagem" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Montagem Master</h3>
            <p className="text-gray-200 leading-relaxed text-justify">
              A etapa que deu origem à nossa empresa é executada com a maestria que nos define. 
              Nossa equipe de montagem, altamente especializada, realiza a instalação com precisão, 
              cuidado e respeito ao seu espaço. É neste momento que nosso planejamento meticuloso se materializa 
              em um ambiente harmonioso, com acabamentos impecáveis e a robustez que só a expertise 
              de quem entende o móvel por dentro e por fora pode oferecer.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
