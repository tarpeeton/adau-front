"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'


// ICONS
import { FaChevronDown } from "react-icons/fa6"
import { MdArchitecture } from "react-icons/md"
import { SiAffinitydesigner } from "react-icons/si"
import { AiOutlineGlobal } from "react-icons/ai"
import { GrTechnology } from "react-icons/gr"
import { GiTurban } from "react-icons/gi"
import { FaDrawPolygon } from "react-icons/fa6"
import { GrLinkNext } from "react-icons/gr"
// IMAGES
import One from '@/public/blog/blogone.jpg'
import Two from '@/public/blog/two.jpg'
import Three from '@/public/blog/three.jpg'



const BlogData = [
    {
        url: One,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Архитектура"
    },
    {
        url: Two,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Дизайн интерьеров"
    },
    {
        url: Three,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Мировые тренды"
    },
    {
        url: Three,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Мировые тренды"
    },
]



const Blog: FC = () => {
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState('Все статьи')
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



    const filteredBlogData = activeFilter === 'Все статьи'
        ? BlogData
        : BlogData.filter(item => item.category === activeFilter)


    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <p className="text-[26px]  uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                блог
            </p>
            <button onClick={handleActiveFilter} className='w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                    {activeFilter}
                </p>
                <div>
                    <FaChevronDown className='text-[#222E51]' />
                </div>
            </button>
            {mobileActiveFilter && (
                <div ref={filterRef}>
                    <p onClick={() => setActiveFilter('Архитектура')} className='text-[15px] font-medium font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Архитектура <MdArchitecture /></p>
                    <p onClick={() => setActiveFilter('Дизайн интерьеров ')} className='text-[15px] font-medium font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Дизайн интерьеров  <SiAffinitydesigner /></p>
                    <p onClick={() => setActiveFilter('Мировые тренды')} className='text-[15px] font-medium font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Мировые тренды <AiOutlineGlobal /></p>
                    <p onClick={() => setActiveFilter('Технологии')} className='text-[15px] font-medium font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Технологии
                        <GrTechnology />
                    </p>
                    <p onClick={() => setActiveFilter('Урбанистика')} className='text-[15px] font-medium font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Урбанистика
                        <GiTurban />
                    </p>
                    <p onClick={() => setActiveFilter('Ассоциация')} className='text-[15px] font-medium font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Ассоциация
                        <FaDrawPolygon />
                    </p>
                </div>
            )}

            <div className='mt-[20px] 2xl:mt-[41px] flex flex-col gap-[30px] 2xl:flex-row 2xl:gap-[20px]'>
                {filteredBlogData.map((item, index) => (
                    <div key={index}>
                        <Image src={item.url} width={345} height={345} quality={100} alt='blogIMage' className='object-cover h-[220px] 2xl:w-full md:h-[280px]' />
                        <div className='mt-[20px] 2xl:mt-[25px]'>
                            <p className='text-[14px] text-[#A0A0A0] 2xl:text-[17px]'>{item.date}</p>
                            <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[25px] leading-[25px] 2xl:leading-[30px]'>{item.title}</p>
                            <p className='text-[16px] mt-[8px] font-medium text-[#222E51] font-jost 2xl:text-[20px] flex flex-row items-center'>
                                Читать статью
                                <GrLinkNext className='ml-[8px]' />
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Blog