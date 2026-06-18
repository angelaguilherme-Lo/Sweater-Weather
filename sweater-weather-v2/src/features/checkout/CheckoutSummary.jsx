export default function CheckoutSummary({ cart, totals }) {
  return (
    <aside className="glassPanel checkoutSummary">
      <div className="checkoutSummaryHeader">
        <p className="miniLabel">Order summary</p>
        <h2>Total €{totals.total}</h2>
      </div>

      <div className="checkoutSummaryItems">
        {cart.map((item) => (
          <article key={`${item.id}-${item.size}`} className="checkoutSummaryItem">
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Size {item.size} · Qty {item.quantity}</p>
            </div>
            <strong>€{item.price * item.quantity}</strong>
          </article>
        ))}
      </div>

      <div className="summaryRows checkoutTotals">
        <div className="summaryRow"><span>Subtotal</span><strong>€{totals.subtotal}</strong></div>
        <div className="summaryRow"><span>Shipping</span><strong>€{totals.shipping}</strong></div>
        <div className="summaryRow totalLine"><span>Total</span><strong>€{totals.total}</strong></div>
      </div>
    </aside>
  )
}
