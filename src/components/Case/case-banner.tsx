"use client"
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

import { GrFormPreviousLink } from "react-icons/gr"
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import useLocale from '@/hooks/useLocale'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


interface IBannerProps {
    title: { ru: string, uz: string, en: string }
    description: { ru: string, uz: string, en: string }
    slider: Array<{
        _key: string
        _type: string
        asset: {
            _ref: string
            _type: string
        }
    }>
}




const CaseBaner: FC<IBannerProps> = ({ title, description, slider  }) => {
    const { swiperRef } = useSwiperNavigation()
    const locale = useLocale()
    return (
        <div className='2xl:mt-[25px] mt-[15px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex felx-row items-center  2xl:text-[20px] text-[#222E51] font-medium font-jost'>
                <GrFormPreviousLink className='w-[25px] mt-[-2px] h-[25px] 2xl:w-[30px] 2xl:h-[30px]' />
                <Link href='cases'>
                    Назад
                </Link>
            </div>

            <div className='2xl:mt-[35px] mt-[25px] flex flex-col'>
                <div className='2xl:w-[60%]'>
                    <p className='2xl:text-[45px] text-[26px] uppercase text-titleDark font-jost'>
                        {title[locale]}
                    </p>
                    <p className='2xl:text-[20px] text-[14px] mt-[10px] leading-[18px] font-jost text-[#414141] 2xl:leading-[24px] 2xl:mt-[10px]'>
                        {description[locale]}
                    </p>
                </div>

                <div className='2xl:mt-[40px] mt-[25px]'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={1}
                        speed={820}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        loop={false}
                        breakpoints={{
                            1000: {
                                slidesPerView: 2,
                                spaceBetween: 20, // Adjust spacing between slides as needed for larger screens
                            },
                        }}
                    >
                        {slider.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className='h-[200px] 2xl:h-[500px] cursor-pointer'>
                                    <Image src={urlFor(item.asset._ref).url()} width={600} height={500} quality={100} alt='case-image' className='object-cover w-full h-full' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                
            </div>
        </div>
    )
}

export default CaseBaner