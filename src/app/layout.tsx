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
  title: "Keep Clin | Secretária humana 100% comissionada para clínicas",
  description:
    "A Keep Clin oferece uma secretária humana 100% comissionada, especialista em vendas e sucesso do cliente, com metas definidas em contrato, atendimento 24h e um aplicativo próprio para a sua clínica.",
  keywords: ["secretária para clínica", "atendimento clínica", "IA para clínicas", "CRM clínica", "Keep Clin"],
  openGraph: {
    title: "Keep Clin | Secretária humana 100% comissionada",
    description: "Secretária 100% comissionada, metas em contrato e aplicativo próprio para a sua clínica.",
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
