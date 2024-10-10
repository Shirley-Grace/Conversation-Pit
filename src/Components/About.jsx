import React from 'react'
import './About.css'
import Nav from './Nav'
import Footer from './Footer'

function About() {
  return (
    <div className='about'>
      <Nav />

      <div className="aboutcards">

      <div className="aboutcard1">

        <h3>WHO WE ARE</h3>

        <p>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
        quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
        cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum."
        <br />
        </p>    

      </div>
      
      <div className="aboutcard2">

      <h3>WHAT WE DO</h3>

      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum."
      <br />
      </p> 
    
      </div>
      
      <div className="aboutcard3">

      <h3>HOW WE DI IT</h3>
      <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt <br /> ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
      quis nostrud exercitation ullamco <br /> laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse <br /> cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat 
      cupidatat non proident, sunt in culpa qui <br /> officia deserunt mollit anim id est laborum."
      <br />
      </p> 
    
      </div>

      </div>
      <Footer />
     
    </div>
  )
}

export default About
