export function calculateOrderTotals(cart) {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 12 : 0

  return {
    subtotal,
    shipping,
    total: subtotal + shipping,
  }
}

export function validateCheckout(form) {
  const errors = {}
  const requiredFields = [
    ['email', 'Email is required.'],
    ['firstName', 'First name is required.'],
    ['lastName', 'Last name is required.'],
    ['address', 'Address is required.'],
    ['city', 'City is required.'],
    ['postalCode', 'Postal code is required.'],
    ['country', 'Country is required.'],
  ]

  requiredFields.forEach(([field, message]) => {
    if (!form[field].trim()) errors[field] = message
  })

  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Enter a valid email address.'
  }

  if (!form.paymentMethod) {
    errors.paymentMethod = 'Choose a payment method.'
  }

  if (form.paymentMethod === 'card') {
    const cardDigits = form.cardNumber.replace(/\D/g, '')
    const cvcDigits = form.cvc.replace(/\D/g, '')

    if (!cardDigits) {
      errors.cardNumber = 'Card number is required for mock card payment.'
    } else if (cardDigits.length < 12 || cardDigits.length > 19) {
      errors.cardNumber = 'Enter a mock card number between 12 and 19 digits.'
    }

    if (!form.expiryDate.trim()) {
      errors.expiryDate = 'Expiry date is required.'
    } else if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(form.expiryDate.trim())) {
      errors.expiryDate = 'Use MM/YY format.'
    }

    if (!cvcDigits) {
      errors.cvc = 'CVC is required.'
    } else if (cvcDigits.length < 3 || cvcDigits.length > 4) {
      errors.cvc = 'CVC must be 3 or 4 digits.'
    }
  }

  return errors
}
