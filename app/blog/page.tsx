'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// imagens dos posts
import Img1 from '@/assets/img/card1.webp';
import Img2 from '@/assets/img/card2.webp';
import Img3 from '@/assets/img/card3.webp';
import Img4 from '@/assets/img/card4.webp';
import Img5 from '@/assets/img/card5.webp';
import Img6 from '@/assets/img/card6.webp';

// imagem de fundo
import FundoBlog from '@/assets/img/fundoblog.webp';

const posts = [
  {
    slug: "montador-moveis-reformas",
    titulo: "Montador de Móveis: A Chave para Reformas Eficientes",
    resumo: "Descubra como um montador especializado pode transformar sua reforma em um processo rápido e sem dores de cabeça.",
    img: Img1,
  },
  {
    slug: "moveis-planejados-aluguel",
    titulo: "Móveis planejados em imóvel alugado: Um sonho possível ou um risco desnecessário?",
    resumo: "Entenda as vantagens e os cuidados antes de investir em planejados em imóveis alugados.",
    img: Img2,
  },
  {
    slug: "custo-moveis-planejados",
    titulo: "Móveis planejados: desvendando o custo real do sonho",
    resumo: "Veja quais fatores influenciam no preço e como planejar seu investimento de forma inteligente.",
    img: Img3,
  },
  {
    slug: "diferenca-planejados-sob-medida",
    titulo: "Planejados, modulados ou sob medida? Desvende a diferença e faça o investimento certo",
    resumo: "Uma explicação clara para entender qual opção faz mais sentido para sua casa e seu bolso.",
    img: Img4,
  },
  {
    slug: "tendencia-moveis-planejados",
    titulo: "Móveis planejados: A tendência que veio para ficar. Entenda os motivos por trás da alta",
    resumo: "Saiba por que os planejados se tornaram preferência e como eles agregam valor ao seu espaço.",
    img: Img5,
  },
  {
    slug: "montador-profissional",
    titulo: "Contrate um Montador de Móveis Profissional e Evite Erros Comuns",
    resumo: "Conheça os principais erros que podem ser evitados ao contratar um profissional qualificado.",
    img: Img6,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function BlogPage() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen px-6 py-20">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FundoBlog.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-6xl w-full">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-10 text-center text-white"
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
        >
          Blog
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {posts.map((post) => (
            <motion.div
              key={post.slug}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
              initial="hidden"
              whileInView="visible"
              variants={fadeUp}
              viewport={{ once: true, amount: 0.3 }}
            >
              {/* Imagem do post */}
              <Link href={`/blog/${post.slug}`}>
                <Image
                  src={post.img}
                  alt={post.titulo}
                  className="w-full h-56 object-cover"
                />
              </Link>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white">
                  {post.titulo}
                </h3>
                <p className="text-gray-200">{post.resumo}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-block mt-4 text-primary font-medium hover:underline"
                >
                  Ler mais →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
