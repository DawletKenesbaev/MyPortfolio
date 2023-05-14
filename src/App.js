import './App.css';
import React, { useState } from 'react';
import {BrowserRouter,Routes,Route,Switch, Navigate} from 'react-router-dom'
import Header from './Components/Header';
import Feed from './Components/Feed';
import VideoDetails from './Components/VideoDetails';
import Login from './Components/Login';
import Register from './Components/Register';
import { ThemeProvider } from './utils/ThemeContext';
import {auth} from './firebase'
import SearchFeed from './Components/SearchFeed';
function App() {
  const [user,setUser]=useState(null)
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }

    return unsubscribe;
  }, []);
  return (  
    <ThemeProvider>
           <BrowserRouter>
            <div className="App">
              <Header/>
              <Routes>
                <Route path="/" exact element={<Feed/>}/>
                {/* <Route path="/video/:id " element={<VideoDetails/>}/> */}
                {/* <Route path="/channel/:id " element={<ChannelDetail/>}/> */}
                <Route path="video/:id" element={<VideoDetails/>}/>
                <Route path='search' element={<SearchFeed/>} />
                <Route path='login' element={<Login/>}/>
                <Route path='register' element={user ? <Navigate to={'/'}/> :<Register/>}/>
              </Routes>
            </div>
      </BrowserRouter>
    </ThemeProvider>  
    
  );
}

export default App;

