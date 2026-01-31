import Link from "next/link"
import { Instagram, Mail, MapPin, Package } from "lucide-react"

export function Footer() {
  return (
    <footer id="contacto" className="py-12 sm:py-16 md:py-20 bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-6 sm:px-6">
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4 sm:mb-6">
              <span className="font-serif text-2xl sm:text-3xl font-bold tracking-wide">
                ANDIVA
              </span>
              <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase mt-1 opacity-70">
                Artesanías
              </p>
            </div>
            <p className="text-xs sm:text-sm opacity-80 leading-relaxed mb-4 sm:mb-6">
              Artesanías únicas hechas a mano con amor y dedicación. 
              Transformamos espacios con piezas que cuentan historias.
            </p>
            <Link
              href="https://instagram.com/andiva.artesanias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
            >
              <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>@andiva.artesanias</span>
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contacto</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li>
                <Link
                  href="https://instagram.com/andiva.artesanias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span>Escribinos por Instagram</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:andiva.artesanias@gmail.com"
                  className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                  <span>andiva.artesanias@gmail.com</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations & Delivery */}
          <div>
            <h3 className="font-serif text-base sm:text-lg font-semibold mb-4 sm:mb-6">Ubicación</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm opacity-80">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Córdoba | Río Tercero | Villa María</span>
              </li>
              <li className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm opacity-80">
                <Package className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5" />
                <span>Productos en stock con entrega inmediata</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-6 sm:pt-8 border-t border-background/20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs opacity-60 text-center sm:text-left">
              © {new Date().getFullYear()} ANDIVA Artesanías. Todos los derechos reservados.
            </p>
            <nav className="flex items-center gap-4 sm:gap-6">
              <Link
                href="#inicio"
                className="text-[10px] sm:text-xs opacity-60 hover:opacity-100 transition-opacity"
              >
                Inicio
              </Link>
              <Link
                href="#productos"
                className="text-[10px] sm:text-xs opacity-60 hover:opacity-100 transition-opacity"
              >
                Productos
              </Link>
              <Link
                href="#nosotros"
                className="text-[10px] sm:text-xs opacity-60 hover:opacity-100 transition-opacity"
              >
                Sobre Nosotros
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}
