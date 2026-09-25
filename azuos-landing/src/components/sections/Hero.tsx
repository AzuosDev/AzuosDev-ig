import ContactForm from "@/components/ui/ContactForm";
import { Icon, type IconName } from "@/components/ui/Icon";

const destaques: { titulo: string; href: string; destino: string; icon: IconName }[] = [
  { titulo: "Sistemas feitos para o seu processo", href: "#servicos", destino: "Ver serviços", icon: "code" },
  { titulo: "Automação de tarefas repetitivas", href: "#servicos", destino: "Ver automações", icon: "refresh" },
  { titulo: "Orçamento com escopo, prazo e valor", href: "#processo", destino: "Ver processo", icon: "receipt" },
  { titulo: "Pagamento dividido por etapa", href: "#faq", destino: "Ver pagamento", icon: "wallet" },
  { titulo: "Garantia com correções incluídas", href: "#processo", destino: "Ver garantia", icon: "shield" },
  { titulo: "4 sistemas reais em produção", href: "#projetos", destino: "Ver projetos", icon: "layers" },
];

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-titulo" className="px-2 pb-8 pt-2 sm:px-4 lg:px-5">
      <div className="stage relative mx-auto max-w-[92rem] overflow-hidden rounded-[32px] border border-line">
        <div
          aria-hidden
          className="dot-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(90%_80%_at_75%_40%,black_20%,transparent_85%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -top-10 h-[130%] w-[42%] -skew-x-[18deg] bg-gradient-to-r from-transparent via-ink/[0.06] to-transparent"
        />

        <div className="relative grid gap-10 px-5 py-12 sm:px-10 sm:py-16 lg:grid-cols-[1.08fr_0.92fr] lg:grid-rows-[auto_1fr] lg:gap-x-14 lg:gap-y-10 lg:px-14 lg:py-20 xl:px-20">
          <div className="flex flex-col">
            <h1
              id="hero-titulo"
              className="heading text-[2.5rem] sm:text-[3.4rem] xl:text-[3.9rem]"
            >
              <span className="block motion-safe:animate-rise">
                Sistemas sob medida que automatizam sua operação
              </span>
              <span className="block text-accent motion-safe:animate-rise motion-safe:[animation-delay:120ms]">
                e entregam resultado mensurável.
              </span>
            </h1>

            <p className="mt-7 max-w-[54ch] text-lg leading-relaxed text-body motion-safe:animate-rise motion-safe:[animation-delay:220ms]">
              Da automação de processos repetitivos a sistemas completos sob
              medida, a Azuos Dev cuida da tecnologia para você focar no que
              gera receita.
            </p>
          </div>

          <div className="motion-safe:animate-rise motion-safe:[animation-delay:180ms] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:pt-2">
            <ContactForm />
          </div>

          <div className="flex flex-col lg:col-start-1 lg:row-start-2">
            <ul className="grid gap-3 sm:grid-cols-2 motion-safe:animate-rise motion-safe:[animation-delay:320ms]">
              {destaques.map((item) => (
                <li key={item.titulo}>
                  <a
                    href={item.href}
                    className="focus-ring group flex h-full items-center gap-3.5 rounded-2xl border border-line bg-paper/50 p-3 pr-4 transition-colors duration-200 hover:border-accent/40 hover:bg-surface"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-line bg-surface-2 text-accent">
                      <Icon name={item.icon} className="h-5 w-5" />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[15px] font-semibold leading-snug text-ink">
                        {item.titulo}
                      </span>
                      <span className="mt-0.5 flex items-center gap-1 text-[13px] text-muted transition-colors group-hover:text-accent">
                        {item.destino}
                        <Icon name="arrowRight" className="h-3 w-3" />
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
              <span className="flex items-center gap-2 rounded-full border border-line bg-paper/60 px-3.5 py-2 text-body">
                <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgb(var(--accent)/0.2)]" />
                Ceará · atendimento em todo o Brasil
              </span>
              <a
                href="#projetos"
                className="focus-ring flex items-center gap-2 rounded font-semibold text-ink hover:text-accent"
              >
                Ver projetos entregues
                <Icon name="arrowRight" className="h-4 w-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
