import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Products } from "@/components/products"
import { About } from "@/components/about"
import { Footer } from "@/components/footer"
import { BotanicalBackground } from "@/components/botanical-background"

export default function Home() {
  return (
    <>
      <BotanicalBackground />
      <Header />
      <main>
        <Hero />
        <Products />
        <About />
      </main>
      <Footer />
    </>
  )
}
