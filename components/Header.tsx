'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Phone, Menu, X, Scale } from 'lucide-react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navigation = [
    { name: 'Acasă', href: '/' },
    { name: 'Domenii Practică', href: '/domenii-practica' },
    { name: 'Despre', href: '/despre' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg border-b-2 border-sage">
      <nav className="container-custom flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Scale className="w-8 h-8 text-sage group-hover:rotate-12 transition-transform duration-300" />
          <div className="hidden md:block">
            <div className="text-sage font-serif font-bold text-xl leading-tight">
              Cabinet Avocat
            </div>
            <div className="text-charcoal text-sm">Pujină Mihaela</div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-charcoal hover:text-sage transition-colors duration-300 font-medium"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Phone CTA */}
        <a
          href="tel:0753434005"
          className="hidden md:flex items-center gap-2 btn-primary"
        >
          <Phone className="w-5 h-5" />
          <span className="font-bold">0753 434 005</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-sage p-2"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-sage">
          <div className="px-4 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-charcoal hover:text-sage transition-colors py-2 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <a
              href="tel:0753434005"
              className="flex items-center justify-center gap-2 btn-primary w-full mt-4"
            >
              <Phone className="w-5 h-5" />
              <span className="font-bold">SUNĂ ACUM: 0753 434 005</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
