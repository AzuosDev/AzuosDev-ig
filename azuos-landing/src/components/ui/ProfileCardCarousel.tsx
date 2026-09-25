"use client";

import { useEffect, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { GitHubIcon, Icon, InstagramIcon } from "@/components/ui/Icon";

export type Perfil = {
  nome: string;
  cargo: string;
  foto: string;
  /** object-position da foto no quadro 3:4; útil para fotos em 9:16. */
  foco?: string;
  bio: string;
  github?: string;
  instagram?: string;
};

type Props = {
  perfis: Perfil[];
  className?: string;
};

const fade = {
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
} as const;

// Tempo que cada fundador fica em cena antes do carrossel avançar sozinho.
const INTERVALO_MS = 3500;

export default function ProfileCardCarousel({ perfis, className = "" }: Props) {
  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const total = perfis.length;
  const atual = perfis[indice];

  const proximo = () => setIndice((i) => (i + 1) % total);
  const anterior = () => setIndice((i) => (i - 1 + total) % total);

  // Avanço automático: pausa no hover, no foco e para quem pediu menos movimento.
  useEffect(() => {
    if (pausado || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = window.setTimeout(() => setIndice((i) => (i + 1) % total), INTERVALO_MS);
    return () => window.clearTimeout(id);
  }, [indice, pausado, total]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "ArrowRight") proximo();
    if (event.key === "ArrowLeft") anterior();
  };

  const redes = [
    { href: atual.github, label: "GitHub", Icone: GitHubIcon },
    { href: atual.instagram, label: "Instagram", Icone: InstagramIcon },
  ].filter((rede) => rede.href);

  return (
    <MotionConfig reducedMotion="user">
      <div
        role="region"
        aria-roledescription="carrossel"
        aria-label="Fundadores da Azuos Dev"
        onKeyDown={onKeyDown}
        onMouseEnter={() => setPausado(true)}
        onMouseLeave={() => setPausado(false)}
        onFocus={() => setPausado(true)}
        onBlur={() => setPausado(false)}
        className={`w-full max-w-3xl ${className}`}
      >
        <div className="relative flex flex-col items-center md:flex-row">
          {/* Foto */}
          <div className="relative aspect-[3/4] w-full max-w-[220px] shrink-0 overflow-hidden rounded-[22px] bg-paper-2 md:w-[260px] md:max-w-none lg:w-[210px] xl:w-[250px]">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={atual.foto} {...fade} className="absolute inset-0">
                <Image
                  src={atual.foto}
                  alt={`Foto de ${atual.nome}`}
                  fill
                  sizes="(min-width: 1280px) 250px, (min-width: 1024px) 210px, (min-width: 768px) 260px, 220px"
                  className="object-cover"
                  style={{ objectPosition: atual.foco ?? "50% 50%" }}
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cartão */}
          <div
            aria-live={pausado ? "polite" : "off"}
            className="z-10 -mt-8 w-[calc(100%-2rem)] max-w-lg rounded-[22px] border border-line bg-surface p-5 shadow-[0_24px_60px_-40px_rgb(0_0_0/0.6)] sm:p-7 md:-ml-14 md:mt-0 lg:-ml-10 xl:-ml-14 md:w-auto md:flex-1"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={atual.nome} {...fade}>
                <h3 className="heading text-[1.5rem] sm:text-[1.85rem]">{atual.nome}</h3>
                <p className="mt-2 text-xs font-semibold text-accent sm:text-sm">{atual.cargo}</p>
                <p className="mt-4 text-sm leading-relaxed text-body sm:text-base">{atual.bio}</p>

                {redes.length > 0 && (
                  <div className="mt-5 flex gap-2.5">
                    {redes.map(({ href, label, Icone }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} de ${atual.nome}`}
                        className="focus-ring flex h-9 w-9 items-center justify-center rounded-full border border-line bg-surface-2 text-body transition-colors hover:border-accent/50 hover:text-ink"
                      >
                        <Icone className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navegação */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={anterior}
            aria-label="Fundador anterior"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-body transition-colors hover:border-accent/50 hover:text-ink"
          >
            <Icon name="chevronLeft" />
          </button>

          <div className="flex">
            {perfis.map((perfil, i) => (
              <button
                key={perfil.nome}
                type="button"
                onClick={() => setIndice(i)}
                aria-label={`Ver ${perfil.nome}`}
                aria-current={i === indice}
                className="focus-ring group flex h-7 w-7 items-center justify-center rounded-full"
              >
                <span
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === indice ? "w-5 bg-accent" : "w-2 bg-line group-hover:bg-muted"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={proximo}
            aria-label="Próximo fundador"
            className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-body transition-colors hover:border-accent/50 hover:text-ink"
          >
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}
