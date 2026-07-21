// Cinematic hero: Ken Burns animated background, dark radial overlay,
// optional scroll indicator. CSS handles the animation (see .hero__bg).
export default function Hero({ image, title, tagline, children, full = false, scrollHint = false }) {
  return (
    <section className={`hero${full ? ' hero--full' : ''}`}>
      <div className="hero__bg" style={{ backgroundImage: `url(${image})` }} aria-hidden="true" />
      <div className="hero__content">
        {tagline && <p className="hero__tagline">{tagline}</p>}
        <h1>{title}</h1>
        {children}
      </div>
      {scrollHint && (
        <div className="hero__scroll" aria-hidden="true">
          ↓
        </div>
      )}
    </section>
  )
}
