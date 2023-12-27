import { z } from "zod";

export const userSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "El nombre debe tener al menos 3 caracteres",
    })
    .max(255, {
      message: "El nombre debe tener menos de 255 caracteres",
    }),
  email: z.string().email({
    message: "El email no es válido",
  }),
  mensaje: z
    .string()
    .min(6, {
      message: "El mensaje debe tener al menos 6 caracteres",
    })
    .max(5000, {
      message: "El mensaje debe tener menos de 5000 caracteres",
    }),
});
