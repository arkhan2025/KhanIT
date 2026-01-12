import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Hero from './Components/Hero/Hero.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Services from './Components/Services/Services.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hero />
    <Home />
    <Services />
    <About />
  </StrictMode>,
)
