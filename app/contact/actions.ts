"use server";
import { redirect } from "next/navigation";
import emailjs from "@emailjs/browser";

export async function sendContact(formData: FormData) {
    const service_id = process.env.EMAILJS_SERVICE_ID!;
    const template_id = process.env.EMAILJS_TEMPLATE_ID!;
    const public_key = process.env.EMAILJS_PUBLIC_KEY!;


  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: "POST",
    body: formData,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  });

  redirect("/contact");
}
