'use client'

import { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    name: 'Ana Caty',
    rating: 5,
    text: 'Dacă aveți nevoie de un avocat care să vă reprezinte până în pânzele albe, Mihaela Pujină este alegerea perfectă. S-a implicat total în caz, analizând fiecare detaliu și căutând mereu cea mai bună strategie. Cu profesionalism, determinare și empatie, nu se dă bătută până nu obține rezultatul dorit. Recomand cu toată încrederea!',
    date: '2025'
  },
  {
    name: 'Claudiu Arseni',
    rating: 5,
    text: 'Un avocat axat pe rezultat, bine pregătit, cu bune abilități de comunicare, strict și la obiect, focusat, de care nu veți fi dezamăgit/ă. Face față cu brio provocărilor și poate întoarce oricând situația în favoarea dumneavoastră.',
    date: '2025'
  },
  {
    name: 'AndanicaFM', 
    rating: 5,
    text: 'Doamna Pujină mi-a fost de mare ajutor în obținerea unor acte și și-a făcut timp pentru mine, deși este foarte ocupată. Eu fiind stabilită în străinătate, m-a scutit efectiv de un drum în țară. Am putut rezolva astfel totul online :) Mulțumesc mult!',
    date: '2025'
  },
  {
    name: 'Diana Mocanu',
    rating: 5,
    text: 'Recomand cu toata încrederea pe doamna avocata Pujina Mihaela . Pot spune ca am văzut-o in acțiune și știu ca este ca o “fiara” in instanța . Datorită ei am câștigat procesul și ii sunt veșnic recunoscătoare .',
    date: '2023'
  },
  {
    name: 'Alexandra Dascălu',
    rating: 5,
    text: 'Profesionalism și seriozitate!Doamna avocata este foarte amabilă și disponibilă pentru orice informație.O recomand cu drag Mihaela Pujină!',
    date: '2025'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const next = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const previous = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-offwhite to-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-charcoal">
            Ce spun <span className="text-terracotta">clienții</span> noștri
          </h2>
          <p className="text-xl text-charcoal-light mb-4">
            55+ recenzii cu 5 stele pe Google
          </p>
          <div className="flex items-center justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-terracotta text-terracotta" />
            ))}
            <span className="ml-2 text-lg font-bold text-charcoal">5.0 / 5.0</span>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 relative border-2 border-sage/10">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-sage/20" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-terracotta text-terracotta" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-lg md:text-xl text-charcoal mb-6 leading-relaxed italic">
                "{testimonials[currentIndex].text}"
              </p>

              {/* Author */}
              <div className="border-t pt-4">
                <div className="font-bold text-lg text-charcoal">{testimonials[currentIndex].name}</div>
                <div className="text-charcoal-light text-sm">{testimonials[currentIndex].date}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={previous}
              className="w-12 h-12 rounded-full bg-sage hover:bg-sage-light text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="Testimonial anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false)
                    setCurrentIndex(index)
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-terracotta' : 'w-2 bg-sage/30'
                  }`}
                  aria-label={`Du-te la testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full bg-sage hover:bg-sage-light text-white flex items-center justify-center transition-colors shadow-md"
              aria-label="Testimonial următor"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Google Reviews Link */}
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/maps"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sage hover:text-sage-dark font-semibold transition-colors"
          >
            Vezi toate recenziile pe Google
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
