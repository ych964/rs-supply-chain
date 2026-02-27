import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact - Management de la Supply Chain",
  description:
    "Posez vos questions sur la filiere Management de la Supply Chain. Notre equipe vous repondra rapidement.",
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
