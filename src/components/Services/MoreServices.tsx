'use client'
import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from '@/i18n/routing'


const MoreService: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[200px] 2xl:px-[50px] px-[16px] 4xl:px-[240px]'>
            <p className='text-[26px] uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]'>
                Дополнительные <b className='2xl:hidden' /> услуги
            </p>

{/* MOBILE */}
            <div className='mt-[20px] 2xl:hidden'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    speed={850}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={false}
                    className='w-full h-full'
                >
                    <SwiperSlide>
                        <div className='py-[24px] px-[20px] border border-[#E4E4E4]'>
                            <p className='text-[22px] w-[50%] leading-[29px] text-titleDark uppercase font-jost'>Разработка архитектурных концепций</p>
                            <p className='text-[15px] leading-[18px] text-title80 mt-[10px]'>Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.</p>
                            {/* <Link href='/project' className='buttonBlue w-[60%] mt-[45px]'>
                                Посмотреть проекты
                            </Link> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-[24px] px-[20px] border border-[#E4E4E4]'>
                            <p className='text-[22px] w-[50%] leading-[29px] text-titleDark uppercase font-jost'>Разработка архитектурных концепций</p>
                            <p className='text-[15px] leading-[18px] text-title80 mt-[10px]'>Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.</p>
                            {/* <Link href='/project' className='buttonBlue w-[60%] mt-[45px]'>
                                Посмотреть проекты
                            </Link> */}
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='py-[24px] px-[20px] border border-[#E4E4E4]'>
                            <p className='text-[22px] w-[50%] leading-[29px] text-titleDark uppercase font-jost'>Разработка архитектурных концепций</p>
                            <p className='text-[15px] leading-[18px] text-title80 mt-[10px]'>Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.</p>
                            {/* <Link href='/project' className='buttonBlue w-[60%] mt-[45px]'>
                                Посмотреть проекты
                            </Link> */}
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

            {/* DESKTOP */}
            <div className='mt-[40px] hidden 2xl:block'>
                <div className='border-t border-t-[#E4E4E4] py-[40px] flex flex-row flex-nowrap justify-between items-center'>
                    <div className='w-[25%]'>
                        <p className='w-[80%] uppercase text-[30px] leading-[40px] font-jost'>Разработка архитектурных концепций</p>
                    </div>
                    <div className='w-[33%]'>
                        <p className=' text-[20px] leading-[24px] text-title80 font-jost'>
                        Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='w-[25%] flex flex-row justify-end'>
                    {/* <Link href='/project' className='buttonBlue w-[60%] mt-[45px]'>
                                Посмотреть проекты
                            </Link> */}
                    </div>
                </div>
                <div className='border-t border-t-[#E4E4E4] py-[40px] flex flex-row flex-nowrap justify-between items-center'>
                    <div className='w-[25%]'>
                        <p className='w-[80%] uppercase text-[30px] leading-[40px] font-jost'>
                        Консалтинг по законодательным нормам в сфере строительства
                        </p>
                    </div>
                    <div className='w-[33%]'>
                        <p className=' text-[20px] leading-[24px] text-title80 font-jost'>
                        Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='w-[25%] flex flex-row justify-end'>
                    {/* <Link href='/project' className='buttonBlue w-[60%] mt-[45px]'>
                                Посмотреть проекты
                            </Link> */}
                    </div>
                </div>
                <div className='border-t border-t-[#E4E4E4] border-b border-b-[#E4E4E4] py-[40px] flex flex-row flex-nowrap justify-between items-center'>
                    <div className='w-[25%]'>
                        <p className='w-[80%] uppercase text-[30px] leading-[40px] font-jost'>
                        Управление проектами
                        </p>
                    </div>
                    <div className='w-[33%]'>
                        <p className=' text-[20px] leading-[24px] text-title80 font-jost'>
                        Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className='w-[25%] flex flex-row justify-end'>
                    {/* <Link href='/project' className='buttonBlue w-[60%] mt-[45px]'>
                                Посмотреть проекты
                            </Link> */}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MoreService