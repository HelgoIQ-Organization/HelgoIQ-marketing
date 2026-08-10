import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { BOOK_DEMO_PATH, TRIAL_SIGNUP_URL } from '../lib/urls'

type Variant = 'light' | 'dark' | 'forest'

type Props = {
  variant?: Variant
  size?: 'sm' | 'md'
  className?: string
  trialLabel?: string
  demoLabel?: string
}

const styles: Record<
  Variant,
  { trial: string; demo: string }
> = {
  light: {
    trial: 'btn-primary',
    demo: 'btn-secondary',
  },
  dark: {
    trial: 'btn-dark',
    demo:
      'inline-flex items-center gap-2 border border-white/40 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-white/10 transition-all duration-200',
  },
  forest: {
    trial: 'btn-dark',
    demo:
      'inline-flex items-center gap-2 border border-forest-400/50 text-white px-6 py-3 rounded-lg font-medium text-sm hover:bg-forest-500/30 transition-all duration-200',
  },
}

export default function CtaButtons({
  variant = 'light',
  size = 'md',
  className = '',
  trialLabel = 'Start free trial',
  demoLabel = 'Book a demo',
}: Props) {
  const sizeCls = size === 'sm' ? 'text-sm py-2 px-5' : 'text-base py-3 px-7'
  const pair = styles[variant]

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <a href={TRIAL_SIGNUP_URL} className={`${pair.trial} ${sizeCls}`}>
        {trialLabel}
        <ArrowRight size={16} />
      </a>
      <Link to={BOOK_DEMO_PATH} className={`${pair.demo} ${sizeCls}`}>
        {demoLabel}
      </Link>
    </div>
  )
}
