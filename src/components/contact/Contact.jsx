import React from 'react'
import './contact.css'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {SiGithub} from 'react-icons/si'
import {useRef} from 'react';





const Contact = () => {
 
  return (
    <section id="contact">
      <h1 style={{marginLeft:"650px"}}>Contact Me</h1>
      <h2>Feel free to get in touch.Cheers</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMarkEmailUnread className='contact__option-icon'/>
            
            
            <a href="mailto:vismayaramesh3@gmail.com" target="__blank">Email</a>
          </article>
          <article className="contact__option">
          <AiOutlineLinkedin className='contact__option-icon'/>
            
            
            <a href="https://www.linkedin.com/in/vismaya-r-6093ab242/ail.com" target="__blank">Linkedin</a>
          </article>
          <article className="contact__option">
          <SiGithub className='contact__option-icon'/>
            
            <a href="https://github.com/Vismaya3" target="__blank">Github</a>
          </article>
         
          

        </div>
        {/*end of conatct options*/}
        {/*}
        <form action=" ">
          <input type="text" name='name' placeholder='your full name' required/>
          <input type="email" name='email' placeholder='your email' required/>
          <textarea name="message" rows="7" placeholder='your message' required></textarea>
          <button type='submit' className='btn btn-primary'>send message</button>
  </form>*/}
 
  </div>

    </section>
  )
}

export default Contact