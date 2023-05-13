import React from 'react';


import './Sidebar.scss';


import SidebarOption from './SidebarOption';
import SidebarOptionSub from './SidebarOptionsub';

import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import HistoryIcon from '@mui/icons-material/History';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import QueueMusicIcon from '@mui/icons-material/QueueMusic';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';

function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarOption  Icon={HomeIcon} active={true} text={'Home'}/>
        <SidebarOption Icon={WhatshotIcon} text={'Trending'}/>
        <SidebarOption Icon={SubscriptionsIcon} text={'Subscription'}/>
        <SidebarOption Icon={LibraryAddIcon} text={'Library'}/>
        <SidebarOption Icon={HistoryIcon} text={'History'}/>
        <SidebarOption Icon={AccessAlarmIcon} text={'Watch later'}/>
        <SidebarOption Icon={StarOutlineIcon} text={'Favourites'}/>
        <SidebarOption Icon={QueueMusicIcon} text={'Music'}/>
        <SidebarOption Icon={ExpandMoreIcon} text={'More'}/>

        <h3>Subscription</h3>
        <SidebarOptionSub active2={true} text={'freecodecamp'}  />
        <SidebarOptionSub active2={true} text={'MrBeast'} />
        <SidebarOptionSub active2={false} text={'CodeEvolution'}/>
        <SidebarOptionSub active2={false} text={'RealLife'} />
        <SidebarOptionSub active2={false} text={'Mystery'} />
         <SidebarOptionSub active2={false} text={'React'} />
    </div>
  )
}

export default Sidebar