"use client"
import { FC, useRef, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'
import ScrollImage from '@/public/invite.jpg'
import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"


import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import Link from 'next/link'
const Invite: FC = () => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()

    return (
        <div className='mt-[80px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='block 2xl:hidden'>
                <p className='text-[26px] font-jost text-titleDark uppercase'>Почему стоит стать членом ADAU?</p>
            </div>
            <div className='mt-[30px] '>
                <div className='relative'>
                    <div className='flex flex-col 2xl:flex-row relative'>
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            spaceBetween={10}
                            slidesPerView={1}
                            speed={1000}
                            autoplay={{ delay: 2000, disableOnInteraction: false }}
                            loop={false}
                        >
                            <SwiperSlide>
                                <div className='relative  2xl:flex 2xl:flex-row 2xl:justify-between'>
                                    <div className='h-[230px] 2xl:h-[703px] 2xl:w-[48%]'>
                                        <Image src={ScrollImage} alt='seminar photo' width={800} height={703} className='object-cover w-full h-full' quality={100} />
                                    </div>
                                    <div className='mt-[30px] flex flex-col gap-[20px] 2xl:w-[48%] 2xl:gap-[40px] 2xl:mt-0'>
                                        <p className='hidden 2xl:block text-[45px] uppercase font-jost'>
                                        Почему стоит стать <br /> членом ADAU?
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:mt-[20px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <div className='mt-[10px] w-[60%] 2xl:w-[40%]'>
                                            <Link href='href' className='buttonBlue'>
                                            Вступить в ассоциацию

                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className='relative  2xl:flex 2xl:flex-row 2xl:justify-between'>
                                    <div className='h-[230px] 2xl:h-[703px] 2xl:w-[48%]'>
                                        <Image src={ScrollImage} alt='seminar photo' width={800} height={703} className='object-cover w-full h-full' quality={100} />
                                    </div>
                                    <div className='mt-[30px] flex flex-col gap-[20px] 2xl:w-[48%] 2xl:gap-[40px] 2xl:mt-0'>
                                        <p className='hidden 2xl:block text-[45px] uppercase font-jost'>
                                        Почему стоит стать <br /> членом ADAU?
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:mt-[20px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <p className='pb-[20px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] text-[18px] font-bold text-[#414141] leading-[22px] 2xl:text-[25px] 2xl:text-titleDark 2xl:leading-[30px]'>
                                            Участие в эксклюзивных семинарах и тренингах
                                        </p>
                                        <div className='mt-[10px] w-[60%] 2xl:w-[40%]'>
                                            <Link href='href' className='buttonBlue'>
                                            Вступить в ассоциацию

                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className='absolute top-[150px] 4xl:right-[260px] right-[20px] ] z-[99] flex items-center gap-[15px] 2xl:right-auto 2xl:left-[450px] 2xl:top-auto 2xl:bottom-[20px]'>
                            <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] h-[60px] border border-[#FFFFFF] backdrop-blur-[15px] bg-inherit 2xl:w-[90px] 2xl:h-[90px]'>
                                <GrLinkPrevious className='w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] text-titleWhite' />
                            </button>
                            <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] h-[60px] border border-[#FFFFFF] backdrop-blur-[15px] bg-inherit 2xl:w-[90px] 2xl:h-[90px]'>
                                <GrLinkNext className='w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px] text-titleWhite' />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Invite;


