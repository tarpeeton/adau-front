"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'

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
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?  что будет популярно в ближайшие годы?',
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
        url: One,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Технологии"
    },
    {
        url: Three,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Мировые тренды"
    },
    {
        url: Two,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Ассоциация"
    },
    {
        url: One,
        date: '03.11.2024',
        title: '10 ключевых архитектурных трендов: что будет популярно в ближайшие годы?',
        category: "Урбанистика"
    },
]

const Cotegory = [
    { cotegory: "Все статьи" },
    { cotegory: "Архитектура" },
    { cotegory: "Дизайн интерьеров" },
    { cotegory: "Мировые тренды" },
    { cotegory: "Технологии" },
    { cotegory: "Урбанистика" },
    { cotegory: "Ассоциация" },
]


const Blog: FC = () => {
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState('Все статьи')
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




    const filteredBlogData = activeFilter === 'Все статьи'
        ? BlogData
        : BlogData.filter(item => item.category === activeFilter)


        // Tanlangandan Keyin OChirsh
        const handleMobileFilterSelect = (cotegory: string) => {
            setActiveFilter(cotegory)
            setMobileActiveFilter(false)
        }




    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <p className="text-[26px]  uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                блог
            </p>

            <div className='hidden 2xl:flex flex-row  mt-[40px]'>
                {Cotegory.map((item, index) => (
                    <button
                        onClick={() => setActiveFilter(item.cotegory)}
                        key={index}
                        className={`${index !== 0 ? 'px-[30px] pt-0 pb-[12px]' : 'pb-[12px]'
                            } border-b ${activeFilter === item.cotegory
                                ? 'border-b-2 border-[#222E51] text-[#222E51]'
                                : 'border-b border-[#E4E4E4] text-[#000000]'
                            }`}
                    >
                        <p className='text-[22px] font-medium'>{item.cotegory}</p>
                    </button>
                ))}

            </div>

            {/* MOBILE ACTIVE FILTERS */}
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
                    {/* <p onClick={() => handleMobileFilterSelect('Все статьи')} className='text-[15px] font-s font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Все статьи <FaBorderAll /></p> */}
                    <p onClick={() => handleMobileFilterSelect('Архитектура')} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Архитектура <MdArchitecture /></p>
                    <p onClick={() => handleMobileFilterSelect('Дизайн интерьеров ')} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Дизайн интерьеров  <SiAffinitydesigner /></p>
                    <p onClick={() => handleMobileFilterSelect('Мировые тренды')} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Мировые тренды <AiOutlineGlobal /></p>
                    <p onClick={() => handleMobileFilterSelect('Технологии')} className='text-[15px] font-medium font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Технологии
                        <GrTechnology />
                    </p>
                    <p onClick={() => handleMobileFilterSelect('Урбанистика')} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Урбанистика
                        <GiTurban />
                    </p>
                    <p onClick={() => handleMobileFilterSelect('Ассоциация')} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>Ассоциация
                        <FaDrawPolygon />
                    </p>
                </div>
            )}

            <div ref={blogContainerRef} className='mt-[20px] 2xl:mt-[41px] flex flex-col gap-[30px] 2xl:flex-row 2xl:gap-[20px]'>
                {filteredBlogData.slice(0, 4).map((item, index) => (
                    <div  key={index} className='2xl:w-[349px]'>
                        <Image src={item.url} width={345} height={345} quality={100} alt='blogIMage' className=' w-full object-cover h-[220px] 2xl:w-full md:h-[280px]' />
                        <div className='mt-[20px] 2xl:mt-[25px]'>
                            <p className='text-[14px] text-[#A0A0A0] 2xl:text-[17px]'>{item.date}</p>
                            <div className='2xl:h-[120px]'>
                                <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[25px] leading-[25px] 2xl:leading-[30px]'>{item.title.length > 72 ? item.title.slice(0, 72) + "..." : item.title}</p>
                            </div>

                            <p className='text-[16px] mt-[8px] font-medium text-[#222E51] font-jost 2xl:text-[20px] flex flex-row items-center'>
                                Читать статью
                                <GrLinkNext className='ml-[8px]' />
                            </p>
                        </div>
                    </div>
                ))}

            </div>

            <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
            <Link href='/blog' className='buttonBlue w-[60%] 2xl:w-[15%]'>
            Все статьи
            </Link>
      </div>
        </div>
    )
}

export default Blog