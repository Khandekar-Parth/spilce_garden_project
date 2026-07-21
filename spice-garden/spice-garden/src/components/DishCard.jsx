import Badges from './Badges'

// Premium dish card with hover zoom; clicking opens the quick-view modal.
export default function DishCard({ dish, onQuickView }) {
  return (
    <article
      className="dish-feature glass"
      onClick={() => onQuickView?.(dish)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onQuickView?.(dish)
        }
      }}
      tabIndex={0}
      role="button"
      aria-label={`Quick view: ${dish.name}`}
    >
      <div className="dish-feature__imgwrap">
        <img src={dish.image} alt={dish.name} loading="lazy" />
      </div>
      <div className="dish-feature__body">
        <div className="dish-feature__top">
          <h3 style={{ fontSize: '1.12rem', margin: 0 }}>{dish.name}</h3>
          <span className="dish-feature__price">₹{dish.price}</span>
        </div>
        <Badges dish={dish} />
        <p className="dish-feature__desc">{dish.desc}</p>
      </div>
    </article>
  )
}
