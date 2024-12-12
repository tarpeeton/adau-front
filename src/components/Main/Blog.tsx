"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { Link } from '@/i18n/routing'

// CLIENT
import { client } from "@/sanity/lib/client"
import { useQuery } from '@tanstack/react-query'
import { urlFor } from '@/sanity/lib/image'

// ICONS
import { FaChevronDown } from "react-icons/fa6"
import { GrLinkNext } from "react-icons/gr"
import { IBlogCategory, IBlog } from '@/interface/IBlogs/blog'
import useLocale from '@/hooks/useLocale'
import formatDate from '@/hooks/useFormatDate'


const fetchCategories = async (): Promise<IBlogCategory[]> => {
    return await client.fetch(`*[_type == "blogCategory"]{name,
image,
_id}`)
}

const fetchAllBlogs = async (): Promise<IBlog[]> => {
    return await client.fetch(`*[_type == "blog"]{
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
    }`)
}





const Blog: FC = () => {
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState({ name: 'Все статьи', id: 'all-articles' })
    const blogContainerRef = useRef<HTMLDivElement | null>(null)
    const filterRef = useRef<HTMLDivElement | null>(null)
    const locale = useLocale()

    const { data: blogCategories = [], isLoading: isLoadingCategories } = useQuery<IBlogCategory[]>({
        queryKey: ['blogcategories'],
        queryFn: fetchCategories,
    })

    const { data: allBlogs = [], isLoading: isLoadingBlogs } = useQuery<IBlog[]>({
        queryKey: ['blogs'],
        queryFn: fetchAllBlogs,
    })

    const handleActiveFilter = () => setMobileActiveFilter(!mobileActiveFilter)

    const handleMobileFilterSelect = (categoryId: string, categoryName: string) => {
        setActiveFilter({ id: categoryId, name: categoryName })
        setMobileActiveFilter(false)
    }

    const filteredBlogs = activeFilter.id === 'all-articles'
        ? allBlogs
        : allBlogs.filter(blog => blog.category?._ref === activeFilter.id);

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

    return (
        <div className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <p className="text-[26px]  uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
                {locale === 'ru'
                    ? "Блог"
                    : locale === 'uz'
                        ? "Blog"
                        : "Blog"
                }
            </p>

            <div className='hidden 2xl:inline-block  border-b border-[#E4E4E4]  mt-[40px]'>
                <div className='flex flex-row gap-[40px]'>
                    <button
                        onClick={() => setActiveFilter({ name: 'Все статьи', id: 'all-articles' })}
                        className={`pb-[12px] ${activeFilter.id === 'all-articles'
                            ? 'border-b-2 border-[#222E51] text-[#222E51]'
                            : ' text-[#000000]'
                            }`}
                    >
                        <p className='text-[22px] font-medium'>
                            {locale === 'ru'
                                ? "Все статьи"
                                : locale === 'uz'
                                    ? "Barcha maqolalar"
                                    : "All Articles"
                            }
                        </p>
                    </button>
                    {blogCategories.map((item, index) => (
                        <button
                            onClick={() => setActiveFilter({ name: item.name[locale], id: item._id })}
                            key={index}
                            className={`${index !== 0 ? 'px-[30px] pt-0 pb-[12px] ' : 'pb-[12px]'
                                }  ${activeFilter.id === item._id
                                    ? 'border-b-2 border-[#222E51] text-[#222E51]'
                                    : ' text-[#000000]'
                                }`}
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
                    <p
                        onClick={() => handleMobileFilterSelect('all-articles', 'Все статьи')}
                        className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                    >
                        Все статьи
                    </p>
                    {blogCategories.map((item) => (
                        <p
                            key={item._id}
                            onClick={() => handleMobileFilterSelect(item._id, item.name[locale])}
                            className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                        >
                            {item.name[locale]}
                        </p>
                    ))}

                </div>
            )}

            <div ref={blogContainerRef} className='mt-[20px] 2xl:mt-[41px] flex flex-col gap-[30px] 2xl:flex-row 2xl:gap-[20px]'>
                {filteredBlogs.slice(0, 4).map((item, index) => (
                    <div key={index} className='2xl:w-[349px]'>
                        <Image src={urlFor(item.mainImage.asset._ref).url()} width={345} height={345} quality={100} alt='blogIMage' className=' w-full object-cover h-[220px] 2xl:w-full md:h-[280px]' />
                        <div className='mt-[20px] 2xl:mt-[25px]'>
                            <p className='text-[14px] text-[#A0A0A0] 2xl:text-[17px]'>{formatDate(item._createdAt)}</p>
                            <div className='2xl:h-[120px]'>
                                <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[25px] leading-[25px] 2xl:leading-[30px]'>{item.title[locale].length > 72 ? item.title[locale].slice(0, 72) + "..." : item.title[locale]}</p>
                            </div>

                            <Link href={`/blog/${item.slug.current}`} className='text-[16px] mt-[8px] font-medium text-[#222E51] font-jost 2xl:text-[20px] flex flex-row items-center'>
                                {locale === 'ru'
                                    ? "Читать статью"
                                    : locale === 'uz'
                                        ? "Maqolani o'qish"
                                        : "Read the article"
                                }
                                <GrLinkNext className='ml-[8px]' />
                            </Link>
                        </div>
                    </div>
                ))}

            </div>

            <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
                <Link href='/blog' className='buttonBlue w-[60%] 2xl:w-[15%]'>
                    {locale === 'ru'
                        ? "Все статьи"
                        : locale === 'uz'
                            ? "Barcha maqolalar"
                            : "All Articles"
                    }
                </Link>
            </div>
        </div>
    )
}

export default Blog