"use client"

import { useState } from "react"
import Link from "next/link"
import { Instagram, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Productos", href: "#productos" },
    { name: "Sobre Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex flex-col items-start">
            <span className="font-serif text-2xl md:text-3xl font-bold tracking-wide text-foreground">
              ANDIVA
            </span>
            <span className="text-[10px] md:text-xs tracking-[0.3em] text-muted-foreground uppercase -mt-1">
              Artesanías
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://instagram.com/andiva.artesanias"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label="Seguinos en Instagram"
            >
              <Instagram className="w-5 h-5" />
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border/50">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://instagram.com/andiva.artesanias"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
              >
                <Instagram className="w-5 h-5" />
                <span>@andiva.artesanias</span>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
