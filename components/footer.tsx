import { Leaf } from "lucide-react"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 mb-6 group">
            <Leaf className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
            <span className="font-serif text-xl font-semibold tracking-wide text-foreground">
              Mercado Figueira
            </span>
          </Link>

          {/* Tagline */}
          <p className="text-muted-foreground text-sm max-w-md mb-8">
            Tradição e qualidade no seu bairro. Frutas frescas, laticínios, padaria e mercearia
            completa para sua família.
          </p>

          {/* Navigation */}
          <nav className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <Link
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Início
            </Link>
            <Link
              href="#produtos"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Produtos
            </Link>
            <Link
              href="#horarios"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Horários
            </Link>
            <Link
              href="#localizacao"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Localização
            </Link>
            <Link
              href="#contato"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contato
            </Link>
          </nav>

          {/* Divider */}
          <div className="w-full h-px bg-border mb-8" />

          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear} Mercado Figueira. Todos os direitos reservados.
          </p>

          {/* Developer Credit */}
          <p className="text-muted-foreground/60 text-xs mt-4">
            Desenvolvido por{" "}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary/70 hover:text-primary transition-colors underline underline-offset-2"
            >
              Sua Empresa
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
