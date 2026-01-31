import { Heart, Sparkles, Leaf } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Hecho con Amor",
    description: "Cada pieza es creada con dedicación y pasión por el arte manual",
  },
  {
    icon: Sparkles,
    title: "Piezas Únicas",
    description: "Diseños exclusivos que no encontrarás en ningún otro lugar",
  },
  {
    icon: Leaf,
    title: "Materiales Naturales",
    description: "Utilizamos ingredientes orgánicos y materiales sustentables",
  },
]

export function About() {
  return (
    <section id="nosotros" className="py-16 sm:py-20 md:py-28 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-6 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-xs sm:text-sm tracking-[0.2em] text-primary uppercase mb-3 sm:mb-4">
              Sobre Nosotros
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
              La Historia de ANDIVA
            </h2>
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-muted-foreground leading-relaxed">
              <p>
                ANDIVA nació de la pasión por crear objetos únicos que transmiten 
                calidez y personalidad. Cada artesanía que elaboramos lleva consigo 
                horas de dedicación y un profundo amor por el trabajo manual.
              </p>
              <p>
                Desde Córdoba, creamos velas aromáticas, atrapasueños, jabones 
                naturales y piezas decorativas que buscan transformar cada espacio 
                en un lugar especial y acogedor.
              </p>
              <p>
                Creemos en la importancia de lo hecho a mano, en la conexión entre 
                quien crea y quien recibe, y en el poder de los pequeños detalles 
                para hacer la diferencia en nuestro día a día.
              </p>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="flex gap-4 sm:gap-5 p-4 sm:p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-base sm:text-lg font-semibold text-foreground mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
