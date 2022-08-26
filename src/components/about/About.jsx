import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import ME from '../../assests/me.jpeg'
import {VscFolderLibrary} from 'react-icons/vsc'
const about = () => {
  return (
    <section id='about'>
      <h2 style={{fontSize:"30px"}}>GET TO KNOW</h2>
      
    
      
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About image"/>
          </div>
        </div>
        <div className="about__cards">
        <article className='about__card'>
            
            <h5>PES University<br/>Ring Road Campus </h5>
            <small>CGPA-8.02[till 4thsem]</small>
            <p>Distinction Award Certificate-2nd and 3rd sem</p>
          </article>
          
          <article className='about__card'>
            
            <h5>Vijaya PU College<br/>Jayanagar 4th block</h5>
            <small>2020 passout<br/>PCM:97.5% </small>
            <p>Academic Excellence Award 2020</p>
          </article>
          <article className='about__card'>
          
            <h5>New Millenium School<br/>JHBCS layout banglore</h5>
            <small>March 2018 passout<br/>Percentage:93%</small>
            <p>Best Out Going Student -2018</p>
          </article>
          
          <article className='about__card'>
           
            <h5>Interest/Hobbies</h5>
            <small>Competetive coding<br/>Website Making<br/>Mehendi Designing<br/>Mandala Art</small>
          </article>
        </div>
      
       
      
       
  
      </div>


    </section>
  )
}

export default about