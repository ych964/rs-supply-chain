import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { SupplyChainContent } from "@/components/supply-chain-content"

export const metadata: Metadata = {
  title: "Management de la Supply Chain : Tout Savoir",
  description:
    "Découvrez tout sur le management de la supply chain : définition, enjeux, compétences clés, rôles et secteurs concernés.",
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
