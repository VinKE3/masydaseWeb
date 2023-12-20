import { AboutData } from "./About.types";
import { Star, ShieldCheck, Sparkle } from "lucide-react";

export const dataAbout: AboutData = [
  {
    id: 1,
    icon: Star,
    title: "Misión",
    description:
      "Es adaptarnos a las necesidades de los sistemas de gestión corporativa, ofreciendo soluciones creativas e innovadoras, a través de sistemas flexibles y un soporte técnico integrado a la medida de tu negocio.",
  },
  {
    id: 2,
    icon: Sparkle,
    title: "Vición",
    description:
      "Es ser líderes del mercado informático y patentar la gran mayoría de sistemas adaptables a todos los niveles y giros de negocio del Perú, a fin de fortalecer la seguridad de todas las empresas que nos dan su confianza.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Valores",
    description: "Responsabilidad, honestidad, respeto..",
  },
];
