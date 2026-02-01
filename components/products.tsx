"use client"

import Image from "next/image"
import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Sparkles, Leaf, Heart, Package } from "lucide-react"

// Productos individuales con precios e imágenes
const products = [
  { id: 1, name: "Caramelera", price: "$12.000", image: "/images/catalogo/2.jpg", description: "Esencia a elección" },
  { id: 2, name: "Carameleritas", price: "$10.000", image: "/images/catalogo/2.jpg", description: "Esencia a elección" },
  { id: 3, name: "Caramelera Mediana", price: "$11.000", image: "/images/catalogo/2.jpg", description: "Esencia a elección" },
  { id: 4, name: "Esfera Cristal", price: "$11.000", image: "/images/catalogo/2.jpg", description: "Modelo y esencia a elección" },
  { id: 5, name: "Esfera Grande", price: "$6.900", image: "/images/catalogo/3.jpg", description: "Color y esencia a elección" },
  { id: 6, name: "Margarita", price: "$10.000", image: "/images/catalogo/3.jpg", description: "Color y esencia a elección" },
  { id: 7, name: "Esfera Pequeña", price: "$4.900", image: "/images/catalogo/3.jpg", description: "Color y esencia a elección" },
  { id: 8, name: "Suculenta", price: "$11.000", image: "/images/catalogo/3.jpg", description: "Color y esencia a elección" },
  { id: 9, name: "Rosas en Vaso", price: "$12.000", image: "/images/catalogo/5.jpg", description: "Color y esencia a elección" },
  { id: 10, name: "Flores", price: "$10.000", image: "/images/catalogo/5.jpg", description: "Color y esencia a elección" },
  { id: 11, name: "Frutos Rojos", price: "$10.000", image: "/images/catalogo/5.jpg", description: "Esencia frutos rojos" },
  { id: 12, name: "Suculentas Vaso", price: "$10.000", image: "/images/catalogo/5.jpg", description: "Color y esencia a elección" },
  { id: 13, name: "Rosas Bolsita", price: "$3.000", image: "/images/catalogo/6.jpg", description: "Color y esencia a elección" },
  { id: 14, name: "Bombones", price: "$2.000", image: "/images/catalogo/6.jpg", description: "4 unidades" },
  { id: 15, name: "Vaso Grande Color", price: "$9.000", image: "/images/catalogo/7.jpg", description: "Esencia y color a elección" },
  { id: 16, name: "Vaso Estrellado", price: "$4.500", image: "/images/catalogo/7.jpg", description: "Esencia a elección" },
  { id: 17, name: "Copa", price: "$12.000", image: "/images/catalogo/7.jpg", description: "Stock limitado" },
  { id: 18, name: "Pinito Nevado", price: "$12.000", image: "/images/catalogo/8.jpg", description: "Esencia a elección" },
  { id: 19, name: "Souvenirs", price: "$4.500", image: "/images/catalogo/4.jpg", description: "$3.900 x10+" },
]

// Páginas del catálogo
const catalogPages = [
  { id: 2, image: "/images/catalogo/2.jpg", title: "Carameleras Premium" },
  { id: 3, image: "/images/catalogo/3.jpg", title: "Esferas y Botánicas" },
  { id: 5, image: "/images/catalogo/5.jpg", title: "Colección Floral" },
  { id: 6, image: "/images/catalogo/6.jpg", title: "Rosas y Bombones" },
  { id: 7, image: "/images/catalogo/7.jpg", title: "Vasos y Copa" },
  { id: 8, image: "/images/catalogo/8.jpg", title: "Pinito Nevado" },
  { id: 4, image: "/images/catalogo/4.jpg", title: "Souvenirs" },
]

const esencias = [
  "Coco y vainilla", "Vainilla", "Mery", "Maderado oriental",
  "Pomelo rosado", "Frutos rojos", "Maracuyá", "Chocolate",
  "Té verde", "Sándalo dulce", "Lavanda y romero", 
  "Naranja pimienta", "Limón y jengibre"
]

