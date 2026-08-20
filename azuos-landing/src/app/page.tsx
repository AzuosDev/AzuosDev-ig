import Hero from "@/components/sections/Hero";
import Apresentacao from "@/components/sections/Apresentacao";
import Servicos from "@/components/sections/Servicos";
import Diferenciais from "@/components/sections/Diferenciais";
import Sistemas from "@/components/sections/Sistemas";
import Planos from "@/components/sections/Planos";
import QuemSomos from "@/components/sections/QuemSomos";
import FAQ from "@/components/sections/FAQ";
import CTAFinal from "@/components/sections/CTAFinal";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Apresentacao />
      <Servicos />
      <Diferenciais />
      <Sistemas />
      <Planos />
      <QuemSomos />
      <FAQ />
      <CTAFinal />
      <Footer />
    </main>
  );
}
