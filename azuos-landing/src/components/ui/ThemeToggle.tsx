"use client";

import { useEffect, useState } from "react";
import { Icon } from "./Icon";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggle() {
    const next: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("azuos-theme", next);
    } catch {
      // Sem armazenamento disponível: o tema vale só para esta visita.
    }
    setTheme(next);
  }

  const label = theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="focus-ring flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-body transition-colors hover:border-accent/50 hover:text-ink"
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} className="h-[18px] w-[18px]" />
    </button>
  );
}
