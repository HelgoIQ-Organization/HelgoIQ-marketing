import { useEffect } from 'react'
import { X } from 'lucide-react'

type Props = {
  open: boolean
  onClose: () => void
}

/** 60s demo — placeholder until Declan supplies the recording. */
export default function DemoVideoModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 bg-forest-900/70 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="demo-video-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl rounded-2xl bg-white shadow-xl overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <h2 id="demo-video-title" className="text-base font-semibold text-gray-900">
            See it working
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:bg-mist hover:text-forest-600"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <div className="aspect-video bg-forest-900 flex flex-col items-center justify-center gap-3 px-6 text-center">
          <p
            className="text-2xl text-white/90"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic' }}
          >
            HelgoIQ
          </p>
          <p className="text-sm text-forest-100/90 max-w-sm leading-relaxed">
            Demo video — pending recording. A 60-second walkthrough will play here once Declan
            supplies the file.
          </p>
        </div>
      </div>
    </div>
  )
}
