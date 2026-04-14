import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { slides } from '../data/products'

export default function HeroSlider() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => setActive((prev) => (prev + 1) % slides.length), 4500)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="heroSection">
      {slides.map((slide, index) => (
        <article key={slide.title} className={`heroSlide ${active === index ? 'active' : ''}`}>
          <img src={slide.image} alt={slide.title} />
          <div className="heroOverlay"></div>
          <div className="heroContent glass">
            <p className="eyebrow">New collection</p>
            <h2>{slide.title}</h2>
            <p>{slide.subtitle}</p>
            <div className="heroButtons">
              <Link className="primaryBtn" to="/shop">Shop now</Link>
              <Link className="secondaryBtn" to="/about">Discover the brand</Link>
            </div>
          </div>
        </article>
      ))}
      <div className="dots">
        {slides.map((_, index) => (
          <button key={index} className={active === index ? 'dot activeDot' : 'dot'} onClick={() => setActive(index)}></button>
        ))}
      </div>
    </section>
  )
}