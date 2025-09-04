'use client';

import { motion } from "framer-motion";
import Fundo from '@/assets/img/fundo.webp';

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.05,
    },
  },
};

const letter = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 12, stiffness: 200 },
  },
};

export default function HomePage() {
  const text = "Ambientes que contam sua história";

  return (
    <section className="relative flex items-center justify-center h-screen">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${Fundo.src})`,
        }}
      />

      {/* Overlay com cor + blur */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Conteúdo centralizado */}
      <div className="relative text-center text-white z-10 px-6 w-full">
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              variants={letter}
              className={char === " " ? "mr-2" : ""}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtítulo maior */}
        <motion.p
          className="mt-6 text-xl md:text-2xl text-gray-200 font-light leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          Móveis planejados com design, precisão e qualidade.
        </motion.p>

        {/* Linha complementar sem limite de largura */}
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-300 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Projetamos ambientes exclusivos que unem sofisticação, conforto e
          funcionalidade, transformando cada espaço em algo único.
        </motion.p>

        <motion.a
          href="/contato"
          className="inline-block mt-8 bg-primary text-dark px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          Peça seu orçamento
        </motion.a>
      </div>
    </section>
  );
}
