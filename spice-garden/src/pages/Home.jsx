import { useState } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import DishCard from '../components/DishCard'
import QuickView from '../components/QuickView'
import Badges from '../components/Badges'
import ReviewsSlider from '../components/ReviewsSlider'
import usePageMeta from '../hooks/usePageMeta'
import { RESTAURANT, WHY_US } from '../data/restaurant'
import { menu, TODAYS_SPECIAL, galleryImages } from '../data/menu'
import logo from '../assets/logo.jpg'
import heroImg from '../assets/saffron-butter-chicken.png'

// Featured dishes on the homepage = every "popular" dish, capped at 6.
const FEATURED = menu
  .flatMap((cat) => cat.dishes)
  .filter((d) => d.popular)
  .slice(0, 6)

// Instagram-style grid pulls the freshest dish shots.
const INSTA = galleryImages.slice(0, 6)

export default function Home() {
  usePageMeta(
    'Spice Garden — Fine Dining Restaurant in Kamothe, Navi Mumbai',
    'Premium fine dining at Spice Garden, Kamothe, Navi Mumbai. Chef specials, luxury ambience, private dining. Reserve a table or WhatsApp us.'
  )

  const [quickView, setQuickView] = useState(null)

  return (
    <>
      <Hero image={heroImg} title={RESTAURANT.name} tagline={RESTAURANT.tagline} full scrollHint>
        <img src={logo} alt="" className="hero__logo" />
        <p className="hero__sub">
          A premium dining experience in the heart of Kamothe, Navi Mumbai — authentic flavours,
          luxury ambience, and hospitality that feels like home.
        </p>
        <div className="hero__actions">
          <Link to="/reservations" className="btn btn--gold">
            Reserve a Table
          </Link>
          <Link to="/menu" className="btn btn--ghost">
            View the Menu
          </Link>
          <a className="btn btn--whatsapp" href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
            WhatsApp Us
          </a>
        </div>
      </Hero>

      {/* Featured dishes */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">Signature Plates</span>
              <h2>Featured Dishes</h2>
              <hr className="divider" />
              <p>The plates our guests come back for — tap any dish for a closer look.</p>
            </div>
          </Reveal>
          <div className="card-grid">
            {FEATURED.map((dish, i) => (
              <Reveal key={dish.name} delay={i * 0.08}>
                <DishCard dish={dish} onQuickView={setQuickView} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Today's special — fish curry promotional artwork */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="special glass">
              <img src={TODAYS_SPECIAL.image} alt={TODAYS_SPECIAL.name} className="special__img" loading="lazy" />
              <div className="special__body">
                <span className="eyebrow">Today’s Special · Chef’s Counter</span>
                <h2>{TODAYS_SPECIAL.name}</h2>
                <Badges dish={TODAYS_SPECIAL} />
                <p style={{ color: 'var(--color-text-muted)' }}>{TODAYS_SPECIAL.desc}</p>
                <p className="dish-feature__price" style={{ fontSize: '1.4rem' }}>
                  ₹{TODAYS_SPECIAL.price}
                </p>
                <Link to="/reservations" className="btn btn--gold btn--sm">
                  Reserve Before It’s Gone
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">The Spice Garden Difference</span>
              <h2>Why Choose Us</h2>
              <hr className="divider" />
            </div>
          </Reveal>
          <div className="why-grid">
            {WHY_US.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="why-card glass">
                  <div className="why-card__icon" aria-hidden="true">
                    {item.icon}
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">Guest Love</span>
              <h2>What Our Guests Say</h2>
              <hr className="divider" />
            </div>
          </Reveal>
          <Reveal>
            <ReviewsSlider />
          </Reveal>
        </div>
      </section>

      {/* Instagram */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">Follow Along</span>
              <h2>{RESTAURANT.social.instagramHandle} on Instagram</h2>
              <hr className="divider" />
              <p>Fresh plates, behind-the-scenes, and tonight’s specials — join us on Instagram.</p>
            </div>
          </Reveal>
          <Reveal>
            <div className="insta-grid">
              {INSTA.map((img) => (
                <a
                  key={img.alt}
                  href={RESTAURANT.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`See ${img.alt} on Instagram`}
                >
                  <img src={img.src} alt={img.alt} loading="lazy" />
                </a>
              ))}
            </div>
          </Reveal>
          <div style={{ textAlign: 'center', marginTop: '1.8rem' }}>
            <a
              className="btn btn--ghost btn--sm"
              href={RESTAURANT.social.instagram}
              target="_blank"
              rel="noreferrer"
            >
              Follow {RESTAURANT.social.instagramHandle}
            </a>
          </div>
        </div>
      </section>

      <QuickView dish={quickView} onClose={() => setQuickView(null)} />
    </>
  )
}
