import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-8 sm:pb-0"
    >
      <div className="max-w-4xl mx-auto px-6 sm:px-6 text-center">
        <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] text-muted-foreground uppercase mb-3 sm:mb-4 animate-fade-in">
          Bienvenidos a
        </p>
        
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-3 sm:mb-4 animate-fade-in-up leading-tight">
          ANDIVA
        </h1>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0.12em] sm:tracking-[0.15em] text-muted-foreground uppercase mb-6 sm:mb-8 animate-fade-in-up animation-delay-100">
          Artesanías
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg text-foreground mb-5 sm:mb-6 animate-fade-in-up animation-delay-200">
          <span>Artesanías únicas</span>
          <span className="text-primary hidden sm:inline">•</span>
          <span>Hechas a mano</span>
        </div>
        
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2 animate-fade-in-up animation-delay-300">
          Creamos piezas únicas con amor y dedicación. Velas artesanales, atrapasueños, 
          jabones naturales y artículos decorativos que transforman tu hogar en un 
          espacio especial.
        </p>
        
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 animate-fade-in-up animation-delay-400 px-4 sm:px-0">
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full w-full sm:w-auto"
          >
            <Link href="#productos">Ver Productos</Link>
          </Button>
          
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10 px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base rounded-full bg-transparent w-full sm:w-auto"
          >
            <Link href="#contacto">Contactanos</Link>
          </Button>
        </div>
        
        <p className="mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground animate-fade-in-up animation-delay-500">
          Productos en stock con entrega inmediata
        </p>
      </div>
    </section>
  )
}
