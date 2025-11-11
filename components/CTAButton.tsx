import Link from 'next/link'
import { ArrowRight, Phone } from 'lucide-react'

interface CTAButtonProps {
  variant?: 'primary' | 'secondary' | 'phone'
  children: React.ReactNode
  href?: string
  onClick?: () => void
  className?: string
  icon?: boolean
}

export default function CTAButton({
  variant = 'primary',
  children,
  href,
  onClick,
  className = '',
  icon = false
}: CTAButtonProps) {
  const baseClasses = variant === 'primary'
    ? 'btn-primary'
    : variant === 'secondary'
    ? 'btn-secondary'
    : 'bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'

  const content = (
    <>
      {variant === 'phone' && <Phone className="w-5 h-5" />}
      <span>{children}</span>
      {icon && variant !== 'phone' && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
    </>
  )

  const combinedClasses = `flex items-center gap-2 group ${baseClasses} ${className}`

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={combinedClasses}>
      {content}
    </button>
  )
}
