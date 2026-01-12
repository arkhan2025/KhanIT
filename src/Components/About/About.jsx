import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
      <div className='capsule'>Why Choose US</div>
      <h1>Why 100+ Businesses Choose Khan IT</h1>
      <p>You have options. So why do so many businesses in Bangladesh choose Khan IT? 
SimplN
— we deliver real results, not buzzwords.</p>
    <div className='aboutcards'>
      <div className='aboutcard'>
        <div className='abouticon'><img src='./src/assets/Frame (9).png' alt='F9'/></div>
          <h2>Expert-Led by a Proven
SEO Specialist</h2>
          <p>Khan IT is founded and led by Md Faruk
Khan, a certified SEO expert with over
10 years of experience and more than
8,000 trained professionals.</p>
      </div>
      <div className='aboutcard'>
        <div className='abouticon'><img src='./src/assets/Frame (10).png' alt='F10'/></div>
          <h2>Specialized in What Works</h2>
          <p>We specialize in digital marketing and
web design. This focus enables faster
delivery, higher quality, and stronger
ROI.</p>
      </div>
      <div className='aboutcard'>
        <div className='abouticon'><img src='./src/assets/Frame (11).png' alt='F11'/></div>
          <h2>Transparent Pricing</h2>
          <p>You will always know exactly what you
are paying for, with clear pricing, no
hidden fees, and flexible packages.</p>
      </div>
      <div className='aboutcard'>
        <div className='abouticon'><img src='./src/assets/Frame (12).png' alt='F12'/></div>
          <h2>Proven, Measurable Results</h2>
          <p>Our clients experience an average
150% increase in inquiries and a
higher conversion rate with a 4.8/5
satisfaction rating.</p>
      </div>
      <div className='aboutcard'>
        <div className='abouticon'><img src='./src/assets/Frame (13).png' alt='F13'/></div>
          <h2>AI-First, Data-Driven
Approach</h2>
          <p>We utilize Al and real-world data to
inform marketing decisions. Every
campaign is meticulously designed.</p>
      </div>
      <div className='aboutcard'>
        <div className='abouticon'><img src='./src/assets/Frame (14).png' alt='F14'/></div>
          <h2>Full-Stack Digital Marketing</h2>
          <p>Our SEO, advertising, content,
design, and branding services work
together as a cohesive system.</p>
      </div>
      </div>
    </div>
  )
}

export default About