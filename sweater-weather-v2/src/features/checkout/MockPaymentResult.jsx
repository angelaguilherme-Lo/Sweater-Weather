import { CheckCircle2 } from 'lucide-react'

export default function MockPaymentResult({ result }) {
  return (
    <div className="glassPanel mockPaymentResult">
      <CheckCircle2 size={34} />
      <p className="miniLabel">Payment simulated</p>
      <h2>Order {result.orderNumber} is confirmed</h2>
      <div className="mockPaymentRows">
        <div><span>Total</span><strong>€{result.total}</strong></div>
        <div><span>Provider</span><strong>{result.provider}</strong></div>
      </div>
      <p>
        This is a mock payment result for frontend testing. Your cart remains unchanged.
      </p>
    </div>
  )
}
