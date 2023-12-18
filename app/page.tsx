import { About } from "@/components/About";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { Contact } from "@/components/Contact";
import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Partners } from "@/components/Partners";
import { Plans } from "@/components/Plans";
import { Services } from "@/components/Services";

export default function Home() {
  return (
    <>
      <Header />
      <div className="pt-20 md:pt-0">
        <FirstBlock />
      </div>
      <CounterData />
      <About />
      <Plans />
      <ChooseYourCards />
      <Services />
      <Partners />
      <Contact />
      <Footer />
    </>
  );
}
