import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("x-forwarded-host") ?? requestHeaders.get("host") ?? "localhost:3000";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.includes("localhost") ? "http" : "https");
  const origin = `${protocol}://${host}`;

  return {
    metadataBase: new URL(origin),
    title: "Amore Benefícios — Saúde, bem-estar e proteção",
    description: "Benefícios acessíveis para empresas, pessoas e famílias viverem com mais saúde, bem-estar e proteção.",
    icons: { icon: "/amore-logo.svg", shortcut: "/amore-logo.svg" },
    openGraph: {
      title: "Amore Benefícios — Cuidado em cada fase da vida",
      description: "Saúde, bem-estar e proteção para empresas, pessoas e famílias.",
      images: [{ url: `${origin}/og.png`, width: 1200, height: 630, alt: "Amore Benefícios" }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Amore Benefícios — Cuidado em cada fase da vida",
      description: "Saúde, bem-estar e proteção para empresas, pessoas e famílias.",
      images: [`${origin}/og.png`],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
