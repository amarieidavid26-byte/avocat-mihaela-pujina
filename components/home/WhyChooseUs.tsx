import { Award, Clock, Heart, Scale, TrendingUp, Users } from 'lucide-react'

const benefits = [
  {
    icon: Award,
    title: 'Experiență Dovedită',
    description: '15+ ani de practică juridică cu sute de cazuri câștigate în toate domeniile dreptului',
    stat: '15+ ani'
  },
  {
    icon: Users,
    title: 'Abordare Personalizată',
    description: 'Fiecare client primește atenție individuală și strategii adaptate situației sale unice',
    stat: '55+ clienți'
  },
  {
    icon: TrendingUp,
    title: 'Rată de Succes Ridicată',
    description: 'Rezultate excelente datorită pregătirii amănunțite și cunoașterii aprofundate a legii',
    stat: '90%+ succes'
  },
  {
    icon: Clock,
    title: 'Disponibilitate Maximă',
    description: 'Program flexibil și consultații urgente pentru situații care necesită intervenție rapidă',
    stat: 'L-S: 07-17'
  },
  {
    icon: Heart,
    title: 'Empatie și Profesionalism',
    description: 'Înțelegem că problemele legale sunt stresante și oferim suport complet pe tot parcursul procesului',
    stat: '100% dedicare'
  },
  {
    icon: Scale,
    title: 'Laureat Firma de Aur',
    description: 'Recunoaștere oficială pentru excelență în servicii juridice și satisfacția clienților',
    stat: 'Premiat 2023'
  }
]

export default function WhyChooseUs() {
  return (
    <section className="section-padding bg-offwhite relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sage/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal">
            De ce să ne <span className="text-terracotta">alegeți?</span>
          </h2>
          <p className="text-xl text-charcoal-light max-w-3xl mx-auto">
            Combinăm experiența juridică cu o abordare umană, oferind servicii de calitate superioară și rezultate concrete
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div
                key={index}
                className="bg-white border-2 border-sage/20 hover:border-sage rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 card-hover"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-sage rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-terracotta text-sm font-bold mb-1">{benefit.stat}</div>
                    <h3 className="text-xl font-serif font-bold text-charcoal">{benefit.title}</h3>
                  </div>
                </div>
                <p className="text-charcoal-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            )
          })}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 pt-12 border-t-2 border-sage/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-terracotta mb-2">15+</div>
              <div className="text-charcoal">Ani Experiență</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-terracotta mb-2">55+</div>
              <div className="text-charcoal">Review-uri de 5 Stele</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-terracotta mb-2">500+</div>
              <div className="text-charcoal">Cazure Câștigate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-terracotta mb-2">5.0</div>
              <div className="text-charcoal">Rating Google</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
