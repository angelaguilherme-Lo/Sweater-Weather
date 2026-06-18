function createOrderNumber() {
  return `SW-${Math.floor(100000 + Math.random() * 900000)}`
}

export function processPayment(orderData) {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve({
        ok: true,
        provider: 'mock',
        orderNumber: createOrderNumber(),
        total: orderData.totals.total,
        paymentMethod: orderData.payment.method,
        createdAt: new Date().toISOString(),
      })
    }, 900)
  })
}
