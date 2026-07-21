import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from '../components/Reveal'
import DishCard from '../components/DishCard'
import QuickView from '../components/QuickView'
import Badges from '../components/Badges'
import usePageMeta from '../hooks/usePageMeta'
import { menu, TODAYS_SPECIAL } from '../data/menu'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'veg', label: 'Veg' },
  { key: 'nonveg', label: 'Non-Veg' },
  { key: 'popular', label: 'Popular' },
  { key: 'chef', label: 'Chef Special' },
]

function matches(dish, filter, query) {
  if (filter === 'veg' && !dish.veg) return false
  if (filter === 'nonveg' && dish.veg) return false
  if (filter === 'popular' && !dish.popular) return false
  if (filter === 'chef' && !dish.chefSpecial) return false
  if (query) {
    const q = query.toLowerCase()
    return dish.name.toLowerCase().includes(q) || dish.desc.toLowerCase().includes(q)
  }
  return true
}

export default function Menu() {
  usePageMeta(
    'Menu — Spice Garden, Kamothe, Navi Mumbai',
    'Explore the Spice Garden menu: starters, main course, breads, rice, desserts, and beverages, with veg and non-veg options and chef specials.'
  )

  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('all')
  const [quickView, setQuickView] = useState(null)
  // All categories start expanded; user can collapse each.
  const [collapsed, setCollapsed] = useState({})

  const filtered = useMemo(
    () =>
      menu
        .map((cat) => ({
          ...cat,
          dishes: cat.dishes.filter((d) => matches(d, filter, query)),
        }))
        .filter((cat) => cat.dishes.length > 0),
    [filter, query]
  )

  const toggle = (category) =>
    setCollapsed((c) => ({ ...c, [category]: !c[category] }))

  return (
    <section className="section page-offset">
      <div className="container">
        <Reveal>
          <div className="section-heading">
            <span className="eyebrow">The Menu</span>
            <h2>From Our Garden to Your Table</h2>
            <hr className="divider" />
            <p>
              Our menu evolves with the seasons. Prices are in Indian rupees and exclusive of
              taxes.
            </p>
          </div>
        </Reveal>

        {/* Search + filters */}
        <div className="menu-toolbar">
          <div className="menu-search">
            <input
              type="search"
              placeholder="Search dishes…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search dishes"
            />
          </div>
          <div className="menu-filters" role="group" aria-label="Menu filters">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`chip${filter === f.key ? ' chip--active' : ''}`}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Today's special strip */}
        <Reveal>
          <div className="special glass" style={{ marginBottom: '2.5rem' }}>
            <img
              src={TODAYS_SPECIAL.image}
              alt={TODAYS_SPECIAL.name}
              className="special__img"
              loading="lazy"
            />
            <div className="special__body">
              <span className="eyebrow">Today’s Special</span>
              <h3 style={{ fontSize: '1.6rem' }}>{TODAYS_SPECIAL.name}</h3>
              <Badges dish={TODAYS_SPECIAL} />
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.92rem' }}>
                {TODAYS_SPECIAL.desc}
              </p>
              <p className="dish-feature__price" style={{ fontSize: '1.3rem' }}>
                ₹{TODAYS_SPECIAL.price}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Expandable categories */}
        {filtered.length === 0 && (
          <p className="menu-note">No dishes match your search — try another word or filter.</p>
        )}
        {filtered.map((cat) => {
          const isOpen = !collapsed[cat.category]
          return (
            <div className="menu-category glass" key={cat.category}>
              <button
                className="menu-category__header"
                onClick={() => toggle(cat.category)}
                aria-expanded={isOpen}
              >
                {cat.category}
                <span className="menu-category__meta">
                  {cat.dishes.length} {cat.dishes.length === 1 ? 'dish' : 'dishes'}
                  <span
                    className={`menu-category__chevron${isOpen ? ' menu-category__chevron--open' : ''}`}
                    aria-hidden="true"
                  >
                    ▼
                  </span>
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="menu-category__body">
                      <div className="menu-grid">
                        {cat.dishes.map((dish) => (
                          <DishCard key={dish.name} dish={dish} onQuickView={setQuickView} />
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}

        <p className="menu-note">
          Our menu evolves with the seasons — ask your server about tonight’s chef specials.
        </p>
      </div>

      <QuickView dish={quickView} onClose={() => setQuickView(null)} />
    </section>
  )
}
