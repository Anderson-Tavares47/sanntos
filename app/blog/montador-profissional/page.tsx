'use client';

import { motion } from "framer-motion";
import FundoPost from '@/assets/img/card6.webp';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring" as const },
  },
};

export default function MontadorProfissionalPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 py-20">
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
          Contrate um Montador de Móveis Profissional e Evite Erros Comuns
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg text-gray-200 leading-relaxed text-justify"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}>
            Analisamos custos, benefícios e o fator decisivo que muitos esquecem: a montagem de móveis profissional, que pode definir o sucesso ou o fracasso do seu projeto.
          </motion.p>

          <motion.p variants={fadeUp}>
            Em uma era dominada pela personalização, os móveis planejados surgem como o ápice do desejo de consumo para quem busca um lar com identidade e funcionalidade. Projetos que otimizam cada centímetro e refletem um estilo de vida único povoam as redes sociais, mas a pergunta que ecoa em fóruns e blogs é unânime: vale a pena o alto investimento?
          </motion.p>

          <motion.p variants={fadeUp}>
            A resposta curta é: sim, mas com ressalvas cruciais. A principal vantagem é, sem dúvida, o aproveitamento inteligente do espaço. Em metrópoles como São Paulo, onde apartamentos compactos são a norma, um projeto bem executado transforma áreas limitadas em ambientes amplos e organizados. Segundo dados da Associação Brasileira das Indústrias do Mobiliário (Abimóvel), a busca por soluções personalizadas cresceu mais de 15% nos últimos dois anos, impulsionada pela valorização dos imóveis que contam com marcenaria de qualidade.
          </motion.p>

          <motion.p variants={fadeUp}>
            Contudo, o caminho entre o sonho e a realidade pode ser tortuoso. O custo elevado e o longo prazo de entrega são os primeiros obstáculos. Mas o ponto mais crítico, e frequentemente subestimado, é a etapa final: a montagem. Uma frase é recorrente em grupos de consumidores: “O projeto era perfeito no papel, mas o pesadelo começou na montagem”. Uma instalação malfeita pode comprometer toda a estrutura, desalinhando portas, danificando painéis e, em última instância, destruindo um investimento de milhares de reais.
          </motion.p>

          <motion.p variants={fadeUp}>
            É aqui que a figura do montador de móveis profissional se torna o pilar do sucesso. A montagem de móveis planejados exige uma precisão técnica que vai muito além de seguir um manual. Envolve conhecimento de estruturas, ajustes finos e o uso de ferramentas específicas. Contratar um serviço qualificado não é um custo extra, mas a garantia da longevidade do seu bem.
          </motion.p>

          <motion.p variants={fadeUp}>
            A demanda por bons montadores é altíssima. A procura por um montador de móveis em SP qualificado é constante, e essa necessidade se espalha por toda a região metropolitana. Encontrar um montador de móveis na Zona Leste ou montadores de móveis na Zona Sul que entendam a complexidade de diferentes fabricantes é um desafio. O mesmo ocorre para quem busca um montador de móveis na Zona Norte ou precisa de montagens de móveis na Zona Oeste. A especialização é tão vital que serviços em cidades vizinhas, como a busca por um montador de móveis em Guarulhos ou montadores de móveis em Santo André, também crescem exponencialmente.
          </motion.p>

          <motion.p variants={fadeUp}>
            Portanto, ao decidir investir em planejados, inclua no orçamento a contratação de montadores de móveis com referências. A montagem de móveis é a assinatura final do seu projeto. O design pode dar a alma ao ambiente, mas é a competência do montador que garante a integridade e a beleza do seu investimento por anos.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
