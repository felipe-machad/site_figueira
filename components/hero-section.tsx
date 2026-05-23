import { Leaf } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/11534009532baed063a85221288319df-rhau9xW5ymR0rZ1yZA3n6FoeRiyCyq.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-background/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
        {/* Decorative Leaf */}
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full border border-primary/30">
            <Leaf className="h-12 w-12 text-primary" />
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight text-foreground mb-6">
          <span className="text-balance">Mercado</span>
          <br />
          <span className="text-primary italic">Figueira</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
          Tradição e qualidade no seu bairro. Frutas frescas, laticínios, padaria artesanal e
          mercearia completa para sua família.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#produtos"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Conheça Nossos Produtos
          </a>
          <a
            href="#horarios"
            className="inline-flex items-center justify-center px-8 py-4 border border-primary/50 text-foreground font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            Horários de Funcionamento
          </a>
        </div>


      </div>
    </section>
  )
}
