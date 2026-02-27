import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FiliereSection } from "@/components/filiere-section"
import { StatsSection } from "@/components/stats-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <FiliereSection />
      {/* <StatsSection /> */}
      <Footer />
    </main>
  )
}
