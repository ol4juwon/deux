import React, { useEffect, useRef } from 'react'
import { styled } from 'styled-components'
import Poster from '../../assets/images/Poster.png';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// import { Config } from '../../util/config';

import Slide from './Slide';
import Dial from './Dial';
// import './styles.css';

const Slider = ({data}) => {

  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      // return <Dial />
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    }
  };
  // const {results} = data;
  console.log({data})
const swiperRef = useRef();
useEffect(()=>{
if(swiperRef.current){
  // console.log(swiperRef.current);
}
},[swiperRef])
  return (
    <Slider.Wrapper>
             <Swiper
             ref={swiperRef}
        // pagination={pagination}
        direction={'vertical'}
        modules={[ Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {data?.results?.map((item, index) => <SwiperSlide key={index}><Slide data={item} /></SwiperSlide>)}
        
      
      </Swiper>
    </Slider.Wrapper>
  )
}
Slider.Wrapper = styled.section`
width: 100%;
// max-height: 600px;
height: 600px;
// background: url(${Poster});
// background-size: 100% 100%;
overflow: hidden;
mySwiper{
  width: 100%;
  height: 600px;
}
.swiper{
  width: 100%;
  height: 600px;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 100%;
  height: 600px;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-pagination-bullet {
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 20px;
  order:1;
  font-size: 12px;
  color: #9CA3AF;
  opacity: 1;
  background: transparent;
}
.swiper-pagination {
  position: absolute;
  top: 0%;
  height: 600px;
  right: 10px; /* Adjust as needed */
  // transform: translateY(-50%);
  display: flex;
  
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.swiper-pagination-bullet-active {
  color: #fff;
  order:5;
  justify-self: center;
  align-Self: center;
  // background: #ff7100;
  font-size: 16px;

}
.swiper-pagination-bullet-active{
  color: #fff;
  order:5;
  justify-self: center;
  align-Self: center;
  // background: #ff7100;
  font-size: 16px;

}
.swiper-pagination-bullet-active::before {
  content: "-";
  order: 1,
}
`
export default Slider