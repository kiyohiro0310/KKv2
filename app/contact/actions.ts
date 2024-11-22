'use server'
import { redirect } from 'next/navigation'

export async function sendContact(formData: FormData) {

  console.log(formData);
  redirect("/contact");

}