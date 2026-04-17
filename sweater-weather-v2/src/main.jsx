import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import App from './App'
import { ShopProvider } from './context/ShopContext'
import './styles.css'

const lenis = new Lenis({
  duration: 1.15,
  smoothWheel: true,
  smoothTouch: false,
  wheelMultiplier: 0.95,
  touchMultiplier: 1,
  easing: (t) => 1 - Math.pow(1 - t, 3),
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ShopProvider>
        <App />
      </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>,
)