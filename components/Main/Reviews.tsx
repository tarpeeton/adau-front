'use client'

import { FC, useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import Link from 'next/link'




const data = [
    { _rev: 123, title: "Участников ассоциации" },
    { _rev: 222, title: "Клиентов" },
]

const reviewData = [
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 1
    },
]






interface IFilteredData {
    name: string,
    date: string,
    text: string,
    index: number
}


const Reviews: FC = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0)
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()
    const [filteredData, setFilteredData] = useState<IFilteredData[]>([])

    const handleButtonClick = (index: number) => {
        setActiveIndex(index)
    }

    // Update filtered data based on activeIndex
    useEffect(() => {
        const filtered = reviewData.filter(review => review.index === activeIndex)
        setFilteredData(filtered)
    }, [activeIndex])


    return (
        <div className="mt-[80px] 2xl:mt-[200px] py-[40px] 2xl:py-[100px] px-[20px] 4xl:pl-[240px] 2xl:px-[50px] bg-[#F7F8FA]">
            <p className="text-[26px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]">
                Отзывы
            </p>
            <div className="mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]">
                <div>
                    {data.map((item, index) => (
                        <button
                            key={item._rev}
                            onClick={() => handleButtonClick(index)}
                            className={`pb-[12px] px-[10px] 2xl:px-[40px] font-medium border-b-[2px] ${activeIndex === index
                                ? 'text-[#222E51] border-b-[#222E51] '
                                : 'text-[#000000] border-b'
                                }`}
                        >
                            <p className="text-[16px] leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]">
                                {item.title}
                            </p>
                        </button>
                    ))}
                </div>

                <div className='mt-[20px] 2xl:mt-[40px]'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={1.1}
                        speed={920}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={false}
                        breakpoints={{
                            1000: {
                                slidesPerView: 3.2,
                                spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                            },
                        }}
                    >


                        {filteredData.map((item, index) => (
                            <SwiperSlide key={index} className='cursor-pointer '>
                                <div className='bg-white p-[20px] 2xl:p-[25px]'>
                                    {/* name */}
                                    <div className='flex flex-col'>
                                        <p className='text-[18px] leading-[26.01px] font-jost font-medium 2xl:text-[24px] 2xl:leading-[34.68px]'>{item.name}</p>
                                        <p className='text-[14px] leading-[18px] text-[#222E51] font-jost 2xl:text-[17px] 2xl:leading-[24.57px]'>{item.date}</p>
                                    </div>
                                    {/* text */}
                                    <div className='2xl:relative'>
                                        <div className='mt-[15px] 2xl:mt-[25px] 2xl:h-[174px] 4xl:h-[190px]'>
                                            <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px]'>
                                            {item?.text.length > 242 ? item.text.slice(0, 242) + "..." : item.text}
                                            </p>
                                        </div>
                                        {/* Link */}
                                        <div className='mt-[10px]'>
                                            <Link href='/reviews' className='text-[16px] group all ease-in-out flex flex-row flex-nowrap items-center 2xl:text-[24px]  font-medium font-jost text-[#222E51]'>
                                                Читать полностью
                                                <GrLinkNext className='ml-[4px] ease-in-out duration-300 group-hover:ml-[10px] 2ml-[8px] w-[20px] h-[20px]  2xl:w-[25px] 2xl:h-[25px]' />
                                            </Link>
                                        </div>
                                    </div>

                                </div>
                            </SwiperSlide>
                        ))}




                    </Swiper>
                </div>

                <div className='flex flex-row gap-[10px] mt-[20px] 2xl:mt-[50px] w-full justify-end'>
                    <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                        <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                    </button>
                    <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                        <GrLinkNext className='w-[30px] h-[30px] text-[#222E51]' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Reviews
