'use client'

import { useState, useEffect } from 'react'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after user scrolls down a bit
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleWhatsAppClick = () => {
    const phoneNumber = '40753434005' // Romanian format for WhatsApp
    const message = encodeURIComponent('Bună ziua, aș dori să programez o consultație.')
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank')
  }

  return (
    <>
      {/* Mobile floating button */}
      <button
        onClick={handleWhatsAppClick}
        className={`fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20BD5A] transition-all duration-300 transform hover:scale-110 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
        }`}
        aria-label="Contact pe WhatsApp"
      >
        <FaWhatsapp size={32} />
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
          !
        </span>
      </button>

      {/* Desktop pulse effect */}
      <div
        className={`fixed bottom-6 right-6 z-40 bg-[#25D366] rounded-full w-16 h-16 animate-ping ${
          isVisible ? 'opacity-20' : 'opacity-0'
        }`}
      />
    </>
  )
}
