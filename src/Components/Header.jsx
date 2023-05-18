import React from 'react';

import './Header.scss'
import { useContext, useState} from 'react'; 
import { useNavigate ,Link } from 'react-router-dom';

import DarkModeIcon from '@mui/icons-material/DarkMode';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';  
import AppsIcon from '@mui/icons-material/Apps';
import MicIcon from '@mui/icons-material/Mic';
import { Avatar } from '@mui/material';


import { ThemeContext } from '../utils/ThemeContext';
function Header() {
  const { darkMode, toggleDarkMode ,toggleActive,searchTitle,setSearchTitle} = useContext(ThemeContext);   
  const navigate= useNavigate();
   const handleSubmit=(e)=>{
    e.preventDefault()
    if (searchTitle) {
      navigate(`search`);
     }
   }
   return (
    <div className={darkMode ? 'bg-neutral-800 text-white header' : 'bg-neutral-100 text-gray-800  header'} >
        <div className="header__left">
            <MenuIcon onClick={toggleActive}/>
            <Link to='/'>
            <img className='header__left-logo' alt='fsf' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1024px-YouTube_Logo_2017.svg.png' />
            </Link>
        </div>
        <div  className="header__input">
            <form  onSubmit={handleSubmit} className="header__middle">
                <input 
                  // onClick={handleSubmit}
                  onChange={(e)=>(setSearchTitle(e.target.value))} 
                  value={searchTitle} 
                  type="text"
                  className="bg-transparent outline-none text-black pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                  placeholder='search'
                />
                <button  type='submit'>
                  <SearchIcon onClick={handleSubmit}  className='header__middle-searchBtn'/>
                </button>
                 
            </form>
            <MicIcon  className='header__icons'/>
                <DarkModeIcon onClick={toggleDarkMode} className={darkMode ? 'text-white' : 'text-gray-500'}/>
        </div>
        <div className="header__right">
        <VideocamIcon  className='header__icons'/>
        {/* <AppsIcon  className='header__icons'/> */}
        <NotificationAddIcon className='header__icons'/>
        <Link to='login'>
           <Avatar className='header__right-avatar'/>
        </Link>
        </div>
    </div>
  );
}
export default Header;

