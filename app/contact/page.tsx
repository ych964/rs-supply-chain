import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact - Management de la Supply Chain",
  description:
    "Posez vos questions sur la filière Management de la Supply Chain. Notre équipe vous répondra rapidement.",
}

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactForm />
      <Footer />
    </main>
  )
}
