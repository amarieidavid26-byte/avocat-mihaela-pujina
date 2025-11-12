import type { Metadata } from 'next'
import { Award, BookOpen, Users, Scale, Heart, TrendingUp } from 'lucide-react'
import CTAButton from '@/components/CTAButton'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Despre Cabinet | Avocat Mihaela Pujină',
  description: 'Avocat cu 15+ ani experiență în Fălticeni și Suceava. Laureat Firma de Aur. Specializare în drept familiei, penal și civil. Consultație gratuită: 0753 434 005.',
  keywords: 'avocat Mihaela Pujină, cabinet avocatură Fălticeni, avocat experienţă Suceava',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Hero Section */}
      <div className="bg-sage text-white section-padding">
        <div className="container-custom">
          <nav className="text-sm mb-4 text-white/80">
            <a href="/" className="hover:text-cream transition-colors">Acasă</a>
            <span className="mx-2">/</span>
            <span className="text-white">Despre</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Avocat <span className="text-cream">Pujină Mihaela</span>
              </h1>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Cu peste 15 ani de experiență în avocatură, am dedicat cariera mea apărării drepturilor și intereselor clienților mei în Fălticeni, Suceava și împrejurimi.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-terracotta text-white px-4 py-2 rounded-lg font-bold">
                  🏆 Laureat Firma de Aur
                </div>
                <div className="bg-white/10 border border-cream px-4 py-2 rounded-lg">
                  15+ Ani Experiență
                </div>
                <div className="bg-white/10 border border-cream px-4 py-2 rounded-lg">
                  500+ Cazuri Câștigate
                </div>
              </div>
              <CTAButton variant="primary" href="/contact" icon>
                Programează Consultație
              </CTAButton>
            </div>

            {/* Profile Image */}
            <div className="relative">
              <div className="aspect-[3/4] bg-white rounded-2xl border-4 border-cream overflow-hidden relative shadow-xl">
                <Image
                  src="/images/pujinapoza.jpg"
                  alt="Avocat Pujină Mihaela - Cabinet Avocatură Fălticeni"
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-terracotta text-white p-6 rounded-xl shadow-2xl hover:scale-105 transition-transform">
                <div className="text-3xl font-bold">55+</div>
                <div className="text-sm font-semibold">Review-uri de 5 Stele</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Scale className="w-16 h-16 text-sage mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-charcoal">
                Filozofia Mea
              </h2>
            </div>

            <div className="bg-cream rounded-2xl shadow-xl p-8 md:p-12 border-l-4 border-terracotta">
              <p className="text-xl md:text-2xl font-serif italic text-charcoal mb-6 leading-relaxed">
                "Fiecare client merită o apărare puternică și o reprezentare dedicată. Nu există cazuri mici – doar oameni cu probleme reale care au nevoie de soluții juridice eficiente."
              </p>
              <p className="text-charcoal-light leading-relaxed">
                În cei peste 15 ani de practică, am învățat că succesul în avocatură nu se măsoară doar în cazuri câștigate, ci și în încrederea pe care o construiești cu fiecare client. Abordez fiecare caz cu aceeași atenție și dedicare, indiferent de complexitate, pentru că înțeleg că pentru dumneavoastră este cea mai importantă problemă din acel moment.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="section-padding bg-offwhite">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-charcoal">
            Parcurs <span className="text-terracotta">Profesional</span>
          </h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  year: '2023',
                  title: 'Laureat Firma de Aur',
                  description: 'Distincție pentru excelență în servicii juridice și satisfacția clienților'
                },
                {
                  year: '2020-2024',
                  title: 'Extindere Practică',
                  description: 'Dezvoltarea practicii în dreptul comercial și al muncii, peste 100 de societăți asistate'
                },
                {
                  year: '2015-2020',
                  title: 'Specializare Drept Familiei și Penal',
                  description: 'Focus pe cazuri complexe de divorț, custodie și apărare penală'
                },
                {
                  year: '2010-2015',
                  title: 'Înființare Cabinet Individual',
                  description: 'Deschiderea propriului cabinet de avocatură în Fălticeni'
                },
                {
                  year: '2008',
                  title: 'Începutul Carierei',
                  description: 'Admitere în Baroul Suceava și debut în avocatură'
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-terracotta rounded-full" />
                    {idx < 4 && <div className="w-0.5 h-full bg-sage/30 mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="text-terracotta font-bold text-lg mb-1">{item.year}</div>
                    <h3 className="text-xl font-serif font-bold mb-2 text-charcoal">{item.title}</h3>
                    <p className="text-charcoal-light">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-charcoal">
            Valorile <span className="text-terracotta">Cabinetului</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Heart,
                title: 'Empatie',
                description: 'Înțelegem că problemele juridice sunt personale și stresante. Oferim suport uman pe lângă expertiza juridică.'
              },
              {
                icon: Scale,
                title: 'Integritate',
                description: 'Practicăm avocatura cu onestitate și transparență, construind relații bazate pe încredere.'
              },
              {
                icon: TrendingUp,
                title: 'Excelență',
                description: 'Ne perfecționăm constant pentru a oferi cele mai bune soluții juridice clienților noștri.'
              },
              {
                icon: Users,
                title: 'Dedicare',
                description: 'Fiecare client primește atenția noastră completă și o strategie personalizată pentru cazul său.'
              },
              {
                icon: BookOpen,
                title: 'Profesionalism',
                description: 'Abordare riguroasă, pregătire meticuloasă și reprezentare de înaltă calitate în instanță.'
              },
              {
                icon: Award,
                title: 'Rezultate',
                description: 'Ne concentrăm pe obținerea celor mai bune rezultate posibile pentru clienții noștri.'
              }
            ].map((value, idx) => {
              const Icon = value.icon
              return (
                <div key={idx} className="bg-white border-2 border-sage/20 hover:border-sage rounded-xl p-6 shadow-md hover:shadow-xl transition-all">
                  <Icon className="w-12 h-12 text-sage mb-4" />
                  <h3 className="text-xl font-serif font-bold mb-2 text-charcoal">{value.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Education & Certifications */}
      <div className="section-padding bg-offwhite">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-12 text-charcoal">
              Educație și <span className="text-terracotta">Certificări</span>
            </h2>

            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 border-l-4 border-sage shadow-md">
                <h3 className="text-xl font-serif font-bold mb-2 text-charcoal">Licență în Drept</h3>
                <p className="text-charcoal-light">Facultatea de Drept, specializare Drept Civil și Penal</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-sage shadow-md">
                <h3 className="text-xl font-serif font-bold mb-2 text-charcoal">Membru al Baroului Suceava</h3>
                <p className="text-charcoal-light">Din 2008, în regulă cu toate obligațiile profesionale</p>
              </div>

              <div className="bg-white rounded-xl p-6 border-l-4 border-sage shadow-md">
                <h3 className="text-xl font-serif font-bold mb-2 text-charcoal">Formare Continuă</h3>
                <p className="text-charcoal-light">Participare regulată la seminarii și cursuri de specializare în drept familiei, penal și comercial</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="section-padding bg-cream">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 text-charcoal">
            Haideți să discutăm despre cazul dumneavoastră
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-charcoal">
            Prima consultație este gratuită. Vă ascult, analizez situația și vă ofer o strategie clară de acțiune.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton
              variant="phone"
              href="tel:0753434005"
            >
              SUNĂ ACUM: 0753 434 005
            </CTAButton>
            <CTAButton
              variant="secondary"
              href="/contact"
              icon
            >
              Formular Contact
            </CTAButton>
          </div>
        </div>
      </div>
    </div>
  )
}
