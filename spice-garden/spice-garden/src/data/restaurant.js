// ─── EDIT ME ───────────────────────────────────────────────────────────────
// All contact info, address, hours, and social links for the whole site live
// here. Change a value once and it updates everywhere.
// TODO(owner): replace the placeholder email with the real one.
// ───────────────────────────────────────────────────────────────────────────

const PHONE_DISPLAY = '+91 85549 99651'
const PHONE_DIGITS = '918554999651' // digits only, for tel:/wa.me links
const INSTAGRAM_HANDLE = 'the_spice.garden'

export const RESTAURANT = {
  name: 'Spice Garden',
  tagline: 'Where tradition meets artistry',
  address: {
    lines: [
      'Shop No. 9, Ground Floor',
      'Medisecure Hospital, JRJ Complex',
      'Jui-Kamothe Sector-36, Sector 7',
      'Kamothe, Panvel',
    ],
    city: 'Navi Mumbai',
    state: 'Maharashtra',
    pin: '410209',
    country: 'India',
  },
  phone: PHONE_DISPLAY,
  phoneHref: `tel:+${PHONE_DIGITS}`,
  whatsapp: `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(
    'Hello Spice Garden! I would like to make an enquiry.'
  )}`,
  whatsappReserve: (details) =>
    `https://wa.me/${PHONE_DIGITS}?text=${encodeURIComponent(details)}`,
  email: 'reservations@example.in', // placeholder — replace
  hours: 'Tuesday – Sunday, 11:00 AM – 11:30 PM',
  closed: 'Closed Mondays',
  social: {
    instagram: `https://instagram.com/${INSTAGRAM_HANDLE}`,
    instagramHandle: `@${INSTAGRAM_HANDLE}`,
    facebook: 'https://facebook.com/',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=JRJ+Complex+Sector+7+Kamothe+Panvel+Navi+Mumbai+410209',
  mapsEmbed:
    'https://www.google.com/maps?q=JRJ+Complex,+Sector+7,+Kamothe,+Panvel,+Navi+Mumbai,+Maharashtra+410209&output=embed',
}

// ─── Google-style reviews shown in the animated slider (editable) ──────────
export const REVIEWS = [
  {
    name: 'Ananya S.',
    rating: 5,
    text: 'The saffron butter chicken is unlike anything else in Navi Mumbai. Beautiful ambience, warm service — our new anniversary spot.',
  },
  {
    name: 'Rohit & Priya M.',
    rating: 5,
    text: 'Booked the private dining room for a birthday. The team handled everything on WhatsApp — effortless and so premium.',
  },
  {
    name: 'Kevin D.',
    rating: 4,
    text: 'Gorgeous plating, generous portions, and the kulfi is a must. Slightly busy on weekends — reserve ahead!',
  },
  {
    name: 'Meera K.',
    rating: 5,
    text: 'Finally a fine-dining experience in Kamothe itself. The chef’s specials change often and never disappoint.',
  },
]

// ─── "Why Choose Us" cards (editable) ──────────────────────────────────────
export const WHY_US = [
  { icon: '🌿', title: 'Fresh Ingredients', desc: 'Market-fresh produce and spices ground in-house every morning.' },
  { icon: '🍛', title: 'Authentic Flavours', desc: 'Recipes rooted in tradition, plated with a modern hand.' },
  { icon: '✨', title: 'Premium Dining', desc: 'A refined, unhurried experience from welcome to farewell.' },
  { icon: '👨‍🍳', title: 'Experienced Chefs', desc: 'A kitchen led by chefs with decades of combined craft.' },
  { icon: '🕯️', title: 'Luxury Ambience', desc: 'Warm woods, soft light, and music set just right.' },
  { icon: '⚡', title: 'Fast Service', desc: 'Attentive service that never keeps your table waiting.' },
  { icon: '👨‍👩‍👧', title: 'Family Friendly', desc: 'Space and menus that welcome every generation.' },
  { icon: '🎉', title: 'Private Events', desc: 'Birthdays, anniversaries, and corporate dinners, tailored.' },
]
