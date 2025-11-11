import type { Metadata } from 'next'
import PracticeAreasDetail from '@/components/PracticeAreasDetail'
import ContactSidebar from '@/components/ContactSidebar'

export const metadata: Metadata = {
  title: 'Domenii de Practică | Cabinet Avocat Pujină Mihaela',
  description: 'Servicii juridice complete: Dreptul familiei, penal, civil, comercial, muncii și accidente. Cabinet avocatură Fălticeni, Suceava.',
  keywords: 'avocat divorț Fălticeni, avocat penal Suceava, drept familiei, avocat moșteniri, avocat muncă',
}

export default function PracticePage() {
  return (
    <div className="min-h-screen bg-offwhite">
      {/* Header */}
      <div className="bg-sage text-white section-padding">
        <div className="container-custom">
          <nav className="text-sm mb-4 text-white/80">
            <a href="/" className="hover:text-cream transition-colors">Acasă</a>
            <span className="mx-2">/</span>
            <span className="text-white">Domenii de Practică</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Domenii de <span className="text-cream">Practică</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Oferim servicii juridice complete și personalizate pentru persoane fizice și juridice în Fălticeni, Suceava și împrejurimi
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Practice Areas */}
          <div className="lg:col-span-2">
            <PracticeAreasDetail />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ContactSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}
