import Link from "next/link";
import { getWhatsAppLink } from "@/lib/whatsapp";

export default function Hero() {
  const whatsappHref = getWhatsAppLink(
    "Olá! Quero pedir um orçamento com a Azuos Dev.",
  );

  return (
    <section className="relative overflow-hidden px-6 pt-28 pb-20 sm:pt-36 sm:pb-28 lg:pt-44 lg:pb-36">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand-gradient opacity-20 blur-3xl sm:h-[560px] sm:w-[560px]"
      />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <span className="mb-6 rounded-full border border-white/10 bg-surface px-4 py-1.5 font-mono text-xs tracking-wide text-text-secondary opacity-0 motion-safe:animate-fade-up motion-reduce:opacity-100 [animation-delay:0ms]">
          {"</"}Sistemas • Automações • Resultados{">"}
        </span>

        <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text-primary opacity-0 motion-safe:animate-fade-up motion-reduce:opacity-100 [animation-delay:100ms] sm:text-5xl md:text-6xl">
          Sistemas sob medida que automatizam sua operação e entregam
          resultado mensurável
        </h1>

        <p className="mt-6 max-w-xl text-balance text-base text-text-secondary opacity-0 motion-safe:animate-fade-up motion-reduce:opacity-100 [animation-delay:200ms] sm:text-lg">
          Da automação de processos repetitivos a sistemas completos sob
          medida, a Azuos Dev cuida da tecnologia para você focar no que gera
          receita.
        </p>

        <div className="mt-10 flex w-full flex-col items-center gap-4 opacity-0 motion-safe:animate-fade-up motion-reduce:opacity-100 [animation-delay:300ms] sm:w-auto sm:flex-row">
          <Link
            href="#contato"
            className="w-full rounded-full bg-brand-gradient px-7 py-3.5 text-center font-medium text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-transform hover:scale-[1.02] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-end motion-reduce:transition-none sm:w-auto"
          >
            Peça um orçamento
          </Link>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-2 rounded-full border border-white/15 px-7 py-3.5 font-medium text-text-primary transition-colors hover:border-brand-end/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-end sm:w-auto"
          >
            <svg
              aria-hidden
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.77.46 3.45 1.27 4.9L2 22l5.25-1.38a9.96 9.96 0 0 0 4.79 1.22h.01c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.15h-.01a8.2 8.2 0 0 1-4.17-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.19 8.19 0 0 1-1.26-4.36c0-4.52 3.68-8.2 8.22-8.2 2.2 0 4.26.86 5.82 2.41a8.14 8.14 0 0 1 2.4 5.8c0 4.52-3.68 8.19-8.22 8.19Zm4.5-6.14c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.79.96-.14.16-.29.18-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.42-.14 0-.31-.02-.47-.02s-.43.06-.66.31c-.23.25-.86.85-.86 2.06s.89 2.39 1.01 2.56c.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29Z" />
            </svg>
            Fale no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
