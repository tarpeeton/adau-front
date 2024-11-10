"use client"
import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'


import { GrFormPreviousLink } from "react-icons/gr"
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperNavigation from '@/hooks/useSwiperNavigation'



import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"


// image
import ImagaCase from '@/public/case/one.jpg'

const CaseBaner: FC = () => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()

    return (
        <div className='2xl:mt-[25px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex felx-row items-center  2xl:text-[20px] text-[#222E51] font-medium font-jost'>
                <GrFormPreviousLink className='2xl:w-[30px] 2xl:h-[30px]' />
                <Link href='cases'>
                    Назад
                </Link>
            </div>

            <div className='2xl:mt-[35px] flex flex-col'>
                <div className='2xl:w-[60%]'>
                    <p className='2xl:text-[45px] uppercase text-titleDark font-jost'>Green Horizon</p>
                    <p className='2xl:text-[20px] font-jost text-[#414141] 2xl:leading-[24px] 2xl:mt-[10px]'>Многофункциональный эко-комплекс, построенный в пригороде крупного города. Он включает жилые и коммерческие помещения, а также парковые зоны и общественные пространства</p>
                </div>

                <div className='2xl:mt-[40px]'>
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
                        <SwiperSlide>
                            <div className='h-[200px] 2xl:h-[500px] cursor-pointer'>
                                <Image src={ImagaCase} width={600} height={500} quality={100} alt='case-image'  className='object-cover w-full h-full'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[200px] 2xl:h-[500px] cursor-pointer'>
                                <Image src={ImagaCase} width={600} height={500} quality={100} alt='case-image'  className='object-cover w-full h-full'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[200px] 2xl:h-[500px] cursor-pointer'>
                                <Image src={ImagaCase} width={600} height={500} quality={100} alt='case-image'  className='object-cover w-full h-full'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[200px] 2xl:h-[500px] cursor-pointer'>
                                <Image src={ImagaCase} width={600} height={500} quality={100} alt='case-image'  className='object-cover w-full h-full'/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='h-[200px] 2xl:h-[500px] cursor-pointer'>
                                <Image src={ImagaCase} width={600} height={500} quality={100} alt='case-image'  className='object-cover w-full h-full'/>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default CaseBaner