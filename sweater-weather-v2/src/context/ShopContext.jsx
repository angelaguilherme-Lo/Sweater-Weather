import { createContext, useContext, useMemo, useState } from 'react'

const ShopContext = createContext(null)

export function ShopProvider({ children }) {
  const [wishlist, setWishlist] = useState([])
  const [cart, setCart] = useState([])
  const [chatOpen, setChatOpen] = useState(false)
  const [user, setUser] = useState(null)

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hello, welcome to Sweater Weather. I can help you find cashmere, cotton and linen styles.',
    },
  ])

  const isAuthenticated = Boolean(user)

  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product],
    )
  }

  const addToCart = (product, size = 'M') => {
    setCart((prev) => {
      const match = prev.find(
        (item) => item.id === product.id && item.size === size,
      )

      if (match) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      }

      return [...prev, { ...product, size, quantity: 1 }]
    })
  }

  const updateCartQuantity = (id, size, quantity) => {
    if (quantity <= 0) {
      setCart((prev) =>
        prev.filter((item) => !(item.id === id && item.size === size)),
      )
      return
    }

    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size ? { ...item, quantity } : item,
      ),
    )
  }

  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size)),
    )
  }

  const login = ({ email, password }) => {
    const cleanEmail = email.trim().toLowerCase()
    const cleanPassword = password.trim()

    if (!cleanEmail || !cleanPassword) {
      return {
        success: false,
        message: 'Email and password are required.',
      }
    }

    const rawName = cleanEmail.split('@')[0] || 'shopper'
    const formattedName = rawName
      .replace(/[._-]+/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase())

    const demoUser = {
      id: 'demo-user-1',
      name: formattedName,
      email: cleanEmail,
      provider: 'email',
    }

    setUser(demoUser)

    return {
      success: true,
      user: demoUser,
    }
  }

  const register = ({ name, email, password }) => {
    const cleanName = name.trim()
    const cleanEmail = email.trim().toLowerCase()
    const cleanPassword = password.trim()

    if (!cleanName || !cleanEmail || !cleanPassword) {
      return {
        success: false,
        message: 'Name, email and password are required.',
      }
    }

    const demoUser = {
      id: 'demo-user-1',
      name: cleanName,
      email: cleanEmail,
      provider: 'email',
    }

    setUser(demoUser)

    return {
      success: true,
      user: demoUser,
    }
  }

  const loginWithGoogle = () => {
    const demoUser = {
      id: 'google-demo-user',
      name: 'Google Shopper',
      email: 'shopper@gmail.com',
      provider: 'google',
    }

    setUser(demoUser)

    return {
      success: true,
      user: demoUser,
    }
  }

  const logout = () => {
    setUser(null)
  }

  const sendChatMessage = (text) => {
    const input = text.trim()
    if (!input) return

    setMessages((prev) => [...prev, { role: 'user', text: input }])

    const lower = input.toLowerCase()

    let reply =
      'Our team recommends exploring our knitwear, tunics and sweaters for a warm premium look.'

    if (lower.includes('cashmere')) {
      reply =
        'Our premium edit includes soft cashmere-inspired knitwear designed for warmth, softness and an elevated finish.'
    }

    if (lower.includes('cotton')) {
      reply =
        'Our cotton styles focus on breathable comfort, smooth structure and easy layering for everyday elegance.'
    }

    if (lower.includes('linen')) {
      reply =
        'Our linen-blend pieces are light, airy and ideal for refined transitional styling.'
    }

    if (lower.includes('size')) {
      reply =
        'Each product card includes a size dropdown with XS to XL so shoppers can choose cleanly and quickly.'
    }

    if (lower.includes('shipping')) {
      reply =
        'You can present shipping details in the contact or checkout section later, but this version focuses on the premium storefront experience.'
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'assistant', text: reply }])
    }, 400)
  }

  const value = useMemo(
    () => ({
      wishlist,
      cart,
      chatOpen,
      setChatOpen,
      messages,
      sendChatMessage,
      toggleWishlist,
      addToCart,
      updateCartQuantity,
      removeFromCart,
      user,
      isAuthenticated,
      login,
      register,
      loginWithGoogle,
      logout,
    }),
    [wishlist, cart, chatOpen, messages, user, isAuthenticated],
  )

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useShop must be used inside ShopProvider')
  }

  return context
}