import React from 'react'
import './Contact.css'
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import drive from '../../images/Vignesh Resume.pdf'
const Connect = () => {
  return (
    <div id='contact'>
      <div className="container">
        <div className="contact-main">
            <div className="contact-left">
                <h1 className='contact-title'>Contact Me</h1>
                <p><i><IoIosMail className='p-icon' /></i>Vignesh18003@gmail.com</p>
                <p><i><FaPhoneAlt className='p-icon'/></i>6379967629</p>
                <div className="social-icon">
                    <a href='https://www.linkedin.com/in/vignesh3109/'><i><FaLinkedin /></i></a>
                    <a href='https://www.instagram.com/_.v.i.c.k.y__?igsh=MWdsbmdkN2VjcGJo'><i><FaInstagram /></i></a>
                    <a href="mailto:Vignesh18003@gmail.com"><i><CiMail  /></i></a>
                </div>
                <div className="cv">
                <a href={drive} download className='but'>Download CV</a>

                </div>
            </div>
            {/* <div className="contact-right">
                <form>
                    <input type='text' placeholder='Your Name' required/>
                    <input type='email' name='email'
                    placeholder='your Email '/>
                    <textarea type='Message' rows='4' placeholder='Your Message'></textarea>
                    <button className='but'>Submit</button>
                </form>
            </div> */}
        </div>
      </div>
      <div className="copy">
              <p className='thank'>Thank U for visiting my portfolio <FaHeart  className='heart'/></p>
              <p className='rights'>   Copyright &copy; Vignesh 2024.</p>
            </div>
      
    </div>
    
  )
}

export default Connect
