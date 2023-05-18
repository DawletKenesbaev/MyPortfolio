import React from 'react'
import { useContext } from 'react'
 


import { ThemeContext } from '../utils/ThemeContext.jsx'
import './SidebarOption.scss'
function SidebarOption({active, text,Icon}) {
  const {setSearchTitle,searchTitle}=useContext(ThemeContext)
  return (
    <div onClick={()=>setSearchTitle(text)}  className={`sidebarOption ${active && "sidebarOption--active"}`}>
        <Icon/>
        <h3>{text}</h3>
       
    </div>
  )
}

export default SidebarOption