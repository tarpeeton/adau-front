'use client'

import { FC, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import Link from 'next/link'
import { SeminarAndTreningsData } from '@/constants/SamenarAndTrening'
import { FiClock } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";

const SeminarAndTrenings: FC = () => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()

    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:pl-[240px] 2xl:pl-[50px]'>
            <div className='2xl:flex 2xl:flex-row justify-between items-center'>
                <p className="text-[26px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                    Семинары и <br className='block 2xl:hidden' /> треннинги
                </p>
                <Link href='/seminar/slug' className='mt-[8px]   flex flex-row flex-nowrap 2xl:hidden items-center text-[16px] leading-[24px] font-medium text-[#222E51] font-jost '>
                    Смотреть все
                    <GrLinkNext className='ml-[8px] mt-[2px]' />
                </Link>
                <div className='hidden 2xl:flex flex-row gap-[10px] items-center'>
                    <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                        <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                    </button>
                    <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                        <GrLinkNext className='w-[30px] h-[30px] text-[#222E51]' />
                    </button>
                </div>

            </div>
            {/* DATA MAP */}
            <div className='mt-[20px] 2xl:mt-[26px] 4xl:mt-[30px]'>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={10}
                slidesPerView={1}
                speed={1000}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                loop={false}
                breakpoints={{
                    1000: {
                        slidesPerView: 3,
                        spaceBetween: 20, // Adjust spacing between slides as needed for larger screens
                    },
                }}
            >
                {SeminarAndTreningsData.map((item , index) => (
                    <SwiperSlide key={index}>
                        <div className='p-[20px] 2xl:p-[30px] border border-[#E4E4E4] '>
                            <div className='pb-[15px]  border-b border-b-[#E4E4E4]'>
                                <p className='text-[20px] text-titleDark font-medium font-jost mb-[8px] 2xl:text-[30px]'>{item.title}</p>
                                <p className='text-[15px] leading-[18px]  2xl:text-[18px] 2xl:leading-[22px] text-title80 font-jost'>{item.description}</p>
                            </div>
                            <div className='mt-[15px]'>
                                {/* adress info */}

                                <div >
                                    <div className='flex flex-row items-center text-[15px] leading-[18px] text-[#222E51] font-jost '>
                                        <CiClock2  className='mr-[10px] w-[20px] h-[20px] 2xl:ml-[1px]'/>
                                        <div>
                                            <p>{item.date}; <span>{item.time}</span></p>
                                        </div>
                                    </div>
                                    <div className='flex flex-row items-center text-[15px] mt-[5px] leading-[18px] text-[#222E51] font-jost '>
                                        <CiLocationOn  className='mr-[10px] w-[25px] h-[25px]'/>
                                        <div>
                                            <p>{item.addres}</p>
                                        </div>
                                    </div>
                                </div>
                                {/* button for info */}
                                <div className='mt-[25px] flex flex-row gap-[11px] w-full'>
                                    <Link className='borderedButton w-[48%] flex items-center justify-center' href={`/seminar/${item.slug}`}>Подробнее</Link>
                                    <button  className='buttonBlue w-[48%] flex items-center justify-center'>Записаться</button>
                                </div>
                            </div>
                        </div>
                 </SwiperSlide>
                ))}
               


            </Swiper>
            </div>

            {/* PREVV BUTTON */}
            <div className=' flex 2xl:hidden flex-row gap-[10px] items-center justify-end mt-[20px]'>
                <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
                <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkNext className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
            </div>
            {/* DESKTOP ALL */}
            <div className=' hidden w-full 2xl:flex items-center justify-center  2xl:mt-[60px]'>
            <Link href='/seminar' className='buttonBlue w-[15%] 4xl:w-[12%]'>
                Смотреть все
            </Link>
      </div>
        </div>
    )
}

export default SeminarAndTrenings