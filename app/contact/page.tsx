import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact | Avocat Mihaela Pujină Fălticeni',
  description: 'Contactați Cabinet Avocat Pujină Mihaela în Fălticeni, Str. Maior Ioan 3. Program: L-S 07:00-17:00. Consultație gratuită. Tel: 0753 434 005.',
  keywords: 'contact avocat Fălticeni, cabinet avocatură Suceava, programare consultație juridică',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <div className="bg-sage text-white section-padding">
        <div className="container-custom">
          <nav className="text-sm mb-4 text-white/80">
            <a href="/" className="hover:text-cream transition-colors">Acasă</a>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Contactați-ne <span className="text-cream">Astăzi</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Prima consultație este GRATUITĂ. Suntem aici să vă ascultăm și să găsim împreună cele mai bune soluții juridice.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-sage/20">
              <h2 className="text-2xl font-serif font-bold mb-6 text-charcoal">
                Trimite-ne un mesaj
              </h2>
              <ContactForm />
            </div>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="tel:0753434005"
                className="bg-sage text-white p-6 rounded-xl hover:bg-sage-light transition-all card-hover shadow-md"
              >
                <Phone className="w-8 h-8 mb-3" />
                <div className="font-semibold text-sm mb-1">Telefon</div>
                <div className="font-bold text-lg">0753 434 005</div>
              </a>

              <a
                href="mailto:avocatpujina@yahoo.ro"
                className="bg-white border-2 border-sage p-6 rounded-xl hover:bg-sage/10 transition-all card-hover shadow-md"
              >
                <Mail className="w-8 h-8 mb-3 text-sage" />
                <div className="font-semibold text-sm mb-1 text-charcoal">Email</div>
                <div className="font-bold text-sm text-terracotta">avocatpujina@yahoo.ro</div>
              </a>
            </div>

            {/* Address Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 border-2 border-sage/20">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-bold text-xl mb-2 text-charcoal">Adresă Cabinet</h3>
                  <p className="text-charcoal-light">
                    Strada Maior Ioan 3<br />
                    Fălticeni 725200<br />
                    Județul Suceava
                  </p>
                </div>
              </div>
            </div>

            {/* Schedule Card */}
            <div className="bg-cream rounded-xl shadow-lg p-6 border-2 border-terracotta/20">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-sage flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif font-bold text-xl mb-3 text-charcoal">Program</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Luni - Vineri:</span>
                      <span className="font-bold text-terracotta">07:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Sâmbătă:</span>
                      <span className="font-bold text-terracotta">07:00 - 17:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-charcoal-light">Duminică:</span>
                      <span className="font-bold text-red-600">Închis</span>
                    </div>
                  </div>
                  <p className="mt-4 text-xs text-charcoal-light bg-white/50 p-3 rounded">
                    💡 Pentru urgențe în afara programului, ne puteți contacta prin WhatsApp
                  </p>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-sage/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2697.2507755685006!2d26.292275276802204!3d47.46554239770702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47351bb64a1ad4fd%3A0xb537ecc39c2f92b!2sStrada%20Maior%20Ioan%203%2C%20F%C4%83lticeni%20725200!5e0!3m2!1sro!2sro!4v1762949334735!5m2!1sro!2sro"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-lg"
              />
              <div className="p-4 bg-offwhite">
                <a
                  href="https://www.google.com/maps/dir//Strada+Maior+Ioan+3,+F%C4%83lticeni+725200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terracotta hover:text-terracotta-dark font-semibold text-sm flex items-center gap-2 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  Deschide în Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-cream border-l-4 border-terracotta rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-serif font-bold mb-4 text-charcoal">De ce să ne contactați?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <div className="text-3xl mb-2">✓</div>
              <h4 className="font-bold mb-2 text-charcoal">Consultație Gratuită</h4>
              <p className="text-sm text-charcoal-light">Prima discuție este fără costuri și fără obligații</p>
            </div>
            <div>
              <div className="text-3xl mb-2">⚡</div>
              <h4 className="font-bold mb-2 text-charcoal">Răspuns Rapid</h4>
              <p className="text-sm text-charcoal-light">Vă contactăm în maxim 24 de ore</p>
            </div>
            <div>
              <div className="text-3xl mb-2">🔒</div>
              <h4 className="font-bold mb-2 text-charcoal">Confidențialitate</h4>
              <p className="text-sm text-charcoal-light">Toate informațiile sunt strict confidențiale</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
