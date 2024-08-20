import React from 'react'
import './Project.css'
import img1 from '../../images/robo.jpg'
import img2 from '../../images/App1.png'
import img3 from '../../images/app2.jpg'
import img4 from '../../images/Jarvis.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
  <div id='project'>
    <div className="project-main">
      <h1 className='project-title'>My Projects</h1>
      
        <div className="card-list">
        <div className="card">
          <img src={img1}/>
          <div className="layer">
            <h3>Commercial Robotic Cleaner</h3>
            <p> Designed and developed a robotic cleaner using Arduino to clean surfaces efficiently. </p>
            </div></div>
          <div className="card">
          <img src={img2}/>
          <div className="layer">
            <h3>Pet App</h3>
            <p>Built a PetApp using React and its displays pet information by name </p>
            <a href='https://github.com/vignesh18D/PetApp'><i><FaExternalLinkAlt /></i></a>
            </div></div>
          <div className="card">
          <img src={img3}/>
          <div className="layer">
            <h3>Voice-Assistant (JARVIS)</h3>
            <p>Developed a voice assistant using Python to perform various tasks and provide information.</p>
            </div></div>
          <div className="card">
          <img src={img4}/>
          <div className="layer">
            <h3>Food App</h3>
            <p>Created a pet app using MERN stack to display pet information and facilitate searching by name and breed.</p>
            <a href='https://github.com/vignesh18D/Foodapp'><i><FaExternalLinkAlt /></i></a>
            </div></div>
         

        
      </div>
    </div>
  </div>
   
  )
}

export default Project
