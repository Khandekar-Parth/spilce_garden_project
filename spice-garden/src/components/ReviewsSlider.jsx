import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { REVIEWS } from '../data/restaurant'

// Auto-advancing review slider with dot navigation.
export default function ReviewsSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % REVIEWS.length), 5500)
    return () => clearInterval(id)
  }, [])

  const review = REVIEWS[index]

  return (
    <div className="reviews">
      <AnimatePresence mode="wait">
        <motion.figure
          key={index}
          className="review-card glass"
          style={{ margin: 0 }}
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          transition={{ duration: 0.45 }}
        >
          <div className="review-card__stars" aria-label={`${review.rating} out of 5 stars`}>
            {'★'.repeat(review.rating)}
            {'☆'.repeat(5 - review.rating)}
          </div>
          <blockquote className="review-card__text" style={{ margin: 0 }}>
            “{review.text}”
          </blockquote>
          <figcaption className="review-card__name">{review.name}</figcaption>
        </motion.figure>
      </AnimatePresence>

      <div className="reviews__dots" role="tablist" aria-label="Reviews">
        {REVIEWS.map((r, i) => (
          <button
            key={r.name}
            className={`reviews__dot${i === index ? ' reviews__dot--active' : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Show review ${i + 1}`}
            aria-selected={i === index}
            role="tab"
          />
        ))}
      </div>
    </div>
  )
}
