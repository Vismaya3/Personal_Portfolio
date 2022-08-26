import React from 'react'
import './protfolio.css'
import IMG1 from '../../assests/portfolio1.jpg'
import IMG2 from '../../assests/portfolio2.jpeg'
import IMG3 from '../../assests/portfolio2.jpeg'
import IMG4 from '../../assests/portfolio4.jpg'
import IMG5 from '../../assests/portfolio5.png'
import IMG6 from '../../assests/portfolio6.jpg'

const Protfolio = () => {
  return (
    <section id='portfolio'>
      <div className="heading">

      
      <h5 >My Recent Work</h5>
      <h2 >Portfolio</h2>
      </div>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Travel Website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vismaya3/Travel-website" className='btn'>Github</a>
           
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>Photography website</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vismaya3/Photography_portfolio" className='btn'>Github</a>
            
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Personal Portfolio</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>Github</a>
            
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>NewsApp</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/Vismaya3/NewsApp" className='btn'>Github</a>
            
          </div>
        </article>
        {/*}
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Covid Data Analysis</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>Github</a>
            
          </div>
        </article>
      }  <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="http://github.com" className='btn'>Github</a>
            
          </div>
  </article>*/}
        


      </div>
    </section>
  )
}

export default Protfolio