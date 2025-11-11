'use client'

import { useState } from 'react'
import { Home, Shield, FileText, Briefcase, HardHat, Car, ChevronDown, Check } from 'lucide-react'
import CTAButton from './CTAButton'

const practiceAreas = [
  {
    id: 'familie',
    title: 'Dreptul Familiei',
    icon: Home,
    description: 'Oferim asistență juridică completă în toate aspectele dreptului familiei, cu empatie și profesionalism.',
    services: [
      'Divorț prin consimțământ sau contencions',
      'Stabilirea și modificarea pensiei de întreținere',
      'Custodia și dreptul de vizită al copiilor',
      'Partajul bunurilor comune',
      'Proceduri de adopție',
      'Tutela și curatela',
      'Obligații de întreținere între rude'
    ],
    cta: 'Situațiile de familie sunt delicate și necesită o abordare umană. Vă ajutăm să navigați prin proces cu demnitate și să obțineți rezultate echitabile.'
  },
  {
    id: 'penal',
    title: 'Drept Penal',
    icon: Shield,
    description: 'Apărare penală dedicată pentru protejarea drepturilor și libertăților dumneavoastră în fața legii.',
    services: [
      'Apărare în fața instanțelor penale',
      'Reprezentare în faza de urmărire penală',
      'Plângeri penale și constituire parte civilă',
      'Contestații în anulare și revizuire',
      'Apărare pentru infracțiuni rutiere',
      'Apărare pentru infracțiuni economice',
      'Asistență juridică în procesele cu minori'
    ],
    cta: 'În cazurile penale, fiecare detaliu contează. Oferim apărare profesionistă și strategii juridice solide pentru protejarea drepturilor dumneavoastră.'
  },
  {
    id: 'civil',
    title: 'Drept Civil',
    icon: FileText,
    description: 'Soluții juridice complete pentru litigii civile, contracte, proprietăți și moșteniri.',
    services: [
      'Redactare și analiză contracte',
      'Litigii de proprietate și uzucapiune',
      'Succesiuni și partaj moștenire',
      'Obligații contractuale și extracontractuale',
      'Anulare și reziliere contracte',
      'Răspundere civilă delictuală',
      'Drepturi reale (proprietate, servituți, uzufruct)'
    ],
    cta: 'Dreptul civil acoperă o gamă largă de situații. Cu experiența noastră, găsim cele mai eficiente soluții pentru protejarea intereselor dumneavoastră.'
  },
  {
    id: 'comercial',
    title: 'Drept Comercial',
    icon: Briefcase,
    description: 'Consultanță juridică pentru afaceri, de la înființare până la soluționarea disputelor comerciale.',
    services: [
      'Înființare SRL, PFA, II și alte forme juridice',
      'Redactare contracte comerciale',
      'Recuperare creanțe și executare silită',
      'Litigii comerciale între societăți',
      'Reorganizare și dizolvare societăți',
      'Protecție proprietate intelectuală',
      'Consultanță pentru tranzacții comerciale'
    ],
    cta: 'Afacerea dumneavoastră merită protecție juridică solidă. Oferim consultanță strategică pentru dezvoltare și soluționare eficientă a disputelor.'
  },
  {
    id: 'munca',
    title: 'Dreptul Muncii',
    icon: HardHat,
    description: 'Protejăm drepturile salariaților și angajatorilor în toate aspectele raporturilor de muncă.',
    services: [
      'Contestare concedieri abuzive',
      'Redactare și verificare contracte de muncă',
      'Litigii privind salariile și drepturile salariale',
      'Hărțuire la locul de muncă',
      'Accidente de muncă și boli profesionale',
      'Discriminare și încălcări ale drepturilor',
      'Consultanță pentru angajatori'
    ],
    cta: 'Drepturile dumneavoastră la locul de muncă sunt importante. Luptăm pentru respectarea lor și obținerea compensațiilor cuvenite.'
  },
  {
    id: 'accidente',
    title: 'Accidente și Despăgubiri',
    icon: Car,
    description: 'Recuperăm despăgubirile cuvenite pentru accidente rutiere, de muncă și alte prejudicii.',
    services: [
      'Accidente rutiere (RCA/CASCO)',
      'Accidente de muncă și boli profesionale',
      'Vătămări corporale și daune morale',
      'Litigii cu companiile de asigurări',
      'Evaluare prejudicii și stabilire despăgubiri',
      'Proceduri de constatare grad de invaliditate',
      'Recuperare cheltuieli medicale'
    ],
    cta: 'După un accident, aveți dreptul la compensații juste. Negociem cu asigurările și reprezentăm interesele dumneavoastră pentru despăgubiri maxime.'
  }
]

export default function PracticeAreasDetail() {
  const [expandedId, setExpandedId] = useState<string>('familie')

  return (
    <div className="space-y-6">
      {practiceAreas.map((area) => {
        const Icon = area.icon
        const isExpanded = expandedId === area.id

        return (
          <div
            key={area.id}
            id={area.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-sage/20 hover:border-sage transition-all"
          >
            {/* Header */}
            <button
              onClick={() => setExpandedId(isExpanded ? '' : area.id)}
              className="w-full p-6 flex items-center justify-between text-left hover:bg-offwhite transition-colors"
            >
              <div className="flex items-center gap-4 flex-1">
                <div className="w-14 h-14 bg-sage rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-1 text-charcoal">{area.title}</h3>
                  <p className="text-charcoal-light">{area.description}</p>
                </div>
              </div>
              <ChevronDown
                className={`w-6 h-6 text-sage transition-transform flex-shrink-0 ml-4 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Expanded Content */}
            {isExpanded && (
              <div className="px-6 pb-6 border-t border-sage/20">
                <div className="pt-6">
                  <h4 className="font-bold text-lg mb-4 text-charcoal">Servicii oferite:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                    {area.services.map((service, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" />
                        <span className="text-charcoal-light">{service}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="bg-cream border-l-4 border-terracotta p-4 rounded mb-6">
                    <p className="text-charcoal italic">{area.cta}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <CTAButton variant="primary" href="/contact" icon>
                      Programează Consultație
                    </CTAButton>
                    <CTAButton variant="phone" href="tel:0753434005">
                      0753 434 005
                    </CTAButton>
                  </div>
                </div>
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}
