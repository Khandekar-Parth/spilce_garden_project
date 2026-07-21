import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import usePageMeta from '../hooks/usePageMeta'
import { RESTAURANT } from '../data/restaurant'
import heroImg from '../assets/wild-mushroom-risotto.png'
import chefImg from '../assets/slow-braised-lamb-shank.png'
import kitchenImg from '../assets/herbed-pulao.png'

const TIMELINE = [
  {
    year: 'The Seed',
    title: 'A family recipe book',
    text: 'Spice Garden began with hand-written recipes passed down three generations — and a dream of giving them a proper table.',
  },
  {
    year: 'The Roots',
    title: 'Opening in Kamothe',
    text: 'We opened our doors in Sector 7, Kamothe, with a small kitchen, a stone grinder, and a promise: everything fresh, every day.',
  },
  {
    year: 'The Bloom',
    title: 'A destination, not a stop',
    text: 'Word travelled across Navi Mumbai. Chef specials, private dinners, and celebrations made Spice Garden a neighbourhood landmark.',
  },
  {
    year: 'Today',
    title: 'Where tradition meets artistry',
    text: 'Every plate still starts the same way — with the garden, the grinder, and the care of a family kitchen.',
  },
]

export default function About() {
  usePageMeta(
    'Our Story — Spice Garden, Kamothe, Navi Mumbai',
    'The story, chefs, and philosophy behind Spice Garden — premium dining rooted in tradition in Kamothe, Navi Mumbai.'
  )

  return (
    <>
      <Hero image={heroImg} title="Our Story" tagline="Where it all began" />

      <section className="section">
        <div className="container two-col">
          <Reveal>
            <div>
              <span className="eyebrow">Philosophy</span>
              <h2>A Garden at the Heart of the Kitchen</h2>
              <p style={{ color: 'var(--color-text-muted)' }}>
                {RESTAURANT.name} began with a simple belief: that great Indian cooking starts
                long before the flame — in the soil, the season, and the spice box. Our spices
                are stone-ground each morning, our breads shaped by hand, and our menu follows
                the market rather than the other way around.
              </p>
              <p style={{ color: 'var(--color-text-muted)' }}>
                We call it fine dining, but we think of it as hospitality in its oldest sense —
                a table set with care, food with memory in it, and an evening that unhurriedly
                becomes yours.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <img src={kitchenImg} alt="A dish being finished in the Spice Garden kitchen" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container two-col">
          <Reveal>
            <img src={chefImg} alt="A signature dish by our chef" loading="lazy" />
          </Reveal>
          <Reveal delay={0.15}>
            <div>
              <span className="eyebrow">The Chef</span>
              <h2>Chef Arjun Mehra</h2>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Trained in old family kitchens and refined in modern ones, Chef Arjun Mehra
                leads Spice Garden with one ambition — to give the food of his childhood the
                stage it deserves. His cooking layers slow, patient technique over bold regional
                flavour.
              </p>
              <p style={{ color: 'var(--color-text-muted)' }}>
                Each evening he leads the specials personally from the chef’s counter — a
                conversation between tradition and artistry, course by course.
              </p>
              <p style={{ fontFamily: 'var(--font-heading)', fontStyle: 'italic', color: 'var(--color-gold-soft)' }}>
                “Great food should taste like a place and a memory at once.”
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Animated timeline */}
      <section className="section">
        <div className="container">
          <Reveal>
            <div className="section-heading">
              <span className="eyebrow">The Journey</span>
              <h2>How the Garden Grew</h2>
              <hr className="divider" />
            </div>
          </Reveal>
          <div className="timeline">
            {TIMELINE.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.12}>
                <div className="timeline__item">
                  <span className="timeline__year">{item.year}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
