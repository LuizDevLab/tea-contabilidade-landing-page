import { Shield, Target, Users, Award } from "lucide-react"

const values = [
  {
    icon: Shield,
    title: "Confiança",
    description: "Construímos relacionamentos sólidos baseados em transparência e ética profissional.",
  },
  {
    icon: Target,
    title: "Precisão",
    description: "Compromisso com a exatidão em cada cálculo e orientação tributária.",
  },
  {
    icon: Users,
    title: "Parceria",
    description: "Trabalhamos lado a lado com nossos clientes para alcançar os melhores resultados.",
  },
  {
    icon: Award,
    title: "Excelência",
    description: "Buscamos constantemente a melhoria contínua em todos os nossos serviços.",
  },
]

export function About() {
  return (
    <section id="sobre" className="py-24 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-gold text-sm font-semibold uppercase tracking-wider">
              Sobre Nós
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
              Sua Parceira em Soluções Contábeis e Tributárias
            </h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <strong className="text-foreground">T&A Contabilidade e Consultoria Tributária</strong> é 
                referência em serviços contábeis e assessoria fiscal no Brasil. Com mais de duas 
                décadas de atuação, construímos uma reputação sólida baseada na excelência técnica 
                e no compromisso com o sucesso de nossos clientes.
              </p>
              <p>
                Nossa equipe de profissionais altamente qualificados está preparada para oferecer 
                soluções personalizadas que atendam às necessidades específicas de cada empresa, 
                desde startups até grandes corporações.
              </p>
              <p>
                Acreditamos que uma contabilidade bem estruturada é a base para decisões 
                estratégicas assertivas e o crescimento sustentável dos negócios.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-charcoal-light border border-border hover:border-gold/30 transition-colors duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
