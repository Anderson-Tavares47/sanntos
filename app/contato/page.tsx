"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FundoContato from "@/assets/img/fundoContato.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: "spring" as const },
  },
};

export default function ContatoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        alert("Mensagem enviada com sucesso 🚀");
        setForm({ nome: "", email: "", telefone: "", mensagem: "" });
      } else {
        alert("❌ Erro ao enviar: " + data.message);
      }
    } catch (err) {
      alert("❌ Falha ao conectar com o servidor.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative flex items-center justify-center min-h-screen px-6 pt-28 sm:pt-32 md:pt-36 pb-16">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FundoContato.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-3xl text-center text-white">
        {/* Título */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Contato
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-5xl mx-auto mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Vamos dar vida ao seu projeto?
          <br />
          Sua jornada para um ambiente que reflete sua identidade e bem-estar
          começa aqui. Preencha o formulário abaixo e, em breve, um de nossos
          consultores entrará em contato.
        </motion.p>

        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit}
          className="grid gap-6 bg-[#a8a8af61] text-dark p-8 rounded-xl shadow-lg"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            value={form.nome}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 w-full"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 w-full"
            required
          />
          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={form.telefone}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 w-full"
          />
          <textarea
            name="mensagem"
            placeholder="Mensagem"
            value={form.mensagem}
            onChange={handleChange}
            className="p-3 rounded-lg border border-gray-300 h-32 w-full"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-dark font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar"}
          </button>
        </motion.form>

        {/* Frase abaixo do card */}
        <motion.p
          className="mt-6 text-base md:text-lg text-gray-200 text-center"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Prefere falar direto com a gente? <br />
          Nos chame no{" "}
          <a
            href="https://wa.me/5508002000091"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary font-semibold hover:underline"
          >
            WhatsApp
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
