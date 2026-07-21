// ─── EDIT ME ───────────────────────────────────────────────────────────────
// The full menu lives in this file. To add/edit a dish, copy an entry and
// change its fields. Fields:
//   veg: true = green Veg badge, false = red Non-Veg badge
//   popular / chefSpecial: show badges + power the menu filters
//   prepTime: shown as "~XX min" on the card
//   pairing: "Suggested pairing" line in the quick-view modal
// ───────────────────────────────────────────────────────────────────────────
import truffleMushroomSoup from '../assets/truffle-mushroom-soup.png'
import paneerTikka from '../assets/paneer-tikka.png'
import smokedTomatoBruschetta from '../assets/smoked-tomato-bruschetta.png'
import saffronButterChicken from '../assets/saffron-butter-chicken.png'
import slowBraisedLambShank from '../assets/slow-braised-lamb-shank.png'
import wildMushroomRisotto from '../assets/wild-mushroom-risotto.png'
import malabarFishCurry from '../assets/malabar-fish-curry.jpg'
import garlicNaan from '../assets/garlic-naan.png'
import herbedPulao from '../assets/herbed-pulao.png'
import darkChocolateFondant from '../assets/dark-chocolate-fondant.png'
import kesarPistaKulfi from '../assets/kesar-pista-kulfi.png'
import signatureCocktails from '../assets/signature-cocktails.png'
import fineWines from '../assets/fine-wines.jpg'
import artisanMocktails from '../assets/artisan-mocktails.png'

export const menu = [
  {
    category: 'Starter',
    dishes: [
      {
        name: 'Truffle Mushroom Soup',
        desc: 'Velvety forest mushrooms finished with black truffle oil and a whisper of cream.',
        price: 495,
        veg: true,
        popular: true,
        chefSpecial: false,
        prepTime: 15,
        pairing: 'Pairs beautifully with our Smoked Tomato Bruschetta.',
        image: truffleMushroomSoup,
      },
      {
        name: 'Charred Paneer Tikka',
        desc: 'Smoke-kissed cottage cheese marinated in hung curd, Kashmiri chilli, and kasuri methi.',
        price: 545,
        veg: true,
        popular: true,
        chefSpecial: false,
        prepTime: 20,
        pairing: 'Try it with an Artisan Mocktail — the citrus lifts the smoke.',
        image: paneerTikka,
      },
      {
        name: 'Smoked Tomato Bruschetta',
        desc: 'Heirloom tomatoes slow-smoked over applewood, on grilled sourdough with basil oil.',
        price: 445,
        veg: true,
        popular: false,
        chefSpecial: false,
        prepTime: 12,
        pairing: 'Lovely alongside a glass from our Fine Wines list.',
        image: smokedTomatoBruschetta,
      },
    ],
  },
  {
    category: 'Main Course',
    dishes: [
      {
        name: 'Saffron Butter Chicken',
        desc: 'Tandoor-roasted chicken folded into a silken tomato-makhani sauce perfumed with saffron.',
        price: 895,
        veg: false,
        popular: true,
        chefSpecial: true,
        prepTime: 25,
        pairing: 'Best mopped up with our Garlic Naan, straight from the tandoor.',
        image: saffronButterChicken,
      },
      {
        name: 'Slow-Braised Lamb Shank',
        desc: 'Twelve-hour braised shank in a rogan jus, with saffron mash and crisp shallots.',
        price: 1295,
        veg: false,
        popular: false,
        chefSpecial: true,
        prepTime: 35,
        pairing: 'Ask our sommelier for a bold red from the cellar.',
        image: slowBraisedLambShank,
      },
      {
        name: 'Wild Mushroom Risotto',
        desc: 'Carnaroli rice, porcini and morels, aged parmesan, and a drizzle of white truffle oil.',
        price: 845,
        veg: true,
        popular: false,
        chefSpecial: false,
        prepTime: 30,
        pairing: 'A crisp white wine keeps the truffle singing.',
        image: wildMushroomRisotto,
      },
    ],
  },
  {
    category: 'Breads',
    dishes: [
      {
        name: 'Garlic Naan',
        desc: 'Hand-stretched naan blistered in the tandoor, brushed with roasted garlic butter.',
        price: 145,
        veg: true,
        popular: true,
        chefSpecial: false,
        prepTime: 10,
        pairing: 'Made for the Saffron Butter Chicken.',
        image: garlicNaan,
      },
    ],
  },
  {
    category: 'Rice',
    dishes: [
      {
        name: 'Herbed Pulao',
        desc: 'Aged basmati steamed with fresh herbs, toasted whole spices, and caramelised onion.',
        price: 395,
        veg: true,
        popular: false,
        chefSpecial: false,
        prepTime: 20,
        pairing: 'A gentle partner to the Malabar Fish Curry.',
        image: herbedPulao,
      },
    ],
  },
  {
    category: 'Desserts',
    dishes: [
      {
        name: 'Dark Chocolate Fondant',
        desc: 'Molten single-origin chocolate with vanilla bean ice cream and salted caramel shards.',
        price: 545,
        veg: true,
        popular: true,
        chefSpecial: false,
        prepTime: 18,
        pairing: 'A Signature Cocktail nightcap completes it.',
        image: darkChocolateFondant,
      },
      {
        name: 'Kesar Pista Kulfi',
        desc: 'Slow-reduced milk kulfi with saffron and roasted pistachio, on a falooda nest.',
        price: 445,
        veg: true,
        popular: true,
        chefSpecial: false,
        prepTime: 8,
        pairing: 'Best after a spice-forward main.',
        image: kesarPistaKulfi,
      },
    ],
  },
  {
    category: 'Beverages',
    dishes: [
      {
        name: 'Signature Cocktails',
        desc: 'A rotating list of house creations built on small-batch spirits and garden botanicals.',
        price: 745,
        veg: true,
        popular: true,
        chefSpecial: false,
        prepTime: 8,
        pairing: 'Ask for tonight’s garden special.',
        image: signatureCocktails,
      },
      {
        name: 'Fine Wines',
        desc: 'A cellar of old-world classics and new-world discoveries, curated by our sommelier.',
        price: 895,
        veg: true,
        popular: false,
        chefSpecial: false,
        prepTime: 5,
        pairing: 'Our sommelier will pair by the course.',
        image: fineWines,
      },
      {
        name: 'Artisan Mocktails',
        desc: 'Zero-proof compositions of pressed juices, house shrubs, and aromatic infusions.',
        price: 445,
        veg: true,
        popular: false,
        chefSpecial: false,
        prepTime: 7,
        pairing: 'Wonderful with the starters.',
        image: artisanMocktails,
      },
    ],
  },
]

// Fish curry artwork is promotional — used in Today's Special / Chef Special /
// homepage promotion, not as a regular menu row.
export const TODAYS_SPECIAL = {
  name: 'Malabar Fish Curry',
  desc: 'Day-boat fish simmered in a coastal coconut curry with kokum, curry leaves, and mustard seed. Today only, from the chef’s counter.',
  price: 995,
  veg: false,
  chefSpecial: true,
  prepTime: 28,
  pairing: 'Served with Herbed Pulao.',
  image: malabarFishCurry,
}

// Flat list of every dish photo, used by the Gallery page.
export const galleryImages = [
  ...menu.flatMap((cat) =>
    cat.dishes.map((d) => ({ src: d.image, alt: d.name, category: cat.category }))
  ),
  { src: malabarFishCurry, alt: TODAYS_SPECIAL.name, category: 'Chef Special' },
]
