import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { RESTAURANT } from '../data/restaurant'
import logo from '../assets/logo.jpg'

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  party: '2',
  occasion: '',
  requests: '',
}

const OCCASIONS = ['', 'Birthday', 'Anniversary', 'Corporate', 'Private Dining', 'Other']
const TIMES = ['12:00 PM', '1:00 PM', '2:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM', '10:00 PM']

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Please enter your name.'
  if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim()))
    errors.phone = 'Please enter a valid phone number.'
  if (values.email && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (!values.date) errors.date = 'Please choose a date.'
  if (!values.time) errors.time = 'Please choose a time.'
  return errors
}

const POLICIES = [
  {
    title: 'Dress Code',
    body: 'Smart casual. We ask guests to avoid sportswear in the evenings.',
  },
  {
    title: 'Cancellations',
    body: 'Kindly notify us at least 4 hours in advance so we can offer the table to other guests.',
  },
  {
    title: 'Large Parties',
    body: 'For groups of 8 or more, call or WhatsApp us directly — or ask about our private dining room.',
  },
]

export default function Reservations() {
  usePageMeta(
    'Reservations — Spice Garden, Kamothe, Navi Mumbai',
    'Reserve a table at Spice Garden, Kamothe. Book online or confirm instantly on WhatsApp.'
  )

  const [values, setValues] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length === 0) setSubmitted(true)
  }

  // Pre-filled WhatsApp message so guests can confirm instantly.
  const whatsappMessage = RESTAURANT.whatsappReserve(
    `Hello Spice Garden! I'd like to reserve a table.\n` +
      `Name: ${values.name}\nDate: ${values.date}\nTime: ${values.time}\n` +
      `Guests: ${values.party}${values.occasion ? `\nOccasion: ${values.occasion}` : ''}` +
      `${values.requests ? `\nRequests: ${values.requests}` : ''}`
  )

  const field = (name, label, input) => (
    <div className={`form__group${errors[name] ? ' form__group--error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {input}
      {errors[name] && (
        <span className="form__error" role="alert">
          {errors[name]}
        </span>
      )}
    </div>
  )

  return (
    <section className="section page-offset">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">Reservations</span>
            <h2>Reserve a Table</h2>
            <hr className="divider" />
            <p>
              We are open {RESTAURANT.hours.toLowerCase()} ({RESTAURANT.closed.toLowerCase()}).
              For same-day bookings, call{' '}
              <a href={RESTAURANT.phoneHref}>{RESTAURANT.phone}</a> or{' '}
              <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                WhatsApp us
              </a>
              .
            </p>
          </div>
        </Reveal>

        {submitted ? (
          <motion.div
            className="form form__success glass"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45 }}
          >
            <img src={logo} alt="" className="hero__logo" />
            <h3>Thank you, {values.name.split(' ')[0]}!</h3>
            <p style={{ color: 'var(--color-text-muted)' }}>
              We’ve received your request for a table of {values.party} on {values.date} at{' '}
              {values.time}
              {values.occasion && ` for a ${values.occasion.toLowerCase()}`}. Our team will
              confirm shortly by phone.
            </p>
            <div className="form__actions" style={{ marginTop: '1.4rem' }}>
              <a className="btn btn--whatsapp" href={whatsappMessage} target="_blank" rel="noreferrer">
                Confirm Instantly on WhatsApp
              </a>
              <button
                className="btn btn--ghost"
                onClick={() => {
                  setValues(INITIAL)
                  setSubmitted(false)
                }}
              >
                Make Another Reservation
              </button>
            </div>
          </motion.div>
        ) : (
          <Reveal>
            <form className="form glass" onSubmit={handleSubmit} noValidate>
              {field(
                'name',
                'Full Name *',
                <input id="name" name="name" type="text" autoComplete="name" value={values.name} onChange={handleChange} />
              )}
              <div className="form__row">
                {field(
                  'phone',
                  'Phone *',
                  <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="+91 9xxxxxxxxx" value={values.phone} onChange={handleChange} />
                )}
                {field(
                  'email',
                  'Email',
                  <input id="email" name="email" type="email" autoComplete="email" value={values.email} onChange={handleChange} />
                )}
              </div>
              <div className="form__row">
                {field(
                  'date',
                  'Date *',
                  <input id="date" name="date" type="date" value={values.date} onChange={handleChange} />
                )}
                {field(
                  'time',
                  'Time *',
                  <select id="time" name="time" value={values.time} onChange={handleChange}>
                    <option value="">Select a time</option>
                    {TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              <div className="form__row">
                {field(
                  'party',
                  'Guests',
                  <select id="party" name="party" value={values.party} onChange={handleChange}>
                    {[1, 2, 3, 4, 5, 6, 7].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'guest' : 'guests'}
                      </option>
                    ))}
                    <option value="8+">8+ guests (we’ll call you)</option>
                  </select>
                )}
                {field(
                  'occasion',
                  'Occasion',
                  <select id="occasion" name="occasion" value={values.occasion} onChange={handleChange}>
                    {OCCASIONS.map((o) => (
                      <option key={o} value={o}>
                        {o || 'Select occasion (optional)'}
                      </option>
                    ))}
                  </select>
                )}
              </div>
              {field(
                'requests',
                'Special Requests',
                <textarea id="requests" name="requests" placeholder="Allergies, cake arrangements, seating preferences…" value={values.requests} onChange={handleChange} />
              )}
              <button type="submit" className="btn btn--gold">
                Request Reservation
              </button>
            </form>
          </Reveal>
        )}

        <div className="section" style={{ paddingBottom: 0 }}>
          <Reveal>
            <div className="section-heading">
              <h2>Good to Know</h2>
              <hr className="divider" />
            </div>
          </Reveal>
          <div className="card-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            {POLICIES.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="why-card glass" style={{ textAlign: 'left' }}>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
