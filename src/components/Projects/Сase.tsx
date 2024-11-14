'use client'

import { FC, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'


import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import Link from 'next/link'
import { SeminarAndTreningsData } from '@/constants/SamenarAndTrening'
import { FiClock } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { SwiperItem } from '@/ui/swiperItem'
// import { data } from '../Main/Case'

import { DataItem } from './Work'
import {ICase} from '@/interface/ICase/case'



const TopCases: FC = () => {
  const [caseData, setCaseData] = useState<ICase[] | []>([])
    
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()

    useEffect(() => {
        const fetchData = async () => {
          try {
            const CaseDataAll = await client.fetch(`*[_type == "case" && isFeatured == true]`)
            setCaseData(CaseDataAll)
          } catch (error) {
            console.debug(error)
          }
        }
        fetchData()
    }, [])
    











    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:pl-[240px] 2xl:pl-[50px]'>
            <div className='2xl:flex 2xl:flex-row justify-between items-center'>
                <p className="text-[26px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                Лучшие кейсы
                </p>
              
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
                 {caseData.map((item, index: number) => (
                        <SwiperSlide key={index} className='w-full'>
                            <SwiperItem item={item} width='100%' />
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
           
        </div>
    )
}

export default TopCases