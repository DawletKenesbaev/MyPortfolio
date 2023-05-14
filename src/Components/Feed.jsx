import {React ,useEffect,useState} from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../utils/ThemeContext';


// import { fetchFromAPI } from '../utils/fetchFromAPI'
import Video from './Video'

import Sidebar from './Sidebar'
import './Feed.scss'
function Feed() {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div  className={darkMode ? 'bg-neutral-800 text-white feed' : 'bg-neutral-100 text-gray-800 feed'}>
      <Sidebar     className={darkMode  ? 'bg-neutral-800 text-white ' : 'bg-neutral-100 text-gray-800'}/>
       <div  className='video grow w-[calc(100%-240px)] h-full overflow-y-auto bg-gray'>
             <Video/>
       </div>
    </div>
  )
}

export default Feed