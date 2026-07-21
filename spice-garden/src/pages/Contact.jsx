import { useState } from 'react'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { RESTAURANT } from '../data/restaurant'

export default function Contact() {
  usePageMeta(
    'Contact — Spice Garden, Kamothe, Navi Mumbai',
    'Find Spice Garden at JRJ Complex, Sector 7, Kamothe, Panvel, Navi Mumbai 410209. Call, WhatsApp, or get directions.'
  )

  const { address } = RESTAURANT
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = 'Please enter a valid email address.'
    if (!values.message.trim()) next.message = 'Please write a message.'
    setErrors(next)
    if (Object.keys(next).length === 0) setSubmitted(true)
  }

  return (
    <section className="section page-offset">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>Find Us</h2>
            <hr className="divider" />
          </div>
        </Reveal>

        {/* Quick actions */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              gap: '0.8rem',
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '2.6rem',
            }}
          >
            <a className="btn btn--gold btn--sm" href={RESTAURANT.phoneHref}>
              📞 Click to Call
            </a>
            <a className="btn btn--whatsapp btn--sm" href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
              WhatsApp Chat
            </a>
            <a className="btn btn--ghost btn--sm" href={RESTAURANT.social.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <a className="btn btn--ghost btn--sm" href={RESTAURANT.mapsUrl} target="_blank" rel="noreferrer">
              📍 Get Directions
            </a>
          </div>
        </Reveal>

        <div className="two-col" style={{ alignItems: 'start' }}>
          <Reveal>
            <div className="glass" style={{ padding: '1.8rem' }}>
              <ul className="info-list">
                <li>
                  <span className="label">Address</span>
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    {address.lines.map((line) => (
                      <span key={line}>
                        {line}
                        <br />
                      </span>
                    ))}
                    {address.city}, {address.state} {address.pin}, {address.country}
                  </span>
                </li>
                <li>
                  <span className="label">Phone</span>
                  <a href={RESTAURANT.phoneHref}>{RESTAURANT.phone}</a>
                </li>
                <li>
                  <span className="label">WhatsApp</span>
                  <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                    Message us anytime
                  </a>
                </li>
                <li>
                  <span className="label">Email</span>
                  <a href={`mailto:${RESTAURANT.email}`}>{RESTAURANT.email}</a>
                </li>
                <li>
                  <span className="label">Instagram</span>
                  <a href={RESTAURANT.social.instagram} target="_blank" rel="noreferrer">
                    {RESTAURANT.social.instagramHandle}
                  </a>
                </li>
                <li>
                  <span className="label">Hours</span>
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    {RESTAURANT.hours}
                    <br />
                    {RESTAURANT.closed}
                  </span>
                </li>
                <li>
                  <span className="label">Parking</span>
                  <span style={{ color: 'var(--color-text-muted)' }}>
                    Parking available at JRJ Complex; street parking on the sector road.
                  </span>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <iframe
              title="Map to Spice Garden"
              src={RESTAURANT.mapsEmbed}
              className="map-embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Reveal>
        </div>

        <div className="section" style={{ paddingBottom: 0 }}>
          <Reveal>
            <div className="section-heading">
              <h2>Send Us a Message</h2>
              <hr className="divider" />
              <p>Questions, feedback, or press enquiries — we’d love to hear from you.</p>
            </div>
          </Reveal>

          {submitted ? (
            <div className="form form__success glass">
              <h3>Message sent!</h3>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Thank you, {values.name.split(' ')[0]}. We’ll get back to you as soon as we can.
              </p>
            </div>
          ) : (
            <Reveal>
              <form className="form glass" onSubmit={handleSubmit} noValidate>
                <div className="form__row">
                  <div className={`form__group${errors.name ? ' form__group--error' : ''}`}>
                    <label htmlFor="c-name">Name *</label>
                    <input
                      id="c-name"
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
                  <div className={`form__group${errors.email ? ' form__group--error' : ''}`}>
                    <label htmlFor="c-email">Email *</label>
                    <input
                      id="c-email"
                      type="email"
                      autoComplete="email"
                      value={values.email}
                      onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
                    />
                    {errors.email && (
                      <span className="form__error" role="alert">
                        {errors.email}
                      </span>
                    )}
                  </div>
                </div>
                <div className={`form__group${errors.message ? ' form__group--error' : ''}`}>
                  <label htmlFor="c-message">Message *</label>
                  <textarea
                    id="c-message"
                    value={values.message}
                    onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
                  />
                  {errors.message && (
                    <span className="form__error" role="alert">
                      {errors.message}
                    </span>
                  )}
                </div>
                <button type="submit" className="btn btn--gold">
                  Send Message
                </button>
              </form>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  )
}
