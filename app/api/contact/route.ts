import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { nome, email, telefone, mensagem } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "anderson2tavares@gmail.com",
        pass: "fkkcshaqikuewwbf", // senha de aplicativo
      },
    });

    await transporter.sendMail({
      from: "anderson2tavares@gmail.com",
      to: "contato@sanntos.com.br",
      subject: `📩 Novo contato de ${nome}`,
      html: `
        <h3>Nova mensagem recebida</h3>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${telefone || "—"}</p>
        <p><b>Mensagem:</b><br/>${mensagem}</p>
      `,
    });

    return NextResponse.json({ success: true, message: "Email enviado com sucesso!" });
  } catch (error) {
    console.error("Erro no envio:", error);
    return NextResponse.json({ success: false, message: "Erro ao enviar e-mail." }, { status: 500 });
  }
}
