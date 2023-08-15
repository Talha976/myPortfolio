import './components/new work/css/app.css';
import React from 'react';
import Navigation from './components/new work/Navigation';
import { Routes,Route } from 'react-router-dom';
import Home from './components/new work/Home';
import About from './components/new work/About';
import Skills from './components/new work/Skills';
import Contact from './components/new work/Contact';
import Services from './components/new work/Services';
import Footer from './components/new work/Footer';



function App(){
  return(

<div className='App'>

<Navigation />
<Routes>
<Route path="/" element={<Home />} />
<Route path='/about' element={<About />} />
<Route path='/skills' element={ <Skills /> } />
<Route path='/services' element={ <Services /> } />
<Route path='/contact' element={ <Contact /> } />
</Routes>
<Footer />

</div>

  )
}
export default  App;