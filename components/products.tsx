"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

const products = [
  {
    id: 1,
    name: "Velas Artesanales",
    description: "Velas de cera de soja con aromas naturales y diseños únicos",
    image: "/images/products/candle.jpg",
    category: "Velas",
  },
  {
    id: 2,
    name: "Atrapasueños",
    description: "Atrapasueños tejidos a mano con materiales naturales",
    image: "/images/products/dreamcatcher.jpg",
    category: "Decoración",
  },
  {
    id: 3,
    name: "Jabones Naturales",
    description: "Jabones artesanales con ingredientes orgánicos y flores secas",
    image: "/images/products/soap.jpg",
    category: "Bienestar",
  },
  {
    id: 4,
    name: "Artículos Decorativos",
    description: "Piezas únicas de macramé y decoración bohemia para tu hogar",
    image: "/images/products/decorative.jpg",
    category: "Decoración",
  },
]

export function Products() {
  return (
    <section id="productos" className="py-16 sm:py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <p className="text-xs sm:text-sm tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4">
            Nuestra Colección
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
            Productos
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
            Cada pieza es creada con amor, atención al detalle y materiales de 
            la más alta calidad. Descubre nuestra selección de artesanías únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {products.map((product, index) => (
            <Card
              key={product.id}
              className="group overflow-hidden border-0 shadow-md hover:shadow-xl transition-all duration-300 bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 sm:top-4 sm:left-4 text-[10px] sm:text-xs tracking-wider uppercase bg-background/90 text-foreground px-2 py-1 sm:px-3 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="p-4 sm:p-5">
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
