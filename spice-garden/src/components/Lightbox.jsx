import { useEffect, useCallback } from 'react'

// Keyboard-navigable lightbox: Esc closes, arrow keys move between images.
export default function Lightbox({ images, index, onClose, onNavigate }) {
  const prev = useCallback(
    () => onNavigate((index - 1 + images.length) % images.length),
    [index, images.length, onNavigate]
  )
  const next = useCallback(
    () => onNavigate((index + 1) % images.length),
    [index, images.length, onNavigate]
  )

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, prev, next])

  const image = images[index]

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={image.alt}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <button
        className="lightbox__btn lightbox__btn--close"
        onClick={onClose}
        aria-label="Close gallery"
        autoFocus
      >
        ×
      </button>
      <button
        className="lightbox__btn lightbox__btn--prev"
        onClick={prev}
        aria-label="Previous image"
      >
        ‹
      </button>
      <figure className="lightbox__figure">
        <img src={image.src} alt={image.alt} />
        <figcaption className="lightbox__caption">{image.alt}</figcaption>
      </figure>
      <button
        className="lightbox__btn lightbox__btn--next"
        onClick={next}
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  )
}
