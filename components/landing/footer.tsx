import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

const footerLinks = {
  services: [
    { label: "Contabilidade Empresarial", href: "#servicos" },
    { label: "Consultoria Tributária", href: "#servicos" },
    { label: "Planejamento Fiscal", href: "#servicos" },
    { label: "Abertura de Empresas", href: "#servicos" },
    { label: "Assessoria Contábil", href: "#servicos" },
  ],
  company: [
    { label: "Sobre Nós", href: "#sobre" },
    { label: "Nossos Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ],
}

const socialLinks = [
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
]

export function Footer() {
  return (
    <footer className="bg-charcoal border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Image
              src="/images/logo.jpg"
              alt="T&A Contabilidade"
              width={180}
              height={45}
              className="h-10 w-auto mb-6"
            />
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Soluções contábeis e tributárias personalizadas para o sucesso 
              do seu negócio. Mais de 20 anos de experiência no mercado.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-charcoal-light border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-muted-foreground hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="font-semibold text-foreground mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Telefone</div>
                  <a href="tel:+551100000000" className="text-foreground hover:text-gold transition-colors">
                    (11) 0000-0000
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">E-mail</div>
                  <a href="mailto:contato@tacontabilidade.com.br" className="text-foreground hover:text-gold transition-colors">
                    contato@tacontabilidade.com.br
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm text-muted-foreground">Endereço</div>
                  <span className="text-foreground">São Paulo, SP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} T&A Contabilidade e Consultoria Tributária. 
            Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-sm text-muted-foreground hover:text-gold transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
