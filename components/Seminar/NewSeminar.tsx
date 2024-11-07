"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// ICON
import { FaChevronDown } from "react-icons/fa6"
import { MdArchitecture } from "react-icons/md"
import { CiClock2 } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"

import { SeminarAndTreningsData } from '@/constants/SamenarAndTrening'

interface CategoryItem {
    cotegory: string
}


const Cotegory: CategoryItem[] = [
    { cotegory: "Интерьерные работы" },
    { cotegory: "Дизайн интерьеров" },
    { cotegory: "Архитектурные проекты" },
    { cotegory: "Градостроительные проекты" },
    { cotegory: "Концептуальные и творческие проекты" },
    { cotegory: "Другие" },
]



const NewSeminar: FC = () => {
    const [sliceNumber, setSliceNumber] = useState(9)

    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState('Все проекты')
    const blogContainerRef = useRef<HTMLDivElement | null>(null)
    const filterRef = useRef<HTMLDivElement | null>(null) // Ref для анимации элементов

    const handleActiveFilter = () => setMobileActiveFilter(!mobileActiveFilter)

    useEffect(() => {
        if (mobileActiveFilter && filterRef.current) {
            // Анимация появления элементов
            gsap.fromTo(
                filterRef.current.children,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }
            )
        } else if (filterRef.current) {
            // Анимация исчезновения
            gsap.to(filterRef.current.children, { opacity: 0, y: -20, duration: 0.2, stagger: 0.1 })
        }
    }, [mobileActiveFilter])

    useEffect(() => {
        if (blogContainerRef.current) {
            gsap.fromTo(
                blogContainerRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.4, stagger: 0.2, ease: "power.out" }
            )
        }
    }, [activeFilter])

    const filteredBlogData = activeFilter === 'Все проекты'
        ? SeminarAndTreningsData
        : SeminarAndTreningsData.filter(item => item.cotegory === activeFilter)

    // Tanlangandan Keyin OChirsh
    const handleMobileFilterSelect = (cotegory: string) => {
        setActiveFilter(cotegory)
        setMobileActiveFilter(false)
    }


    const isAllDataLoaded = sliceNumber >= filteredBlogData.length

    const handleToggle = () => {
        if (!isAllDataLoaded) {
            // Загрузить еще
            setSliceNumber(prev => Math.min(prev + 9, filteredBlogData.length))
        } else {
            // Скрыть часть элементов, но не меньше 9
            setSliceNumber(prev => Math.max(prev - 9, 9))
        }
    }
    return (
        <div className='mt-[50px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>

            <p className=' uppercase text-[26px] 2xl:text-[45px] text-titleDark font-jost'>Ближайшие семинары и тренинги</p>
            <div className='flex flex-col mt-[20px] 2xl:mt-[40px]'>
                <div className='hidden slg:flex  slg:flex-row gap-[10px]'>
                    <button
                        className={`px-[15px] py-[13px] text-center text-[#121212] border ${activeFilter === 'Все проекты' ? 'bg-[#222E51] text-white' : ''
                            }`}
                        onClick={() => setActiveFilter('Все проекты')}
                    >
                        Все проекты
                    </button>
                    {Cotegory.map((item, index) => (
                        <button
                            key={index}
                            className={`px-[15px] py-[13px] text-center text-[#121212] border ${activeFilter === item.cotegory ? 'bg-[#222E51] text-white' : ''
                                }`}
                            onClick={() => setActiveFilter(item.cotegory)}
                        >
                            {item.cotegory}
                        </button>
                    ))}
                </div>
                <div className='2xl:hidden'>
                    <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                        <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                            {activeFilter}
                        </p>
                        <div>
                            <FaChevronDown className='text-[#222E51]' />
                        </div>
                    </button>
                    {mobileActiveFilter && (
                        <div ref={filterRef}>
                            {Cotegory.map((item: CategoryItem, index: number) => (
                                <p
                                    key={index}
                                    onClick={() => handleMobileFilterSelect(item.cotegory)}
                                    className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                                >
                                    {item.cotegory}
                                    <MdArchitecture />
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-[20px] flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[20px]'>
                {filteredBlogData.slice(0 , sliceNumber).map((item, index) => (
                    <div key={index} className='p-[20px] 2xl:p-[30px] border border-[#E4E4E4] 2xl:w-[32%] 2xl:mt-[20px] '>
                        <div className='pb-[15px]  border-b border-b-[#E4E4E4]'>
                            <p className='text-[20px] text-titleDark font-medium font-jost mb-[8px] 2xl:text-[30px]'>{item.title}</p>
                            <p className='text-[15px] leading-[18px]  2xl:text-[18px] 2xl:leading-[22px] text-title80 font-jost'>{item.description}</p>
                        </div>
                        <div className='mt-[15px]'>
                            {/* adress info */}
                            <div >
                                <div className='flex flex-row items-center text-[15px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px]'>
                                    <CiClock2 className='mr-[10px] w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
                                    <div>
                                        <p>{item.date}; <span>{item.time}</span></p>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center text-[15px] mt-[5px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px]'>
                                    <CiLocationOn className='mr-[10px] w-[25px] h-[25px] 2xl:w-[28px] 2xl:h-[28px]' />
                                    <div>
                                        <p>{item.addres}</p>
                                    </div>
                                </div>
                            </div>
                            {/* button for info */}
                            <div className='mt-[25px] flex flex-row gap-[11px] w-full'>
                                <Link className='borderedButton w-[48%] flex items-center justify-center' href={`/seminar/${item.slug}`}>Подробнее</Link>
                                <button className='buttonBlue w-[48%] flex items-center justify-center'>Записаться</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>


            {filteredBlogData.length > 9 && (
                <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
                    <button onClick={handleToggle} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                        {isAllDataLoaded ? 'Скрыть' : 'Показать еще'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default NewSeminar