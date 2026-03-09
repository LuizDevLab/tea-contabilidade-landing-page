import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Building2, 
  ClipboardCheck,
  ArrowRight 
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Calculator,
    title: "Contabilidade Empresarial",
    description: "Gestão contábil completa com escrituração, demonstrações financeiras e relatórios gerenciais para tomada de decisões estratégicas.",
    features: ["Escrituração contábil", "Balanços e DRE", "Relatórios gerenciais"],
  },
  {
    icon: FileText,
    title: "Consultoria Tributária",
    description: "Análise e otimização da carga tributária da sua empresa, garantindo conformidade fiscal e economia legal.",
    features: ["Análise tributária", "Recuperação de créditos", "Compliance fiscal"],
  },
  {
    icon: TrendingUp,
    title: "Planejamento Fiscal",
    description: "Estratégias personalizadas para redução de impostos dentro da legalidade, maximizando a lucratividade do seu negócio.",
    features: ["Elisão fiscal", "Regime tributário ideal", "Projeções fiscais"],
  },
  {
    icon: Building2,
    title: "Abertura e Regularização",
    description: "Assessoria completa para abertura de empresas, alterações contratuais e regularização junto aos órgãos competentes.",
    features: ["Abertura de CNPJ", "Alterações societárias", "Regularização cadastral"],
  },
  {
    icon: ClipboardCheck,
    title: "Assessoria Contábil",
    description: "Acompanhamento contínuo e suporte especializado para todas as questões contábeis e fiscais do seu negócio.",
    features: ["Suporte dedicado", "Consultoria mensal", "Atualização legislativa"],
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            Nossos Serviços
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Soluções Completas para sua Empresa
          </h2>
          <p className="text-muted-foreground text-lg">
            Oferecemos um portfólio completo de serviços contábeis e tributários,
            adaptados às necessidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group relative p-8 rounded-2xl bg-charcoal border border-border hover:border-gold/40 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Link */}
              <Link 
                href="#contato"
                className="inline-flex items-center text-gold hover:text-gold-light text-sm font-medium group/link"
              >
                Saiba mais
                <ArrowRight className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gold/5 transform rotate-45 translate-x-10 -translate-y-10" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
