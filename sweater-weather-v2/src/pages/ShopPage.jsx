import { useMemo, useState } from 'react'
import { ArrowDownUp, Search } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/products'

const categoryFilters = ['All', 'Sweater', 'Tunic', 'Knitwear', 'Poncho']
const sortOptions = ['Newest', 'Price low to high', 'Luxury picks']

export default function ShopPage() {
  const [query, setQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState('All')
  const [sortBy, setSortBy] = useState('Newest')

  const categoryCounts = useMemo(() => {
    const counts = { All: products.length }
    categoryFilters.slice(1).forEach((category) => {
      counts[category] = products.filter((product) => product.category === category).length
    })
    return counts
  }, [])

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesFilter = activeFilter === 'All' || product.category === activeFilter
      const searchText = `${product.name} ${product.category} ${product.description}`.toLowerCase()
      const matchesQuery = searchText.includes(query.toLowerCase())
      return matchesFilter && matchesQuery
    })

    if (sortBy === 'Price low to high') {
      result = [...result].sort((a, b) => a.price - b.price)
    }

    if (sortBy === 'Luxury picks') {
      result = [...result].sort((a, b) => b.price - a.price)
    }

    if (sortBy === 'Newest') {
      result = [...result].sort((a, b) => b.id - a.id)
    }

    return result
  }, [query, activeFilter, sortBy])

  return (
    <section className="container pageBlock">
      <div className="topGap sectionIntro splitHeading luxuryCollectionsHero upgradedCollectionsHero">
        <div>
          <p className="miniLabel tealText">Collections</p>
          <h1 className="pageTitle">Explore our premium knitwear collection</h1>
        </div>
        <p>
          Browse refined pieces with premium search, category filters, product counts and sorting designed to make the collection feel clearer, more elegant and easier to shop.
        </p>
      </div>

      <div className="shopControls glassPanel upgradedShopControls">
        <div className="shopSearchBar luxurySearchBar">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search sweaters, tunics, ponchos or knitwear..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="collectionsToolbar">
          <div className="filterPills luxuryFilterPills">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                type="button"
                className={`filterPill luxuryFilterPill ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                <span>{filter}</span>
                <strong>{categoryCounts[filter] ?? 0}</strong>
              </button>
            ))}
          </div>

          <div className="sortControlWrap">
            <div className="sortLabel"><ArrowDownUp size={16} /> Sort by</div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="sortSelectLuxury">
              {sortOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="resultsHeader">
        <p className="resultsCount">
          Showing <strong>{filteredProducts.length}</strong> piece{filteredProducts.length === 1 ? '' : 's'}
          {activeFilter !== 'All' ? ` in ${activeFilter}` : ''}
        </p>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="glassPanel emptySearchState luxuryEmptyState">
          <p>No pieces match your search right now. Try a new keyword or browse another collection.</p>
        </div>
      ) : (
        <div className="productGridWebsite productGridWithTopSpace">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </section>
  )
}