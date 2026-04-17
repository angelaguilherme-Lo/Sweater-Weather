import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { slides } from '../data/products'

export default function HeroSlider() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="heroWrap container">
      <div className="heroFrame luxuryHeroFrame">
        {slides.map((slide, i) => (
          <article key={slide.title} className={`heroSlide ${i === index ? 'active' : ''}`}>
            <img src={slide.image} alt={slide.title} className="heroImage" />
            <div className="heroShade luxuryHeroShade" />

            <div className="heroLuxuryContent">
              <div className="heroEditorialCard glassPanel">
                <p className="miniLabel tealText">Sweater Weather</p>
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
              <div className="heroActions">
                <NavLink to="/shop" className="peachBtn">Discover the collection</NavLink>
                <NavLink to="/about" className="ghostBtn">Our materials</NavLink>
              </div>
            </div>
          </div>
          </article>
        ))}

        <div className="heroControls luxuryHeroControls">
          <button className="circleBtn" onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)} aria-label="Previous slide">
            <ChevronLeft size={18} />
          </button>
          <button className="circleBtn" onClick={() => setIndex((prev) => (prev + 1) % slides.length)} aria-label="Next slide">
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}