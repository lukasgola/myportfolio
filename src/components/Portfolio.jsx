import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";

import { pro1_1, pro1_2, pro1_3, pro1_4, pro2_1, pro2_2, pro2_3 } from '../assets';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";


const SingleCard = ({title, img}) => {
    return(
        <div className='w-[250px] h-[150px] rounded-xl bg-white shadow-xl flex flex-row relative grid-item'>
            <div className='h-full w-2/3 text-center'>
                <p className='font-poppins text-text1 font-semibold mt-[60px]'>
                    {title}  
                </p>
            </div>
            
            <img src={img} alt="" className='object-cover h-[120px] absolute right-[15px] top-[15px]' />
        </div>
    )
}


const Portfolio = () => {
  return (
    <div>
        <div className="container pt-20 ">
            <div className="w-full mb-10">
                <h1 className="text-center text-[40px] font-poppins font-bold text-text1">Portfolio</h1>
            </div>
            <div className="projects">
                <SingleCard title='Pizza App' img={pro1_1} />
                <SingleCard title='Bamber Baits' img={pro2_1} />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
                <SingleCard />
            </div>
        </div>
    </div>
  )
}

export default Portfolio