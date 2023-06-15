import React from 'react';


import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';

import './footer.scss';
function Footer() {
  return (
    <footer>
      <div className="container">
        <a href="" className='footer__logo'></a>
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#porfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className='footer__socials'>
          <a href="https://www.instagram.com/dawlet_kenesbaev" target='_blank'><InstagramIcon/></a>
          <a href="https://twitter.com/DawletKenesbaev" target='_blank'><TwitterIcon/></a>
          <a href="https://t.me/DKenesbaev" target='_blank'><TelegramIcon/></a>
          <a href="https://github.com/NUKUS777" target='_blank'><GitHubIcon/></a>

        </div>
      </div>
    </footer>
  )
}

export default Footer