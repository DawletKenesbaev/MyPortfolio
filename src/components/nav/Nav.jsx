import React from 'react'
import { useState } from 'react';

import './nav.css';


import HomeIcon from '@mui/icons-material/Home';
import MessageIcon from '@mui/icons-material/Message';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';


function Nav() {
  const [activeNav,setAtiveNav]=useState('#')
  return (
    <nav mt-5>
      <a href="#" className={ activeNav==='#' ? 'active' :''} onClick={()=>setAtiveNav('#')}><HomeIcon/></a>
      <a href="#about" className={ activeNav==='#about' ? 'active' :''} onClick={()=>setAtiveNav('#about')}><PersonOutlineIcon/></a>
      <a href="#experience"  className={ activeNav==='#experience' ? 'active' :''} onClick={()=>setAtiveNav('#experience')}><LibraryBooksIcon/></a>
      <a href="#contact"  className={ activeNav==='#contact' ? 'active' :''} onClick={()=>setAtiveNav('#contact')}><MessageIcon/></a>
    
    </nav>
  )
}

export default Nav