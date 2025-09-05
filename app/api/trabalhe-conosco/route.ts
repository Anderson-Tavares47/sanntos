import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { promises as fs } from "fs";
import path from "path";

export const runtime = "nodejs"; // garante ambiente Node.js

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const nome = formData.get("nome") as string;
    const email = formData.get("email") as string;
    const telefone = formData.get("telefone") as string;
    const mensagem = formData.get("mensagem") as string;
    const file = formData.get("curriculo") as File;

    // converte arquivo em buffer
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anderson2tavares@gmail.com",
        pass: "fkkcshaqikuewwbf", // senha de aplicativo
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: "rh@sanntos.com.br",
      subject: `👔 Novo currículo de ${nome}`,
      html: `
        <h3>Nova candidatura recebida</h3>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${telefone || "—"}</p>
        <p><b>Mensagem:</b><br/>${mensagem}</p>
      `,
      attachments: [
        {
          filename: file.name,
          content: buffer,
        },
      ],
    });

    return NextResponse.json({
      success: true,
      message: "Currículo enviado com sucesso!",
    });
  } catch (error) {
    console.error("Erro no envio:", error);
    return NextResponse.json(
      { success: false, message: "Erro ao enviar currículo." },
      { status: 500 }
    );
  }
}
