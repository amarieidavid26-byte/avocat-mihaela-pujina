import CTAButton from '@/components/CTAButton'
import { Phone, MessageSquare, Calendar } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="section-padding bg-cream text-charcoal relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-sage rounded-full" />
        <div className="absolute bottom-10 right-10 w-40 h-40 border-4 border-terracotta rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border-4 border-sage rounded-full" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-charcoal">
            Prima Consultație este{' '}
            <span className="bg-terracotta text-white px-4 py-1 rounded font-extrabold">GRATUITĂ</span>
          </h2>

          <p className="text-xl md:text-2xl mb-8 font-medium text-charcoal">
            Discutăm situația dumneavoastră, evaluăm opțiunile juridice și
            stabilim cea mai bună strategie de acțiune. Fără costuri, fără obligații.
          </p>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white backdrop-blur-sm rounded-xl p-6 border-2 border-sage/20 hover:border-sage shadow-md hover:shadow-xl transition-all duration-300">
              <Phone className="w-12 h-12 mb-4 mx-auto text-sage" />
              <h3 className="font-bold text-lg mb-2 text-charcoal">Sunați Acum</h3>
              <p className="text-sm mb-3 text-charcoal-light">Răspundem imediat</p>
              <a href="tel:0753434005" className="font-bold text-xl text-terracotta hover:text-terracotta-dark transition-colors">
                0753 434 005
              </a>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-xl p-6 border-2 border-sage/20 hover:border-sage shadow-md hover:shadow-xl transition-all duration-300">
              <MessageSquare className="w-12 h-12 mb-4 mx-auto text-sage" />
              <h3 className="font-bold text-lg mb-2 text-charcoal">WhatsApp</h3>
              <p className="text-sm mb-3 text-charcoal-light">Mesaj rapid</p>
              <a
                href="https://wa.me/40753434005"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-terracotta hover:text-terracotta-dark transition-colors"
              >
                Trimite mesaj
              </a>
            </div>

            <div className="bg-white backdrop-blur-sm rounded-xl p-6 border-2 border-sage/20 hover:border-sage shadow-md hover:shadow-xl transition-all duration-300">
              <Calendar className="w-12 h-12 mb-4 mx-auto text-sage" />
              <h3 className="font-bold text-lg mb-2 text-charcoal">Programează-te</h3>
              <p className="text-sm mb-3 text-charcoal-light">Online sau în cabinet</p>
              <a href="/contact" className="font-bold text-terracotta hover:text-terracotta-dark transition-colors">
                Formular contact
              </a>
            </div>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="phone"
              href="tel:0753434005"
              icon
            >
              SUNĂ ACUM: 0753 434 005
            </CTAButton>
            <CTAButton
              variant="secondary"
              href="/contact"
              icon
            >
              Programează Consultație
            </CTAButton>
          </div>

          {/* Trust message */}
          <p className="mt-8 text-sm font-medium text-charcoal">
            🔒 Confidențialitate garantată • ⚖️ Consultație profesională • ✓ Fără obligații
          </p>
        </div>
      </div>
    </section>
  )
}