const features = [
  { icon: Heart, title: "Hecho a mano", description: "Cada vela es única, creada con amor" },
  { icon: Leaf, title: "100% Natural", description: "Cera de soja pura y esencias premium" },
  { icon: Package, title: "Envíos", description: "Entrega inmediata de stock" },
  { icon: Sparkles, title: "Personalizado", description: "Elegí tu esencia favorita" },
]

interface SelectedProduct {
  name: string
  price: string
  message: string
}

export function Products() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [selectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null)
  const [copied, setCopied] = useState(false)

  const handleProductClick = async (productName: string, productPrice: string) => {
    const message = `¡Hola! 👋 Me interesa la vela "${productName}" de ${productPrice}. ¿Está disponible?`
    
    try {
      await navigator.clipboard.writeText(message)
      setCopied(true)
    } catch {
      setCopied(false)
    }
    
    setSelectedProduct({ name: productName, price: productPrice, message })
  }

  const openInstagram = () => {
    window.open('https://instagram.com/andiva.artesanias', '_blank')
    setSelectedProduct(null)
    setCopied(false)
  }

  const closeModal = () => {
    setSelectedProduct(null)
    setCopied(false)
  }

  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % catalogPages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev + 1) % catalogPages.length)
  }

  const prevSlide = () => {
    setIsAutoPlaying(false)
    setCurrentSlide((prev) => (prev - 1 + catalogPages.length) % catalogPages.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentSlide(index)
  }

  return (
    <>
      {/* Modal de Contacto */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal */}
          <div className="relative bg-white dark:bg-stone-900 rounded-2xl shadow-2xl max-w-md w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors"
            >
              <svg className="w-4 h-4 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Content */}
            <div className="text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </div>
              
              <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2">
                {selectedProduct.name}
              </h3>
              <p className="text-2xl font-bold text-primary mb-4">
                {selectedProduct.price}
              </p>
              
              {/* Mensaje copiado */}
              <div className="bg-stone-50 dark:bg-stone-800 rounded-xl p-4 mb-4 text-left">
                <div className="flex items-center gap-2 mb-2">
                  {copied ? (
                    <>
                      <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs font-medium text-emerald-600">Mensaje copiado</span>
                    </>
                  ) : (
                    <span className="text-xs font-medium text-muted-foreground">Mensaje para enviar:</span>
                  )}
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  {selectedProduct.message}
                </p>
              </div>

              {/* Instrucciones */}
              <p className="text-sm text-muted-foreground mb-5">
                Al abrir Instagram, pegá el mensaje en el chat para consultar por este producto.
              </p>

              {/* Botón */}
              <Button 
                onClick={openInstagram}
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 hover:from-purple-700 hover:via-pink-600 hover:to-orange-500 text-white font-medium shadow-lg"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                Abrir Instagram
              </Button>
            </div>
          </div>
        </div>
      )}

      <section id="productos" className="py-16 sm:py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-xs sm:text-sm tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4 font-medium">
              Catálogo 2026
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
              Velas Aromáticas
            </h2>
            <div className="w-16 h-0.5 bg-primary/50 mx-auto mb-4 sm:mb-6" />
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
              Creamos piezas únicas con cera de soja 100% natural. 
              <span className="block mt-2 text-primary font-medium">Tocá un producto para consultar</span>
            </p>
          </div>

          {/* Products Grid */}
          <div className="mb-14 sm:mb-20">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.name, product.price)}
                  className="group block cursor-pointer"
                >
                  <Card className="overflow-hidden border-stone-200 dark:border-stone-800 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 h-full">
                    <CardContent className="p-0">
                      <div className="relative aspect-square overflow-hidden bg-stone-100 dark:bg-stone-900">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                        />
                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                          <span className="opacity-0 group-hover:opacity-100 transition-opacity bg-white dark:bg-black rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium shadow-lg">
                            Consultar 💬
                          </span>
                        </div>
                      </div>
                      <div className="p-3 sm:p-4">
                        <h3 className="font-medium text-foreground text-sm sm:text-base leading-tight mb-1 group-hover:text-primary transition-colors line-clamp-1">
                          {product.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-muted-foreground mb-1.5 line-clamp-1">
                          {product.description}
                        </p>
                        <p className="text-primary font-bold text-base sm:text-lg">
                          {product.price}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Catalog Carousel */}
          <div className="mb-14 sm:mb-20">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-6 sm:mb-8 text-center">
              📖 Ver Catálogo Completo
            </h3>
            <div className="max-w-lg mx-auto px-4 sm:px-0">
              <div 
                className="relative bg-gradient-to-b from-stone-100 to-stone-50 dark:from-stone-900 dark:to-stone-950 rounded-2xl overflow-hidden shadow-lg"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
              >
                <div className="relative aspect-[3/4] max-h-[500px] sm:max-h-[600px] overflow-hidden">
                  {catalogPages.map((page, index) => (
                    <div
                      key={page.id}
                      className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                        index === currentSlide 
                          ? "opacity-100 translate-x-0" 
                          : index < currentSlide 
                            ? "opacity-0 -translate-x-full" 
                            : "opacity-0 translate-x-full"
                      }`}
                    >
                      <Image
                        src={page.image}
                        alt={page.title}
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 500px"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  
                  <button
                    onClick={prevSlide}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-black/60 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                    aria-label="Anterior"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/90 dark:bg-black/60 shadow-md flex items-center justify-center hover:bg-white transition-colors z-10"
                    aria-label="Siguiente"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
                  </button>
                </div>

              <div className="flex justify-center gap-2 py-3 sm:py-4 bg-white/50 dark:bg-black/30">
                {catalogPages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`transition-all duration-300 rounded-full ${
                      index === currentSlide 
                        ? "w-6 sm:w-8 h-2 bg-primary" 
                        : "w-2 h-2 bg-stone-300 dark:bg-stone-600 hover:bg-stone-400"
                    }`}
                    aria-label={`Ir a página ${index + 1}`}
                  />
                ))}
              </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-5 lg:gap-6 mb-14 sm:mb-20">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="text-center p-4 sm:p-5 lg:p-6 rounded-xl bg-stone-50 dark:bg-stone-900/50 border border-stone-200/50 dark:border-stone-800/50"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 text-primary mb-3">
                  <feature.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <h3 className="font-medium text-foreground text-sm sm:text-base">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Esencias + Refill */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-12 sm:mb-16">
            
            {/* Esencias */}
            <Card className="border-stone-200 dark:border-stone-800 shadow-sm">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl">🌸</span>
                  <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-foreground">
                    Esencias Disponibles
                  </h3>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {esencias.map((esencia) => (
                    <span 
                      key={esencia}
                      className="text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-stone-100 dark:bg-stone-800 text-muted-foreground"
                    >
                      {esencia}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Refill */}
            <Card className="border-stone-200 dark:border-stone-800 shadow-sm">
              <CardContent className="p-4 sm:p-5 md:p-6">
                <div className="flex items-center gap-2 mb-3 sm:mb-4">
                  <span className="text-lg sm:text-xl">♻️</span>
                  <h3 className="font-serif text-base sm:text-lg md:text-xl font-semibold text-foreground">
                    Servicio Refill
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground mb-3">
                  ¿Tu vela se consumió? ¡La recargamos!
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Caramelerita</span>
                    <span className="font-semibold text-primary">$3.000</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Caramelera mediana</span>
                    <span className="font-semibold text-primary">$3.500</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Caramelera grande</span>
                    <span className="font-semibold text-primary">$4.000</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-stone-100/80 via-amber-50/40 to-stone-100/80 dark:from-stone-900/50 dark:via-amber-950/20 dark:to-stone-900/50 rounded-2xl p-6 sm:p-8 md:p-10">
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-foreground mb-2">
              ¿Querés hacer un pedido?
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mb-5">
              Escribinos por Instagram para consultar disponibilidad
            </p>
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-medium px-6 sm:px-8 shadow-md text-sm sm:text-base"
              asChild
            >
              <a 
                href="https://instagram.com/andiva.artesanias" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                @andiva.artesanias
              </a>
            </Button>
          </div>

        </div>
      </section>
    </>
  )
}
