import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DebouchesContent } from "@/components/debouches-content"

export const metadata: Metadata = {
  title: "Debouches - Management de la Supply Chain",
  description:
    "Decouvrez les metiers, opportunites professionnelles et perspectives d'evolution dans le management de la supply chain.",
}

export default function DebouchesPage() {
  return (
    <main>
      <Navbar />
      <DebouchesContent />
      <Footer />
    </main>
  )
}
