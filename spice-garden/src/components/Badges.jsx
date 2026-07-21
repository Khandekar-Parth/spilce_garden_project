// Badge row for a dish: veg/non-veg, popular, chef special, prep time.
export default function Badges({ dish, showTime = true }) {
  return (
    <div className="badges">
      {dish.veg ? (
        <span className="badge badge--veg">● Veg</span>
      ) : (
        <span className="badge badge--nonveg">▲ Non-Veg</span>
      )}
      {dish.popular && <span className="badge badge--popular">★ Popular</span>}
      {dish.chefSpecial && <span className="badge badge--chef">👨‍🍳 Chef’s Special</span>}
      {showTime && dish.prepTime && <span className="badge badge--time">~{dish.prepTime} min</span>}
    </div>
  )
}
