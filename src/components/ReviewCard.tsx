import { useState } from 'react'
import type { StudioReview } from '../data/reviews'
import StarRating from './StarRating'

const PREVIEW_CHARS = 160

type Props = {
  review: StudioReview
}

export default function ReviewCard({ review }: Props) {
  const [open, setOpen] = useState(false)
  const needsMore = review.body.length > PREVIEW_CHARS
  const text = !needsMore || open ? review.body : `${review.body.slice(0, PREVIEW_CHARS).trimEnd()}…`

  return (
    <article className="bg-mist rounded-xl p-5 h-full flex flex-col">
      <StarRating rating={review.rating} />
      <p className="text-xs text-gray-500 mt-2">
        {review.author}, {review.date}
      </p>
      <h3 className="text-base font-semibold text-gray-900 mt-2 leading-snug">{review.title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed mt-2 flex-1">
        {text}
        {needsMore && (
          <>
            {' '}
            <button
              type="button"
              onClick={() => setOpen(v => !v)}
              className="text-forest-600 font-medium hover:underline"
            >
              {open ? 'less' : 'more'}
            </button>
          </>
        )}
      </p>
    </article>
  )
}
