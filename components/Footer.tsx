import Link from 'next/link'
import { Scale, Phone, Mail, MapPin, Clock, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cream text-charcoal border-t-2 border-sage">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-8 h-8 text-sage" />
              <div>
                <div className="text-sage font-serif font-bold text-lg">Cabinet Avocat</div>
                <div className="text-sm">Pujină Mihaela</div>
              </div>
            </div>
            <p className="text-charcoal-light text-sm mb-4">
              15+ ani experiență în drept familiei, penal, civil și comercial.
              Laureat Firma de Aur. 55+ review-uri de 5 stele.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61550807963214"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sage hover:text-sage-dark transition-colors"
              >
                <Facebook size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-terracotta font-serif font-bold text-xl mb-4">Servicii</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/domenii-practica#familie" className="text-charcoal-light hover:text-sage transition-colors">
                  Dreptul Familiei
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#penal" className="text-charcoal-light hover:text-sage transition-colors">
                  Drept Penal
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#civil" className="text-charcoal-light hover:text-sage transition-colors">
                  Drept Civil
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#comercial" className="text-charcoal-light hover:text-sage transition-colors">
                  Drept Comercial
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#munca" className="text-charcoal-light hover:text-sage transition-colors">
                  Dreptul Muncii
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#accidente" className="text-charcoal-light hover:text-sage transition-colors">
                  Accidente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-terracotta font-serif font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-sage mt-1 flex-shrink-0" />
                <span className="text-charcoal-light">Strada Maior Ioan 3, Fălticeni 725200, Suceava</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-sage flex-shrink-0" />
                <a href="tel:0753434005" className="text-charcoal-light hover:text-sage transition-colors">
                  0753 434 005
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-sage flex-shrink-0" />
                <a href="mailto:avocatpujina@yahoo.ro" className="text-charcoal-light hover:text-sage transition-colors">
                  avocatpujina@yahoo.ro
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-sage mt-1 flex-shrink-0" />
                <div className="text-charcoal-light text-sm">
                  <div>Luni - Vineri: 07:00 - 17:00</div>
                  <div>Sâmbătă: 07:00 - 17:00</div>
                  <div className="text-terracotta font-semibold">Duminică: Închis</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-terracotta font-serif font-bold text-xl mb-4">Informații Legale</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-charcoal-light hover:text-sage transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-charcoal-light hover:text-sage transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link href="#" className="text-charcoal-light hover:text-sage transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-sage/10 border border-sage rounded-lg">
              <p className="text-xs text-charcoal-light">
                Informațiile de pe acest site nu constituie consultanță juridică.
                Pentru consiliere personalizată, vă rugăm să ne contactați.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-sage/30 text-center text-sm text-charcoal-light">
          <p>© {new Date().getFullYear()} Cabinet Avocat Pujină Mihaela. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
