"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import ThemeToggle from "@/components/ui/ThemeToggle";

export const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Projetos", href: "#projetos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Planos", href: "#planos" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const [ativo, setAtivo] = useState("#inicio");
  const [menuAberto, setMenuAberto] = useState(false);
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const secoes = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visivel = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visivel) setAtivo(`#${visivel.target.id}`);
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );

    secoes.forEach((secao) => observer.observe(secao));

    const onScroll = () => setRolou(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuAberto ? "hidden" : "";
    if (!menuAberto) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuAberto(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuAberto]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        rolou || menuAberto
          ? "border-line bg-paper/85 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-page items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          className="focus-ring flex items-center gap-2.5 rounded-lg font-display text-xl font-bold tracking-display text-ink"
        >
          <Image src="/logo.png" alt="" width={32} height={32} className="h-8 w-8" priority />
          Azuos Dev
        </a>

        <nav aria-label="Navegação principal" className="hidden lg:block">
          <ul className="flex items-center gap-1 text-[15px] font-medium">
            {navLinks.map((link) => {
              const isAtivo = ativo === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isAtivo ? "location" : undefined}
                    className={`focus-ring block rounded-xl px-3.5 py-2 transition-colors ${
                      isAtivo
                        ? "bg-surface-2 text-ink"
                        : "text-body hover:text-ink"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contato"
            className="focus-ring hidden items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-[15px] font-semibold text-paper transition-transform duration-300 ease-out-expo hover:-translate-y-0.5 sm:inline-flex"
          >
            <Icon name="mail" className="h-4 w-4" />
            Pedir orçamento
          </a>
          <button
            type="button"
            onClick={() => setMenuAberto((aberto) => !aberto)}
            aria-expanded={menuAberto}
            aria-controls="menu-mobile"
            aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-ink lg:hidden"
          >
            <Icon name={menuAberto ? "close" : "menu"} className="h-5 w-5" />
          </button>
        </div>
      </div>

      {menuAberto && (
        <nav
          id="menu-mobile"
          aria-label="Navegação principal"
          className="h-[calc(100dvh-72px)] overflow-y-auto border-t border-line bg-paper px-4 pb-10 pt-4 sm:px-6 lg:hidden"
        >
          <ul className="flex flex-col">
            {navLinks.map((link) => (
              <li key={link.href} className="border-b border-line">
                <a
                  href={link.href}
                  onClick={() => setMenuAberto(false)}
                  className="focus-ring flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-display text-ink"
                >
                  {link.label}
                  <Icon name="arrowRight" className="h-5 w-5 text-muted" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contato"
            onClick={() => setMenuAberto(false)}
            className="btn-signal focus-ring mt-8 flex items-center justify-center gap-2 rounded-2xl px-6 py-4 font-semibold"
          >
            Pedir orçamento
            <Icon name="arrowRight" className="h-4 w-4" />
          </a>
        </nav>
      )}
    </header>
  );
}
