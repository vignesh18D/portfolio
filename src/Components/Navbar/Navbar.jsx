import React, { useState } from 'react'
import "./Navbar.css"
import {Link} from 'react-scroll'
import logo from '../../images/logo.jpeg'
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const[toggleMenu,setToggleMenu]= useState(false);

  return (
    <div className='navbar'>
      <div className="navbar-left">
        <img src={logo} alt='logoimage' className='image'/>
      </div>
      {toggleMenu && <div className="navbar-right">
      <Link to='about' smooth={true} duration={500}>
      <h4>About Me</h4></Link>
      <Link to='skills' smooth={true} duration={500}>
      <h4>Skills</h4></Link>
      <Link to='project' smooth={true} duration={500}>
      <h4>Project</h4></Link>
      
      <Link to='contact' smooth={true} duration={500}>
      <h4>Contact</h4></Link>
      <i className='close'onClick={()=>setToggleMenu(false)}><IoClose /></i>
      </div>}
      <i className='menu'onClick={()=>setToggleMenu(!toggleMenu)}><IoMdMenu /></i>

    </div>
  )
}

export default Navbar
