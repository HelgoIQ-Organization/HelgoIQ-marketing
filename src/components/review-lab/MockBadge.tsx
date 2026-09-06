export default function MockBadge({ children = 'Mock — not live' }: { children?: string }) {
  return (
    <p className="text-[10px] font-semibold uppercase tracking-widest text-forest-500 mb-3">
      {children}
    </p>
  )
}