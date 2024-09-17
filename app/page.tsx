import { About } from "@/components/About";
import Benefits from "@/components/Benefits/Benefits";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { Contact } from "@/components/Contact";
import { DesarrolloWeb } from "@/components/DesarrlloWeb";
import { ServiciosDesarrolloWeb } from "@/components/DesarrlloWeb/ServiciosDesarrolloWeb";
import { FacturationSystem } from "@/components/FacturationSystem";
import { Footer } from "@/components/Footer";
import ParticleRing from "@/components/ParticleRing/ParticleRing";
import { Partners } from "@/components/Partners";
import { Plans } from "@/components/Plans";
import { Separator } from "@/components/Separator/separatos";
import { Services } from "@/components/Services";
import MainHeader from "@/components/Header/MainHeader";

export default function Home() {
  return (
    <>
      <div className="py-20">
        <ParticleRing />
      </div>
      <About />
      {/* <Separator /> */}
      <FacturationSystem />
      <Benefits />
      <Plans />
      {/* <Separator /> */}
      <ChooseYourCards />
      <Services />
      <DesarrolloWeb />
      <ServiciosDesarrolloWeb />
      <Partners />
      <Contact />
    </>
  );
}
