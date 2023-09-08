import React from 'react'
import  CV from '../../assets/Dawlet.resume.pdf'
function CTA() {
  return (
    <div className='cta mt-1'>
        <a href={CV} download className='btn  mr-3'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA