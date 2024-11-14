"use client"
import { FC, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import Link from 'next/link'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// ICON
import { FaChevronDown } from "react-icons/fa6"
import { MdArchitecture } from "react-icons/md"
import OldSeminarImage from '@/public/oldSeminar/seimnarOLD.jpg'





const Data = [
    {
        slug: 'oneBen',
        img: OldSeminarImage, title: 'Архитектура будущего: инновации, устойчивость', description: 'Изучаем инновации, устойчивые решения и передовые технологии, формирующие новые стандарты в проектировании.', date: "1.09.2023", category
            : 'Интерьерные работы'
    },
    {
        slug: 'oneBen',
        img: OldSeminarImage, title: 'Архитектура будущего: инновации, устойчивость', description: 'Изучаем инновации, устойчивые решения и передовые технологии, формирующие новые стандарты в проектировании.', date: "1.09.2023", category
            : 'Дизайн интерьеров'
    },
    {
        slug: 'oneBen',
        img: OldSeminarImage, title: 'Архитектура будущего: инновации, устойчивость', description: 'Изучаем инновации, устойчивые решения и передовые технологии, формирующие новые стандарты в проектировании.', date: "1.09.2023", category
            : 'Интерьерные работы'
    },
    {
        slug: 'oneBen',
        img: OldSeminarImage, title: 'Архитектура будущего: инновации, устойчивость', description: 'Изучаем инновации, устойчивые решения и передовые технологии, формирующие новые стандарты в проектировании.', date: "1.09.2023", category
            : 'Архитектурные проекты'
    },
]


interface CategoryItem {
    category: string
}


const Cotegory: CategoryItem[] = [
    { category: "Интерьерные работы" },
    { category: "Дизайн интерьеров" },
    { category: "Архитектурные проекты" },
    { category: "Градостроительные проекты" },
    { category: "Концептуальные и творческие проекты" },
    { category: "Другие" },
]



const OldSeminar: FC = () => {
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

    const FilteredOldSeminarData = activeFilter === 'Все проекты'
        ? Data
        : Data.filter(item => item.category === activeFilter)

    // Tanlangandan Keyin OChirsh
    const handleMobileFilterSelect = (cotegory: string) => {
        setActiveFilter(cotegory)
        setMobileActiveFilter(false)
    }


    const isAllDataLoaded = sliceNumber >= FilteredOldSeminarData.length

    const handleToggle = () => {
        if (!isAllDataLoaded) {
            // Загрузить еще
            setSliceNumber(prev => Math.min(prev + 9, FilteredOldSeminarData.length))
        } else {
            // Скрыть часть элементов, но не меньше 9
            setSliceNumber(prev => Math.max(prev - 9, 9))
        }
    }
    return (
        <div className='mt-[50px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>

            <p className=' uppercase text-[26px] 2xl:text-[45px] text-titleDark font-jost'>Записи прошедших семинаров</p>
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
                            className={`px-[15px] py-[13px] text-center text-[#121212] border ${activeFilter === item.category ? 'bg-[#222E51] text-white' : ''
                                }`}
                            onClick={() => setActiveFilter(item.category)}
                        >
                            {item.category}
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
                                    onClick={() => handleMobileFilterSelect(item.category)}
                                    className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                                >
                                    {item.category}
                                    <MdArchitecture />
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className='mt-[20px] flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[20px]'>
                {FilteredOldSeminarData.slice(0, sliceNumber).map((item, index) => (
                    <div key={index} className=' border border-[#E4E4E4] 2xl:w-[32%] 2xl:mt-[20px] '>
                        <Image src={item?.img} width={500} height={500} quality={100} alt='old_seminar_image' 
                        className='object-cover h-[210px] 2xl:h-[300px]'/>
                        <div className='p-[20px] 2xl:p-[30px]'>
                        <div className='pb-[15px]'>
                            <p className='text-[20px] text-titleDark font-medium font-jost mb-[8px] 2xl:text-[30px]'>{item.title}</p>
                            <p className='text-[15px] leading-[18px]  2xl:text-[18px] 2xl:leading-[22px] text-title80 font-jost'>{item.description}</p>
                        </div>
                        <div className='mt-[15px]'>
                            {/* adress info */}
                            <div >
                                <div className='flex flex-row items-center text-[15px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px]'>
                                    <div>
                                        <p>{item.date}</p>
                                    </div>
                                </div>
                              
                            </div>
                            {/* button for info */}
                            <div className='mt-[25px] flex flex-row gap-[11px] w-full 2xl:mt-[30px]'>
                                <Link className=' buttonBlue 2xl:w-[48%] flex items-center justify-center' href={`/seminar/${item.slug}`}>Посмотреть запись</Link>
                            </div>
                        </div>
                            </div>
                       
                    </div>
                ))}
            </div>


            {FilteredOldSeminarData.length > 9 && (
                <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
                    <button onClick={handleToggle} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                        {isAllDataLoaded ? 'Скрыть' : 'Показать еще'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default OldSeminar