'use client'

import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import useLocale from '@/hooks/useLocale'
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import { IBlog } from '@/interface/IBlogs/blog'
import { Link } from '@/i18n/routing'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import { FaHeart } from "react-icons/fa6"










const SavedBlogs: FC = () => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()
    const locale = useLocale()
    const [savedBlogs, setSavedBlogs] = useState<IBlog[] | []>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const featuredBlogs = await client.fetch(`
                    *[_type == "blog" && featured == true] {
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
                        additionalContent,
                        featured
                    }
                `)

                setSavedBlogs(featuredBlogs)
                console.log(featuredBlogs, 'featuredBlogs')
            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [locale])






    if (!savedBlogs || savedBlogs.length === 0) return null;

    return (
        <div className="mt-[80px] 2xl:mt-[200px] py-[40px] 2xl:py-[100px] px-[20px] 4xl:pl-[240px] 2xl:px-[50px]">
            <p className="text-[26px] uppercase text-[#222E51] flex flex-row items-center gap-[10px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]">
                <FaHeart /> {
  locale === 'ru'
    ? "Избранные статьи"
    : locale === 'uz'
      ? "Tanlangan maqolalar"
      : "Featured articles"
}

            </p>
            <div className="mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]">
                <div className='mt-[20px] 2xl:mt-[40px]'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={1}
                        speed={920}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={false}
                        breakpoints={{
                            1000: {
                                slidesPerView: 2,
                                spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                            },
                        }}
                    >


                        {savedBlogs.map((item, index) => (
                            <SwiperSlide key={index} className='cursor-pointer '>
                                <div className='relative overflow-hidden h-[300px] 2xl:h-[450px] 4xl:h-[500px]'>
                                    <Image src={urlFor(item.mainImage.asset._ref).url()} alt='saved-blog-image' width={627} height={500} quality={100} className='object-cover w-full h-full' />
                                    <div className='absolute inset-0 bg-gradient-to-t from-black/[0.5] to-black/[0.05]' />
                                    <div className='absolute bottom-[20px] left-[16px] w-[80%] 2xl:left-[30px]'>
                                        <p className='text-[18px] text-titleWhite font-medium 2xl:text-[35px]'>
                                            {item.title[locale]}
                                        </p>
                                        <p className='text-[15px] 2xl:text-[20px] 2xl:leading-[24px] 2xl:mt-[12px] text-titleWhite'>
                                            {item.description[locale].slice(0 , 120) + '...'}</p>
                                        <Link href={`/blog/${item.slug.current}`} className='mt-[10px] flex flex-row items-center gap-[5px] 2xl:mt-[15px] text-[15px] 2xl:text-[20px] font-medium text-titleWhite'> Подробнее <GrLinkNext /></Link>
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

export default SavedBlogs
