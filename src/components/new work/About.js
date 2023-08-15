import React from 'react'
import CV from './CV.pdf'
import Talha from './images/Talha1.jpg'
import './css/about.css'

const About = () => {
  return (
    <div id='container1'>
   <h2 className='tag'>About Me</h2>
     <section className='about'>
      <div className='main'>
      <div> <img src={Talha} alt='photo' /> </div>
      <div className='about-text'>
      <h3>Hello!</h3>
      <h1> <span>Talha</span> Here</h1>
      <h3>And I am</h3>
     <p>Welcome to my portfolio website! I'm  a dedicated frontend developer with a keen eye for design and a strong knack for creating engaging and user-friendly web experiences. With a blend of creativity and technical expertise, I bring ideas to life through captivating user interfaces and seamless interactions.</p>
      <a href={CV} className='btn btn-primary' id='white'  download='Resume' >Download Resume</a>
      <a href='' className='btn btn-primary' id='white'>View More</a>
      </div>
      </div>
      </section>
      </div>

  )
}

export default About
