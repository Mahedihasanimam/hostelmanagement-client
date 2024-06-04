import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../../hooks/UseAxiosCommon";
import ReviewCard from "./ReviewCard";

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Reviews = () => {
    const axiosCommon=useAxiosCommon()
    const {data:review=[]}=useQuery({
        queryKey:['review'],
        queryFn:async()=>{
            const {data}=await axiosCommon('/reviews')
            return data
        }
    })
    console.log(review);
    return (
        <div>
            <div className="text-center lg:w-1/2 mx-auto space-y-4 my-12">
                <h1 className="lg:text-6xl text-4xl font-bold text-center">Clients Feedback</h1>
                <p>Clients consistently commend our exceptional service, expertise, and reliable delivery. Their positive feedback drives our commitment to excellence and innovation.</p>
            </div>

            {/* <div className="grid grid-cols-1 lg:grid-cols-2">
                {
                    review.map(item=><ReviewCard key={item._id} item={item}/>)
                }
            </div> */}

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            review.map(item=><SwiperSlide key={item._id}>
                <ReviewCard item={item}/>
            </SwiperSlide>)
        }
        
        
      </Swiper>
        </div>
    );
};

export default Reviews;