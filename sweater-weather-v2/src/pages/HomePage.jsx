import { Link } from 'react-router-dom'
import HeroSlider from '../components/HeroSlider'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <section className="section">
        <div className="sectionHeading">
          <p className="eyebrow">Product category</p>
          <h2>Essentials garments with high quality</h2>
        </div>
        <div className="categoryGrid">
          {categories.filter((item) => item !== 'All').map((category) => (
            <div key={category} className="categoryCard glass">
              <span>{category.split(' ')[0]}</span>
              <h3>{category}</h3>
              <p>Soft textures, warm tones and polished silhouettes with an elevated luxury feel.</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="sectionHeading splitHeading">
          <div>
            <p className="eyebrow">Featured pieces</p>
            <h2>Curated for effortless luxury</h2>
          </div>
          <Link className="secondaryBtn" to="/shop">View full collection</Link>
        </div>
        <div className="productGrid">
          {products.slice(0, 3).map((product) => <ProductCard key={product.id} product={product} />)}
        </div>
      </section>
    </>
  )
}