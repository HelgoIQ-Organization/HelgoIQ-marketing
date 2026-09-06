type Props = {
  title: string
  children: React.ReactNode
  className?: string
}

export default function ProductChrome({ title, children, className = '' }: Props) {
  return (
    <div
      className={`rounded-xl overflow-hidden border border-forest-200/80 bg-white shadow-lg ${className}`}
    >
      <div className="flex items-center gap-2 px-3 py-2 bg-forest-50 border-b border-forest-100">
        <span className="flex gap-1" aria-hidden>
          <span className="w-2 h-2 rounded-full bg-forest-200" />
          <span className="w-2 h-2 rounded-full bg-sage" />
          <span className="w-2 h-2 rounded-full bg-forest-400" />
        </span>
        <span className="text-[10px] font-medium text-forest-700 truncate">{title}</span>
      </div>
      {children}
    </div>
  )
}