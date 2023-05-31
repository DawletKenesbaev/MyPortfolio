import React from 'react'

import './about.scss'
import Mer from '../../assets/me.png'
function About() {
  return (
    <section id='about'>
      <div className='container'>
       <div className=" text-center mb-5">
       <h5>Get to know</h5>
      <h2>About Me</h2>
       </div>
      <div className=" about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={Mer} alt="About Image" />
          </div>
        </div>
        
        <div className="about__content">
          <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Maxime eaque ad blanditiis
             vel soluta sapiente exercitationem harum nam repudiandae
              ullam, reprehenderit itaque ducimus suscipit eveniet hic 
              facilis praesentium obcaecati dolorem!</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           </div>
        
      </div>
      </div>
    </section>
  )
}

export default About