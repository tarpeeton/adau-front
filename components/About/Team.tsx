"use client"

import { FC } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// images
import One from '@/public/team/one.png'
import Two from '@/public/team/two.jpg'
import Three from '@/public/team/three.png'


const TeamData = [
    {
        id: 1,
        url: One ,
        occupation: 'Учредитель ассоциации',
        name: 'Алишер Авазов',
        desciption: 'Lorem ipsum dolor sit amet consectetur. Nunc nam ut non adipiscing id. Scelerisque elementum faucibus',
    },
    {
        id: 2,
        url: Two ,
        occupation: 'Учредитель ассоциации',
        name: 'Алишер Авазов',
        desciption: 'Lorem ipsum dolor sit amet consectetur. Nunc nam ut non adipiscing id. Scelerisque elementum faucibus',
    },
    {
        id: 3,
        url: Three ,
        occupation: 'Учредитель ассоциации',
        name: 'Алишер Авазов',
        desciption: 'Lorem ipsum dolor sit amet consectetur. Nunc nam ut non adipiscing id. Scelerisque elementum faucibus',
    }
]



const Team: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-row justify-between'>
                <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Наша команда</p>
                <div className='hidden 2xl:block'>
                    <button className='buttonBlue '>Связаться с нами</button>

                </div>
            </div>
            {/* SLIDER */}
            <div className='mt-[20px] 2xl:mt-[30px]'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={1000}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={false}
                    breakpoints={{
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                        },
                    }}
                >
                     {TeamData.map((item) => (
                          <SwiperSlide key={item.id} className='cursor-pointer'>
                           <div>
                                    <Image  src={item.url} alt={item.name} width={467} height={520} quality={100} className='object-cover h-[380px] 2xl:h-[450px] 4xl:h-[520px]'/>
                                    <div className='mt-[30px]'>
                                        <p className='text-[15px] 2xl:text-[20px] font-jost text-[#222E51]'>{item.occupation}</p>
                                        <p className='text-[22px] 2xl:text-[30px] font-jost text-[#222E51] font-medium'>{item.name}</p>
                                        <p className='text-[15px] 2xl:text-[20px] font-jost leading-[18px] text-[#414141] mt-[8px] 2xl:mt-[10px]'>
                                            {item.desciption}
                                        </p>
                                    </div>
                                </div>
                          </SwiperSlide>
                                
                            ))}
                  
                </Swiper>
            </div>
            <div className='w-full 2xl:hidden flex items-center justify-center mt-[40px]'>
                <button className='buttonBlue 2xl:hidden w-[70%]'>Связаться с нами</button>
            </div>
        </div>
    )
}

export default Team