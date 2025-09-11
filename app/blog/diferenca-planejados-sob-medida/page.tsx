'use client';

import { motion } from "framer-motion";
import FundoPost from '@/assets/img/card4.webp';

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

export default function DiferencaPlanejadosSobMedidaPage() {
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
                    Planejados, modulados ou sob medida?

                </motion.h1>
                <motion.h2
                    variants={fadeUp}
                    className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-center"
                >
                    Desvende a diferença e faça o investimento certo
                </motion.h2>

                <motion.div
                    className="space-y-6 text-lg text-gray-200 leading-relaxed text-justify"
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <motion.p variants={fadeUp}>
                        No universo da decoração e arquitetura, os termos “móveis planejados”, “modulados” e “sob medida” são frequentemente usados como sinônimos, gerando confusão e, por vezes, frustração no consumidor. Embora todos visem otimizar espaços, suas diferenças em processo, flexibilidade e custo são gritantes. Entender cada conceito é o primeiro passo para um investimento assertivo.
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-center"
                    >
                        Móveis Modulados: A Praticidade em Blocos
                    </motion.h2>
                    <motion.p variants={fadeUp}>
                        Pense nos modulados como um “quebra-cabeça” de alta qualidade. Eles são compostos por módulos com medidas e padrões de fábrica (largura, altura, profundidade). O projeto consiste em combinar essas peças pré-fabricadas para preencher o ambiente da melhor forma possível.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        <strong>Vantagens:</strong> Custo mais acessível e entrega rápida.
                        <br />
                        <strong>Desvantagens:</strong> Baixa flexibilidade. Dificilmente preenchem 100% do espaço, sendo comum a necessidade de “arremates” para disfarçar vãos e sobras.
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-center"
                    >
                        Móveis Planejados: O Equilíbrio entre Custo e Personalização
                    </motion.h2>
                    <motion.p variants={fadeUp}>
                        Aqui, o nível de customização sobe. Um projeto é criado especificamente para o seu ambiente. Apesar de também utilizar módulos de um catálogo de fábrica, a variedade de dimensões, acabamentos, cores e puxadores é imensamente maior.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        <strong>Vantagens:</strong> Excelente aproveitamento do espaço e um alto grau de personalização, resultando em um ambiente coeso e harmônico.
                        <br />
                        <strong>Desvantagens:</strong> Custo e prazo de entrega superiores aos dos modulados.
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-center"
                    >
                        Móveis Sob Medida: A Exclusividade da Marcenaria
                    </motion.h2>
                    <motion.p variants={fadeUp}>
                        Esta é a solução artesanal, geralmente executada por um marceneiro. Não há qualquer limitação de medidas, formatos, materiais ou design. Cada peça é criada do zero para atender perfeitamente às especificidades do espaço e aos desejos do cliente, por mais únicos que sejam.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        <strong>Vantagens:</strong> Liberdade criativa total e aproveitamento de 100% do espaço, ideal para cantos irregulares, pés-direitos altos ou projetos autorais.
                        <br />
                        <strong>Desvantagens:</strong> Custo mais elevado e maior tempo de produção.
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="text-2xl md:text-3xl font-semibold mt-10 mb-4 text-center"
                    >
                        O Ponto Comum: A Montagem de Móveis Profissional
                    </motion.h2>
                    <motion.p variants={fadeUp}>
                        Independentemente da sua escolha, o sucesso de todos esses projetos converge para um ponto nevrálgico: a qualidade da instalação. “De nada adianta um projeto sob medida perfeito se a execução da montagem for amadora”, afirma o designer de interiores Carlos Aguiar. A precisão do montador de móveis é o que garante o alinhamento das portas, a estabilidade das estruturas e o acabamento impecável que valoriza o investimento.
                    </motion.p>
                    <motion.p variants={fadeUp}>
                        A demanda por montadores qualificados é um reflexo direto do aquecimento deste mercado. A busca por um montador de móveis em SP que entenda as particularidades de cada tipo de móvel é intensa. Seja para a montagem de móveis na Zona Leste, para contratar montadores de móveis na Zona Oeste ou para um serviço de montagens de móveis na Zona Sul, a expertise é fundamental. O mesmo cenário se repete na procura por um montador de móveis na Zona Norte ou por profissionais em cidades adjacentes, como um montador de móveis em Guarulhos ou montadores de móveis em Santo André.
                    </motion.p>

                    <motion.p variants={fadeUp}>
                        Portanto, ao orçar seu projeto, lembre-se: a escolha entre modulado, planejado ou sob medida define o conceito. Mas é a excelência na montagem de móveis planejados e similares que materializa a qualidade e assegura sua satisfação por longos anos.
                    </motion.p>
                </motion.div>
            </div>
        </section>
    );
}
