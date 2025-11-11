'use client'

import { useState, useEffect } from 'react'
import { X, Phone, Calendar } from 'lucide-react'

export default function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if popup was already shown in this session
    const shown = sessionStorage.getItem('exitPopupShown')
    if (shown) {
      setHasShown(true)
      return
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger if mouse is leaving from the top of the page
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem('exitPopupShown', 'true')
      }
    }

    // Add event listener after a short delay to avoid false positives
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 3000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-sage/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 animate-in slide-in-from-top-4 duration-500 border-2 border-sage/20">
        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-charcoal-light hover:text-charcoal transition-colors"
          aria-label="Închide"
        >
          <X size={24} />
        </button>

        {/* Content */}
        <div className="p-8 text-center">
          {/* Icon */}
          <div className="w-20 h-20 bg-sage rounded-full flex items-center justify-center mx-auto mb-6">
            <Phone className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <h2 className="text-3xl font-serif font-bold mb-4 text-charcoal">
            Stați! Nu plecați încă!
          </h2>

          <p className="text-xl text-charcoal mb-6">
            Prima consultație este <span className="text-terracotta font-bold">GRATUITĂ</span>
          </p>

          <p className="text-charcoal-light mb-8">
            Vă oferim o consultație juridică profesionistă fără niciun cost.
            Discutăm situația dumneavoastră și găsim cea mai bună soluție.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-sage/20">
            <div>
              <div className="text-2xl font-bold text-terracotta">15+</div>
              <div className="text-xs text-charcoal-light">Ani Experiență</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-terracotta">55+</div>
              <div className="text-xs text-charcoal-light">Review-uri de 5 Stele</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-terracotta">5.0</div>
              <div className="text-xs text-charcoal-light">Rating Google</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="space-y-3">
            <a
              href="tel:0753434005"
              className="block w-full bg-sage hover:bg-sage-light text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
            >
              <Phone className="inline-block w-5 h-5 mr-2" />
              SUNĂ ACUM: 0753 434 005
            </a>

            <a
              href="/contact"
              onClick={() => setIsVisible(false)}
              className="block w-full border-2 border-terracotta text-terracotta hover:bg-terracotta hover:text-white font-semibold py-4 px-6 rounded-lg transition-all"
            >
              <Calendar className="inline-block w-5 h-5 mr-2" />
              Programează Online
            </a>
          </div>

          {/* Trust indicators */}
          <p className="mt-6 text-xs text-charcoal-light">
            🔒 Confidențialitate garantată • ⚖️ Consultație profesională • ✓ Fără obligații
          </p>
        </div>
      </div>
    </div>
  )
}
