import type { Metadata } from "next";
import { LinksPage } from "@/components/LinksPage";

export const metadata: Metadata = {
  title: "Keep Clin | Links",
  description: "Portfólio, WhatsApp e teste dos produtos da Keep Clin.",
};

export default function Page() {
  return <LinksPage />;
}
