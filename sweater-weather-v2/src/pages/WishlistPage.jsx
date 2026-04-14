import ProductCard from '../components/ProductCard'
import { useShop } from '../context/ShopContext'

export default function WishlistPage() {
  const { wishlist } = useShop()

  return (
    <section className="section">
      <div className="sectionHeading">
        <p className="eyebrow">Wish list</p>
        <h2>Your saved premium pieces</h2>
      </div>
      <div className="productGrid">
        {wishlist.length
          ? wishlist.map((product) => <ProductCard key={product.id} product={product} />)
          : <p className="emptyState glass">No saved items yet.</p>}
      </div>
    </section>
  )
}