type Props = {
  label: string
  imageSrc: string | null
  className?: string
}

/** Real photography when supplied; forest atmosphere placeholder otherwise. */
export default function VerticalCardImage({ label, imageSrc, className = '' }: Props) {
  if (imageSrc) {
    return (
      <img
        src={imageSrc}
        alt={label}
        className={`w-full h-full object-cover ${className}`}
        loading="lazy"
      />
    )
  }

  return (
    <div
      className={`w-full h-full min-h-[140px] hero-atmosphere flex items-end p-4 ${className}`}
      role="img"
      aria-label={label}
    >
      <span className="text-[11px] font-medium text-white/70 leading-snug">{label}</span>
    </div>
  )
}
