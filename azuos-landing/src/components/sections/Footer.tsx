const navLinks = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Sistemas", href: "#sistemas" },
  { label: "Planos", href: "#planos" },
  { label: "Quem somos", href: "#quem-somos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://instagram.com/",
    icon: (
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11Zm0 2a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.8 6a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/",
    icon: (
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-.98 1.83-2.02 3.77-2.02 4.03 0 4.78 2.55 4.78 5.87V21h-4v-5.78c0-1.38-.02-3.15-1.92-3.15-1.93 0-2.22 1.5-2.22 3.05V21h-4V9Z" />
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center sm:items-start sm:text-left">
        <div className="flex w-full flex-col items-center gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <span className="flex items-center gap-2 font-display text-lg font-semibold text-text-primary">
              <span
                aria-hidden="true"
                className="font-mono text-brand-end"
              >
                {"</>"}
              </span>
              Azuos Dev
            </span>
            <p className="max-w-xs text-sm text-text-secondary">
              Sistemas • Automações • Resultados
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-text-secondary sm:grid-cols-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col items-center gap-4 sm:items-start">
            <a
              href="mailto:contato@azuosdev.com"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              contato@azuosdev.com
            </a>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-text-secondary transition-colors hover:border-brand-end/50 hover:text-text-primary"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <p className="w-full border-t border-white/10 pt-6 text-xs text-text-secondary">
          © {new Date().getFullYear()} Azuos Dev. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
