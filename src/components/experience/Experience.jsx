import React from 'react'

import VerifiedIcon from '@mui/icons-material/Verified';

import './experience.scss'
function Experience() {
  return (
    <section id='experience'>
      <div className="container text-center">
        <h3 className='experience__des'>What Skills I have</h3>
        <h2 className='experience__par'>My Experience</h2>
        <div className="experience__container">
          <div className="experience__content  grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <article className='experience__details'>
              <VerifiedIcon className='experience__details-icon'/>
              <div className='d-flex text'>
              <h4>HTML</h4>
              <small className='text-light text-start'>Experienced</small>
              </div>
             </article>
             <article className='experience__details'>
               <VerifiedIcon className='experience__details-icon'/>
              <div className='d-flex text'>
              <h4>CSS</h4>
              <small className='text-light text-start'>Experienced</small>
              </div>
             </article><article className='experience__details'>
               <VerifiedIcon className='experience__details-icon'/>
              <div className='d-flex text'>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
              </div>
             </article>
             <article className='experience__details'>
                <VerifiedIcon className='experience__details-icon'/>
              <div className='d-flex text'>
                <h4>GITHUB</h4>
                <small className='text-light'>Experienced</small>
              </div>
             </article>
             <article className='experience__details'>
                <VerifiedIcon className='experience__details-icon'/>
              <div className='d-flex text'>
              <h4>TALIWINDCSS</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
              <article className='experience__details'>
                <VerifiedIcon className='experience__details-icon'/>
              <div className='d-flex text'>
              <h4>BOOTSTRAP</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article><article className='experience__details'>
                <VerifiedIcon className='experience__details-icon'/>
              <div className='d-flex text'>
              <h4>REACT.JS</h4>
              <small className='text-light'>Experienced</small>
              </div>
              </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience