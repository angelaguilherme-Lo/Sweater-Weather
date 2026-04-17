export default function AboutPage() {
  return (
    <section className="container pageBlock">
      <div className="aboutHero glassPanel topGap aboutLayout">
        <div>
          <p className="miniLabel tealText">About us</p>
          <h1 className="pageTitle">Authentic premium knitwear with warmth at its core</h1>
          <p>
            Sweater Weather is a women&apos;s clothing website dedicated to sweaters, tunics and knits that feel inviting, elegant and easy to wear. Our boutique story is built around soft silhouettes, timeless comfort and a modern premium presentation.
          </p>
          <p>
            We focus on material-led style and honest wardrobe essentials that customers can imagine wearing every day, from relaxed mornings to polished city evenings.
          </p>
        </div>
        <img src="/images/ihor-rapita-GlEMt2rjaEs-unsplash.jpg" alt="Premium striped sweater styling" className="aboutImage" />
      </div>

      <div className="aboutColumns sectionBlock">
        <article className="glassPanel infoPane">
          <p className="miniLabel">Materials we love</p>
          <h2>Cashmere, cotton and linen</h2>
          <p>
            Cashmere inspires our most elevated knitwear mood with exceptional softness, warmth and a luxurious finish that feels comforting against the skin.
          </p>
          <p>
            Cotton adds breathable everyday ease, clean structure and natural comfort, making it ideal for premium sweaters and transitional tunics.
          </p>
          <p>
            Linen brings airy lightness, texture and relaxed refinement, especially in tunic silhouettes designed for warmer seasons and elegant layering.
          </p>
        </article>
        <article className="glassPanel infoPane">
          <p className="miniLabel">Our customer promise</p>
          <h2>A more engaging boutique experience</h2>
          <p>
            We want visitors to feel welcomed, inspired and confident while browsing. That is why the website uses calm spacing, warm imagery, smooth scrolling, desktop-friendly navigation and clearer storytelling about the products and materials.
          </p>
          <p>
            Every collection is chosen to balance softness, practicality and authentic premium character rather than a cold catalog feeling.
          </p>
        </article>
      </div>
    </section>
  )
}