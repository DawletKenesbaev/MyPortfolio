import React from 'react'
import { useState } from 'react';

import './nav.css';


function Nav() {
  const [activeNav,setAtiveNav]=useState('#')
  return (
    <nav mt-5>
      <a href="#" className={ activeNav==='#' ? 'active' :''} onClick={()=>setAtiveNav('#')}>H</a>
      <a href="#about" className={ activeNav==='#about' ? 'active' :''} onClick={()=>setAtiveNav('#about')}>A</a>
      <a href="#experience"  className={ activeNav==='#experience' ? 'active' :''} onClick={()=>setAtiveNav('#experience')}>Ex</a>
      <a href="#porfolio"  className={ activeNav==='#porfolio' ? 'active' :''} onClick={()=>setAtiveNav('#porfolio')}>Po</a>
      <a href="#contact"  className={ activeNav==='#contact' ? 'active' :''} onClick={()=>setAtiveNav('#contact')}>C</a>
    
    </nav>
  )
}

export default Nav