import React from 'react'
import {BrowserRouter as Router , Routes , Route} from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import UserPage from './pages/UserPage';
import AboutPage from './pages/AboutPage';
import PageNotFound from './pages/PageNotFound';
import { UserProvider } from './providers/UserContext';

const App = () => {
  return (
    <UserProvider>
      <Router>
      <Navbar/>
      <Routes>
        <Route path="*" element={<PageNotFound/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/User/:id" element={<UserPage/>}/>
        

      </Routes>
    </Router>
    </UserProvider>
  )
}

export default App
