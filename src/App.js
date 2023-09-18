import React from 'react'


//components 

import './App.css'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import About from './components/about/About.jsx';
import Experience from './components/experience/Experience.jsx';
import Porfolio from './components/porfolio/Porfolio';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact.jsx';

function App() {
  return (
    <>
     <Header/>
     <Nav/>
     <About />
     <Experience/>
     <Porfolio/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App