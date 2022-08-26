import React from 'react'
import './testnomials.css'
import AVTR1 from '../../assests/avatar1.jpg'
import AVTR2 from '../../assests/avatar2.jpg'
import AVTR3 from '../../assests/avatar3.jpg'
import AVTR4 from '../../assests/avatar4.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const data = [
  {
    avatar: AVTR1,
    name: 'Tina Show',
    review: 'qwertyuioplkjhgfdsazxcvbnmmnbvcxzasdfghjklpoiuytrewqasdfghjklkmnbvcxzasdfghjklpoiuytrewq'

  },
  {
    avatar: AVTR2,
    name: 'Shatta wale',
    review: 'qwertyuioplkjhgfdsazxcvbnmmnbvcxzasdfghjklpoiuytrewqasdfghjklkmnbvcxzasdfghjklpoiuytrewq'

  },
  {
    avatar: AVTR3,
    name: 'Kwame Despite',
    review: 'qwertyuioplkjhgfdsazxcvbnmmnbvcxzasdfghjklpoiuytrewqasdfghjklkmnbvcxzasdfghjklpoiuytrewq'

  },
  {
    avatar: AVTR4,
    name: 'Nana Ana McBrown',
    review: 'qwertyuioplkjhgfdsazxcvbnmmnbvcxzasdfghjklpoiuytrewqasdfghjklkmnbvcxzasdfghjklpoiuytrewq'

  }

]



const Testnomials = () => {
  return (
    <section id="testnomials">
      <h5>Review from the client</h5>
      <h2>Testnomials</h2>
      <Swiper className="container testnomials__container">
        
        {
          data.map(({ avatar, name, review }, index) => {
            return (
              <SwiperSlide key={index} className="testnomials">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className='client__name'>{name}</h5>
                <small className="client__review">
                 {review}
                </small>

              </SwiperSlide>
            )
          })
        }

      </Swiper>


    </section>
  )
}

export default Testnomials