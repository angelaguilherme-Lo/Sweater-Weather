import { Minus, Plus, ShieldCheck, Trash2 } from 'lucide-react'
import { useShop } from '../context/ShopContext'

function VisaMark() {
  return (
    <div className="paymentBrandMark visaMark" aria-label="Visa payment option">
      <svg viewBox="0 0 90 30" role="img" aria-hidden="true">
        <text x="45" y="20" textAnchor="middle">VISA</text>
      </svg>
    </div>
  )
}

function MastercardMark() {
  return (
    <div className="paymentBrandMark mastercardMark" aria-label="MasterCard payment option">
      <svg viewBox="0 0 120 34" role="img" aria-hidden="true">
        <circle cx="48" cy="17" r="10" fill="#eb001b" />
        <circle cx="62" cy="17" r="10" fill="#f79e1b" fillOpacity="0.92" />
        <text x="88" y="21">MasterCard</text>
      </svg>
    </div>
  )
}

function AmexMark() {
  return (
    <div className="paymentBrandMark amexMark" aria-label="Amex payment option">
      <svg viewBox="0 0 110 34" role="img" aria-hidden="true">
        <rect x="10" y="6" width="90" height="22" rx="6" fill="#2e77bc" />
        <text x="55" y="21" textAnchor="middle">AMEX</text>
      </svg>
    </div>
  )
}

export default function CartPage() {
  const { cart, updateCartQuantity, removeFromCart } = useShop()
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 12 : 0
  const total = subtotal + shipping

  return (
    <section className="container pageBlock">
      <div className="topGap sectionIntro splitHeading luxuryCartHeading">
        <div>
          <p className="miniLabel tealText">Checkout</p>
          <h1 className="pageTitle">A refined final step for your selected pieces</h1>
        </div>
        <p>
          We redesigned the checkout to feel more premium, elegant and trustworthy, with luxury spacing, secure order details and payment brand marks instead of button-like blocks.
        </p>
      </div>

      <div className="cartGridWebsite premiumCheckoutGrid">
        <div className="glassPanel infoPane premiumCartPanel">
          {cart.length === 0 ? (
            <div className="emptyCartLuxury">
              <p>Your cart is currently empty. Add a few elegant knitwear pieces to begin your checkout journey.</p>
            </div>
          ) : (
            <div className="cartItems premiumCartItems">
              {cart.map((item) => (
                <article key={`${item.id}-${item.size}`} className="cartItem premiumCartItem">
                  <img src={item.image} alt={item.name} />
                  <div>
                    <p className="miniLabel">{item.category}</p>
                    <h3>{item.name}</h3>
                    <p>Size {item.size}</p>
                    <div className="qtyRow">
                      <button className="miniControl" onClick={() => updateCartQuantity(item.id, item.size, item.quantity - 1)}><Minus size={14} /></button>
                      <span>{item.quantity}</span>
                      <button className="miniControl" onClick={() => updateCartQuantity(item.id, item.size, item.quantity + 1)}><Plus size={14} /></button>
                    </div>
                  </div>
                  <div className="cartEnd">
                    <strong>€{item.price * item.quantity}</strong>
                    <button className="miniControl" onClick={() => removeFromCart(item.id, item.size)} aria-label="Remove from cart"><Trash2 size={14} /></button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <aside className="glassPanel cartSummary premiumSummaryCard">
          <div className="summaryHeaderBlock">
            <p className="miniLabel">Order summary</p>
            <h2>Total €{total}</h2>
            <p className="summarySubtext">Luxury checkout with secure payment options and a softer premium finish.</p>
          </div>

          <div className="summaryRows">
            <div className="summaryRow"><span>Subtotal</span><strong>€{subtotal}</strong></div>
            <div className="summaryRow"><span>Shipping</span><strong>€{shipping}</strong></div>
            <div className="summaryRow totalLine"><span>Total</span><strong>€{total}</strong></div>
          </div>

          <div className="premiumPayments">
            <p className="miniLabel">Accepted payment methods</p>
            <div className="paymentMarksRow">
              <VisaMark />
              <MastercardMark />
              <AmexMark />
            </div>
          </div>

          <div className="secureNote">
            <ShieldCheck size={18} />
            <span>Secure checkout experience</span>
          </div>

          <button className="peachBtn fullBtn luxuryCheckoutBtn">Proceed to checkout</button>
        </aside>
      </div>
    </section>
  )
}