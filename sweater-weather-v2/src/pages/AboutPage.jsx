export default function AboutPage() {
  return (
    <section className="section aboutLuxuryPage">
      <div className="aboutHero glass">
        <div className="aboutHeroTop">
          <p className="eyebrow">About Sweater Weather</p>
          <span className="aboutLine"></span>
        </div>

        <div className="aboutHeroGrid">
          <div>
            <h2>
              Luxury knitwear and warm essentials with a modern feminine point of
              view.
            </h2>
          </div>

          <div className="aboutIntroCopy">
            <p>
              Sweater Weather is a boutique-inspired online store shaped around
              refined comfort, premium textures and elevated everyday dressing.
            </p>
            <p>
              We curate premium sweatshirts, elegant tunics and rich knitwear
              sweaters for women who want softness, polish and effortless warmth
              in one wardrobe.
            </p>
          </div>
        </div>
      </div>

      <div className="aboutLuxuryGrid">
        <article className="glass aboutFeatureCard">
          <p className="eyebrow">Our signature</p>
          <h3>Soft structure</h3>
          <p>
            Premium sweatshirts with elevated shape, clean lines and a refined
            relaxed fit. Allergy free  and gentle  touch on the skin. 
          </p>
        </article>

        <article className="glass aboutFeatureCard">
          <p className="eyebrow">Our materials</p>
          <h3>Warm texture</h3>
          <p>
            Knitwear selected for softness, depth and tactile richness in warm
            seasonal tones. Materials such as cotton, cashmere, and linen are our foundation.
          </p>
        </article>

        <article className="glass aboutFeatureCard">
          <p className="eyebrow">Our mood</p>
          <h3>Modern femininity</h3>
          <p>
            Tunics and layering pieces designed to feel graceful, wearable and
            quietly luxurious.
          </p>
        </article>
      </div>

      <div className="aboutStatementRow">
        <div className="glass aboutStatementCard">
          <p className="eyebrow">Brand note</p>
          <blockquote>
            “We believe elegance should feel warm, wearable and beautifully
            effortless.”
          </blockquote>
        </div>

        <div className="glass aboutChecklistCard">
          <p className="eyebrow">What defines us</p>
          <ul>
            <li>Premium silhouettes with boutique-inspired polish</li>
            <li>Comfort-led pieces designed for everyday elegance</li>
            <li>Warm neutral palettes and refined seasonal styling</li>
          </ul>
        </div>
      </div>
    </section>
  )
}