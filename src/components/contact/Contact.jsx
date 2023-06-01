import React from 'react'

import './contact.scss'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';


function Contact() {
  return (
    <section id='#contact'>
      <div className="container">
        <h5 >Get In Touch</h5>
        <h2 className='contact__title'>Contact Me</h2>
        <div className="contact__container">
          <div className="contact__options">
            <article  className="contact__option">
              <MailOutlineIcon className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>devdawlet@gmail.com</h5>
              <a href="mailto:devdawlet@gmail.com" target='_blank'>Send Me Message</a>
            </article>
            <article  className="contact__option">
              <TelegramIcon  className='contact__option-icon'/>
              <h4>Telegram</h4>
              <h5>@DKenesbaev</h5>
              <a href="https://t.me/DKenesbaev" target='_blank'>Send Me Message</a>
            </article>
            <article  className="contact__option">
              <CallIcon  className='contact__option-icon'/>
              <h4>Phone</h4>
              <h5> +998917883433</h5>
              <a href="+998917883433" target='_blank'>Call Me</a>
            </article>
          </div>
          <form action="">
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name='email' placeholder='Your Email' required/>
            <textarea name="message" placeholder='Your Message' rows="7"></textarea>
            <button type='submit' className='btn'>Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact