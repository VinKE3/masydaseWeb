import { FaStickyNote, FaBriefcase } from "react-icons/fa";
import {
  MdOutlineEmojiPeople,
  MdMiscellaneousServices,
  MdContactMail,
} from "react-icons/md";
import { RiComputerFill } from "react-icons/ri";
export const dataHeader = [
  {
    id: 1,
    name: "Nosotros",
    idLink: "/#nosotros",
    icon: MdOutlineEmojiPeople,
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
    icon: FaStickyNote,
  },
  {
    id: 3,
    name: "Servicios",
    idLink: "#servicios",
    subElements: [
      { name: "Sistemas corporativos", idLink: "#sistemas-corporativos" },
      { name: "Desarrollo Web", idLink: "#desarrollo-web" },
      { name: "Outsorcing Contable", idLink: "#outsorcing-contable" },
    ],
    icon: MdMiscellaneousServices,
  },
  {
    id: 4,
    name: "Outsorcing Contable",
    idLink: "/outsorcingContable",
    icon: FaBriefcase,
  },
  {
    id: 5,
    name: "Desarrollo Web",
    idLink: "/desarrolloWeb",
    icon: RiComputerFill,
  },
  {
    id: 6,
    name: "Contacto",
    idLink: "#contacto",
    icon: MdContactMail,
  },
];
