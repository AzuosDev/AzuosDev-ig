import { NextResponse } from "next/server";
import { Resend } from "resend";
import { CONTACT_EMAIL } from "@/lib/site";

export async function POST(request: Request) {
  const { nome, contato, mensagem } = await request.json();

  if (
    typeof nome !== "string" ||
    typeof contato !== "string" ||
    typeof mensagem !== "string" ||
    !nome.trim() ||
    !contato.trim() ||
    !mensagem.trim()
  ) {
    return NextResponse.json(
      { error: "Preencha todos os campos." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY não configurada");
    return NextResponse.json(
      { error: "Envio indisponível no momento." },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);

  // Sandbox do Resend só entrega para o e-mail dono da conta.
  // TODO: trocar por um domínio verificado assim que houver um.
  const { error } = await resend.emails.send({
    from: "Azuos Dev <onboarding@resend.dev>",
    to: CONTACT_EMAIL,
    replyTo: contato,
    subject: `Novo contato pelo site — ${nome}`,
    text: `Nome: ${nome}\nE-mail/WhatsApp: ${contato}\n\nMensagem:\n${mensagem}`,
  });

  if (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Não foi possível enviar sua mensagem." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
