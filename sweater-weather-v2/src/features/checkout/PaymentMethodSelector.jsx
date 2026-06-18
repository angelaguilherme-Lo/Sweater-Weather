import { Banknote, CreditCard, Wallet } from 'lucide-react'

const paymentMethods = [
  {
    id: 'card',
    label: 'Mock card',
    note: 'Frontend-only card validation.',
    Icon: CreditCard,
  },
  {
    id: 'paypal',
    label: 'PayPal',
    note: 'Placeholder for future provider integration.',
    Icon: Wallet,
  },
  {
    id: 'cash',
    label: 'Cash on delivery',
    note: 'Placeholder option for manual payment.',
    Icon: Banknote,
  },
]

export default function PaymentMethodSelector({ value, onChange }) {
  return (
    <fieldset className="paymentSelector">
      <legend>Payment method</legend>
      <div className="paymentSelectorGrid">
        {paymentMethods.map(({ id, label, note, Icon }) => (
          <label key={id} className={`paymentOption ${value === id ? 'active' : ''}`}>
            <input
              type="radio"
              name="paymentMethod"
              value={id}
              checked={value === id}
              onChange={() => onChange(id)}
            />
            <span className="paymentOptionIcon"><Icon size={18} /></span>
            <span>
              <strong>{label}</strong>
              <small>{note}</small>
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  )
}
