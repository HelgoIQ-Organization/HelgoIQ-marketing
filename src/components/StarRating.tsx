type Props = {
  rating?: number
  size?: number
  className?: string
}

export default function StarRating({ rating = 5, size = 16, className = '' }: Props) {
  const clamped = Math.max(0, Math.min(5, rating))
  return (
    <div className={`flex items-center gap-0.5 ${className}`} aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 20 20"
          fill={i < clamped ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth={i < clamped ? 0 : 1.4}
          className={i < clamped ? 'text-forest-500' : 'text-gray-300'}
          aria-hidden
        >
          <path d="M10 1.6l2.35 4.76 5.25.76-3.8 3.7.9 5.23L10 13.58 5.3 16.05l.9-5.23-3.8-3.7 5.25-.76L10 1.6z" />
        </svg>
      ))}
    </div>
  )
}
