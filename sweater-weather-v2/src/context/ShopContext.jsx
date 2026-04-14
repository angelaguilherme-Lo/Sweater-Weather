import { createContext, useContext, useMemo, useState } from 'react'

const ShopContext = createContext()

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [theme, setTheme] = useState('light')

  const addToCart = (product, size = 'M', quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.size === size
      )

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }

      return [...prevCart, { ...product, size, quantity }]
    })
  }

  const removeFromCart = (id, size) => {
    setCart((prevCart) =>
      prevCart.filter((item) => !(item.id === id && item.size === size))
    )
  }

  const updateQuantity = (id, size, action) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => {
          if (item.id === id && item.size === size) {
            const nextQuantity =
              action === 'inc' ? item.quantity + 1 : item.quantity - 1

            return { ...item, quantity: nextQuantity }
          }

          return item
        })
        .filter((item) => item.quantity > 0)
    )
  }

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id)

      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id)
      }

      return [...prevWishlist, product]
    })
  }

  const clearCart = () => {
    setCart([])
  }

  const total = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  }, [cart])

  const cartCount = useMemo(() => {
    return cart.reduce((sum, item) => sum + item.quantity, 0)
  }, [cart])

  const value = {
    cart,
    wishlist,
    theme,
    setTheme,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    clearCart,
    total,
    cartCount,
  }

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)

  if (!context) {
    throw new Error('useShop must be used inside a ShopProvider')
  }

  return context
}