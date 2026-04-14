import { Link, NavLink } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

function CartIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="cartSvg">
      <path
        d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.8a1 1 0 0 0 1-.8L21 7H7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="10" cy="19" r="1.6" fill="currentColor" />
      <circle cx="18" cy="19" r="1.6" fill="currentColor" />
    </svg>
  )
}

export default function Header({ menuOpen, setMenuOpen, onLoginOpen }) {
  const { cart, wishlist, theme, setTheme } = useShop()
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="header glass luxuryHeader">
      <Link to="/" className="logoWrap premiumLogoWrap">
        <div className="logoMark refinedLogo" aria-label="Sweater Weather logo">
          <span>SW</span>
        </div>
        <div className="brandBlock">
          <p className="eyebrow">Women's Design Clothing </p>
          <h1>Sweater Weather</h1>
        </div>
      </Link>

      <nav className={`nav premiumNav ${menuOpen ? 'open' : ''}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/wishlist">Wish List</NavLink>
      </nav>

      <div className="headerActions premiumActions">
        <button className="iconBtn" onClick={onLoginOpen}>Login</button>

        <button
          className="iconBtn"
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        >
          {theme === 'light' ? 'Dark mode' : 'Light mode'}
        </button>

        <Link className="iconBtn" to="/wishlist">
          Wish List <span>{wishlist.length}</span>
        </Link>

        <Link className="cartBtn" to="/cart">
          <CartIcon />
          <span>Cart</span>
          <strong>{cartCount}</strong>
        </Link>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}