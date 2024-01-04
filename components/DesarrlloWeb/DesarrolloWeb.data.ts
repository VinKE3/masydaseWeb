import { DesarrolloWebData } from "./DesarrolloWeb.types";

export const dataDesarrolloWeb: DesarrolloWebData = [
  {
    id: 1,
    title: "Desarrollo Web",
    image: {
      src: "/assets/dw.png",
      alt: "DesarrolloWeb",
    },
    data: [
      {
        id: 1,
        title: "Responsive Design",
        description:
          "La capacidad de adaptarse a diferentes tamaños de pantalla y dispositivos, garantizando una experiencia de usuario consistente.",
      },
      {
        id: 2,
        title: "Seguridad",
        description:
          "Implementación de medidas de seguridad, como certificados SSL, para proteger la información del usuario y garantizar la integridad del sitio.",
      },
      {
        id: 3,
        title: " Optimización para Motores de Búsqueda (SEO)",
        description:
          "Integración de prácticas de SEO para mejorar la visibilidad en los motores de búsqueda y aumentar el tráfico orgánico.",
      },
      {
        id: 4,
        title: "Interactividad y Experiencia del Usuario (UX)",
        description:
          "Enfoque en la creación de interfaces atractivas y la mejora de la experiencia del usuario a través de interactividad y navegación intuitiva.",
      },
    ],
  },
  {
    id: 2,
    title: " Hosting",
    image: {
      src: "/assets/hosttt.png",
      alt: "hosting",
    },
    data: [
      {
        id: 1,
        title: "Fiabilidad y Disponibilidad",
        description:
          " Garantizar una alta disponibilidad del servidor y un tiempo de actividad confiable para que el sitio esté accesible en todo momento.",
      },
      {
        id: 2,
        title: "Rendimiento y Velocidad",
        description:
          " Proporcionar recursos suficientes y optimización para garantizar tiempos de carga rápidos y un rendimiento eficiente del sitio.",
      },
      {
        id: 3,
        title: "Soporte Técnico",
        description:
          "Ofrecer un equipo de soporte técnico eficiente y disponible las 24 horas para abordar problemas y consultas de los clientes.",
      },
      {
        id: 4,
        title: "Escalabilidad",
        description:
          "La capacidad de escalar los recursos del servidor según sea necesario para manejar el crecimiento del tráfico y la demanda del sitio.",
      },
    ],
  },
  {
    id: 3,
    title: "Dominio",
    image: {
      src: "/assets/dom.png",
      alt: "dominio",
    },
    data: [
      {
        id: 1,
        title: "Registro y Renovación Sencilla",
        description:
          "Proceso fácil y transparente para registrar y renovar nombres de dominio, evitando complicaciones administrativas.",
      },
      {
        id: 2,
        title: "Privacidad del Dominio (Whois Privacy)",
        description:
          "Ofrecer opciones de privacidad del dominio para proteger la información personal del propietario del dominio en las consultas Whois.",
      },
      {
        id: 3,
        title: "Transferibilidad",
        description:
          "Facilitar el proceso de transferir el dominio a otro registrador si el cliente así lo desea, brindando flexibilidad y control.",
      },
      {
        id: 4,
        title: "Gestión de DNS",
        description:
          "Proporcionar herramientas intuitivas para la gestión de registros DNS, permitiendo a los usuarios controlar la configuración de su dominio.",
      },
    ],
  },
];
