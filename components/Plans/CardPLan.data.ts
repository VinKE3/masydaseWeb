import { CheckIcon } from "./CheckIcon";
import { XIcon } from "./XIcon";
export const dataPlans = [
  {
    id: 1,
    title: "Plan Basico",
    numComprobantes: "Hasta 400 comprabantes al mes",
    price: "69.90",
    icon: [
      {
        id: 1,
        icon: CheckIcon,
      },
      {
        id: 2,
        icon: CheckIcon,
      },
      {
        id: 3,
        icon: CheckIcon,
      },
      {
        id: 4,
        icon: CheckIcon,
      },
      {
        id: 5,
        icon: XIcon,
      },
      {
        id: 6,
        icon: XIcon,
      },
    ],
  },
  {
    id: 2,
    title: "Plan MYPE",
    numComprobantes: "Hasta 800 comprabantes al mes",
    price: "139.90",
    icon: [
      {
        id: 1,
        icon: CheckIcon,
      },
      {
        id: 2,
        icon: CheckIcon,
      },
      {
        id: 3,
        icon: CheckIcon,
      },
      {
        id: 4,
        icon: CheckIcon,
      },
      {
        id: 5,
        icon: CheckIcon,
      },
      {
        id: 6,
        icon: XIcon,
      },
    ],
  },
  {
    id: 3,
    title: "Plan Premium",
    numComprobantes: "Comprobantes Ilimitados",
    price: "244.90",
    icon: [
      {
        id: 1,
        icon: CheckIcon,
      },
      {
        id: 2,
        icon: CheckIcon,
      },
      {
        id: 3,
        icon: CheckIcon,
      },
      {
        id: 4,
        icon: CheckIcon,
      },
      {
        id: 5,
        icon: CheckIcon,
      },
      {
        id: 6,
        icon: CheckIcon,
      },
    ],
  },
];

export const listComprobantes = [
  {
    id: 1,
    title: "Facturas Electronicas",
  },
  {
    id: 2,
    title: "Boletas de Venta Electronicas",
  },
  {
    id: 3,
    title: "Notas de Credito Electronicas",
  },
  {
    id: 4,
    title: "Notas de Debito Electronicas",
  },
  {
    id: 5,
    title: "Guia de Remision",
  },
  {
    id: 6,
    title: "Certificado Digital",
  },
];
