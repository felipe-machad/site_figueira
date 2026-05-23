import { Apple, Croissant, Milk, ShoppingBasket } from "lucide-react"

const products = [
  {
    icon: Apple,
    title: "Hortifruti",
    description: "Frutas e verduras fresquinhas todos os dias, direto do produtor para sua mesa.",
  },
  {
    icon: Milk,
    title: "Laticínios",
    description: "Leite, queijos, iogurtes e derivados de qualidade para toda a família.",
  },
  {
    icon: Croissant,
    title: "Padaria",
    description: "Pães frescos, bolos e doces caseiros feitos com carinho diariamente.",
  },
  {
    icon: ShoppingBasket,
    title: "Mercearia",
    description: "Produtos essenciais do dia a dia com os melhores preços do bairro.",
  },
]

export function ProductsSection() {
  return (
    <section id="produtos" className="py-24 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-widest">
            O que oferecemos
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-medium text-foreground mt-3 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Tudo o que sua família precisa em um só lugar, com a qualidade e o atendimento que você
            merece.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.title}
              className="group bg-card p-8 rounded-xl border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <product.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>


      </div>
    </section>
  )
}
