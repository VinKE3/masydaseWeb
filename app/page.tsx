import { About } from "@/components/About";
import { ChooseYourCards } from "@/components/ChooseYourCards";
import { CounterData } from "@/components/CounterData";
import { FirstBlock } from "@/components/FirstBlock";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Plans } from "@/components/Plans";

export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <CounterData />
      <About />
      <Plans />
      <ChooseYourCards />
      <Footer />
    </>
  );
}
