import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../assets/image1.jpg"
import img2 from "../../assets/image2.jpg"
import img3 from "../../assets/image3.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import Slider from './Slider';
import 'swiper/css/effect-fade';

export default function Carocel() {
  return (
    <>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        effect={'fade'}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[EffectFade,Autoplay, Pagination, Navigation]}
        
        className="mySwiper"
      >
        <SwiperSlide>
            <Slider text={'Discover diverse options to suit your needs with our wide selection of alternative products available for you to explore'} image={img1} title={"Effortless Meal and Review Management for University Hostels"
  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Discover diverse options to suit your needs with our wide selection of alternative products available for you to explore'} image={img2} title={" Hostel Management for a Seamless Student Experience"  } />
        </SwiperSlide>
        <SwiperSlide>
            <Slider text={'Discover a myriad of alternative products tailored to your preferences and needs on our platform. Explore your options today!'}  image={img3} title={"Find alll management solution Here!"} />
        </SwiperSlide>
        
     
      </Swiper>
    </>
  );
}
