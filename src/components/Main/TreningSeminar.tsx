'use client'

import { FC, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import { client } from "@/sanity/lib/client"
import { ISeminarData } from '@/interface/ISeminar/seminar'
import { Link } from '@/i18n/routing'
import useLocale from '@/hooks/useLocale'
import SeminarCard from '@/ui/seminar-card'


const SeminarAndTrenings: FC = () => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()
    const [data, setData] = useState<ISeminarData[] | []>([])
    const locale = useLocale()


    useEffect(() => {
        const fetchData = async () => {
            try {
                const Data = await client.fetch(
                    `*[_type == "seminar"]`
                )
                setData(Data)

            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [locale])






    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:pl-[240px] 2xl:pl-[50px]'>
            <div className='2xl:flex 2xl:flex-row justify-between items-center'>
                <p className="text-[26px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                    Семинары и <br className='block 2xl:hidden' /> треннинги
                </p>
                <Link href='/seminar' className='mt-[8px]   flex flex-row flex-nowrap 2xl:hidden items-center text-[16px] leading-[24px] font-medium text-[#222E51] font-jost '>
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
            <div className='mt-[20px] 2xl:mt-[26px] 4xl:mt-[30px] cursor-pointer'>
                <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={1000}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    modules={[Autoplay]} 
                    loop={true}
                    breakpoints={{
                        1000: {
                            slidesPerView: 3,
                            spaceBetween: 20, // Adjust spacing between slides as needed for larger screens
                        },
                    }}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <SeminarCard inSwiper={true} item={item} />
                        </SwiperSlide>
                    ))}



                </Swiper>
            </div>

            {/* PREVV BUTTON */}
            <div className=' flex 2xl:hidden flex-row gap-[10px] items-center justify-end mt-[20px]'>
                <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
                <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkNext className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
            </div>
            {/* DESKTOP ALL */}
            <div className=' hidden w-full 2xl:flex items-center justify-center  2xl:mt-[60px]'>
                <Link href='/seminar' className='buttonBlue w-[15%] 4xl:w-[12%]'>
                    Смотреть все
                </Link>
            </div>
        </div>
    )
}

export default SeminarAndTrenings