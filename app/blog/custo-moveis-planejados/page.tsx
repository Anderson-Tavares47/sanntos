'use client';

import { motion } from "framer-motion";
import FundoPost from '@/assets/img/card3.webp';

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

export default function CustoMoveisPlanejadosPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 pt-28 sm:pt-32 md:pt-36 pb-16">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FundoPost.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-4xl text-white">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-10 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Móveis planejados: desvendando o custo real do sonho
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg text-gray-200 leading-relaxed text-justify"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}>
            Investir em móveis planejados é, para muitos, a realização de um sonho. Mas esse sonho vem acompanhado de uma dúvida recorrente: afinal, qual é o verdadeiro custo de um projeto de planejados?
          </motion.p>

          <motion.p variants={fadeUp}>
            O valor não depende apenas do tamanho do ambiente. Diversos fatores influenciam no orçamento: a escolha dos materiais, o tipo de acabamento, a complexidade do design, as ferragens e até a qualidade da montagem. Cada detalhe impacta diretamente na durabilidade e no resultado final.
          </motion.p>

          <motion.p variants={fadeUp}>
            Em muitos casos, o barato pode sair caro. Optar por materiais de baixa qualidade ou por mão de obra não especializada pode comprometer a vida útil dos móveis e gerar gastos adicionais com reparos ou substituições em pouco tempo.
          </motion.p>

          <motion.p variants={fadeUp}>
            Por outro lado, investir em fornecedores de confiança, ferragens resistentes e montadores experientes garante um retorno a longo prazo. Além de agregar valor ao imóvel, móveis planejados bem executados acompanham as mudanças da rotina e permanecem funcionais por muitos anos.
          </motion.p>

          <motion.p variants={fadeUp}>
            Portanto, o custo real de um móvel planejado não deve ser calculado apenas pelo preço inicial. Ele está na soma da qualidade, da durabilidade, da praticidade e do impacto positivo no seu dia a dia. Mais do que um gasto, é um investimento que transforma seu espaço e melhora sua qualidade de vida.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
