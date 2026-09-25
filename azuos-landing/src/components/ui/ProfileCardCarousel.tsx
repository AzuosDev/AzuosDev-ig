"use client";

import { useState, type KeyboardEvent } from "react";
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

export default function ProfileCardCarousel({ perfis, className = "" }: Props) {
  const [indice, setIndice] = useState(0);
  const total = perfis.length;
  const atual = perfis[indice];

  const proximo = () => setIndice((i) => (i + 1) % total);
  const anterior = () => setIndice((i) => (i - 1 + total) % total);

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
        className={`w-full max-w-5xl ${className}`}
      >
        <div className="relative flex flex-col items-center md:flex-row">
          {/* Foto */}
          <div className="relative aspect-[3/4] w-full max-w-xs shrink-0 overflow-hidden rounded-[28px] bg-paper-2 md:w-[390px] md:max-w-none">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={atual.foto} {...fade} className="absolute inset-0">
                <Image
                  src={atual.foto}
                  alt={`Foto de ${atual.nome}`}
                  fill
                  sizes="(min-width: 768px) 390px, 320px"
                  className="object-cover"
                  style={{ objectPosition: atual.foco ?? "50% 50%" }}
                  draggable={false}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Cartão */}
          <div
            aria-live="polite"
            className="z-10 -mt-12 w-[calc(100%-2rem)] max-w-2xl rounded-[28px] border border-line bg-surface p-6 shadow-[0_30px_80px_-40px_rgb(0_0_0/0.6)] sm:p-10 md:-ml-20 md:mt-0 md:w-auto md:flex-1"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={atual.nome} {...fade}>
                <h3 className="heading text-[2rem] sm:text-[2.6rem]">{atual.nome}</h3>
                <p className="mt-3 text-sm font-semibold text-accent sm:text-base">{atual.cargo}</p>
                <p className="mt-6 text-base leading-relaxed text-body sm:text-lg">{atual.bio}</p>

                {redes.length > 0 && (
                  <div className="mt-7 flex gap-3">
                    {redes.map(({ href, label, Icone }) => (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${label} de ${atual.nome}`}
                        className="focus-ring flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface-2 text-body transition-colors hover:border-accent/50 hover:text-ink"
                      >
                        <Icone className="h-[18px] w-[18px]" />
                      </a>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Navegação */}
        <div className="mt-10 flex items-center justify-center gap-5">
          <button
            type="button"
            onClick={anterior}
            aria-label="Fundador anterior"
            className="focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-body transition-colors hover:border-accent/50 hover:text-ink"
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
                className="focus-ring group flex h-8 w-8 items-center justify-center rounded-full"
              >
                <span
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === indice ? "w-6 bg-accent" : "w-2.5 bg-line group-hover:bg-muted"
                  }`}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={proximo}
            aria-label="Próximo fundador"
            className="focus-ring flex h-12 w-12 items-center justify-center rounded-full border border-line bg-surface text-body transition-colors hover:border-accent/50 hover:text-ink"
          >
            <Icon name="chevronRight" />
          </button>
        </div>
      </div>
    </MotionConfig>
  );
}
