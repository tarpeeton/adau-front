'use client'

import { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperNavigation from '@/hooks/useSwiperNavigation'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import { FaHeart } from "react-icons/fa6";




// image
import SevedBlogImage from '@/public/savedBLOG.jpg'

const SavedBlogsData = [
    {id: '1' , title: 'Архитектура будущего: технологии и тренды' , description: 'Обзор современных технологий, таких как 3D-печать и устойчивые строительные материалы, а также их влияние на будущее' , url: SevedBlogImage },
    {id: '2' , title: 'Архитектура будущего: технологии и тренды' , description: 'Обзор современных технологий, таких как 3D-печать и устойчивые строительные материалы, а также их влияние на будущее' , url: SevedBlogImage },
    {id: '3' , title: 'Архитектура будущего: технологии и тренды' , description: 'Обзор современных технологий, таких как 3D-печать и устойчивые строительные материалы, а также их влияние на будущее' , url: SevedBlogImage },
    {id: '4' , title: 'Архитектура будущего: технологии и тренды' , description: 'Обзор современных технологий, таких как 3D-печать и устойчивые строительные материалы, а также их влияние на будущее' , url: SevedBlogImage },
]




const SavedBlogs: FC = () => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()

   
   


    return (
        <div className="mt-[80px] 2xl:mt-[200px] py-[40px] 2xl:py-[100px] px-[20px] 4xl:pl-[240px] 2xl:px-[50px]">
            <p className="text-[26px] uppercase text-[#222E51] flex flex-row items-center gap-[10px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]">
             <FaHeart /> Избранные статьи
            </p>
            <div className="mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]">
                <div className='mt-[20px] 2xl:mt-[40px]'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={1}
                        speed={920}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={false}
                        breakpoints={{
                            1000: {
                                slidesPerView: 2,
                                spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                            },
                        }}
                    >


                        {SavedBlogsData.map((item) => (
                            <SwiperSlide key={item.id} className='cursor-pointer '>
                                <div className='relative overflow-hidden h-[300px] 2xl:h-[450px] 4xl:h-[500px]'>
                                    <Image  src={item.url} alt='saved-blog-image' width={627} height={500} quality={100} className='object-cover w-full h-full'/>
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/[0.5] to-black/[0.05]' />
                                    <div className='absolute bottom-[20px] left-[16px] w-[80%] 2xl:left-[30px]'>
                                        <p className='text-[18px] text-titleWhite font-medium 2xl:text-[35px]'>{item.title}</p>
                                        <p className='text-[15px] 2xl:text-[20px] 2xl:leading-[24px] 2xl:mt-[12px] text-titleWhite'>{item.description}</p>
                                        <Link href={item.title} className='mt-[10px] flex flex-row items-center gap-[5px] 2xl:mt-[15px] text-[15px] 2xl:text-[20px] font-medium text-titleWhite'> Подробнее <GrLinkNext /></Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className='flex flex-row gap-[10px] mt-[20px] 2xl:mt-[50px] w-full justify-end'>
                    <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                        <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                    </button>
                    <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                        <GrLinkNext className='w-[30px] h-[30px] text-[#222E51]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SavedBlogs
