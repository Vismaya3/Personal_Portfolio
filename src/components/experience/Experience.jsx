import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
   <section id="experience">
    

   
    <h5 style={{fontSize:"40px"}}>WHAT SKILLS I HAVE</h5>
    
    <div className="container experience__container">
      <div className="experience__frontend">
        <h3 id="heading">Web Development</h3>
        <div className="experience__content">
          <article className="experinece">
           <BsPatchCheckFill/>
         <div>
         <h4>HTML</h4>
         </div>
           <small className="text-align">
            Experienced
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill/>
           <div>
           <h4>CSS</h4>
           </div>
           <small className="text-align">
            Experienced
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill/>
           <div>
           <h4>JAVA SCRIPT</h4>
           </div>
           <small className="text-align">
            Experienced
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill/>
           <div>
           <h4>BOOTSTRAP</h4>
           </div>
           <small className="text-align">
           Moderate
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill/>
          <div>
          <h4>Node js</h4>
          </div>
           <small className="text-align">
            Moderate
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill/>
          <div>
          <h4>REACT</h4>
          </div>
           <small className="text-align">
            Experienced
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill/>
          <div>
          <h4>Express</h4>
          </div>
           <small className="text-align">
            Beginner
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill/>
          <div>
          <h4>Mongodb</h4>
          </div>
           <small className="text-align">
            Moderate
           </small>
          </article>
        </div>

      </div>
      <div className="experience__frontend">
        <h3 id="heading">Programming Lamguages/Skills</h3>
        <div className="experience__content">
          <article className="experinece">
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>C</h4>
           </div>
           <small className="text-align">
            Experienced
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>C++</h4>
           </div>
           <small className="text-align">
            Moderate
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Python</h4>
          </div>
           <small className="text-align">
            Basics
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill className='experience__details-icon'/>
          <div>
          <h4>Data Structures</h4>
          </div>
           <small className="text-align">
            Experienced
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>Algorithms</h4>
           </div>
           <small className="text-align">
            Moderate
           </small>
          </article>
          <article className="experinece">
           <BsPatchCheckFill className='experience__details-icon'/>
           <div>
           <h4>R</h4>
           </div>
           <small className="text-align">
            Basics
           </small>
          </article>
        </div>

      </div>
      
      
    </div>
   </section>
  )
}

export default Experience