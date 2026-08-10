import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { DEMO_PATH, SIGNUP_URL } from '../lib/cta'

type Variant = 'light' | 'dark' | 'on-forest'

type Props = {
  variant?: Variant
  size?: 'sm' | 'md'
  className?: string
  primaryLabel?: string
  secondaryLabel?: string
}

const sizeClasses = {
  sm: 'text-sm py-2.5 px-5',
  md: 'text-base py-3 px-7',
}

export default function CtaGroup({
  variant = 'light',
  size = 'md',
  className = '',
  primaryLabel = 'Start free trial',
  secondaryLabel = 'Book a demo',
}: Props) {
  const primary =
    variant === 'on-forest'
      ? `btn-dark ${sizeClasses[size]}`
      : `btn-primary ${sizeClasses[size]}`

  const secondary =
    variant === 'on-forest'
      ? `inline-flex items-center justify-center gap-2 border border-forest-400/50 text-white ${sizeClasses[size]} rounded-lg font-medium hover:bg-forest-500/30 transition-all duration-200`
      : variant === 'dark'
      ? `inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-800 ${sizeClasses[size]} rounded-lg font-medium hover:bg-gray-50 transition-all duration-200`
      : `btn-secondary ${sizeClasses[size]}`

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a href={SIGNUP_URL} className={`${primary} justify-center`}>
        {primaryLabel}
        <ArrowRight size={size === 'sm' ? 14 : 16} />
      </a>
      <Link to={DEMO_PATH} className={`${secondary} justify-center`}>
        {secondaryLabel}
      </Link>
    </div>
  )
}
