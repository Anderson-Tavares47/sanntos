'use client';

import { motion } from "framer-motion";
import FundoPost from '@/assets/img/card1.webp';

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

export default function MontadorMoveisReformasPage() {
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
          Montador de Móveis: A Chave para Reformas Eficientes
        </motion.h1>

        <motion.div
          className="space-y-6 text-lg text-gray-200 leading-relaxed text-justify"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={fadeUp}>
            De mudanças de layout a novas funcionalidades, saiba o que é possível alterar e por que um montador de móveis especializado é essencial para o sucesso da reforma.
          </motion.p>
          <motion.p variants={fadeUp}>
            A vida muda, e com ela, as necessidades dentro de casa. O home office precisa virar um quarto de bebê, a nova TV não cabe no antigo painel, ou simplesmente surge o desejo de renovar o visual. Diante dessas situações, proprietários de móveis planejados se deparam com uma dúvida crucial: é possível adaptar ou modificar um projeto já instalado? A resposta é sim, mas com um universo de ressalvas que separam uma reforma bem-sucedida de uma grande dor de cabeça.
          </motion.p>
          <motion.p variants={fadeUp}>
            Em primeiro lugar, é preciso entender que a “caixaria” — a estrutura principal dos armários e nichos — é a parte mais difícil e, muitas vezes, inviável de ser alterada em suas dimensões. Reduzir a profundidade de um guarda-roupa, por exemplo, pode custar mais caro do que fabricar um novo. No entanto, o universo de possibilidades se abre quando falamos de componentes e layout interno.
          </motion.p>
          <motion.p variants={fadeUp}>
            “A viabilidade depende 90% da estrutura original e da qualidade da primeira instalação”, afirma um marceneiro com 20 anos de experiência em fóruns do setor. “Se a base for sólida, podemos fazer muita coisa”. Trocar portas, substituir puxadores, adicionar ou reposicionar prateleiras e gavetas internas são as modificações mais comuns e com melhor custo-benefício. Também é possível adicionar novos módulos, desde que o fabricante original ainda produza a mesma linha de acabamentos e cores.
          </motion.p>
          <motion.p variants={fadeUp}>
            O desafio é que qualquer adaptação, por menor que pareça, exige a desmontagem e uma nova montagem de móveis com precisão cirúrgica. Este não é um trabalho para amadores. É aqui que o papel do montador de móveis se torna ainda mais crítico do que na instalação inicial. Ele precisa não apenas montar, mas diagnosticar, adaptar e solucionar problemas que surgem ao mexer em uma estrutura existente.
          </motion.p>
          <motion.p variants={fadeUp}>
            Encontrar um montador de móveis planejados que realize esse tipo de serviço especializado é uma tarefa valorizada no mercado. A busca por um montador de móveis em SP com essa expertise é constante. Seja para contratar montadores de móveis na Zona Leste para reconfigurar um home office ou um montador de móveis na Zona Sul para trocar as portas de um armário, a experiência na adaptação faz toda a diferença. A demanda por esses montadores se estende por toda a metrópole, da Zona Norte à Zona Oeste, e por cidades vizinhas, como em Santo André ou Guarulhos, onde muitos buscam renovar projetos antigos sem o custo de um novo.
          </motion.p>
          <motion.p variants={fadeUp}>
            Portanto, antes de descartar seu móvel planejado, consulte um profissional. Uma avaliação técnica pode revelar um grande potencial de transformação. A montagem de móveis ou, neste caso, a remontagem adaptativa, é o serviço que pode renovar seu ambiente, provando que um bom projeto, nas mãos de um bom montador, pode evoluir junto com você.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
