"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Telefone",
    value: "(11) 0000-0000",
    href: "tel:+551100000000",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "(11) 99999-9999",
    href: "https://wa.me/5511999999999",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "contato@tacontabilidade.com.br",
    href: "mailto:contato@tacontabilidade.com.br",
  },
  {
    icon: MapPin,
    label: "Av. João Machado, 553 - João Pessoa",
    value: "Paraíba, PB",
    href: "#",
  },
  {
    icon: Clock,
    label: "Horário",
    value: "Seg a Sex: 8h às 18h",
    href: "#",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-wider">
            Contato
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mt-4 mb-6 text-balance">
            Vamos conversar sobre seu negócio
          </h2>
          <p className="text-muted-foreground text-lg">
            Entre em contato conosco e descubra como podemos ajudar sua empresa
            a alcançar novos patamares de sucesso.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Nome completo
                  </label>
                  <Input
                    id="name"
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-charcoal border-border focus:border-gold focus:ring-gold/20 h-12"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    E-mail
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-charcoal border-border focus:border-gold focus:ring-gold/20 h-12"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefone
                </label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="bg-charcoal border-border focus:border-gold focus:ring-gold/20 h-12"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  placeholder="Como podemos ajudar?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-charcoal border-border focus:border-gold focus:ring-gold/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto bg-gold hover:bg-gold-light text-background font-semibold px-8"
              >
                <Send className="mr-2 w-4 h-4" />
                Enviar mensagem
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <div className="p-8 rounded-2xl bg-charcoal border border-border">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-colors">
                      <info.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">{info.label}</div>
                      <div className="text-foreground group-hover:text-gold transition-colors">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-6 rounded-2xl bg-green-600 hover:bg-green-700 transition-colors"
            >
              <MessageCircle className="w-6 h-6 text-foreground" />
              <span className="font-semibold text-foreground">Fale pelo WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-16 rounded-2xl overflow-hidden h-80 bg-charcoal border border-border">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467692.0488558814!2d-46.87529549999999!3d-23.6820635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1709900000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização T&A Contabilidade"
          />
        </div>
      </div>
    </section>
  )
}
