import { useMemo, useState } from 'react'
import { useShop } from '../context/ShopContext'

const SIZE_OPTIONS = ['XS', 'S', 'M', 'L', 'XL']

export default function ProductCard({ product }) {
  const { addToCart, toggleWishlist, wishlist } = useShop()
  const [selectedSize, setSelectedSize] = useState('M')
  const [quantity, setQuantity] = useState(0)

  const isWishlisted = useMemo(
    () => wishlist.some((item) => item.id === product.id),
    [wishlist, product.id]
  )

  const decreaseQty = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0))
  }

  const increaseQty = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    if (quantity === 0) return
    addToCart(product, selectedSize, quantity)
    setQuantity(0)
  }

  return (
    <article className="productCard glass">
      <div className="productImageWrap">
        <img src={product.image} alt={product.name} className="productImage" />

        {product.badge && <span className="productBadge">{product.badge}</span>}

        <button
          type="button"
          className={`wishlistBtn ${isWishlisted ? 'active' : ''}`}
          onClick={() => toggleWishlist(product)}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          ♥
        </button>
      </div>

      <div className="productContent">
        <p className="productCategory">{product.badge || product.category}</p>
        <p>{product.category}</p>
        <h3>{product.name}</h3>
        <p className="productDescription">{product.description}</p>

        <div
          className="productOptions"
          style={{
            display: 'grid',
            gap: '14px',
            marginTop: '16px',
          }}
        >
          <div className="sizePicker">
            <span
              className="optionLabel"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--muted)',
              }}
            >
              Size
            </span>

            <div
              className="sizeList"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '8px',
              }}
            >
              {SIZE_OPTIONS.map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`sizeBtn ${selectedSize === size ? 'selected' : ''}`}
                  style={{
                    minWidth: '42px',
                    height: '42px',
                    padding: '0 12px',
                    borderRadius: '999px',
                    border:
                      selectedSize === size
                        ? '1px solid var(--accent)'
                        : '1px solid var(--line)',
                    background:
                      selectedSize === size
                        ? 'var(--accent)'
                        : 'rgba(255,255,255,0.55)',
                    color: selectedSize === size ? '#fff' : 'var(--text)',
                    fontWeight: 600,
                    transition: 'all 0.25s ease',
                    boxShadow:
                      selectedSize === size
                        ? '0 8px 20px rgba(160, 110, 85, 0.22)'
                        : 'none',
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="qtyPicker">
            <span
              className="optionLabel"
              style={{
                display: 'block',
                marginBottom: '8px',
                fontSize: '0.78rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--muted)',
              }}
            >
              Quantity
            </span>

            <div
              className="qtyControl"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '6px',
                borderRadius: '999px',
                border: '1px solid var(--line)',
                background: 'rgba(255,255,255,0.55)',
                width: 'fit-content',
              }}
            >
              <button
                type="button"
                onClick={decreaseQty}
                aria-label="Decrease quantity"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '999px',
                  border: '1px solid var(--line)',
                  background: '#fff',
                  fontSize: '1.1rem',
                  lineHeight: 1,
                }}
              >
                −
              </button>

              <span
                style={{
                  minWidth: '20px',
                  textAlign: 'center',
                  fontWeight: 600,
                  color: 'var(--text)',
                }}
              >
                {quantity}
              </span>

              <button
                type="button"
                onClick={increaseQty}
                aria-label="Increase quantity"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '999px',
                  border: '1px solid var(--line)',
                  background: '#fff',
                  fontSize: '1.1rem',
                  lineHeight: 1,
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>

        <div className="productFooter">
          <strong>€{product.price}</strong>
          <button
            type="button"
            className="primaryBtn"
            onClick={handleAddToCart}
            disabled={quantity === 0}
            style={{
              opacity: quantity === 0 ? 0.6 : 1,
              cursor: quantity === 0 ? 'not-allowed' : 'pointer',
            }}
          >
            Add to cart
          </button>
        </div>
      </div>
    </article>
  )
}