import { useState } from 'react'
import { Heart, LogIn, Menu, ShoppingBag, User, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { cart, wishlist, user, isAuthenticated, logout } = useShop()

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const links = [
    ['/', 'Home'],
    ['/shop', 'Collections'],
    ['/about', 'About'],
    ['/contact', 'Contact'],
  ]

  return (
    <>
      <header className="siteHeader">
        <div className="container headerInner luxuryHeader glassPanel">
          <NavLink to="/" className="brandBlock" aria-label="Sweater Weather home">
            <img
              src="/images/sweather-weather-logo.png"
              alt="Sweater Weather logo"
              className="brandLogoLarge"
            />
            <div>
              <p className="miniLabel">Luxury clothing for women</p>
              <div className="brandWordmark">Sweater Weather</div>
            </div>
          </NavLink>

          <nav className="mainNav desktopNav luxuryNav">
            {links.map(([to, label]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `navItem luxuryNavItem ${isActive ? 'active' : ''}`
                }
              >
                <span>{label}</span>
              </NavLink>
            ))}
          </nav>

          <div className="desktopTools luxuryTools">
            <NavLink to="/wishlist" className="toolBtn luxuryToolBtn">
              <Heart size={18} />
              <span>Wishlist</span>
              <strong>{wishlist.length}</strong>
            </NavLink>

            {isAuthenticated ? (
              <button type="button" className="toolBtn luxuryToolBtn" onClick={logout}>
                <User size={18} />
                <span>{user?.name || 'Account'}</span>
                <strong>Logout</strong>
              </button>
            ) : (
              <NavLink to="/login" className="toolBtn luxuryToolBtn">
                <LogIn size={18} />
                <span>Login</span>
              </NavLink>
            )}

            <NavLink to="/cart" className="ctaBtn luxuryCartBtn">
              <ShoppingBag size={18} />
              <span>Cart</span>
              <strong>{cartCount}</strong>
            </NavLink>
          </div>

          <button className="menuBtn mobileOnly" onClick={() => setOpen(true)} aria-label="Open menu">
            <Menu size={22} />
          </button>
        </div>
      </header>

      <div className={`mobileBackdrop ${open ? 'show' : ''}`} onClick={() => setOpen(false)} />

      <aside className={`mobileMenu glassPanel ${open ? 'show' : ''}`}>
        <div className="mobileTop">
          <strong>Navigation</strong>
          <button className="menuBtn" onClick={() => setOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className="mobileLinks">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} className="mobileLink" onClick={() => setOpen(false)}>
              {label}
            </NavLink>
          ))}

          <NavLink to="/wishlist" className="mobileLink" onClick={() => setOpen(false)}>
            Wishlist
          </NavLink>

          {isAuthenticated ? (
            <button
              type="button"
              className="mobileLink mobileLogoutBtn"
              onClick={() => {
                logout()
                setOpen(false)
              }}
            >
              Logout
            </button>
          ) : (
            <NavLink to="/login" className="mobileLink" onClick={() => setOpen(false)}>
              Login
            </NavLink>
          )}

          <NavLink to="/cart" className="mobileLink" onClick={() => setOpen(false)}>
            Cart
          </NavLink>
        </div>
      </aside>
    </>
  )
}