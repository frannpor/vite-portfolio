import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Francisco Porciel - Full Stack Developer",
  description:
    "Portfolio bilingue de Francisco Porciel: Full Stack Developer enfocado en producto, backend, contratos tipados, automatizacion y sistemas con reglas reales.",
  authors: [{ name: "Francisco Porciel" }],
  icons: {
    icon: "/brand/franpor-color.ico",
    shortcut: "/brand/franpor-color.ico",
  },
  openGraph: {
    title: "Francisco Porciel - Full Stack Developer",
    description:
      "Portfolio de Francisco Porciel: TypeScript, React, Next.js, NestJS, PostgreSQL, automatizacion y criterio de producto.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
