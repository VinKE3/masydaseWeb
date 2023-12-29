"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface data {
  name: string;
  email: string;
  mensaje: string;
}
export const sendEmail = async (data: data) => {
  const { name, email, mensaje } = data;
  const nameField = name ? name : "No name";
  const emailField = email ? email : "No email";
  const mensajeField = mensaje ? mensaje : "No mensaje";

  let dato;
  try {
    dato = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ventas@masydase.com",
      subject: nameField,
      reply_to: emailField,
      text: mensajeField,
    });
  } catch (error: unknown) {
    return {
      error: error,
    };
  }
  return {
    dato,
  };
};
