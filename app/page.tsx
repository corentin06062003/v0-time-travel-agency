import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Destinations } from "@/components/destinations"
import { About } from "@/components/about"
import { CtaSection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Destinations />
      <About />
      <CtaSection />
      <Footer />
    </main>
  )
}
