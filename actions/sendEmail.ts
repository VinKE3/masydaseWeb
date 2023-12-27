"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface data {
  name: string;
  email: string;
  mensaje: string;
}
export const sendEmail = async (data: data) => {
  console.log("aqui");
  const { name, email, mensaje } = data;
  console.log(data, "sendEmail");
  const nameField = name ? name : "No name";
  const emailField = email ? email : "No email";
  const mensajeField = mensaje ? mensaje : "No mensaje";

  let dato;
  try {
    dato = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "harquin09@gmail.com",
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
