import { MapPin, Navigation } from "lucide-react"

export function LocationSection() {
  const address = "Rua Principal, 430"
  const city = "Cachoeirinha - RS"
  const cep = "94820-600"

  // Google Maps embed URL for CEP 94820-600
  const mapsEmbedUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.8!2d-51.1!3d-29.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU3JzAwLjAiUyA1McKwMDYnMDAuMCJX!5e0!3m2!1spt-BR!2sbr!4v1716483600000!5m2!1spt-BR!2sbr"

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=94820-600+430+Cachoeirinha+RS`

  return (
    <section id="localizacao" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Onde estamos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 mb-4">
            Nossa Localização
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Venha nos visitar! Estamos em um local de fácil acesso no coração do bairro.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Address Card */}
          <div className="bg-card rounded-2xl border border-border p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium text-foreground">Endereço</h3>
              </div>

              <div className="space-y-2 mb-8">
                <p className="text-foreground text-lg font-medium">{address}</p>
                <p className="text-muted-foreground">{city}</p>
                <p className="text-muted-foreground">CEP: {cep}</p>
              </div>

              <div className="bg-secondary/50 rounded-lg p-4 border border-border">
                <h4 className="font-medium text-foreground text-sm mb-2">Referência</h4>
                <p className="text-muted-foreground text-sm">
                  Próximo à praça central, em frente à escola municipal.
                </p>
              </div>
            </div>

            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Navigation className="h-5 w-5" />
              Como Chegar
            </a>
          </div>

          {/* Map */}
          <div className="bg-card rounded-2xl border border-border overflow-hidden h-[400px] lg:h-auto">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do Mercado Figueira"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
