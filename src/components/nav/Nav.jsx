import React from 'react';
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdOutlineMessage} from 'react-icons/md'
import {BsPatchCheckFill} from 'react-icons/bs'


const Nav = () => {
  /*const[activeNav,setActiveNav]=useState('#')*/
  return (
    <nav>
      <a href="#" /*onClick={()=>secActiveNav('#')} className={actively=== '#'? 'active':' '}*/><AiOutlineHome/></a>
      <a href="#about" /*onClick={()=>secActiveNav('#about')} className={actively=== '#about'? 'active':' '}*/><AiOutlineUser/></a>
      <a href="#experience" /*onClick={()=>secActiveNav('#experience')} className={actively=== '#experinece'? 'active':' '}*/><BiBook/></a>
      
      <a href="#portfolio"/* onClick={()=>secActiveNav('#contact')} className={actively=== '#contact'? 'active':' '}*/><BsPatchCheckFill/></a>  
      <a href="#contact"/* onClick={()=>secActiveNav('#contact')} className={actively=== '#contact'? 'active':' '}*/><MdOutlineMessage/></a>
      
    </nav>
  )
}

export default Nav