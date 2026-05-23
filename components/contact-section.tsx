import { Phone, MessageCircle, Instagram, Mail } from "lucide-react"

const contactMethods = [
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "(51) 99766-9269",
    href: "https://wa.me/5551997669269",
    description: "Faça seu pedido ou tire dúvidas",
  },
  {
    icon: Phone,
    title: "Telefone",
    value: "(51) 99766-9269",
    href: "tel:+5551997669269",
    description: "Ligue para nós",
  },
  {
    icon: Instagram,
    title: "Instagram",
    value: "@mercadofigueira",
    href: "https://instagram.com/mercadofigueira",
    description: "Siga nossas novidades",
  },
  {
    icon: Mail,
    title: "E-mail",
    value: "contato@mercadofigueira.com.br",
    href: "mailto:contato@mercadofigueira.com.br",
    description: "Envie sua mensagem",
  },
]

export function ContactSection() {
  return (
    <section id="contato" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            Fale conosco
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 mb-4">
            Entre em Contato
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
            Estamos sempre prontos para atendê-lo. Escolha a forma de contato que preferir.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactMethods.map((method) => (
            <a
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group bg-card p-6 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <method.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground mb-1">{method.title}</h3>
                  <p className="text-primary font-medium text-lg">{method.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{method.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-12 bg-primary/10 rounded-2xl p-8 text-center border border-primary/20">
          <h3 className="font-serif text-2xl font-medium text-foreground mb-3">
            Faça seu pedido pelo WhatsApp
          </h3>
          <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
            Peça suas compras e retire na loja ou consulte disponibilidade de produtos de forma
            rápida e prática.
          </p>
          <a
            href="https://wa.me/5551997669269?text=Olá! Gostaria de fazer um pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar Mensagem
          </a>
        </div>
      </div>
    </section>
  )
}
