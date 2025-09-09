'use client';

import { motion } from "framer-motion";
import FundoPost from '@/assets/img/card2.webp';

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

export default function MoveisPlanejadosAluguelPage() {
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
          Móveis planejados em imóvel alugado: Um sonho possível ou um risco desnecessário?
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg text-gray-200 leading-relaxed text-justify"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}>
            Da negociação com o proprietário à Lei do Inquilinato, saiba como viabilizar seu projeto e por que a qualidade da montagem de móveis é duplamente crucial nesse cenário.
          </motion.p>

          <motion.p variants={fadeUp}>
            A personalização do lar é um desejo que não se restringe a proprietários. Inquilinos, especialmente em contratos de longa duração, frequentemente se deparam com o dilema: é viável, ou mesmo permitido, investir em móveis planejados para um imóvel que não é seu? A resposta, amparada pela lei e pelo bom senso, é um “sim, com planejamento e negociação”.
          </motion.p>

          <motion.p variants={fadeUp}>
            Juridicamente, a questão gira em torno da Lei do Inquilinato (Lei nº 8.245/91). A instalação de móveis planejados é classificada como uma “benfeitoria voluptuária”, ou seja, uma alteração que visa o mero deleite ou recreio, não sendo essencial ao uso do imóvel. Diferente de benfeitorias necessárias (como o reparo de um vazamento), as voluptuárias não são indenizáveis e, crucialmente, exigem autorização prévia e expressa do locador. “O primeiro passo é formalizar a proposta ao proprietário, preferencialmente por e-mail ou como um aditivo ao contrato. A autorização por escrito protege ambas as partes”, aconselha a advogada especialista em direito imobiliário, Beatriz Correia.
          </motion.p>

          <motion.p variants={fadeUp}>
            O acordo pode prever diversos cenários: a retirada dos móveis ao final do contrato, a possibilidade de venda para o proprietário ou para o próximo inquilino, ou até mesmo um abatimento no aluguel, embora menos comum. A chave é a transparência. Muitos proprietários veem a instalação como uma valorização do imóvel, tornando a negociação mais fácil do que se imagina.
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-center"
          >
            A Montagem e Desmontagem: O Ponto Crítico
          </motion.h2>

          <motion.p variants={fadeUp}>
            Se a autorização for concedida, o foco se volta para a execução. Neste contexto, a qualidade da montagem de móveis planejados é ainda mais vital. Um bom projeto deve prever uma futura desmontagem sem danificar o imóvel. Isso significa que a fixação em paredes, pisos e tetos deve ser minimamente invasiva. É aqui que a expertise de um montador de móveis profissional faz toda a diferença. Ele saberá usar as técnicas corretas para garantir a estabilidade da estrutura e, ao mesmo tempo, facilitar uma remoção limpa no futuro.
          </motion.p>

          <motion.p variants={fadeUp}>
            A busca por montadores capacitados para essa tarefa delicada é intensa. Contratar um montador de móveis em SP que entenda essa dinâmica é um grande diferencial. A necessidade por uma montagem de móveis cuidadosa é a mesma em toda a cidade, seja para um montador de móveis na Zona Leste, para montadores de móveis na Zona Sul, na Zona Norte ou na Zona Oeste. Essa preocupação se estende a municípios vizinhos, onde a procura por um montador de móveis em Guarulhos ou por montadores de móveis em Santo André que ofereçam essa “visão de futuro” também cresce.
          </motion.p>

          <motion.p variants={fadeUp}>
            Portanto, investir em planejados no imóvel alugado é possível. Requer diálogo, formalização e, acima de tudo, a contratação de um montador que não apenas execute a montagem de móveis com perfeição, mas que o faça pensando no dia em que aquele sonho precisará ser cuidadosamente desmontado para seguir com você para um novo lar.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
