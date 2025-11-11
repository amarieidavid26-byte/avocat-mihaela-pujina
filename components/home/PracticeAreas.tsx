import Link from 'next/link'
import { Home, Shield, FileText, Briefcase, HardHat, Car } from 'lucide-react'

const practiceAreas = [
  {
    id: 'familie',
    title: 'Dreptul Familiei',
    icon: Home,
    description: 'Divorț, pensie alimentară, partaj bunuri, custodie copii',
    cases: ['Divorț Consimțământ', 'Divorț Contencions', 'Custodie Copii', 'Partaj Bunuri']
  },
  {
    id: 'penal',
    title: 'Drept Penal',
    icon: Shield,
    description: 'Apărare penală, plângeri, contestații, urmărire penală',
    cases: ['Apărare în Instanță', 'Plângeri Penale', 'Contestații', 'Cercetare Penală']
  },
  {
    id: 'civil',
    title: 'Drept Civil',
    icon: FileText,
    description: 'Contracte, proprietăți, moșteniri, litigii civile',
    cases: ['Contracte', 'Proprietăți', 'Moșteniri', 'Obligații']
  },
  {
    id: 'comercial',
    title: 'Drept Comercial',
    icon: Briefcase,
    description: 'Înființare societăți, recuperare creanțe, litigii comerciale',
    cases: ['Înființare SRL', 'Recuperare Creanțe', 'Contracte Comerciale', 'Litigii']
  },
  {
    id: 'munca',
    title: 'Dreptul Muncii',
    icon: HardHat,
    description: 'Concedieri abuzive, contracte de muncă, drepturi salariale',
    cases: ['Concedieri Abuzive', 'Contracte Muncă', 'Drepturi Salariale', 'Litigii Muncă']
  },
  {
    id: 'accidente',
    title: 'Accidente',
    icon: Car,
    description: 'Accidente rutiere, de muncă, despăgubiri, asigurări',
    cases: ['Accidente Auto', 'Accidente Muncă', 'Despăgubiri', 'RCA/CASCO']
  }
]

export default function PracticeAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal">
            Domenii de <span className="text-terracotta">Practică</span>
          </h2>
          <p className="text-xl text-charcoal-light max-w-2xl mx-auto">
            Expertiza noastră acoperă toate domeniile esențiale ale dreptului pentru protejarea intereselor dumneavoastră
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area) => {
            const Icon = area.icon
            return (
              <Link
                key={area.id}
                href={`/domenii-practica#${area.id}`}
                className="group bg-white border-2 border-sage/20 hover:border-sage rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-sage/10 rounded-lg flex items-center justify-center group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-sage group-hover:text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-serif font-bold mb-3 text-charcoal group-hover:text-sage transition-colors">
                  {area.title}
                </h3>

                <p className="text-charcoal-light mb-4">
                  {area.description}
                </p>

                <ul className="space-y-2">
                  {area.cases.map((caseType, idx) => (
                    <li key={idx} className="text-sm text-charcoal-light flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-terracotta rounded-full" />
                      {caseType}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-sage font-semibold flex items-center gap-2 group-hover:gap-4 transition-all">
                  Află mai mult
                  <span className="group-hover:translate-x-2 transition-transform">→</span>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="text-center mt-12">
          <Link href="/domenii-practica" className="btn-primary inline-flex">
            Vezi Toate Domeniile
          </Link>
        </div>
      </div>
    </section>
  )
}
