import Link from 'next/link'
import { Scale, Phone, Mail, MapPin, Clock, Facebook, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black text-white border-t-2 border-gold">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Scale className="w-8 h-8 text-gold" />
              <div>
                <div className="text-gold font-serif font-bold text-lg">Cabinet Avocat</div>
                <div className="text-sm">Pujină Mihaela</div>
              </div>
            </div>
            <p className="text-gray-300 text-sm mb-4">
              15+ ani experiență în drept familiei, penal, civil și comercial.
              Laureat Firma de Aur. 55+ review-uri de 5 stele.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-gold-dark transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gold hover:text-gold-dark transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gold font-serif font-bold text-xl mb-4">Servicii</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/domenii-practica#familie" className="text-gray-300 hover:text-gold transition-colors">
                  Dreptul Familiei
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#penal" className="text-gray-300 hover:text-gold transition-colors">
                  Drept Penal
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#civil" className="text-gray-300 hover:text-gold transition-colors">
                  Drept Civil
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#comercial" className="text-gray-300 hover:text-gold transition-colors">
                  Drept Comercial
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#munca" className="text-gray-300 hover:text-gold transition-colors">
                  Dreptul Muncii
                </Link>
              </li>
              <li>
                <Link href="/domenii-practica#accidente" className="text-gray-300 hover:text-gold transition-colors">
                  Accidente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-serif font-bold text-xl mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">Strada Maior Ioan 3, Fălticeni 725200, Suceava</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-gold flex-shrink-0" />
                <a href="tel:0753434005" className="text-gray-300 hover:text-gold transition-colors">
                  0753 434 005
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-gold flex-shrink-0" />
                <a href="mailto:avocatpujina@yahoo.ro" className="text-gray-300 hover:text-gold transition-colors">
                  avocatpujina@yahoo.ro
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <div>Luni - Sâmbătă: 07:00 - 17:00</div>
                  <div>Duminică: Închis</div>
                </div>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-gold font-serif font-bold text-xl mb-4">Informații Legale</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Politica de Confidențialitate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                  Termeni și Condiții
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-gold transition-colors">
                  GDPR
                </Link>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-gold/10 border border-gold rounded-lg">
              <p className="text-xs text-gray-400">
                Informațiile de pe acest site nu constituie consultanță juridică.
                Pentru consiliere personalizată, vă rugăm să ne contactați.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gold/30 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Cabinet Avocat Pujină Mihaela. Toate drepturile rezervate.</p>
        </div>
      </div>
    </footer>
  )
}
