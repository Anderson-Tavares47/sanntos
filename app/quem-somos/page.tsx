'use client';

import { motion } from "framer-motion";
import FundoQuemSomos from '@/assets/img/fundoqss.jpg';

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 15 } },
};

export default function QuemSomosPage() {
  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 pt-28 sm:pt-32 md:pt-36 pb-16">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${FundoQuemSomos.src})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Conteúdo */}
      <div className="relative z-10 text-white px-4 sm:px-6 max-w-4xl">
        {/* Título centralizado */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Quem Somos
        </motion.h2>

        {/* Texto justificado */}
        <motion.div
          className="space-y-6 text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed text-justify"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={fadeUp}>
            A <span className="font-semibold">Sanntos</span> nasceu para dar forma aos seus sonhos. 
            Somos uma empresa voltada à fabricação e montagem de móveis e, em cada peça, 
            unimos criatividade, funcionalidade e uma atenção obsessiva aos detalhes.
          </motion.p>

          <motion.p variants={fadeUp}>
            Nossa jornada começou com a arte da montagem. Por anos, fomos os especialistas 
            que garantiam o encaixe perfeito e a estrutura sólida de móveis em milhares de lares e empresas. 
            Essa experiência nos deu um conhecimento profundo, de dentro para fora, 
            sobre o que faz um móvel ser verdadeiramente excepcional.
          </motion.p>

          <motion.p variants={fadeUp}>
            Hoje, aplicamos todo esse conhecimento em cada projeto que criamos. 
            Não apenas desenhamos ambientes; nós os concebemos com a certeza de que cada linha 
            do projeto se traduzirá em um acabamento impecável e uma durabilidade que você 
            sentirá no dia a dia. Da primeira inspiração à montagem final, 
            a <span className="font-semibold">Sanntos</span> é a garantia de que seu espaço 
            será tão bem construído quanto foi sonhado.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
