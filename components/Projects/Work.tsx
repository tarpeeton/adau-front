"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ImageItem, SwiperItem } from '@/ui/swiperItem'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


// ICON
import { FaChevronDown } from "react-icons/fa6"
import { MdArchitecture } from "react-icons/md"


// images
import ImageDataMap from '@/public/project/projectCARD.jpg'

// Define interfaces for your data structures


export interface DataItem {
    category: string
    title: string
    description: string
    url: ImageItem[]
}

interface CategoryItem {
    cotegory: string
}

const Data: DataItem[] = [
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Интерьерные работы',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Архитектурные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
    {
        category: 'Градостроительные проекты',
        title: 'Innova Space',
        description: 'Пространство с современным дизайном, способствующим командной работе и креативности',
        url: [{ img: ImageDataMap }, { img: ImageDataMap }]
    },
]

const Cotegory: CategoryItem[] = [
    { cotegory: "Интерьерные работы" },
    { cotegory: "Дизайн интерьеров" },
    { cotegory: "Архитектурные проекты" },
    { cotegory: "Градостроительные проекты" },
    { cotegory: "Концептуальные и творческие проекты" },
    { cotegory: "Другие" },
]







const Work: FC = () => {

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
        ? Data
        : Data.filter(item => item.category === activeFilter)

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
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div>
                <p className="text-[26px] uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]">
                    Наши <br className='2xl:hidden' /> последние работы
                </p>
            </div>
            <div className='hidden slg:flex  slg:flex-row gap-[10px]'>
            <button
                        className={`px-[15px] py-[13px] text-center text-[#121212] border ${
                            activeFilter ===  'Все проекты' ? 'bg-[#222E51] text-white' : ''
                        }`}
                        onClick={() => setActiveFilter('Все проекты')}
                    >
                        Все проекты
                    </button>
            {Cotegory.map((item: CategoryItem, index: number) => (
                    <button
                        key={index}
                        className={`px-[15px] py-[13px] text-center text-[#121212] border ${
                            activeFilter === item.cotegory ? 'bg-[#222E51] text-white' : ''
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
            <div className='mt-[15px] flex flex-col gap-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[1%]' ref={blogContainerRef}>
                {filteredBlogData.slice(0, sliceNumber).map((item: DataItem, index: number) => (
                    <SwiperItem key={index} item={item} />
                ))}
            </div>
            {filteredBlogData.length > 9 && (
                <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
                    <button onClick={handleToggle} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                        {isAllDataLoaded ? 'Скрыть' : 'Загрузить еще'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default Work
