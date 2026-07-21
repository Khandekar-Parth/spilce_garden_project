import { useState } from 'react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { RESTAURANT } from '../data/restaurant'
import heroImg from '../assets/signature-cocktails.png'
import lambImg from '../assets/slow-braised-lamb-shank.png'
import pulaoImg from '../assets/herbed-pulao.png'
import fondantImg from '../assets/dark-chocolate-fondant.png'
import cocktailImg from '../assets/signature-cocktails.png'

// Editable packages — occasion-first, per the brief.
const PACKAGES = [
  {
    title: 'Birthday Celebrations',
    capacity: 'Up to 25 guests',
    desc: 'Personalised cake, décor touches, and a set menu the whole table will love. From ₹1,200 per guest.',
    image: fondantImg,
  },
  {
    title: 'Anniversaries & Proposals',
    capacity: '2 – 12 guests',
    desc: 'Candle-lit corners, curated playlists, and a champagne moment timed to perfection. Bespoke pricing.',
    image: cocktailImg,
  },
  {
    title: 'Corporate Dinners',
    capacity: 'Up to 40 guests',
    desc: 'Private space, AV support, and menus that impress clients and teams alike. From ₹1,500 per guest.',
    image: pulaoImg,
  },
  {
    title: 'Private Chef’s Table',
    capacity: '8 – 12 guests',
    desc: 'A front-row seat to the kitchen with a bespoke tasting menu narrated by the chef. From ₹2,500 per guest.',
    image: lambImg,
  },
]

export default function PrivateDining() {
  usePageMeta(
    'Private Dining & Events — Spice Garden, Kamothe, Navi Mumbai',
    'Birthdays, anniversaries, proposals, and corporate dinners at Spice Garden, Kamothe — private spaces, custom menus, effortless planning on WhatsApp.'
  )

  const [values, setValues] = useState({ name: '', contact: '', details: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.contact.trim()) next.contact = 'Please enter a phone number or email.'
    if (!values.details.trim()) next.details = 'Tell us a little about your event.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  const whatsappEnquiry = RESTAURANT.whatsappReserve(
    `Hello Spice Garden! I'd like to plan a private event.\nName: ${values.name}\nDetails: ${values.details}`
  )

  return (
    <>
      <Hero image={heroImg} title="Private Dining & Events" tagline="Evenings made yours" />

      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">Occasions</span>
              <h2>Celebrate at the Garden</h2>
              <hr className="divider" />
              <p>
                From an intimate proposal to a full corporate takeover — dedicated service,
                tailored menus, and a team that plans it with you on WhatsApp.
              </p>
            </div>
          </Reveal>

          <div className="card-grid">
            {PACKAGES.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <article className="dish-feature glass" style={{ cursor: 'default' }}>
                  <div className="dish-feature__imgwrap">
                    <img src={s.image} alt={s.title} loading="lazy" />
                  </div>
                  <div className="dish-feature__body">
                    <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{s.title}</h3>
                    <p style={{ color: 'var(--color-gold)', fontWeight: 600, fontSize: '0.82rem', margin: '0.3rem 0 0.5rem' }}>
                      {s.capacity}
                    </p>
                    <p className="dish-feature__desc">{s.desc}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">Enquire</span>
              <h2>Plan Your Event</h2>
              <hr className="divider" />
              <p>
                Share a few details and our events team will be in touch within a working day —
                or skip the form and{' '}
                <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                  chat with us on WhatsApp
                </a>
                .
              </p>
            </div>
          </Reveal>

          {submitted ? (
            <div className="form form__success glass">
              <h3>Enquiry received!</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Thank you, {values.name.split(' ')[0]}. Our events team will reach out shortly to
                start planning your evening.
              </p>
              <a className="btn btn--whatsapp" href={whatsappEnquiry} target="_blank" rel="noreferrer" style={{ marginTop: '1rem' }}>
                Chat Now on WhatsApp
              </a>
            </div>
          ) : (
            <Reveal>
              <form className="form glass" onSubmit={handleSubmit} noValidate>
                <div className={`form__group${errors.name ? ' form__group--error' : ''}`}>
                  <label htmlFor="pd-name">Your Name *</label>
                  <input
                    id="pd-name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
                  />
                  {errors.name && (
                    <span className="form__error" role="alert">
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className={`form__group${errors.contact ? ' form__group--error' : ''}`}>
                  <label htmlFor="pd-contact">Phone or Email *</label>
                  <input
                    id="pd-contact"
                    type="text"
                    value={values.contact}
                    onChange={(e) => setValues((v) => ({ ...v, contact: e.target.value }))}
                  />
                  {errors.contact && (
                    <span className="form__error" role="alert">
                      {errors.contact}
                    </span>
                  )}
                </div>
                <div className={`form__group${errors.details ? ' form__group--error' : ''}`}>
                  <label htmlFor="pd-details">Event Details *</label>
                  <textarea
                    id="pd-details"
                    placeholder="Occasion, date, number of guests, preferred package…"
                    value={values.details}
                    onChange={(e) => setValues((v) => ({ ...v, details: e.target.value }))}
                  />
                  {errors.details && (
                    <span className="form__error" role="alert">
                      {errors.details}
                    </span>
                  )}
                </div>
                <button type="submit" className="btn btn--gold">
                  Send Enquiry
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
