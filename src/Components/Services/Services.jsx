import React from 'react'
import './Services.css'
import f1 from '../../assets/Frame (1).png'
import f2 from '../../assets/Frame (2).png'
import f3 from '../../assets/Frame (3).png'
import f4 from '../../assets/Frame (4).png'
import f5 from '../../assets/Frame (5).png'
import f6 from '../../assets/Frame (6).png'
import f7 from '../../assets/Frame (7).png'
import f8 from '../../assets/Frame (8).png'

const Services = () => {
  return (
    <div className='service'>
      <div className='capsule'>Our Services</div>
      <h1>Full-stack Digital Marketing Services</h1>
      <p>We manage your complete digital presence so you can focus on your core business.</p>
      <div className='cards'>
        <div className='card'>
          <img src={f1} alt='F1'/>
          <h3>SEO Service</h3>
          <p>Improve Google rankings and gain
            consistent, long-term traffic.</p>
        </div>
        <div className='card'>
          <img src={f2} alt='F2'/>
          <h3>Web Design</h3>
          <p>Create websites that convert
            visitors into customers.</p>
        </div>
        <div className='card'>
          <img src={f3} alt='F3'/>
          <h3>Facebook Ads</h3>
          <p>Connect with your target audience
            on their preferred platforms.</p>
        </div>
        <div className='card'>
          <img src={f4} alt='F4'/>
          <h3>Google Ads</h3>
          <p>Reach customers actively
            searching for your services.</p>
        </div>
        <div className='card'>
          <img src={f5} alt='F5'/>
          <h3>Content Writing</h3>
          <p>Build trust and improve Google
            rankings with compelling content.</p>
        </div>
        <div className='card'>
          <img src={f6} alt='F6'/>
          <h3>Branding</h3>
          <p>Differentiate your business and
            build customer loyalty.</p>
        </div>
        <div className='card'>
          <img src={f7} alt='F7'/>
          <h3>UI/UX Design</h3>
          <p>Design user experiences that
            increase Conversions.</p>
        </div>
        <div className='card'>
          <img src={f8} alt='F8'/>
          <h3>Graphic Design</h3>
          <p>Develop professional visuals to
            enhance trust and credibility.</p>
        </div>
      </div>
    </div>
  )
}

export default Services