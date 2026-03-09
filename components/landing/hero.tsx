import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-charcoal-light via-background to-background" />
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-gold/3 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-light border border-border mb-8">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            <span className="text-sm text-muted-foreground">Mais de 20 anos de experiência</span>
          </div>

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 text-balance">
            Contabilidade e Consultoria Tributária com{" "}
            <span className="text-gold">Excelência</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Oferecemos soluções contábeis e tributárias personalizadas para o crescimento 
            sustentável do seu negócio. Confiança, expertise e resultados.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-gold hover:bg-gold-light text-background font-semibold px-8 py-6 text-base group"
            >
              <Link href="#contato">
                Fale com um especialista
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-border hover:border-gold hover:text-gold px-8 py-6 text-base"
            >
              <Link href="tel:+5500000000000">
                <Phone className="mr-2 w-4 h-4" />
                Entrar em contato
              </Link>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-16 border-t border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Clientes Atendidos" },
                { number: "20+", label: "Anos de Experiência" },
                { number: "100%", label: "Conformidade Fiscal" },
                { number: "24h", label: "Suporte Disponível" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
