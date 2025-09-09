'use client';

import { motion } from "framer-motion";
import FundoPost from '@/assets/img/card5.webp';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" as const } },
};

export default function TendenciaMoveisPlanejadosPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 pt-28 sm:pt-32 md:pt-36 pb-16">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FundoPost.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl text-white">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-10 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Móveis planejados: A tendência que veio para ficar.
          Entenda os motivos por trás da alta
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg text-gray-200 leading-relaxed text-justify"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}>
            Da otimização de espaços à valorização do imóvel, descubra como a personalização se tornou essencial e por que a montagem de móveis profissional é a chave do sucesso.
          </motion.p>

          <motion.p variants={fadeUp}>
            Se antes eram vistos como um artigo de luxo, hoje os móveis planejados se consolidaram como uma das principais tendências do mercado imobiliário e de decoração no Brasil. Mas o que explica essa ascensão tão forte? A resposta está em uma combinação de fatores comportamentais, econômicos e, principalmente, na nova relação que as pessoas estabeleceram com seus lares.
          </motion.p>

          <motion.p variants={fadeUp}>
            A pandemia de COVID-19 foi um catalisador. Ao transformar a casa em escritório, escola e refúgio, a necessidade de ter ambientes mais funcionais e agradáveis tornou-se uma prioridade. Dados do setor moveleiro indicam que a procura por soluções para home office e otimização de pequenos espaços cresceu mais de 40% desde 2020. Em cidades como São Paulo, onde a metragem dos apartamentos diminui a cada novo lançamento, aproveitar cada centímetro com um projeto inteligente não é mais opção, é necessidade.
          </motion.p>

          <motion.p variants={fadeUp}>
            Além da funcionalidade, há o fator da exclusividade. “O consumidor moderno não quer uma casa com ‘cara de showroom’. Ele busca refletir sua identidade em cada detalhe”, comenta a arquiteta Juliana Ferraz em um blog de decoração. Essa busca por um lar único, impulsionada por inspirações visuais de plataformas como Instagram e Pinterest, encontra nos planejados a solução perfeita, permitindo a escolha de cores, acabamentos e configurações que móveis prontos não oferecem.
          </motion.p>

          <motion.p variants={fadeUp}>
            Contudo, a popularização desse sonho trouxe à tona um desafio crítico: a execução. O sucesso de um projeto de alto investimento depende diretamente da qualidade da sua instalação. A montagem de móveis planejados é uma arte que exige precisão milimétrica, e o mercado sentiu o impacto da alta demanda. Um projeto impecável pode ser arruinado por uma instalação inadequada, resultando em portas desalinhadas e estruturas comprometidas.
          </motion.p>

          <motion.p variants={fadeUp}>
            É por isso que a busca por um montador de móveis qualificado se tornou uma etapa crucial do processo. A procura por um montador de móveis SP de confiança é uma verdadeira jornada para muitos consumidores. Seja para uma montagem de móveis na Zona Leste ou para contratar montadores de móveis na Zona Oeste, a qualidade da finalização é o que define a satisfação do cliente. Essa necessidade se espalha por toda a capital, do montador de móveis na Zona Norte ao montador de móveis na Zona Sul, e se estende a importantes cidades do entorno, como a crescente procura por montador de móveis em Guarulhos ou por montadores de móveis em Santo André.
          </motion.p>

          <motion.p variants={fadeUp}>
            O investimento em planejados está em alta porque o lar nunca foi tão protagonista. E a garantia desse investimento, que valoriza o imóvel e a qualidade de vida, está nas mãos de montadores competentes. A montagem de móveis profissional é o selo final que transforma um bom projeto em um sonho realizado.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
