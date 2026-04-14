import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import { useShop } from '../context/ShopContext'

const stripePromise = loadStripe('pk_test_REPLACE_WITH_YOUR_STRIPE_PUBLIC_KEY')

function CheckoutForm() {
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (!stripe || !elements) return
    alert('Connect your backend route to create a PaymentIntent, then use stripe.confirmPayment().')
  }

  return (
    <form className="checkoutForm" onSubmit={handleSubmit}>
      <PaymentElement />
      <button className="primaryBtn fullBtn" type="submit" disabled={!stripe}>
        Confirm
      </button>
    </form>
  )
}

function PaymentMethodsVisual() {
  return (
    <div className="paymentMethodsUi">
      <p className="paymentLabel">Accepted payment methods</p>

      <div className="paymentBadges">
        <div className="paymentBadge visa" aria-label="Visa accepted">
          <span className="paymentBrand">VISA</span>
        </div>

        <div className="paymentBadge mastercard" aria-label="Mastercard accepted">
          <span className="mc-circle mc-red"></span>
          <span className="mc-circle mc-yellow"></span>
          <span className="srOnlyText">Mastercard</span>
        </div>

        <div className="paymentBadge amex" aria-label="American Express accepted">
          <span className="paymentBrand">AMEX</span>
        </div>
      </div>
    </div>
  )
}

export default function CartPage() {
  const { cart, total, updateQuantity, removeFromCart } = useShop()
  const shipping = cart.length ? 0 : 0

  return (
    <section className="section cartPageWrap">
      <div className="sectionHeading splitHeading">
        <div>
          <p className="eyebrow">Shopping cart</p>
          <h2>A refined cart experience for a premium checkout.</h2>
        </div>
      </div>

      <div className="checkoutLayout deluxeCartLayout">
        <div className="glass infoCard cartPanel">
          <div className="cartPanelHeader">
            <h3>Cart items</h3>
            <span>{cart.length} selected</span>
          </div>

          {cart.length ? (
            cart.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cartItem deluxeCartItem">
                <img src={item.image} alt={item.name} />

                <div className="cartMeta">
                  <p className="eyebrow">{item.category}</p>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>

                  <p className="cartVariant">
                    Size <strong>{item.size}</strong>
                  </p>

                  <div className="cartLineBottom">
                    <div className="qtyBox premiumQtyBox">
                      <button
                        type="button"
                        className="qtyBtn"
                        onClick={() => updateQuantity(item.id, item.size, 'dec')}
                        aria-label="Decrease quantity"
                      >
                        −
                      </button>

                      <span className="qtyValue">{item.quantity}</span>

                      <button
                        type="button"
                        className="qtyBtn"
                        onClick={() => updateQuantity(item.id, item.size, 'inc')}
                        aria-label="Increase quantity"
                      >
                        +
                      </button>
                    </div>

                    <strong>€{item.price * item.quantity}</strong>
                  </div>
                </div>

                <button
                  type="button"
                  className="secondaryBtn smallBtn"
                  onClick={() => removeFromCart(item.id, item.size)}
                >
                  Remove
                </button>
              </div>
            ))
          ) : (
            <p>No items in your cart yet.</p>
          )}
        </div>

        <div className="glass infoCard summaryPanel">
          <p className="eyebrow">Order summary</p>
          <h2>Complete your order</h2>

          <div className="checkoutRow">
            <span>Subtotal</span>
            <strong>€{total}</strong>
          </div>

          <div className="checkoutRow">
            <span>Shipping</span>
            <strong>{shipping === 0 ? 'Free' : `€${shipping}`}</strong>
          </div>

          <div className="checkoutRow">
            <span>Packaging</span>
            <strong>Complimentary</strong>
          </div>

          <div className="checkoutRow grand">
            <span>Total</span>
            <strong>€{total + shipping}</strong>
          </div>

          <p className="checkoutNote">
            Secure checkout for a smooth shopping experience
          </p>

          <PaymentMethodsVisual />

          <Elements
            stripe={stripePromise}
            options={{
              mode: 'payment',
              amount: Math.max(100, Math.round((total + shipping) * 100)),
              currency: 'eur',
            }}
          >
            <CheckoutForm />
          </Elements>
        </div>
      </div>
    </section>
  )
}