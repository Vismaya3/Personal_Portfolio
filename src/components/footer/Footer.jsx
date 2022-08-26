import React from 'react'
import './footer.css'
import {AiOutlineFacebook} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {FiTwitter} from 'react-icons/fi'
import {BsLinkedin}  from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Vismaya R</a>
      
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        
        <li><a href="#portfolio">Portfolio</a></li>
       
        <li><a href="#contact">Contact</a></li>
        
        <p>ph.no:9686392037</p>
        

      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/vismaya-r-6093ab242/"><BsLinkedin/></a>
        <a href="https://github.com/Vismaya3"><FaGithub/></a>
        
      </div>
      <div>
        <small>&copy;EGator tutorials.All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer