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
            <div>

            </div>

            {/* PREVV BUTTON */}
            <div className=' flex 2xl:hidden flex-row gap-[10px] items-center'>
                <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
                <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkNext className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
            </div>
        </div>
    )
}

export default SeminarAndTrenings