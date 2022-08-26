import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assests/me3.jpeg'
import HeaderSocial from './HeaderSocials'
const Header = () => {
  return (
    <header id="homestart">
    <div className="container header_container">
      
      <h1>Hello, I'm Vismaya.R</h1>
      <h3>Btech CSE Student at PES UNIVERSITY</h3>
      <h3 className="text-light">Passionate about Web development and designing</h3>
      <CTA/>
      <HeaderSocial/>
      <div className="me">
        <img src={ME} alt=""/>
      </div>
     
    </div>
    </header>
  )
}

export default Header