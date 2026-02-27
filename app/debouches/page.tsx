import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { DebouchesContent } from "@/components/debouches-content"

export const metadata: Metadata = {
  title: "Débouchés - Management de la Supply Chain",
  description:
    "Découvrez les métiers, opportunités professionnelles et perspectives d'évolution dans le management de la supply chain.",
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
