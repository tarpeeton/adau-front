"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from '@/i18n/routing'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// ICON
import { FaChevronDown } from "react-icons/fa6"
import { MdArchitecture } from "react-icons/md"
import { CiClock2 } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"

import { ISeminarCategory, ISeminarData } from '@/interface/ISeminar/seminar'
import useLocale from '@/hooks/useLocale'
import formatDate from '@/hooks/useFormatDate'

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


interface INewSeminarProps {
    cotegory: ISeminarCategory[]
    data: ISeminarData[]
}


const NewSeminar: FC<INewSeminarProps> = ({cotegory , data}) => {
    const [sliceNumber, setSliceNumber] = useState(9)
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState<ISeminarCategory | null>(null)
    const blogContainerRef = useRef<HTMLDivElement | null>(null)
    const filterRef = useRef<HTMLDivElement | null>(null)
    const locale = useLocale()

    console.log(data , 'data')

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

    const filteredBlogData = !activeFilter
        ? data
        : data.filter(item => item.seminarCategory._ref === activeFilter._id)

    // Tanlangandan Keyin OChirsh
    const handleMobileFilterSelect = (category: ISeminarCategory | null) => {
        setActiveFilter(category)
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
                        className={`px-[15px] py-[13px] text-center text-[#121212] border ${!activeFilter ? 'bg-[#222E51] text-white' : ''}`}
                        onClick={() => setActiveFilter(null)}
                    >
                        Все проекты
                    </button>
                    {cotegory.map((item) => (
                        <button
                            key={item._id}
                            className={`px-[15px] py-[13px] text-center text-[#121212] border ${activeFilter?._id === item._id ? 'bg-[#222E51] text-white' : ''}`}
                            onClick={() => setActiveFilter(item)}
                        >
                            {item.title[locale]}
                        </button>
                    ))}
                </div>
                <div className='2xl:hidden'>
                    <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                        <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                            {activeFilter?.title[locale]}
                        </p>
                        <div>
                            <FaChevronDown className='text-[#222E51]' />
                        </div>
                    </button>
                    {mobileActiveFilter && (
                        <div ref={filterRef}>
                            {cotegory.map((item, index) => (
                                <p
                                    key={index}
                                    onClick={() => handleMobileFilterSelect(item)}
                                    className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                                >
                                    {item.title[locale]}
                                    <MdArchitecture />
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-[20px] flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[20px]'>
                {filteredBlogData.slice(0 , sliceNumber).map((item, index) => (
                    <div key={index} className='p-[20px] relative 2xl:p-[30px] border border-[#E4E4E4] 2xl:w-[32%] 2xl:mt-[20px] '>
                        <div className='pb-[15px]  border-b border-b-[#E4E4E4]'>
                            <p className='text-[20px] text-titleDark font-medium font-jost mb-[8px] 2xl:text-[30px]'>{item.title[locale]}</p>
                            <p className='text-[15px] leading-[18px]  2xl:text-[18px] 2xl:leading-[22px] text-title80 font-jost 2xl:min-h-[88px]'>

                            {item.description[locale].length > 143 ? item.description[locale].slice( 0 , 143) + '....' : item.description[locale]}


                            </p>
                        </div>
                        <div className='mt-[15px] flex flex-col justify-between '>
                            <div  >
                                <div className='flex flex-row items-center text-[15px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px]'>
                                    <CiClock2 className='mr-[10px] w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
                                    <div >
                                        <p>{formatDate(item.date)}; <span>{item.time}</span></p>
                                    </div>
                                </div>
                                <div className='flex flex-row items-center text-[15px] mt-[5px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px] break-words 2xl:min-h-[36px]'>
                                    <div className='w-[25px] flex items-center justify-center h-[25px] 2xl:w-[28px] 2xl:h-[28px]'>
                                    <CiLocationOn className='h-[25px] 2xl:w-[28px] 2xl:h-[28px] '/>
                                        </div>
                                    <div>
                                        <p>{item.address[locale]}</p>
                                    </div>
                                </div>
                            </div>
                            {/* button for info */}
                            <div className='mt-[25px]  flex flex-row gap-[11px] w-full'>
                                <Link className='borderedButton w-[48%] flex items-center justify-center' href={`/seminar/${item.slug.current}`}>Подробнее</Link>
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