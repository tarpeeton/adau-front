'use client'

import { FC, useState, useEffect } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { GrFormPreviousLink } from "react-icons/gr"

// ICON
import { BsYoutube } from "react-icons/bs"
const video = 'https://youtu.be/QDRXGmNnrzc?si=ptMXtFjO-S76_XED'
import Anastasiya from '@/public/Anastasiya.jpg'
import BlogImage from '@/public/blog/blogone.jpg'

const SomeBlog: FC = () => {
    const [isClient, setIsClient] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    // Ensure this code runs only on the client side
    useEffect(() => {
        setIsClient(true)
    }, [])




    return (
        <div className='2xl:px-[200px] px-[16px] 2xl:mt-[25px]'>
            <div className='flex flex-row items-center mt-[15px] text-[16px] 2xl:text-[20px] text-[#222E51] font-medium font-jost'>
                <GrFormPreviousLink className='2xl:w-[30px] w-[25px]  h-[25px] 2xl:h-[30px]' />
                <Link href='cases'>
                    Назад
                </Link>
            </div>
            <div className='2xl:mt-[50px]'>
                <div className='flex flex-row gap-[10px] pt-[25px] items-center'>
                    <div className='w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] rounded-full '>
                        <Image src={Anastasiya} alt='image-user' width={500} height={450} quality={100} className='w-full h-full rounded-full' />
                    </div>
                    <div>
                        <p className='text-[14px] 2xl:text-[20px] font-medium text-titleDark font-jost'>Анастасия</p>
                        <p className=' text-[12px] 2xl:text-[17px] 2xl:mt-[-8px] font-medium 2xl:leading-[24.57px] text-[#A0A0A0] font-jost mt-[-5px]'>архитектор</p>
                    </div>
                </div>
                <div className='2xl:mt-[20px] mt-[10px]'>
                    <p className='text-titleDark text-[22px] leading-[29px] 2xl:text-[40px] uppercase 2xl:leading-[57.8px]'>
                        10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?
                    </p>
                    <p className='text-title80 mt-[10px] 2xl:mt-[8px] text-[14px] 2xl:text-[20px] 2xl:leading-[24px] '>26 cентября 2024</p>
                </div>
                <div className='mt-[25px] 2xl:mt-[40px] h-[220px] 2xl:h-[500px]'>
                    <Image src={BlogImage} alt='image-blog' width={700} height={600} quality={100} className='w-full h-full object-cover' />
                </div>
                <div className='2xl:mt-[40px] mt-[25px]'>
                    <p className='2xl:text-[20px] text-[14px] leading-[18px] 2xl:leading-[24px] text-[#333333]'>
                        В мире архитектуры наступает новый этап, когда экология, технологии и потребности общества становятся основой проектирования. Вот десять архитектурных трендов, которые будут определять облик наших городов и пространств в ближайшие годы
                    </p>
                </div>
                <div className='mt-[20px] 2xl:mt-[60px] flex flex-col gap-[40px] 2xl:gap-[60px] '>
                    <div className='flex flex-col 2xl:gap-[15px]'>
                        <p className='text-[18px] 2xl:text-[25px] 2xl:leading-[30px] font-[454] text-[#333333] '>Устойчивое строительство</p>
                        <p className='mt-[5px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[25px] font-medium text-[#333333]'>Экологические проекты выходят на первый план. Использование возобновляемых ресурсов, переработанных материалов, энергосберегающих технологий и зелёных крыш помогает снизить углеродный след зданий, минимизируя их воздействие на окружающую среду</p>
                    </div>
                    <div className='flex flex-col 2xl:gap-[15px]'>
                        <p className='text-[18px] 2xl:text-[25px] 2xl:leading-[30px] font-[454] text-[#333333] '>Устойчивое строительство</p>
                        <p className='mt-[5px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[25px] font-medium text-[#333333]'>Экологические проекты выходят на первый план. Использование возобновляемых ресурсов, переработанных материалов, энергосберегающих технологий и зелёных крыш помогает снизить углеродный след зданий, минимизируя их воздействие на окружающую среду</p>
                    </div>
                    <div className='flex flex-col 2xl:gap-[15px]'>
                        <p className='text-[18px] 2xl:text-[25px] 2xl:leading-[30px] font-[454] text-[#333333] '>Устойчивое строительство</p>
                        <p className='mt-[5px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[25px] font-medium text-[#333333]'>Экологические проекты выходят на первый план. Использование возобновляемых ресурсов, переработанных материалов, энергосберегающих технологий и зелёных крыш помогает снизить углеродный след зданий, минимизируя их воздействие на окружающую среду</p>
                    </div>




                    <div className='2xl:h-[550px] h-[200px]'>
                        {isClient && (
                            <ReactPlayer
                                url={video}
                                playing={isPlaying}
                                controls={true}
                                width="100%"
                                height="100%"
                                light={true} // Show thumbnail before playing
                                playIcon={
                                    <div className=" inset-0 flex items-center justify-center  bg-opacity-50  cursor-pointer">
                                        <BsYoutube className='text-white w-[60px] h-[50px]  2xl:w-[60px] 2xl:h-[60px]' />
                                    </div>
                                }
                                onClickPreview={() => setIsPlaying(true)} // Start playing after clicking on the thumbnail
                                pip={true}
                            />
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SomeBlog