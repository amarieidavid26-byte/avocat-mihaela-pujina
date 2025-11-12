import type { Metadata } from 'next'
import Hero from '@/components/home/Hero'
import PracticeAreas from '@/components/home/PracticeAreas'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import CTABanner from '@/components/home/CTABanner'

export const metadata: Metadata = {
  description: 'Cabinet de avocatură cu 15+ ani experiență în Fălticeni și Suceava. Servicii complete: drept familiei, penal, civil, comercial. Consultație gratuită: 0753 434 005.',
}

export default function Home() {
  return (
    <>
      <Hero />
      <PracticeAreas />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  )
}
