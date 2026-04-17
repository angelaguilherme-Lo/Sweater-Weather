import { useMemo, useState } from 'react'
import { ChevronDown, Eye, Heart, ShoppingBag, Sparkles } from 'lucide-react'
import { useShop } from '../context/ShopContext'

const sizes = ['XS', 'S', 'M', 'L', 'XL']

export default function ProductCard({ product }) {
  const [size, setSize] = useState('M')
  const { addToCart, toggleWishlist, wishlist } = useShop()
  const saved = useMemo(() => wishlist.some((item) => item.id === product.id), [wishlist, product.id])

  return (
    <article className="productCard luxuryProductCard websiteCard glassPanel">
      <div className="productMedia luxuryProductMedia">
        <img src={product.image} alt={product.name} />

        <div className="productOverlayActions">
          <span className="badgeTag luxuryBadgeTag">{product.badge}</span>
          <button className={`wishlistBadge luxuryWishlistBadge ${saved ? 'active' : ''}`} onClick={() => toggleWishlist(product)} aria-label="Toggle wishlist">
            <Heart size={18} />
          </button>
        </div>

        <div className="quickViewHint">
          <Eye size={16} />
          <span>Premium selection</span>
        </div>
      </div>

      <div className="productContent luxuryProductContent">
        <div className="productTopMeta">
          <p className="miniLabel">{product.category}</p>
          {product.material && (
            <span className="materialTag">
              <Sparkles size={13} />
              {product.material}
            </span>
          )}
        </div>

        <h3>{product.name}</h3>
        <p>{product.description}</p>

        <div className="productBottomBlock">
          <div className="productRow luxuryProductRow">
            <div className="sizeBox">
              <span>Size</span>
              <div className="selectWrap luxurySelectWrap">
                <select value={size} onChange={(e) => setSize(e.target.value)}>
                  {sizes.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
                <ChevronDown size={16} />
              </div>
            </div>
            <div className="priceCluster">
              <span className="priceLabel">Price</span>
              <div className="priceText luxuryPriceText">€{product.price}</div>
            </div>
          </div>

          <button className="peachBtn fullBtn luxuryAddToCartBtn" onClick={() => addToCart(product, size)}>
            <ShoppingBag size={16} />
            <span>Add to cart</span>
          </button>
        </div>
      </div>
    </article>
  )
}