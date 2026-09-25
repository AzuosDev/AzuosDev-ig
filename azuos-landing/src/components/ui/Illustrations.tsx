import type { ReactNode } from "react";
import { Icon, type IconName } from "./Icon";

// Mini-interfaces desenhadas em código. Decorativas: o texto ao lado carrega o conteúdo.

export function Frame({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      aria-hidden
      className={`relative overflow-hidden rounded-[20px] border border-line bg-gradient-to-b from-scene/60 to-surface ${className}`}
    >
      <div className="dot-grid absolute inset-0 opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />
      <div className="relative h-full">{children}</div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
    </div>
  );
}

/* Planilha bagunçada vira um painel limpo. */
export function PlanilhaParaSistema() {
  return (
    <Frame className="h-56">
      <div className="absolute left-5 top-8 w-[46%] -rotate-3 rounded-xl border border-line bg-paper-2/90 p-3 shadow-[0_18px_40px_-20px_rgb(0_0_0/0.6)]">
        <div className="mb-2 flex items-center gap-1.5 text-[10px] font-medium text-muted">
          <Icon name="table" className="h-3 w-3" /> controle_final_v3.xlsx
        </div>
        <div className="grid grid-cols-3 gap-1">
          {Array.from({ length: 15 }).map((_, i) => (
            <span
              key={i}
              className={`h-3 rounded-[3px] ${i === 4 || i === 10 ? "bg-red-400/50" : "bg-line/80"}`}
            />
          ))}
        </div>
      </div>
      <span className="absolute left-[47%] top-[42%] flex h-8 w-8 items-center justify-center rounded-full border border-accent/50 bg-surface text-accent shadow-[0_0_0_6px_rgb(var(--accent)/0.08)]">
        <Icon name="arrowRight" className="h-4 w-4" />
      </span>
      <div className="absolute right-5 top-5 w-[42%] rotate-2 rounded-xl border border-accent/40 bg-surface p-3 shadow-[0_24px_50px_-24px_rgb(var(--signal-2)/0.6)]">
        <div className="mb-3 flex items-center justify-between">
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
            <span className="h-1.5 w-1.5 rounded-full bg-line" />
          </span>
          <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-semibold text-accent">
            Seu sistema
          </span>
        </div>
        <p className="text-[11px] font-semibold text-ink">Pedidos de hoje</p>
        <div className="mt-2 grid grid-cols-2 gap-1.5">
          <span className="rounded-md bg-accent/20 px-2 py-1.5 text-[9px] font-medium text-ink">
            Novos
          </span>
          <span className="rounded-md bg-line/70 px-2 py-1.5 text-[9px] text-body">Entregues</span>
          <span className="rounded-md bg-line/70 px-2 py-1.5 text-[9px] text-body">Estoque</span>
          <span className="rounded-md bg-line/70 px-2 py-1.5 text-[9px] text-body">Clientes</span>
        </div>
      </div>
    </Frame>
  );
}

function No({ icon, label, ativo = false }: { icon: IconName; label: string; ativo?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${
          ativo
            ? "border-accent/60 bg-accent/15 text-accent shadow-[0_12px_30px_-10px_rgb(var(--signal-2)/0.7)]"
            : "border-line bg-surface text-body"
        }`}
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span className="text-[10px] font-medium text-muted">{label}</span>
    </div>
  );
}

/* Fluxo automático: entrada → rotina → saída. */
export function FluxoAutomatico() {
  return (
    <Frame className="h-56">
      <div className="flex h-full items-center justify-center gap-2 px-4 pb-6">
        <No icon="mail" label="Pedido chega" />
        <span className="mb-6 h-px w-8 bg-gradient-to-r from-line to-accent/70 sm:w-10" />
        <No icon="refresh" label="Rotina roda" ativo />
        <span className="mb-6 h-px w-8 bg-gradient-to-r from-accent/70 to-line sm:w-10" />
        <No icon="check" label="Tudo registrado" />
      </div>
      <span className="absolute right-5 top-5 rounded-full border border-line bg-surface px-2.5 py-1 text-[10px] font-medium text-body shadow-sm">
        sem ninguém precisar lembrar
      </span>
    </Frame>
  );
}

/* Painel com indicadores. Os números são ilustrativos. */
export function PainelIndicadores() {
  const barras = [38, 52, 44, 66, 58, 80, 72];
  return (
    <Frame className="h-56">
      <div className="absolute inset-x-5 top-5 rounded-xl border border-line bg-surface p-4 shadow-[0_24px_50px_-28px_rgb(0_0_0/0.6)]">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-medium text-muted">Visão da operação</span>
          <span className="flex items-center gap-1 rounded-full bg-accent/15 px-2 py-0.5 text-[9px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" /> ao vivo
          </span>
        </div>
        <div className="mt-3 flex h-24 items-end gap-2">
          {barras.map((altura, i) => (
            <span
              key={i}
              className={`flex-1 rounded-t-md ${i === 5 ? "bg-accent" : "bg-accent/25"}`}
              style={{ height: `${altura}%` }}
            />
          ))}
        </div>
      </div>
    </Frame>
  );
}
