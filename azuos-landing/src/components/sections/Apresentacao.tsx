const indicadores = [
  { valor: "4", label: "Sistemas em produção" },
  { valor: "6+", label: "Tecnologias no stack" },
];

export default function Apresentacao() {
  return (
    <section id="sobre" className="px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-display text-3xl font-semibold text-text-primary sm:text-4xl">
          Quem é a Azuos Dev
        </h2>
        <p className="mt-5 text-balance text-base text-text-secondary sm:text-lg">
          Somos uma dev especializada em transformar processos manuais em
          sistemas e automações sob medida. Cada projeto nasce do fluxo real
          da sua empresa — não de um template genérico — para resolver o
          problema específico que está travando o crescimento. O resultado é
          tempo economizado, menos erro operacional e decisões baseadas em
          dado confiável.
        </p>
      </div>

      <div className="mx-auto mt-12 grid max-w-md grid-cols-2 gap-4 sm:max-w-lg sm:gap-6">
        {indicadores.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 bg-surface px-6 py-6 text-center"
          >
            <p className="bg-brand-gradient bg-clip-text font-display text-3xl font-semibold text-transparent sm:text-4xl">
              {item.valor}
            </p>
            <p className="mt-2 text-sm text-text-secondary">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
