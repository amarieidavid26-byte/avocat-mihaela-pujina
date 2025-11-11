import CTAButton from '@/components/CTAButton'
import { Phone, Award, Users, CheckCircle, Star } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row min-h-[80vh] overflow-hidden">
      {/* Left Column - Content */}
      <div className="flex-[1.1] bg-sage text-white flex items-center relative">
        <div className="container-custom section-padding w-full">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
              Apăr cu <span className="text-cream font-extrabold">fermitate</span>,
              <br />
              <span className="inline-block mt-[5px]">câștig cu <span className="text-cream font-extrabold">strategie!</span></span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-cream/90 leading-relaxed">
              15+ ani de experiență în apărarea drepturilor dumneavoastră.
              Cabinet avocatură Fălticeni, Suceava.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <CTAButton variant="phone" href="tel:0753434005" icon>
                SUNĂ ACUM: 0753 434 005
              </CTAButton>
              <CTAButton variant="secondary" href="/contact" icon>
                Consultație Gratuită
              </CTAButton>
            </div>

            {/* Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-cream/40 hover:bg-white/30 transition-all">
                <Users className="w-10 h-10 text-cream flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-cream">55+</div>
                  <div className="text-sm text-white/90">Review-uri de 5 Stele</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-cream/40 hover:bg-white/30 transition-all">
                <CheckCircle className="w-10 h-10 text-cream flex-shrink-0" />
                <div>
                  <div className="text-2xl font-bold text-cream">100%</div>
                  <div className="text-sm text-white/90">Consultanță Gratuită</div>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm p-4 rounded-lg border border-cream/40 hover:bg-white/30 transition-all">
                <Award className="w-10 h-10 text-cream flex-shrink-0" />
                <div>
                  <div className="text-lg font-bold text-cream">Laureat</div>
                  <div className="text-sm text-white/90">Firma de Aur</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Professional Photo */}
      <div className="flex-1 bg-white relative flex items-center justify-center min-h-[400px] lg:min-h-full">
        <div className="relative w-full h-full">
          <Image
            src="/images/pujinapoza.jpg"
            alt="Avocat Pujină Mihaela - Cabinet Avocatură Fălticeni"
            fill
            className="object-cover"
            priority
            quality={90}
          />

          {/* Review Badge Overlay */}
          <div className="absolute bottom-8 right-8 bg-terracotta text-white px-6 py-4 rounded-xl shadow-2xl z-10 hover:scale-105 transition-transform">
            <div className="flex items-center gap-2 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-white text-white" />
              ))}
            </div>
            <div className="text-2xl font-bold">55+</div>
            <div className="text-sm font-semibold">Review-uri de 5 Stele</div>
          </div>
        </div>
      </div>
    </section>
  )
}
