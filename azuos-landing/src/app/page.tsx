import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Apresentacao from "@/components/sections/Apresentacao";
import Sistemas from "@/components/sections/Sistemas";
import Servicos from "@/components/sections/Servicos";
import Processo from "@/components/sections/Processo";
import Planos from "@/components/sections/Planos";
import QuemSomos from "@/components/sections/QuemSomos";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Apresentacao />
        <Sistemas />
        <Servicos />
        <Processo />
        <Planos />
        <QuemSomos />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
