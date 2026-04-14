import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [search, setSearch] = useState('')

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory
      const searchMatch = `${product.name} ${product.description} ${product.category}`
        .toLowerCase()
        .includes(search.toLowerCase())
      return categoryMatch && searchMatch
    })
  }, [selectedCategory, search])

  return (
    <section className="section">
      <div className="sectionHeading">
        <p className="eyebrow">Shop collection</p>
        <h2>Search, filter and discover premium womenswear</h2>
      </div>

      <div className="toolbar glass">
        <input
          type="search"
          placeholder="Search sweaters, tunics, knitwear..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="filterChips">
          {categories.map((category) => (
            <button
              key={category}
              className={selectedCategory === category ? 'chip activeChip' : 'chip'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="productGrid">
        {filteredProducts.length
          ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)
          : <p className="emptyState glass">No products match your search.</p>}
      </div>
    </section>
  )
}