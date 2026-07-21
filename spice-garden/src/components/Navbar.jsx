import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RESTAURANT } from '../data/restaurant'
import logo from '../assets/logo.jpg'

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'About' },
  { to: '/private-dining', label: 'Private Dining' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__brand" onClick={() => setOpen(false)}>
          <img src={logo} alt="" className="navbar__logo" />
          <span className="navbar__name">{RESTAURANT.name}</span>
        </Link>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
          <span className="navbar__toggle-bar" />
        </button>

        <ul className={`navbar__links${open ? ' navbar__links--open' : ''}`}>
          {LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className="navbar__link" onClick={() => setOpen(false)}>
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link
              to="/reservations"
              className="btn btn--gold btn--sm"
              onClick={() => setOpen(false)}
            >
              Reserve a Table
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
