import { UserCheck, GraduationCap, Lock, Lightbulb, CheckCircle2 } from "lucide-react"

const differentials = [
  {
    icon: UserCheck,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Desenvolvemos soluções sob medida para atender às necessidades específicas do seu negócio.",
    highlights: ["Consultor dedicado", "Reuniões periódicas", "Comunicação direta"],
  },
  {
    icon: GraduationCap,
    title: "Especialização em Tributação",
    description: "Nossa equipe possui expertise aprofundada em legislação tributária brasileira, garantindo as melhores estratégias fiscais.",
    highlights: ["Atualização constante", "Casos complexos", "Planejamento avançado"],
  },
  {
    icon: Lock,
    title: "Segurança e Transparência",
    description: "Trabalhamos com total transparência e sigilo, protegendo as informações sensíveis da sua empresa.",
    highlights: ["Sigilo absoluto", "Processos seguros", "Relatórios claros"],
  },
  {
    icon: Lightbulb,
    title: "Suporte Estratégico",
    description: "Mais do que números, oferecemos insights estratégicos para impulsionar o crescimento sustentável do seu negócio.",
    highlights: ["Análise de dados", "Recomendações proativas", "Visão de mercado"],
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold/[0.02] rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            Por que nos escolher
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Diferenciais que fazem a diferença
          </h2>
          <p className="text-muted-foreground text-lg">
            Descubra por que centenas de empresas confiam na T&A para 
            cuidar de sua contabilidade e planejamento tributário.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {differentials.map((item, index) => (
            <div 
              key={index}
              className="flex gap-6 p-8 rounded-2xl bg-charcoal-light/50 border border-border hover:border-gold/30 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {item.description}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {item.highlights.map((highlight, highlightIndex) => (
                    <li 
                      key={highlightIndex}
                      className="inline-flex items-center gap-1.5 text-xs text-gold bg-gold/10 px-3 py-1.5 rounded-full"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
