'use client'
import { FC , useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ContactUs from '../Modal/contacts-modal'


import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import Image from 'next/image'

// ICON
import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"

// Image
import ServiceBanner from '@/public/serviceBanner.jpg'

const BannerService: FC = () => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()
    const [open , setOpen] = useState(false)

    const handleModal = () => setOpen(!open)

    return (
        <div className='mt-[30px] 2xl:mt-[0]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                {/* INFO */}
                <div className='px-[16px] 2xl:px-0 2xl:w-[45%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'>
                    <div className='2xl:w-[70%]'>
                        <p className='text-[26px] font-jost uppercase 2xl:text-[40px] 3xl:text-[50px]'>Наши услуги</p>
                        <p className='mt-[16px] text-[15px] leading-[18px] 2xl:w-full font-normal 2xl:text-[18px] 3xl:text-[20px] 2xl:leading-[20px] 2xl:mt-[20px]'>
                            ADAU помогает клиентам создавать уникальные проекты на стыке архитектуры, дизайна и маркетинга. Мы обеспечиваем комплексные решения, которые усиливают бренд и соответствуют современным требованиям.
                        </p>
                        <button onClick={handleModal} className='mt-[20px] buttonBlue w-[60%] 2xl:mt-[30px]'>
                            Связаться с нами
                        </button>
                    </div>
                </div>
                
                <ContactUs visible={open} close={handleModal} />

                {/* SLIDER */}
                <div className='mt-[30px] w-full 2xl:w-[50%] relative h-[470px] 2xl:h-[738px] 2xl:mt-0'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={1}
                        speed={1000}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={false}
                        breakpoints={{
                            1000: {
                                slidesPerView: 1,
                                spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                            },
                        }}
                        className='w-full h-full'
                    >
                        <SwiperSlide>
                            <div className='w-full h-full relative'>
                                <div className='absolute top-[20px] left-[16px]'>
                                    <p className='text-[20px] 2xl:text-[30px] text-titleWhite font-jost'>Семинар <br />«Архитекторы будущего»</p>
                                    <p className='text-[15px] 2xl:text-[20px] 2xl:leading-[20px] w-[90%] text-[#D9D9D9] leading-[15px] mt-[8px] font-jost'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit consectetur.</p>
                                </div>
                              
                                <Image src={ServiceBanner} width={800} height={850} quality={100} alt='Image banner Slider' className='w-full h-full object-cover' />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    <div className='absolute bottom-[15px] 4xl:right-[260px] right-[20px]  z-[990] flex items-center 2xl:bottom-[20px] 2xl:right-auto 2xl:left-[40px]'>
                        <button onClick={handlePrev} className='flex items-center justify-center w-[50px] h-[50px]'>
                            <GrLinkPrevious className='w-[30px] h-[30px] text-titleWhite' />
                        </button>
                        <button onClick={handleNext} className='flex items-center justify-center w-[50px] h-[50px]'>
                            <GrLinkNext className='w-[30px] h-[30px] text-titleWhite' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BannerService
