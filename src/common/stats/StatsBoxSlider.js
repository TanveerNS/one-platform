import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, FreeMode, Autoplay } from "swiper";
let herodata = ['1', '2', '3']
const StatsBoxSlider = () => {
  return (
    <div className='widget-box'>
      <div>StatsBoxSlider</div>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {herodata.map((sl, i) => {
          return (
            <SwiperSlide key={i}>
              <div style={{ height: '200px', backgroundColor: 'green' }}>{sl}</div>
            </SwiperSlide>
          )
        })}

      </Swiper>
    </div>
  )
}

export default StatsBoxSlider