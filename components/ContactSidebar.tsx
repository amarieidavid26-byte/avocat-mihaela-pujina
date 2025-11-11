import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import CTAButton from './CTAButton'

export default function ContactSidebar() {
  return (
    <div className="space-y-6 sticky top-24">
      {/* Quick Contact Card */}
      <div className="bg-gradient-to-br from-sage to-sage-dark text-white rounded-xl p-6 shadow-xl">
        <h3 className="text-2xl font-serif font-bold mb-4">Contact Rapid</h3>
        <p className="mb-6">Programați o consultație gratuită astăzi!</p>

        <div className="space-y-4">
          <CTAButton
            variant="phone"
            href="tel:0753434005"
            className="w-full justify-center bg-white text-sage hover:bg-cream"
          >
            0753 434 005
          </CTAButton>

          <a
            href="https://wa.me/40753434005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg w-full"
          >
            <MessageSquare className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>

          <CTAButton
            variant="secondary"
            href="/contact"
            className="w-full justify-center border-white text-white hover:bg-white hover:text-sage"
            icon
          >
            Formular Contact
          </CTAButton>
        </div>
      </div>

      {/* Contact Info Card */}
      <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-sage/20">
        <h3 className="text-xl font-serif font-bold mb-4 text-charcoal">Informații Contact</h3>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-sm text-charcoal-light mb-1">Adresă</div>
              <div className="text-charcoal">Strada Maior Ioan 3<br />Fălticeni 725200<br />Suceava</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-sm text-charcoal-light mb-1">Telefon</div>
              <a href="tel:0753434005" className="text-terracotta hover:text-terracotta-dark font-semibold">
                0753 434 005
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-sm text-charcoal-light mb-1">Email</div>
              <a href="mailto:avocatpujina@yahoo.ro" className="text-terracotta hover:text-terracotta-dark">
                avocatpujina@yahoo.ro
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-sage flex-shrink-0 mt-1" />
            <div>
              <div className="font-semibold text-sm text-charcoal-light mb-1">Program</div>
              <div className="text-charcoal text-sm">
                <div>Luni - Vineri: 07:00 - 17:00</div>
                <div>Sâmbătă: 07:00 - 17:00</div>
                <div className="text-red-600 font-semibold">Duminică: Închis</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="bg-sage text-white rounded-xl p-6 text-center">
        <div className="text-4xl mb-2">🏆</div>
        <div className="font-serif font-bold text-xl text-cream mb-2">Laureat Firma de Aur</div>
        <div className="text-sm text-white/90">Premiat pentru excelență în servicii juridice</div>
      </div>
    </div>
  )
}
