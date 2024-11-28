"use server";
import { redirect } from "next/navigation";

export async function sendContact(formData: FormData) {
  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
    method: "POST",
    body: formData,
    headers: {
        'Content-Type': 'multipart/form-data'
    }
  });

  redirect("/contact");
}
