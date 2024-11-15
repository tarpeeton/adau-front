"use client"

import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// ADMIN
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'

import { ITeamMember } from '@/interface/ITeam/team'
import useLocale from '@/hooks/useLocale'
import QuestionModal from '../Modal/question-modal'


const Team: FC = () => {
    const [teamData, setTeamData] = useState<ITeamMember[] | []>([])
    const locale = useLocale()
    const [openMenu, setIsOpen] = useState(false)


    useEffect(() => {
        const fetchData = async () => {
            try {
                const TeamData = await client.fetch(`*[_type == "teamMember"]{_id,
name,
description,
occupation,
image}`)

                setTeamData(TeamData)
            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [])

    const handleOpenModal = () => setIsOpen(true)
    const handleCloseModal = () => setIsOpen(false)


    return (
        <div className='mt-[80px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-row justify-between'>
                <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Наша команда</p>
                <div className='hidden 2xl:block'>
                    <button onClick={handleOpenModal} className='buttonBlue '>Связаться с нами</button>
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
                    {teamData.map((item) => (
                        <SwiperSlide key={item._id} className='cursor-pointer'>
                            <div>
                                <Image src={urlFor(item.image.asset._ref).url()} alt={item.name[locale]} width={467} height={520} quality={100} className='object-cover h-[380px] 2xl:h-[450px] 4xl:h-[520px]' />
                                <div className='mt-[30px]'>
                                    <p className='text-[15px] 2xl:text-[20px] font-jost text-[#222E51]'>{item.occupation[locale]}</p>
                                    <p className='text-[22px] 2xl:text-[30px] font-jost text-[#222E51] font-medium'>{item.name[locale]}</p>
                                    <p className='text-[15px] 2xl:text-[20px] font-jost leading-[18px] text-[#414141] mt-[8px] 2xl:mt-[10px]'>
                                        {item.description[locale]}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <QuestionModal visible={openMenu} close={handleCloseModal} />
            <div className='w-full 2xl:hidden flex items-center justify-center mt-[40px]'>
                <button onClick={handleOpenModal} className='buttonBlue 2xl:hidden w-[70%]'>Связаться с нами</button>
            </div>
        </div>
    )
}

export default Team