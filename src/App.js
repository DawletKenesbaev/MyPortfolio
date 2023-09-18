import React from 'react'


//components 

import About from './components/about/About.jsx';



import './App.css'
import Header from './components/header/Header';
import Nav from './components/nav/Nav';
import Experience from './components/experience/Experience.jsx';
import Porfolio from './components/porfolio/Porfolio';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact.jsx';
import styled from '@emotion/styled';
import Test from './components/test.js';
function App() {
  return (
    <>
     <Header/>
     <Nav/>
     <Test/>
     <Experience/>
     <Porfolio/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App