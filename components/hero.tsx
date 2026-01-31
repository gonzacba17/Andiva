import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase mb-4 animate-fade-in">
          Bienvenidos a
        </p>
        
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-4 animate-fade-in-up">
          ANDIVA
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl tracking-[0.15em] text-muted-foreground uppercase mb-8 animate-fade-in-up animation-delay-100">
          Artesanías
        </p>
        
        <div className="flex items-center justify-center gap-3 text-xl md:text-2xl text-foreground mb-6 animate-fade-in-up animation-delay-200">
          <span>Artesanías únicas</span>
          <span className="text-primary">•</span>
          <span>Hechas a mano</span>
        </div>
        
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up animation-delay-300">
          Creamos piezas únicas con amor y dedicación. Velas artesanales, atrapasueños, 
          jabones naturales y artículos decorativos que transforman tu hogar en un 
          espacio especial.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base rounded-full"
          >
            <Link href="#productos">Ver Productos</Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary/10 px-8 py-6 text-base rounded-full bg-transparent"
          >
            <Link href="#contacto">Contactanos</Link>
          </Button>
        </div>
        
        <p className="mt-12 text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
          Productos en stock con entrega inmediata
        </p>
      </div>
    </section>
  )
}
