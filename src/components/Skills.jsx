import React from 'react'

import { skills } from '../constants'

import styles from '../style'


const FeatureCard = ({ icon, title, content, index }) =>{
    return(
    <div className="card-wrap w-5/6 sm:w-1/3">
        <div className={`${styles.glassContainer2} card rounded-xl`}>
            <div className="">
                <img src={icon} className="w-[90px] mb-10 mx-auto" alt="" />
                <h3 className="font-poppins font-semibold text-text1 mb-5">{title}</h3>
                <p className="font-poppins text-text1">
                    {content}
                </p>
            </div>
        </div>
    </div>
  )}

const Skills = () => {
  return (
    <section id="skills">
        <div className="container pt-20 ">
            <div className="w-full mb-10">
                <h1 className="text-center text-[40px] font-poppins font-bold text-text1">Skills</h1>
            </div>
            <div className="w-full flex flex-col sm:flex-row items-center">
                {skills.map((skill, index) => (
                    <FeatureCard key={skill.id} {...skill} index={index} />
                ))}
            </div>
        </div>
    </section>
  )
}

export default Skills

/*
<Swiper
            slidesPerView={3}
            spaceBetween={100}
            slidesPerGroup={3}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
                clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={pro1_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pro1_2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pro1_3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pro2_1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pro2_2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={pro2_3} alt="" />
            </SwiperSlide>
        </Swiper>

        */