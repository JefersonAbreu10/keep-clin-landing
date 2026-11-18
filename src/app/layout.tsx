import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import StyledComponentsRegistry from "@/lib/registry";

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
  title: "Keep Clin | Atendimento humano potencializado com IA para clínicas",
  description:
    "A Keep Clin oferece uma atendente humana da nossa equipe, que trabalha com inteligência artificial, automação e um aplicativo próprio para a sua clínica. Por menos da metade do custo de uma secretária comum.",
  keywords: ["secretária para clínica", "atendimento clínica", "IA para clínicas", "CRM clínica", "Keep Clin"],
  openGraph: {
    title: "Keep Clin | Atendimento humano potencializado com IA",
    description: "Atendente humana + inteligência artificial + aplicativo próprio para a sua clínica.",
    images: ["/img/atendente.webp"],
    locale: "pt_BR",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
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
