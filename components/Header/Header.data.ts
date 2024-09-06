import { FaHome, FaInfoCircle, FaPhone, FaChevronDown } from "react-icons/fa";
export const dataHeader = [
  {
    id: 1,
    name: "Nosotros",
    idLink: "#nosotros",
    icon: FaInfoCircle,
  },
  {
    id: 2,
    name: "F. Electronica",
    idLink: "#facturacion",
    subElements: [
      { name: "Que ofrecemos", idLink: "#que-ofrecemos" },
      { name: "Beneficios", idLink: "#beneficios" },
      { name: "Planes", idLink: "#planes" },
    ],
    icon: FaInfoCircle,
  },
  {
    id: 4,
    name: "Servicios",
    idLink: "#servicios",
    subElements: [
      { name: "Sistemas corporativos", idLink: "#sistemas-corporativos" },
      { name: "Desarrollo Web", idLink: "#desarrollo-web" },
      { name: "Outsorcing Contable", idLink: "#outsorcing-contable" },
    ],
    icon: FaPhone,
  },
  {
    id: 6,
    name: "Contacto",
    idLink: "#contacto",
    icon: FaPhone,
  },
];
