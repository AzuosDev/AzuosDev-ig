import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Geist } from "next/font/google";
import "./globals.css";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "@/lib/site";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
});

const body = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Azuos Dev | Desenvolvimento de Sistemas e Automações",
  description: SITE_DESCRIPTION,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${SITE_NAME} — Sistemas sob medida e automação de processos`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Sistemas sob medida e automação de processos`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.png"],
  },
  verification: {
    google: "fG5QCaoInVjyY9J3wa_ltbAq3V2tFIKWxEr8qsuph9Q",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0B0714" },
    { media: "(prefers-color-scheme: light)", color: "#F8F6FC" },
  ],
};

// Aplica o tema salvo antes da primeira pintura para evitar flash. Escuro é o padrão.
const themeScript = `try{var t=localStorage.getItem("azuos-theme");document.documentElement.dataset.theme=t==="light"?"light":"dark"}catch(e){document.documentElement.dataset.theme="dark"}`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      data-theme="dark"
      suppressHydrationWarning
      className={`${display.variable} ${body.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      {/* Extensões do navegador (ex.: ColorZilla) injetam atributos no body antes da hidratação. */}
      <body className="bg-paper font-body text-ink antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
