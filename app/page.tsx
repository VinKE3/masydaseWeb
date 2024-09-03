import { About } from "@/components/About";
import Benefits from "@/components/Benefits/Benefits";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { Contact } from "@/components/Contact";
import { CounterData } from "@/components/CounterData";
import { DesarrolloWeb } from "@/components/DesarrlloWeb";
import { ServiciosDesarrolloWeb } from "@/components/DesarrlloWeb/ServiciosDesarrolloWeb";
import { FacturationSystem } from "@/components/FacturationSystem";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import ParticleRing from "@/components/ParticleRing/ParticleRing";
import { Partners } from "@/components/Partners";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";
import { TextParallaxContentM } from "@/components/TextParallaxContent/TextParallaxContent";

export default function Home() {
  return (
    <>
      <Header />
      {/* <div className="pt-20 md:pt-0">
        <FirstBlock />
      </div> */}
      <div className="pt-20 md:pt-20">
        <ParticleRing />
      </div>
      <CounterData />
      <About />
      <FacturationSystem />
      <Benefits />
      <Plans />
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
