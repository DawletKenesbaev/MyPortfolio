import './SidebarOption.scss'
import { useContext } from 'react'

function SidebarOptionSub({active2,text,AvatarImg}) {

    return (
        <div   className='sidebarOption'>
           <img src={AvatarImg} alt={text} />
          <h3>{text}</h3>
          <span className={`${active2 && "sidebarOption--activesub"}`}></span>
        </div>
    )
} 
export default SidebarOptionSub;