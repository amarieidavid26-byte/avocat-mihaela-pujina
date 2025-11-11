'use client'

import { useState } from 'react'
import { Send, CheckCircle, AlertCircle } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        setStatus('success')
        e.currentTarget.reset()
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  const caseTypes = [
    'Dreptul Familiei (Divorț, Custodie, etc.)',
    'Drept Penal (Apărare, Plângeri)',
    'Drept Civil (Contracte, Proprietăți, Moșteniri)',
    'Drept Comercial (Societăți, Recuperare Creanțe)',
    'Dreptul Muncii (Concedieri, Contracte)',
    'Accidente (Rutiere, de Muncă, Despăgubiri)',
    'Altele'
  ]

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Hidden Web3Forms fields */}
      <input type="hidden" name="access_key" value="PLACEHOLDER-KEY-ADD-LATER" />
      <input type="hidden" name="subject" value="Mesaj nou de pe website - Cabinet Avocat Pujină" />
      <input type="hidden" name="from_name" value="Website Contact Form" />

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-charcoal">
          Nume complet *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border-2 border-sage/20 rounded-lg focus:border-sage focus:outline-none transition-colors"
          placeholder="Ion Popescu"
        />
      </div>

      {/* Email & Phone */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-charcoal">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border-2 border-sage/20 rounded-lg focus:border-sage focus:outline-none transition-colors"
            placeholder="email@exemplu.ro"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-charcoal">
            Telefon *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            className="w-full px-4 py-3 border-2 border-sage/20 rounded-lg focus:border-sage focus:outline-none transition-colors"
            placeholder="0753 434 005"
          />
        </div>
      </div>

      {/* Case Type */}
      <div>
        <label htmlFor="caseType" className="block text-sm font-semibold mb-2 text-charcoal">
          Tip caz *
        </label>
        <select
          id="caseType"
          name="caseType"
          required
          className="w-full px-4 py-3 border-2 border-sage/20 rounded-lg focus:border-sage focus:outline-none transition-colors bg-white"
        >
          <option value="">Selectați tipul cazului...</option>
          {caseTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      {/* Urgency & Contact Method */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="urgency" className="block text-sm font-semibold mb-2 text-charcoal">
            Nivel urgență
          </label>
          <select
            id="urgency"
            name="urgency"
            className="w-full px-4 py-3 border-2 border-sage/20 rounded-lg focus:border-sage focus:outline-none transition-colors bg-white"
          >
            <option value="low">Scăzută (în următoarele săptămâni)</option>
            <option value="normal">Normală (în câteva zile)</option>
            <option value="high">Ridicată (în 24-48 ore)</option>
            <option value="urgent">Urgentă (cât mai curând)</option>
          </select>
        </div>

        <div>
          <label htmlFor="contactMethod" className="block text-sm font-semibold mb-2 text-charcoal">
            Prefer contact prin
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            className="w-full px-4 py-3 border-2 border-sage/20 rounded-lg focus:border-sage focus:outline-none transition-colors bg-white"
          >
            <option value="phone">Telefon</option>
            <option value="email">Email</option>
            <option value="whatsapp">WhatsApp</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-charcoal">
          Descrieți situația dumneavoastră *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="w-full px-4 py-3 border-2 border-sage/20 rounded-lg focus:border-sage focus:outline-none transition-colors resize-none"
          placeholder="Vă rugăm să descrieți pe scurt situația dumneavoastră și ce fel de asistență juridică aveți nevoie..."
        />
      </div>

      {/* Honeypot for spam protection */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

      {/* Status Messages */}
      {status === 'success' && (
        <div className="bg-green-50 border-2 border-green-500 rounded-lg p-4 flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-green-800">Mesaj trimis cu succes!</div>
            <div className="text-sm text-green-700">Vă vom contacta în cel mai scurt timp. Verificați și folderul spam.</div>
          </div>
        </div>
      )}

      {status === 'error' && (
        <div className="bg-red-50 border-2 border-red-500 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
          <div>
            <div className="font-bold text-red-800">Eroare la trimitere</div>
            <div className="text-sm text-red-700">Ne pare rău, a apărut o eroare. Vă rugăm încercați din nou sau sunați direct la 0753 434 005.</div>
          </div>
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            <span>Se trimite...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Trimite Mesajul</span>
          </>
        )}
      </button>

      {/* GDPR Notice */}
      <p className="text-xs text-charcoal-light text-center">
        Prin trimiterea formularului, sunteți de acord cu{' '}
        <a href="#" className="text-terracotta hover:text-terracotta-dark transition-colors">politica de confidențialitate</a>.
        Datele dumneavoastră vor fi utilizate exclusiv pentru comunicare juridică.
      </p>
    </form>
  )
}