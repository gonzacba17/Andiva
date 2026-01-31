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
    <section id="productos" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.2em] text-primary uppercase mb-4">
            Nuestra Colección
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Productos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Cada pieza es creada con amor, atención al detalle y materiales de 
            la más alta calidad. Descubre nuestra selección de artesanías únicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
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
                  <span className="absolute top-4 left-4 text-xs tracking-wider uppercase bg-background/90 text-foreground px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
