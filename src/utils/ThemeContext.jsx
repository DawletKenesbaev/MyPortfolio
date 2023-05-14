import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [navActive,setNavActive]=useState(true)
  const [searchTitle,setSearchTitle]=useState('')
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  const toggleActive = () => {
    setNavActive(!navActive);
  };
  
  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode ,toggleActive,navActive,searchTitle,setSearchTitle}}>
      {children}
    </ThemeContext.Provider>
  );
};