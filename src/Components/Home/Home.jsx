import React from 'react'
import './Home.css'
import logo  from '../../assets/Highlight_05.png'
import arrow from '../../assets/Conversions Arrow.png'
import image from '../../assets/Image.png'
import frame from '../../assets/Frame.png'
import button from '../../assets/Button+Gradient.png'
import svg1 from '../../assets/SVG (1).png'
import svg2 from '../../assets/SVG (2).png'
import svg3 from '../../assets/SVG (3).png'
import svg4 from '../../assets/SVG.png'
import stars from '../../assets/Stars Container.png'
import walton from '../../assets/walton-seeklogo 1.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='one'>
        <h1>Digital Marketing<img src={logo} alt='Logo'/>
          Agency in Bangladesh</h1>
          <p>Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150% 
more leads and 2.5x higher conversions through integrated digital 
marketing and web design.</p>
          <button>Book Your Free Consultation</button>
    </div>
      <div className='two'>
        <div className='imgbox1'>
          <img src={frame} alt="Frame"/>
          <h3>200% <img src={arrow} alt="Arrow"/></h3>
          <h5>More Conversions</h5>
          <h6>Than Industry Average</h6>
      </div>
      <div className='imgbox2'>
        <img src={image} alt="Image"/>
        <img src={button} alt="Button"/>
        <h4><div className='circle'/>Watch Case Study</h4>
        <p>2:45 min</p>
      </div>
      <div className='imgbox3'>
        <h2>Our Track Record</h2>
        <div className='box1'>
          <div className='icon'>
            <img src={svg1} alt="SVG1" />
          </div>
          <div className='amount'>
            <h3>500+</h3>
            <h5>Clients</h5>
          </div>
        </div>
        <div className='box2'>
          <div className='icon'>
            <img src={svg2} alt="SVG2" />
          </div>
          <div className='amount'>
            <h3>98%</h3>
            <h5>Success</h5>
          </div>
        </div>
        <div className='box3'>
          <div className='icon'>
            <img src={svg3} alt="SVG3" />
          </div>
          <div className='amount'>
            <h3>24h</h3>
            <h5>Support</h5>
          </div>
        </div>
      </div>
      <div className='imgbox4'>
        <div className='corner'>
          <img src={svg4} alt="SVG4"/>
        </div>
        <div className='rest'>
          <img src={walton} alt="Walton Logo"/>
          <img src={stars} alt="Stars Container"/>
          <p>"Their marketing strategies 
are simply outstanding"</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home