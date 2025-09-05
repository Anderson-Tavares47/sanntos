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

export default function TrabalheConoscoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [curriculo, setCurriculo] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files[0]) {
      setCurriculo(e.target.files[0]);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!curriculo) {
      alert("Por favor, anexe seu currículo em PDF.");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("nome", form.nome);
      formData.append("email", form.email);
      formData.append("telefone", form.telefone);
      formData.append("mensagem", form.mensagem);
      formData.append("curriculo", curriculo);

      const res = await fetch("/api/trabalhe-conosco", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        alert("Currículo enviado com sucesso 🚀");
        setForm({ nome: "", email: "", telefone: "", mensagem: "" });
        setCurriculo(null);
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
    <section className="relative flex items-center justify-center min-h-screen py-16 px-6">
      {/* Imagem de fundo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${FundoContato.src})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Conteúdo */}
      <div className="relative z-10 w-full max-w-3xl text-center text-white">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Trabalhe Conosco
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-5xl mx-auto mb-10"
          variants={fadeUp}
          initial="hidden"
          animate="visible"
        >
          Quer fazer parte da nossa equipe? <br/> Preencha o formulário abaixo e
          anexe seu currículo em PDF.
        </motion.p>

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

          {/* Upload PDF */}
          <input
            type="file"
            accept="application/pdf"
            onChange={handleFileChange}
            className="p-3 rounded-lg border border-gray-300 w-full bg-white text-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-dark font-semibold py-3 rounded-lg hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar Currículo"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
