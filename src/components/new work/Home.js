import React from 'react'
import './css/home.css'
import Typed from 'react-typed'
import pic from './images/Talha2.jpg'
import Skills from './Skills'
import CV from './CV.pdf'
import './Contact'
import Contact from './Contact'
import { NavLink } from 'react-router-dom'
import About from './About'
import Services from './Services'
import Footer from './Footer'

const Home = () => {
  return (

    <div className='content-wrapper' >
      <div className='content-info'>
        <h2>Web Development and Web Promotion</h2>
        <Typed
          className='typed-text'
          strings={['React Development', 'Front-end Development', "Responsive UI's"]}
          loop
          typeSpeed={40}
          backSpeed={60}
        />
      </div>
     <div className='container'>
     <div className='text'>
     <h3>Hello, it's me</h3>
      <h1>Talha <span>Shahzad</span></h1>
      <h3>And I am</h3>
      <p>A React js developer  
      <br /> exerpertise in building Responsive and fast UI's Using HTML,CSS and React JS
      </p>
       <div className='button'>
       <NavLink className="btn btn-primary" id='black' to="/contact">Let's Contact</NavLink>
       <a href={CV} download='Resume' id='black' className='btn btn-primary'>Download Resume</a>
       </div>
     </div>
     <div className='image'>
     <img src={pic} alt='profile...' className='card-img-top' />
     </div>
     </div>  <br /> <br />
     <About />
     <Skills />
     <Services />
     <Contact />
    </div>
    
  )
}

export default Home





