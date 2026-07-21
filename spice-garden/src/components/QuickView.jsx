import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import Badges from './Badges'

// Quick-view modal for a dish. Esc or overlay click closes.
export default function QuickView({ dish, onClose }) {
  useEffect(() => {
    if (!dish) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [dish, onClose])

  return (
    <AnimatePresence>
      {dish && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <motion.div
            className="modal glass"
            role="dialog"
            aria-modal="true"
            aria-label={dish.name}
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 12 }}
            transition={{ duration: 0.3 }}
          >
            <img src={dish.image} alt={dish.name} className="modal__img" />
            <div className="modal__body">
              <h3>{dish.name}</h3>
              <Badges dish={dish} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>{dish.desc}</p>
              <p className="dish-feature__price" style={{ fontSize: '1.35rem' }}>
                ₹{dish.price}
              </p>
              {dish.pairing && <p className="modal__pairing">Suggested pairing — {dish.pairing}</p>}
              <Link to="/reservations" className="btn btn--gold btn--sm" style={{ marginTop: '1rem' }}>
                Reserve a Table
              </Link>
            </div>
            <button className="modal__close" onClick={onClose} aria-label="Close" autoFocus>
              ×
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
