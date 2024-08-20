import React from 'react'
import profile from '../../assets/Picsart_24-08-17_14-19-16-791.jpg'
import './Display.css'
import {useTypewriter} from 'react-simple-typewriter'
import { FaLinkedin } from "react-icons/fa";


const Display = () => {
  const [text]=useTypewriter({
    words:["Java Developer","MERN Stack Developer"],
    loop:true,
    typeSpeed:20,
    deleteSpeed:10,
    delaySpeed:2000,
  })
  return (
    <div className='display-main'>
      
      <div className="display-content">
        <h4 className='welcome'>WELCOME TO MY PORTFOLIO!</h4>
      <div className="name">
      <h1>
        Hi, I'm <span>VIGNESH</span>
      </h1>
      </div>
      <div className="display-skill">
      <h2>a <span> {text} </span></h2>
      </div>
      <div className="butt">
        <a href='https://drive.google.com/file/d/1X9QcfEDXFw_nNPg9LV5zST4YhTcUgxWO/view?usp=drivesdk'>RESUME</a>
        <div className="social">
                    <a href='https://www.linkedin.com/in/vignesh3109/'><i><FaLinkedin /></i></a></div>
      </div>
      {/* <div className="display-about">
      <h4>I specialize in the MERN stack and Java, with a strong focus on   </h4>
    
      
      <h4>development and problem-solving. Dedicated to transforming  </h4>
      <h4>ideas into functional applications through robust coding skills </h4>
      <h4>and innovative solutions.</h4>
      </div> */}
      
      </div>
      <div className="display-image">
        <img src={profile} alt='image'/>
      </div>
      
    </div>
  )
}

export default Display
