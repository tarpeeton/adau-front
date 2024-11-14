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

import useLocale from '@/hooks/useLocale'

import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import { IBlog, IBlogCategory } from '@/interface/IBlogs/blog'
import { Link } from '@/i18n/routing'
import formatDate from '@/hooks/useFormatDate'




const PopularBlogs: FC = () => {
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState<{ name: string, id: string }>({ name: 'Все статьи', id: 'all-articles' })
    const blogContainerRef = useRef<HTMLDivElement | null>(null)
    const filterRef = useRef<HTMLDivElement | null>(null)
    const [categories, setCategories] = useState<IBlogCategory[]>([])
    const [blogs, setBlogs] = useState<IBlog[]>([])
    const locale = useLocale()

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesData = await client.fetch<IBlogCategory[]>(`*[_type == "blogCategory"]{name, image, _id}`)
                setCategories(categoriesData)
            } catch (error) {
                console.debug(error)
            }
        }
        fetchCategories()
    }, [locale])

    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const blogsData = await client.fetch<IBlog[]>(`
                    *[_type == "blog" && popular == true] {
                       _id,
_createdAt,
title,
slug,
description,
userName,
userOccupation,
userImage,
mainImage,
category,
popular,
additionalContent
                    }
                `)
                setBlogs(blogsData)
            } catch (error) {
                console.debug(error)
            }
        }

        fetchBlogs()
    }, [locale])

    const handleActiveFilter = () => setMobileActiveFilter(!mobileActiveFilter)

    const handleFilterSelect = (categoryId: string, categoryName: string) => {
        setActiveFilter({ id: categoryId, name: categoryName })
        setMobileActiveFilter(false)
    }

    useEffect(() => {
        if (mobileActiveFilter && filterRef.current) {
            gsap.fromTo(
                filterRef.current.children,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }
            )
        } else if (filterRef.current) {
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

    const filteredBlogData = activeFilter.id === 'all-articles'
        ? blogs
        : blogs.filter(blog => blog.category?._ref === activeFilter.id)

    const [sliceNumber, setSliceNumber] = useState(6)

    const handleAddMore = () => {
        if (sliceNumber < filteredBlogData.length) {
            setSliceNumber(sliceNumber + 6)
        }
    }

    const handleShowLess = () => {
        setSliceNumber(6)
    }


    console.log(filteredBlogData, 'filteredBlogData')

    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <p className="text-[26px]  uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                Популярные статьи
            </p>

            <div className='hidden 2xl:inline-block   mt-[40px] border-b border-[#E4E4E4]'>
                <div className='flex flex-row gap-[40px]'>
                    <button
                        onClick={() => handleFilterSelect('all-articles', 'Все статьи')}
                        className={`pb-[12px] mr-[10px] ${activeFilter.id === 'all-articles' ? 'border-b-2 border-[#222E51] text-[#222E51]' : ' text-[#000000]'}`}
                    >
                        <p className='text-[22px] font-medium'>Все статьи</p>
                    </button>
                    {categories.map((item) => (
                        <button
                            onClick={() => handleFilterSelect(item._id, item.name[locale])}
                            key={item._id}
                            className={`pb-[12px] px-[30px] ${activeFilter.id === item._id ? 'border-b-2 border-[#222E51] text-[#222E51]' : ' text-[#000000]'}`}
                        >
                            <p className='text-[22px] font-medium'>{item.name[locale]}</p>
                        </button>
                    ))}

                </div>

            </div>

            {/* MOBILE ACTIVE FILTERS */}
            <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                    {activeFilter.name}
                </p>
                <div>
                    <FaChevronDown className='text-[#222E51]' />
                </div>
            </button>
            {mobileActiveFilter && (
                <div ref={filterRef}>
                    <p onClick={() => handleFilterSelect('all-articles', 'Все статьи')} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] pb-[13px] border-b border-[#222E51] cursor-pointer'>Все статьи</p>
                    {categories.map((item) => (
                        <p
                            key={item._id}
                            onClick={() => handleFilterSelect(item._id, item.name[locale])}
                            className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] pb-[13px] border-b border-[#222E51] cursor-pointer'
                        >
                            {item.name[locale]}
                        </p>
                    ))}
                </div>
            )}

            <div ref={blogContainerRef} className='mt-[20px] 2xl:mt-[41px] flex flex-col gap-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[20px]'>
                {filteredBlogData.slice(0, sliceNumber).map((item, index) => (
                    <div key={index} className='2xl:w-[335px]'>
                        <Image src={urlFor(item.mainImage.asset._ref).url()} width={345} height={345} quality={100} alt='blogIMage' className=' w-full object-cover h-[220px] 2xl:w-full md:h-[280px]' />
                        <div className='mt-[20px] 2xl:mt-[25px]'>
                            <p className='text-[14px] text-[#A0A0A0] 2xl:text-[17px]'>{formatDate(item._createdAt)}</p>
                            <div className='2xl:h-[120px]'>
                                <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[23px] 4xl:text-[25px] leading-[25px] 2xl:leading-[30px]'>{item.title[locale].length > 72 ? item.title[locale].slice(0, 72) + "..." : item.title[locale]}</p>
                            </div>

                            <Link href={`/blog/${item.slug.current}`} className='text-[16px] mt-[8px] font-medium text-[#222E51] font-jost 2xl:text-[20px] flex flex-row items-center'>
                                Читать статью
                                <GrLinkNext className='ml-[8px]' />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>
            <div className='w-full items-center flex justify-center mt-[30px]'>
                {filteredBlogData.length > 6 && sliceNumber < filteredBlogData.length ? (
                    <button onClick={handleAddMore} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                        Загрузить еще
                    </button>
                ) : (
                    sliceNumber > 6 && (
                        <button onClick={handleShowLess} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                            Скрыть
                        </button>
                    )
                )}
            </div>
        </div>
    )
}

export default PopularBlogs


