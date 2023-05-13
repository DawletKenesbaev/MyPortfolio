import './SidebarOption.scss'
import { useContext } from 'react'

function SidebarOptionSub({active2,text}) {

    return (
        <div   className='sidebarOption'>
          <h3>{text}</h3>
          <span className={`${active2 && "sidebarOption--activesub"}`}></span>
        </div>
    )
} 
export default SidebarOptionSub;