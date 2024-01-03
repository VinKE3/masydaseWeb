import { ServicesData } from "./Services.types";

export const dataServices: ServicesData = [
  {
    id: 1,
    title: "Consultoría y auditoría",
    description:
      "Nuestro servicio de auditoría a los estados financieros tiene como propósito emitir opinión sobre la razonabilidad de los estados financieros. Complementamos nuestra revisión con un exhaustivo análisis contable, financiero y fiscal de las operaciones. Nuestro servicio siempre va acompañado de un Informe de Control Interno.",
    image: {
      src: "/images/development.svg",
      alt: "Desarrollo de Software",
      width: 400,
      height: 300,
      className: "services__image",
    },
  },
  {
    id: 2,
    title: "Outsourcing contable",
    description:
      "El Outsourcing Contable es una moderna herramienta de administración, que permite a nuestra firma trabajar en conjunto con nuestros socios, dejando en manos de especialistas con experiencia, sus procesos administrativos y contables. Entregando confianza en la toma de decisiones y permitiéndole focalizar su tiempo y recursos en las actividades de mayor valor para su negocio.",
    image: {
      src: "/assets/outsor.png",
      alt: "outsor",
      width: 480,
      height: 411,
      className: "w-full h-auto",
    },
  },
  {
    id: 3,
    title: "Desarrollo de Software",
    description:
      "Desarrollamos sistemas a la medida de tus necesidades, con la tecnología más avanzada del mercado.",
    image: {
      src: "/images/development.svg",
      alt: "Desarrollo de Software",
      width: 400,
      height: 300,
      className: "services__image",
    },
  },
];
