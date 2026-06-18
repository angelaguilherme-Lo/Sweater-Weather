import { Link } from 'react-router-dom'
import CheckoutForm from '../features/checkout/CheckoutForm'
import CheckoutSummary from '../features/checkout/CheckoutSummary'
import { calculateOrderTotals } from '../features/checkout/checkoutUtils'
import { useShop } from '../context/ShopContext'

export default function CheckoutPage() {
  const { cart } = useShop()
  const totals = calculateOrderTotals(cart)

  if (cart.length === 0) {
    return (
      <section className="container pageBlock">
        <div className="topGap checkoutEmptyState glassPanel">
          <p className="miniLabel tealText">Checkout</p>
          <h1 className="pageTitle">Your checkout is waiting for selected pieces</h1>
          <p>
            Add a sweater, tunic or poncho to your cart before starting the payment step.
          </p>
          <Link to="/shop" className="peachBtn checkoutBackLink">Browse collections</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="container pageBlock">
      <div className="topGap sectionIntro splitHeading checkoutPageIntro">
        <div>
          <p className="miniLabel tealText">Mock checkout</p>
          <h1 className="pageTitle">Complete your order with a simulated payment</h1>
        </div>
        <p>
          This checkout is prepared for frontend payment flow testing only. It does not contact
          external payment providers, store card details or save orders to a database.
        </p>
      </div>

      <div className="checkoutGrid">
        <CheckoutForm cart={cart} totals={totals} />
        <CheckoutSummary cart={cart} totals={totals} />
      </div>
    </section>
  )
}
