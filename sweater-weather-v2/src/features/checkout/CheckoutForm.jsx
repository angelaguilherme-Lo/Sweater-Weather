import { useState } from 'react'
import MockPaymentResult from './MockPaymentResult'
import PaymentMethodSelector from './PaymentMethodSelector'
import { validateCheckout } from './checkoutUtils'
import { processPayment } from './paymentService'

const initialForm = {
  email: '',
  firstName: '',
  lastName: '',
  address: '',
  city: '',
  postalCode: '',
  country: '',
  paymentMethod: 'card',
  cardNumber: '',
  expiryDate: '',
  cvc: '',
}

export default function CheckoutForm({ cart, totals }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentResult, setPaymentResult] = useState(null)

  const updateField = (name, value) => {
    setForm((current) => ({ ...current, [name]: value }))
    setErrors((current) => {
      const next = { ...current }
      delete next[name]
      delete next.submit
      return next
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const nextErrors = validateCheckout(form)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return
    }

    setIsProcessing(true)
    setErrors({})

    try {
      const result = await processPayment({
        cart,
        totals,
        customer: {
          email: form.email,
          firstName: form.firstName,
          lastName: form.lastName,
          address: form.address,
          city: form.city,
          postalCode: form.postalCode,
          country: form.country,
        },
        payment: {
          method: form.paymentMethod,
        },
      })
      setPaymentResult(result)
    } catch {
      setErrors({ submit: 'The mock payment could not be completed. Please try again.' })
    } finally {
      setIsProcessing(false)
    }
  }

  if (paymentResult) {
    return <MockPaymentResult result={paymentResult} />
  }

  return (
    <form className="glassPanel checkoutForm" onSubmit={handleSubmit} noValidate>
      <div className="checkoutFormHeader">
        <p className="miniLabel">Payment details</p>
        <h2>Shipping and payment</h2>
      </div>

      <div className="checkoutField">
        <label htmlFor="checkout-email">Email</label>
        <input
          id="checkout-email"
          type="email"
          value={form.email}
          onChange={(event) => updateField('email', event.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <span className="checkoutError">{errors.email}</span>}
      </div>

      <div className="checkoutTwoColumn">
        <div className="checkoutField">
          <label htmlFor="checkout-first-name">First name</label>
          <input
            id="checkout-first-name"
            type="text"
            value={form.firstName}
            onChange={(event) => updateField('firstName', event.target.value)}
            aria-invalid={Boolean(errors.firstName)}
          />
          {errors.firstName && <span className="checkoutError">{errors.firstName}</span>}
        </div>

        <div className="checkoutField">
          <label htmlFor="checkout-last-name">Last name</label>
          <input
            id="checkout-last-name"
            type="text"
            value={form.lastName}
            onChange={(event) => updateField('lastName', event.target.value)}
            aria-invalid={Boolean(errors.lastName)}
          />
          {errors.lastName && <span className="checkoutError">{errors.lastName}</span>}
        </div>
      </div>

      <div className="checkoutField">
        <label htmlFor="checkout-address">Address</label>
        <input
          id="checkout-address"
          type="text"
          value={form.address}
          onChange={(event) => updateField('address', event.target.value)}
          aria-invalid={Boolean(errors.address)}
        />
        {errors.address && <span className="checkoutError">{errors.address}</span>}
      </div>

      <div className="checkoutTwoColumn">
        <div className="checkoutField">
          <label htmlFor="checkout-city">City</label>
          <input
            id="checkout-city"
            type="text"
            value={form.city}
            onChange={(event) => updateField('city', event.target.value)}
            aria-invalid={Boolean(errors.city)}
          />
          {errors.city && <span className="checkoutError">{errors.city}</span>}
        </div>

        <div className="checkoutField">
          <label htmlFor="checkout-postal-code">Postal code</label>
          <input
            id="checkout-postal-code"
            type="text"
            value={form.postalCode}
            onChange={(event) => updateField('postalCode', event.target.value)}
            aria-invalid={Boolean(errors.postalCode)}
          />
          {errors.postalCode && <span className="checkoutError">{errors.postalCode}</span>}
        </div>
      </div>

      <div className="checkoutField">
        <label htmlFor="checkout-country">Country</label>
        <input
          id="checkout-country"
          type="text"
          value={form.country}
          onChange={(event) => updateField('country', event.target.value)}
          aria-invalid={Boolean(errors.country)}
        />
        {errors.country && <span className="checkoutError">{errors.country}</span>}
      </div>

      <PaymentMethodSelector
        value={form.paymentMethod}
        onChange={(value) => updateField('paymentMethod', value)}
      />

      {form.paymentMethod === 'card' && (
        <div className="checkoutCardFields">
          <div className="checkoutField">
            <label htmlFor="checkout-card-number">Mock card number</label>
            <input
              id="checkout-card-number"
              type="text"
              inputMode="numeric"
              placeholder="4242 4242 4242 4242"
              value={form.cardNumber}
              onChange={(event) => updateField('cardNumber', event.target.value)}
              aria-invalid={Boolean(errors.cardNumber)}
            />
            {errors.cardNumber && <span className="checkoutError">{errors.cardNumber}</span>}
          </div>

          <div className="checkoutTwoColumn">
            <div className="checkoutField">
              <label htmlFor="checkout-expiry">Expiry date</label>
              <input
                id="checkout-expiry"
                type="text"
                placeholder="MM/YY"
                value={form.expiryDate}
                onChange={(event) => updateField('expiryDate', event.target.value)}
                aria-invalid={Boolean(errors.expiryDate)}
              />
              {errors.expiryDate && <span className="checkoutError">{errors.expiryDate}</span>}
            </div>

            <div className="checkoutField">
              <label htmlFor="checkout-cvc">CVC</label>
              <input
                id="checkout-cvc"
                type="text"
                inputMode="numeric"
                value={form.cvc}
                onChange={(event) => updateField('cvc', event.target.value)}
                aria-invalid={Boolean(errors.cvc)}
              />
              {errors.cvc && <span className="checkoutError">{errors.cvc}</span>}
            </div>
          </div>
        </div>
      )}

      {errors.submit && <div className="checkoutSubmitError">{errors.submit}</div>}

      <button className="peachBtn fullBtn checkoutSubmitBtn" type="submit" disabled={isProcessing}>
        {isProcessing ? 'Processing mock payment...' : `Pay €${totals.total}`}
      </button>
    </form>
  )
}
