import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './css/skills.css'
import HTML from './images/HTML.png';
import CSS from './images/CSS.png';
import JS from './images/js2.png';
import REACT from './images/react.png';
import PHP from './images/php2.jpeg';
import SQL from './images/sql2.png';

const Skills = () => {
    const Responsive= {
        superLargeDesktop: {
            breakpoint: { max:4000, min:3000 }, items:5
        },
        desktop: {
            breakpoint: { max: 3000, min:1280},items: 3
        },
        tablet: {
            breakpoint: {max: 1279,min:600}, items:2
        },
        mobile: {
            breakpoint:{max: 599,min:0},items: 1
        }
    }
  return (
    <div>
      <section className='skills' id='skills'>

<div className='skills-box'>
<h2>Skills</h2>
<p id='p1'>I have skills in HTML, CSS (Bootstrap), JavaScript (JQuery), React js, PHP and SQL. <br /> I can build Responsive and fast UI's Using React js </p>
<Carousel responsive={Responsive} infinite={true} className='skill-slider'>
<div className='item'>
<img src={HTML} className='img' alt='image' />
<h5>HTML</h5>
</div>
<div className='item'>
<img src={CSS} className='img' alt='image' />
<h5>CSS</h5>
</div>
<div className='item'>
<img src={JS} className='img' alt='image' />
<h5>JavaScript</h5>
</div>
<div className='item'>
<img src={REACT} className='img' alt='image' />
<h5>React js</h5>
</div>
<div className='item'>
<img src={PHP} className='img' alt='image' />
<h5>PHP</h5>
</div>
<div className='item'>
<img src={SQL} className='img' alt='image' />
<h5>SQL</h5>
</div>

</Carousel>

</div>

      </section>
    </div>
  )
}

export default Skills
