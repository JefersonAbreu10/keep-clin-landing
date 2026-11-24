import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Services } from "@/components/Services";
import { AppShowcase } from "@/components/AppShowcase";
import { SalesMethod } from "@/components/SalesMethod";
import { ContractMetrics } from "@/components/ContractMetrics";
import { PatientLight } from "@/components/PatientLight";
import { Benefits } from "@/components/Benefits";
import { HowItWorks } from "@/components/HowItWorks";
import { Faq } from "@/components/Faq";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Services />
        <SalesMethod />
        <ContractMetrics />
        <PatientLight />
        <AppShowcase />
        <Benefits />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
