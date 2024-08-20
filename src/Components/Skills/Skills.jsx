import {useState} from 'react'
import './Skills.css'
import image from '../../assets/about2.jpg'
import { FaJava } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa6";
import { BiLogoMongodb } from "react-icons/bi";
import { GrMysql } from "react-icons/gr";
import { MdCss } from "react-icons/md";
import livewire from '../../images/livewire.jpg'


const Skills = () => {
  const [activeTab, setActiveTab] = useState('skills');
  return (
    <div>
      <div id='skills'>
      <div className="container">
        <div className="row">
          <div className="column-1">
            <img src={image} alt='image'/>
          </div>
          <div className="column-2">
            <h1 className='title'>About Me</h1>
            <p className='para'> <span>Hello!! I'm Vignesh</span> <br/>A passionate software Developer and i specialize in the MERN stack and Java, with a strong focus on development and problem-solving. Dedicated to transforming ideas into functional 
              applications through robust coding skills and innovative solutions.</p>
              <div className="skill">
              <h4 className={`items ${activeTab==='skills' ? 'active' : ''}`} onClick={() => setActiveTab('skills')}>Skills</h4>
              <h4 className={`items ${activeTab==='education' ? 'active' : ''}`} onClick={() => setActiveTab('education')}>Education</h4>
              <h4 className={`items ${activeTab==='certificates' ? 'active' : ''}`} onClick={() => setActiveTab('certificates')}>Certificates</h4>
              </div>
              {activeTab==='skills' && (
                ( <div className="skills-box">
                  <div className="skill-content">
                  <li className='java'><FaJava className='icons'/><br/>Java</li>
                  <li><FaPython className='icons'/><br/>Python</li>
                  <li><FaHtml5 className='icons'/><br/>Html</li>
                  <li><MdCss className='icons'/><br/>CSS</li><br></br>
                  </div>
                  <div className="skill-content2">
                  <li><FaReact className='icons'/><br/>React</li>
                  <li><FaNode className='icons'/><br/>Node.js</li>
                  <li><IoLogoCss3 className='icons'/><br/>Express</li>
                  <li><BiLogoMongodb className='icons'/><br/>MongoDB</li>
                  <li><GrMysql className='icons'/><br/>MySQL</li>
                  </div></div> )
              )}
             {activeTab==='education' && (
               <div className="education">
                <div className="edu-content">
                  <h2>Government College of Engineering,Salem </h2>
                  <p className='clg'>Mechanical Engineering (2020-2024)</p>
                  <p className='mark'>CGPA : 7.9</p>
                 <div className="school">
                 <h2>Boys.Hr.sec.School,Vennandur </h2>
                 <p className='clg'>SSLC & HSC (2017-2020)</p>
                 </div>
                </div>

              </div>
             )}
                {activeTab==='certificates'&& (
                  <div className="certificates">
                  <div className="cer-box">
                    <div className="cer-det">
                      <h2>Java Programming</h2>
                      <p>Livewire Training Institutes,Salem(2023-2024)
                      </p>
                     <div className="python">
                     <h2>Python Bootcamp from Zero to Hero</h2>
                     <p> Udemy(2023)</p>
                     </div>
                     <div className="full">
                     <h2>Certification in Full Stack Development</h2>
                     <p> Udemy(2024)</p>
                     </div>
                    </div>
                    <div className="photo">
                      <img src={livewire}/>
                    </div>
                  </div>
                 </div>
                
                )}

          </div>

          
        </div>
      </div></div>
    </div>

  )
}

export default Skills
