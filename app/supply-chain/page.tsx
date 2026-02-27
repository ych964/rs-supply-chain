import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SupplyChainContent } from "@/components/supply-chain-content"

export const metadata: Metadata = {
  title: "Management de la Supply Chain : Tout Savoir",
  description:
    "Decouvrez tout sur le management de la supply chain : definition, enjeux, competences cles, roles et secteurs concernes.",
}

export default function SupplyChainPage() {
  return (
    <main>
      <Navbar />
      <SupplyChainContent />
      <Footer />
    </main>
  )
}
