# Sweater Weather

A premium women’s fashion e-commerce storefront built with React and Vite.

Sweater Weather is a boutique-inspired online store concept focused on premium sweatshirts, tunics, and knitwear sweaters for women. 


The interface uses a warm luxury palette, glassmorphism cards, soft motion, elegant typography, and a refined shopping flow with wishlist, cart, Stripe-ready checkout, and curated product presentation.

## Tech stack

- React
- Vite
- CSS
- Stripe Elements
- Lucide React
- Unsplash free, copyright image stock

## Features

- Premium fashion storefront UI
- Warm, light luxury visual direction
- Glassmorphism product cards
- Product size selection
- Product quantity selector
- Wishlist
- Shopping cart
- Stripe-ready payment section
- Payment method badges for Visa, Mastercard, and Amex
- About Us section
- Contact section
- Responsive navigation with hamburger menu
- Modern product interactions and hover effects

## Project goals

This project was designed to present a modern and premium fashion-shopping experience with:
- a boutique visual identity
- elegant layout composition
- clear product hierarchy
- soft interactions and micro-animations
- a user-friendly cart and checkout experience


## Project structure

```text
sweater-weather/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── HeroSlider.jsx
│   │   ├── ProductCard.jsx
│   │   └── Sections.jsx
│   ├── context/
│   │   └── ShopContext.jsx
│   ├── data/
│   │   └── products.js
│   ├── pages/
│   │   └── CartPage.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Main functionality

### Product cards
Each product card supports:
- size selection
- quantity selection
- wishlist toggle
- add-to-cart action
- premium hover effects

### Cart
The cart supports:
- item listing
- quantity updates
- size-aware products
- item removal
- subtotal and total display

### Checkout
The checkout area includes:
- Stripe Payment Element ( when operates in reality)
- visual payment badges for Visa, Mastercard,Amex, PayPal
- premium order summary design


## Design direction

Sweater Weather is designed around:
- warm neutrals
- premium brown and cream tones
- luxury editorial typography
- soft glass surfaces
- smooth interactions
- modern feminine fashion presentation

## Recommended Lucide icons

These Lucide icons were included in the project:
- `ShoppingBag`
- `Heart`
- `Menu`
- `User`
- `Search`
- `Plus`
- `Minus`
- `ChevronRight`
- `CreditCard`
- `ShieldCheck`

Example:

```jsx
import {
  ShoppingBag,
  Heart,
  Menu,
  User,
  CreditCard,
  ShieldCheck,
} from 'lucide-react'
```

## Future improvements

Potential next upgrades:
- category filters
- search
- product detail page
- authentication backend
- persistent cart storage
- real Stripe payment flow
- order confirmation page
- improved animations with Framer Motion
- CMS or admin dashboard
- dark mode refinement

## License

This project is for portfolio, educational, and concept-storefront use unless there is a define license in `package.json` or a dedicated `LICENSE` file.
