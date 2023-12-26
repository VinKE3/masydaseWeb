"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  console.log("runing on server");
  console.log(formData.get("name"));
  console.log(formData.get("email"));
  console.log(formData.get("mensaje"));
  const name = formData.get("name");
  const email = formData.get("email");
  const mensaje = formData.get("mensaje");
  resend.emails.send({
    from: "onboarding@resend.dev",
    to: "harquin09@gmail.com",
    subject: name as string,
    reply_to: email as string,
    text: mensaje as string,
  });
};
