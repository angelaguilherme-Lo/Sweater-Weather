import HeroSlider from '../components/HeroSlider'
import ProductCard from '../components/ProductCard'
import { categories, products } from '../data/products'

export default function HomePage() {
  return (
    <>
      <HeroSlider />

      <section className="container storyBand luxuryIntroBand">
        <div className="sectionIntro luxuryIntroGrid">
          <div>
            <p className="miniLabel tealText">A more luxurious experience</p>
            <h2>Premium pieces presented with warmth, softness and quiet elegance</h2>
          </div>
          <p>
            Sweater Weather is designed as a modern women&apos;s fashion, combining refined materials, premium touch, a welcoming boutique mood for sweaters, poncho,  tunics and knitwear.
          </p>
        </div>
      </section>

      <section className="container sectionBlock">
        <div className="sectionGrid categoryShowcase luxuryCategoryShowcase">
          {categories.map((category) => (
            <article key={category.title} className="categoryFeature luxuryCategoryCard glassPanel">
              <img src={category.image} alt={category.title} />
              <div className="categoryCopy">
                <p className="miniLabel">Made from 100% Fairtrade organic materials</p>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="container sectionBlock">
        <div className="sectionIntro splitHeading luxuryProductHeading">
          <div>
            <p className="miniLabel tealText">Selected inventory</p>
            <h2>Signature pieces chosen for a premium women&apos;s knitwear wardrobe</h2>
          </div>
          <p>
            Softer luxury mood across every collection, Since we want to avoid overproduction, we have initially produced our items in limited quantities. 
          </p>
        </div>
        <div className="productGridWebsite">
          {products.slice(0, 6).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  )
}