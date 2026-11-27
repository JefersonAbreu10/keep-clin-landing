import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";
import { asset } from "@/config/site";

const poppins = localFont({
  src: [
    { path: "../fonts/Poppins-Light.ttf", weight: "300", style: "normal" },
    { path: "../fonts/Poppins-Regular.ttf", weight: "400", style: "normal" },
    { path: "../fonts/Poppins-Medium.ttf", weight: "500", style: "normal" },
    { path: "../fonts/Poppins-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: "Keep Clin | Clínica AI-First com experiência humanizada, 100% comissionado",
  description:
    "A Keep Clin transforma clínicas em AI-First sem perder o toque humano: IA, um humano dedicado, aplicativo centralizado, mais vendas e retenção de pacientes. 100% comissionado e com garantia de resultado.",
  keywords: ["IA para clínicas", "clínica AI-First", "CRM clínica", "automação WhatsApp clínica", "retenção de pacientes", "Keep Clin"],
  openGraph: {
    title: "Keep Clin | Clínica AI-First, 100% comissionado",
    description: "IA com humano dedicado, aplicativo centralizado e garantia de resultado para a sua clínica.",
    images: [asset("/img/atendente.webp")],
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: asset("/icon.svg") },
};

export const viewport: Viewport = { themeColor: "#6F3E90", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={poppins.variable}>
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
