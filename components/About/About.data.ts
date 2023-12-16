import { AboutData } from "./About.types";
import { Star, ShieldCheck, Sparkle } from "lucide-react";

export const dataAbout: AboutData = [
  {
    id: 1,
    icon: Star,
    title: "Calidad",
    description:
      "Brindamos servicios de calidad, que se adaptan a las necesidades de nuestros clientes",
  },
  {
    id: 2,
    icon: Sparkle,
    title: "Creatividad",
    description:
      "Contamos con un equipo de profesionales que se encargan de brindarle las mejores soluciones para su negocio.",
  },
  {
    id: 3,
    icon: ShieldCheck,
    title: "Seguridad",
    description:
      "Nuestro equipo de soporte está disponible en nuestro horario de oficina para ayudarlo con cualquier problema que pueda tener.",
  },
];
