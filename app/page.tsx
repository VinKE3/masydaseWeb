import { About } from "@/components/About";
import Benefits from "@/components/Benefits/Benefits";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { Contact } from "@/components/Contact";
import { DesarrolloWeb } from "@/components/DesarrlloWeb";
import { ServiciosDesarrolloWeb } from "@/components/DesarrlloWeb/ServiciosDesarrolloWeb";
import { FacturationSystem } from "@/components/FacturationSystem";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import Header2 from "@/components/Header/Header2";
import ParticleRing from "@/components/ParticleRing/ParticleRing";
import { Partners } from "@/components/Partners";
import { Plans } from "@/components/Plans";
import { Separator } from "@/components/Separator/separatos";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header2 />
      <ParticleRing />
      <About />
      <Separator />
      <FacturationSystem />
      <Benefits />
      <Plans />
      <Separator />
      <ChooseYourCards />
      <Services />
      <DesarrolloWeb />
      <ServiciosDesarrolloWeb />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
