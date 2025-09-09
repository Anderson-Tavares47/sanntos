'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// fundo da página
import FundoPortfolio from '@/assets/img/ptfundo.webp';

// imagens do portfólio (27 imagens)
import Img1 from '@/assets/img/pt1.webp';
import Img2 from '@/assets/img/pt2.webp';
import Img3 from '@/assets/img/pt3.webp';
import Img4 from '@/assets/img/pt4.webp';
import Img5 from '@/assets/img/pt5.webp';
import Img6 from '@/assets/img/pt6.webp';
import Img7 from '@/assets/img/pt7.webp';
import Img8 from '@/assets/img/pt8.webp';
import Img9 from '@/assets/img/pt9.webp';
import Img10 from '@/assets/img/pt10.webp';
import Img11 from '@/assets/img/pt11.webp';
import Img12 from '@/assets/img/pt12.webp';
import Img13 from '@/assets/img/pt13.webp';
import Img14 from '@/assets/img/pt14.webp';
import Img15 from '@/assets/img/pt15.webp';
import Img16 from '@/assets/img/pt16.webp';
import Img17 from '@/assets/img/pt17.webp';
import Img18 from '@/assets/img/pt18.webp';
import Img19 from '@/assets/img/pt19.webp';
import Img20 from '@/assets/img/pt20.webp';
import Img21 from '@/assets/img/pt21.webp';
import Img22 from '@/assets/img/pt22.webp';
import Img23 from '@/assets/img/pt23.webp';
import Img24 from '@/assets/img/pt24.webp';
import Img25 from '@/assets/img/pt25.webp';
import Img26 from '@/assets/img/pt26.webp';
import Img27 from '@/assets/img/pt27.webp';

const portfolioImages = [
  Img1, Img2, Img3, Img4, Img5, Img6, Img7, Img8,
  Img9, Img10, Img11, Img12, Img13, Img14, Img15, Img16,
  Img17, Img18, Img19, Img20, Img21, Img22, Img23, Img24,
  Img25, Img26, Img27,
];

const container = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, type: "spring" as const } },
};

export default function PortfolioPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + portfolioImages.length) % portfolioImages.length);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % portfolioImages.length);
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 pt-28 sm:pt-32 md:pt-36 pb-16">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FundoPortfolio.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-7xl w-full">
        <motion.h1
          className="text-3xl md:text-5xl font-bold mb-12 text-center text-white"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Nosso Portfólio
        </motion.h1>

        {/* Grid de imagens */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {portfolioImages.map((img, index) => (
            <motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transform transition cursor-pointer"
              variants={fadeUp}
              onClick={() => setSelectedIndex(index)}
            >
              <Image
                src={img}
                alt={`Projeto ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal de visualização */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative max-w-5xl w-full px-4 flex items-center justify-center"
          >
            {/* Botão anterior */}
            <button
              onClick={handlePrev}
              className="absolute left-2 md:left-6 bg-white/80 text-black rounded-full px-3 py-2 text-lg font-bold shadow-md hover:bg-white"
            >
              ‹
            </button>

            {/* Imagem ajustada */}
            <Image
              src={portfolioImages[selectedIndex]}
              alt={`Imagem ${selectedIndex + 1}`}
              width={1200}
              height={800}
              className="max-h-[90vh] w-auto mx-auto rounded-lg shadow-lg object-contain"
            />

            {/* Botão próximo */}
            <button
              onClick={handleNext}
              className="absolute right-2 md:right-6 bg-white/80 text-black rounded-full px-3 py-2 text-lg font-bold shadow-md hover:bg-white"
            >
              ›
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
