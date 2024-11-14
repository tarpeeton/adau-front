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
import { GrFormNextLink } from "react-icons/gr"

const TeamData = [
    {
        id: 1,
        url: One,
        occupation: 'Учредитель ассоциации',
        name: 'Алишер Авазов',
        desciption: 'Lorem ipsum dolor sit amet consectetur. Nunc nam ut non adipiscing id. Scelerisque elementum faucibus',
    },
    {
        id: 2,
        url: Two,
        occupation: 'Учредитель ассоциации',
        name: 'Алишер Авазов',
        desciption: 'Lorem ipsum dolor sit amet consectetur. Nunc nam ut non adipiscing id. Scelerisque elementum faucibus',
    },
    {
        id: 3,
        url: Two,
        occupation: 'Учредитель ассоциации',
        name: 'Алишер Авазов',
        desciption: 'Lorem ipsum dolor sit amet consectetur. Nunc nam ut non adipiscing id. Scelerisque elementum faucibus',
    },
    {
        id: 4,
        url: Three,
        occupation: 'Учредитель ассоциации',
        name: 'Алишер Авазов',
        desciption: 'Lorem ipsum dolor sit amet consectetur. Nunc nam ut non adipiscing id. Scelerisque elementum faucibus',
    }
]


const SeminarSpeakers: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[26px] 2xl:text-[45px]  uppercase text-titleDark font-jost'>
            спикеры
            </p>
            <div className='mt-[30px]'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={720}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop={false}
                    breakpoints={{
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                        },
                    }}
                >
                    {TeamData.map((item) => (
                        <SwiperSlide key={item.id} className='cursor-pointer'>
                            <div>
                                <Image src={item.url} alt={item.name} width={467} height={520} quality={100} className='object-cover h-[380px] 2xl:h-[450px] 4xl:h-[520px]' />
                                <div className='mt-[30px]'>

                                    <p className='text-[22px] 2xl:text-[30px] font-jost text-titleDark font-medium'>{item.name}</p>
                                    <p className='text-[15px] 2xl:text-[20px] font-jost leading-[18px] text-[#414141] mt-[8px] 2xl:mt-[10px]'>
                                        {item.desciption}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default SeminarSpeakers