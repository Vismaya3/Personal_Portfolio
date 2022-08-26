import React from 'react'
import {BsLinkedin}  from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaDribbbleSquare} from 'react-icons/fa'
import './headersocial.css'


const HeaderSocials = () => {
  return (
      <div className="header_socials">
        <a href="https://www.linkedin.com/in/vismaya-r-6093ab242/" target="blank"><BsLinkedin size={25}/></a>
        <a href="https://github.com/Vismaya3" target="blank"><FaGithub size={25}/></a>

      </div>
  )
}

export default HeaderSocials