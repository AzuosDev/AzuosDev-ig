"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { CONTACT_EMAIL } from "@/lib/site";
import { getWhatsAppLink } from "@/lib/whatsapp";
import { Icon, InstagramIcon, WhatsAppIcon } from "@/components/ui/Icon";
import { navLinks } from "./Header";

const redes = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/azuos.dev/",
    icon: <InstagramIcon className="h-4 w-4" />,
  },
  {
    label: "WhatsApp",
    href: getWhatsAppLink("Olá! Quero pedir um orçamento com a Azuos Dev."),
    icon: <WhatsAppIcon className="h-4 w-4" />,
  },
  {
    label: "E-mail",
    href: `mailto:${CONTACT_EMAIL}`,
    icon: <Icon name="mail" className="h-4 w-4" />,
  },
];

export default function Footer() {
  const marcaRef = useRef<HTMLDivElement>(null);
  // Visível por padrão; só esconde para animar quando o JS já está rodando.
  const [estado, setEstado] = useState<"estatico" | "antes" | "visivel">("estatico");

  useEffect(() => {
    const el = marcaRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    setEstado("antes");
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEstado("visivel");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <footer className="px-2 pb-2 sm:px-4 sm:pb-4 lg:px-5">
      <div className="stage relative mx-auto max-w-[92rem] overflow-clip rounded-[32px] border border-line">
        <div className="dot-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:linear-gradient(to_bottom,transparent,black_70%)]" />

        <div className="relative grid gap-14 px-6 pt-16 sm:px-10 sm:pt-20 lg:grid-cols-[1.3fr_0.7fr_0.7fr] lg:px-14 xl:px-20">
          <div>
            <p className="heading text-[2.4rem] sm:text-5xl">
              Vamos tirar seu projeto do papel.
              <span className="block text-accent">Começa com um oi.</span>
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="focus-ring group mt-8 inline-flex items-center gap-3 rounded font-display text-xl font-semibold tracking-[-0.02em] text-ink sm:text-2xl"
            >
              {CONTACT_EMAIL}
              <Icon
                name="arrowUpRight"
                className="h-5 w-5 text-accent transition-transform duration-300 ease-out-expo group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contato"
                className="btn-signal focus-ring flex items-center gap-2 rounded-2xl px-6 py-3.5 text-[15px] font-semibold transition-transform duration-300 ease-out-expo hover:-translate-y-0.5"
              >
                Pedir orçamento
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
              <a
                href={getWhatsAppLink("Olá! Quero pedir um orçamento com a Azuos Dev.")}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring flex items-center gap-2 rounded-2xl border border-line bg-surface px-6 py-3.5 text-[15px] font-semibold text-ink transition-colors hover:border-accent/50"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <p className="text-sm font-semibold text-muted">Navegar</p>
            <ul className="mt-5 space-y-3.5 text-[15px]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="focus-ring rounded text-body transition-colors hover:text-ink">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-muted">Onde nos achar</p>
            <ul className="mt-5 space-y-3">
              {redes.map((rede) => (
                <li key={rede.label}>
                  <a
                    href={rede.href}
                    target={rede.href.startsWith("http") ? "_blank" : undefined}
                    rel={rede.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="focus-ring group flex items-center gap-3 rounded text-[15px] text-body transition-colors hover:text-ink"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface transition-colors group-hover:border-accent/50 group-hover:text-accent">
                      {rede.icon}
                    </span>
                    {rede.label}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 flex items-center gap-2 text-sm text-muted">
              <Image src="/logo.png" alt="" width={20} height={20} className="h-5 w-5" />
              Sistemas • Automações • Resultados
            </p>
          </div>
        </div>

        <div
          ref={marcaRef}
          aria-hidden
          className={`relative mt-10 select-none overflow-hidden px-4 transition-[transform,opacity] duration-[1200ms] ease-out-expo ${
            estado === "antes" ? "translate-y-1/3 opacity-0" : "translate-y-0 opacity-100"
          }`}
        >
          <p className="text-center font-display font-bold leading-[0.78] tracking-display text-accent [font-size:clamp(5rem,24vw,22rem)] [mask-image:linear-gradient(to_bottom,black_35%,transparent_105%)]">
            Azuos<span className="text-brand-start">.</span>
          </p>
        </div>

        <div className="relative flex flex-col items-center justify-between gap-2 border-t border-line px-6 py-6 text-sm text-muted sm:flex-row sm:px-10 lg:px-14 xl:px-20">
          <p>© {new Date().getFullYear()} Azuos Dev. Todos os direitos reservados.</p>
          <p>Ceará · atendimento em todo o Brasil</p>
        </div>
      </div>
    </footer>
  );
}
