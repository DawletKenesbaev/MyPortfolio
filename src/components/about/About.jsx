import React from 'react'

import './about.scss'
import Mer from '../../assets/pp.jpg'
import { motion } from "framer-motion";

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
          <p>I am Dawlet Kenesbaev 19 years old front-end developer . I am really passionate to create modern web-sites especcially e-commerce websites.
            Also i have created more than 30 projects mostly React.js and cant wait working with real projects .             </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
           </div>
        
      </div>
      </div>
    </section>
  )
}

export default About