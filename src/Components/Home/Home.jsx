import React from 'react'
import './Home.css'
import logo  from '../../assets/Highlight_05.png'

const Home = () => {
  return (
    <div className='home'>
      <div className='one'>
        <h1>Digital Marketing<img src="./src/assets/Highlight_05.png" alt='logo'/>
          Agency in Bangladesh</h1>
          <p>Khan IT (led by SEO expert Md Faruk Khan) helps businesses get 150% 
more leads and 2.5x higher conversions through integrated digital 
marketing and web design.</p>
          <button>Book Your Free Consultation</button>
    </div>
      <div className='two'>
        <div className='imgbox1'>
          <img src="./src/assets/Frame.png" />
          <h3>200% <img src='./src/assets/Conversions Arrow.png'/></h3>
          <h5>More Conversions</h5>
          <h6>Than Industry Average</h6>
      </div>
      <div className='imgbox2'>
        <img src='./src/assets/Image.png'/>
        <img src='./src/assets/Button+Gradient.png'/>
        <h4><div className='circle'/>Watch Case Study</h4>
        <p>2:45 min</p>
      </div>
      <div className='imgbox3'>
        <h2>Our Track Record</h2>
        <div className='box1'>
          <div className='icon'>
            <img src='./src/assets/SVG (1).png'/>
          </div>
          <div className='amount'>
            <h3>500+</h3>
            <h5>Clients</h5>
          </div>
        </div>
        <div className='box2'>
          <div className='icon'>
            <img src='./src/assets/SVG (2).png'/>
          </div>
          <div className='amount'>
            <h3>98%</h3>
            <h5>Success</h5>
          </div>
        </div>
        <div className='box3'>
          <div className='icon'>
            <img src='./src/assets/SVG (3).png'/>
          </div>
          <div className='amount'>
            <h3>24h</h3>
            <h5>Support</h5>
          </div>
        </div>
      </div>
      <div className='imgbox4'>
        <div className='corner'>
          <img src='./src/assets/SVG.png'/>
        </div>
        <div className='rest'>
          <img src='./src/assets/walton-seeklogo 1.png'/>
          <img src='./src/assets/Stars Container.png'/>
          <p>"Their marketing strategies 
are simply outstanding"</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Home