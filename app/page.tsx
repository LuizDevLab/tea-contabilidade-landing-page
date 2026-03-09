import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { About } from "@/components/landing/about"
import { Services } from "@/components/landing/services"
import { Differentials } from "@/components/landing/differentials"
import { Contact } from "@/components/landing/contact"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
