import React from 'react'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

import './contact.scss'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import CallIcon from '@mui/icons-material/Call';


function Contact() {
  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lj40w6a', 'template_cm31087', form.current, 'E_mf2Z0OqYKoShcn1')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <div className="container">
        <h3 className='text-center'>Get In Touch</h3>
        <h2 className='contact__title mb-5 text-center'>Contact Me</h2>
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
              <h5>@username8168</h5>
              <a href="https://t.me/DKenesbaev" target='_blank'>Send Me Message</a>
            </article>
            <article  className="contact__option">
              <CallIcon  className='contact__option-icon'/>
              <h4>Phone</h4>
              <h5> +998934710906</h5>
              <a href="tel:+998917883433"  target='_blank'>Call Me</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
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