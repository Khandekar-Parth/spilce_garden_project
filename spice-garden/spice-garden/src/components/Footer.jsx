import { Link } from 'react-router-dom'
import { RESTAURANT } from '../data/restaurant'
import logo from '../assets/logo.jpg'

export default function Footer() {
  const { address } = RESTAURANT
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <img src={logo} alt={`${RESTAURANT.name} logo`} />
            <h3>{RESTAURANT.name}</h3>
            <p>{RESTAURANT.tagline}</p>
          </div>

          <div>
            <h3>Visit Us</h3>
            <p>
              {address.lines.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
              {address.city}, {address.state} {address.pin}
            </p>
            <p>
              <a href={RESTAURANT.mapsUrl} target="_blank" rel="noreferrer">
                Get Directions →
              </a>
            </p>
          </div>

          <div>
            <h3>Hours &amp; Contact</h3>
            <ul>
              <li>{RESTAURANT.hours}</li>
              <li>{RESTAURANT.closed}</li>
              <li>
                <a href={RESTAURANT.phoneHref}>{RESTAURANT.phone}</a>
              </li>
              <li>
                <a href={RESTAURANT.whatsapp} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </li>
              <li>
                <a href={`mailto:${RESTAURANT.email}`}>{RESTAURANT.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>Explore</h3>
            <ul>
              <li>
                <Link to="/menu">Menu</Link>
              </li>
              <li>
                <Link to="/reservations">Reservations</Link>
              </li>
              <li>
                <Link to="/private-dining">Private Dining</Link>
              </li>
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
            </ul>
            <div className="footer__social">
              <a href={RESTAURANT.social.instagram} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a href={RESTAURANT.social.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>
            © {new Date().getFullYear()} {RESTAURANT.name}, Kamothe, Navi Mumbai. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
