"use server";

import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utlis";

const resend = new Resend(process.env.RESEND_API_KEY);

// export const sendEmail1 = async (formData: FormData) => {
//   const name = formData.get("name");
//   const email = formData.get("email");
//   const mensaje = formData.get("mensaje");
//   resend.emails.send({
//     from: "onboarding@resend.dev",
//     to: "harquin09@gmail.com",
//     subject: name as string,
//     reply_to: email as string,
//     text: mensaje as string,
//   });
// };

export const sendEmail = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const mensaje = formData.get("mensaje");

  if (!validateString(name, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(email, 5000)) {
    return {
      error: "Invalid message",
    };
  }
  if (!validateString(mensaje, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "harquin09@gmail.com",
      subject: name,
      reply_to: email,
      text: mensaje,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  } finally {
    // quiero resetear los campos del formulario
  }

  return {
    data,
  };
};
