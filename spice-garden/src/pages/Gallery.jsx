import { useState } from 'react'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import usePageMeta from '../hooks/usePageMeta'
import { galleryImages } from '../data/menu'

export default function Gallery() {
  usePageMeta(
    'Gallery — Spice Garden, Kamothe, Navi Mumbai',
    'A look at the plates, pours, and craft of Spice Garden, Kamothe, Navi Mumbai.'
  )

  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="section page-offset">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Gallery</span>
            <h2>A Feast for the Eyes</h2>
            <hr className="divider" />
            <p>
              A glimpse of the plates and pours that leave our kitchen each evening. Click any
              image to view it larger.
            </p>
          </div>
        </Reveal>

        {/* Masonry layout — items keep natural aspect ratios */}
        <div className="masonry">
          {galleryImages.map((img, i) => (
            <Reveal key={img.alt} delay={(i % 4) * 0.06}>
              <button
                className="masonry__item"
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${img.alt}`}
                data-label={img.alt}
              >
                <img src={img.src} alt={img.alt} loading="lazy" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNavigate={setActiveIndex}
        />
      )}
    </section>
  )
}
