"use client"
import { FC, useEffect, useState } from 'react'
import Image from 'next/image'
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import { IBlog } from '@/interface/IBlogs/blog'
import { Link } from '@/i18n/routing'
import { GrLinkNext } from "react-icons/gr"
import useLocale from '@/hooks/useLocale'
import formatDate from '@/hooks/useFormatDate'


const SimilarBlogs: FC = () => {
    const [similarNews, setSimilarNews] = useState<IBlog[] | []>([])
    const locale = useLocale()

    useEffect(() => {

        const fetchBlogs = async () => {
            try {
                const blogsData = await client.fetch<IBlog[]>(`
                    *[_type == "blog"] {
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
                setSimilarNews(blogsData)
            } catch (error) {
                console.debug(error)
            }
        }

        fetchBlogs()
    }, [locale])




    return (
        <>
            {similarNews && similarNews.length > 0 && (
                <div className='px-[16px] 2xl:px-[50px] 4xl:px-[240px] mt-[80px] 2xl:mt-[200px]'>
                    <p className="text-[26px]  uppercase font-jost leading-[32px] 2xl:text-[40px] 2xl:leading-[59px]  ">
                    {
  locale === 'ru'
    ? "Похожие статьи"
    : locale === 'uz'
      ? "O‘xshash maqolalar"
      : "Related articles"
}

                    </p>

                    <div className='mt-[20px] 2xl:mt-[41px] flex flex-col gap-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[20px]'>
                        {similarNews?.map((item, index) => (
                            <div key={index} className='2xl:w-[335px]'>
                                {item?.mainImage?.asset?._ref && (
                                    <Image src={urlFor(item.mainImage.asset._ref).url()} width={345} height={345} quality={100} alt='blogIMage' className=' w-full object-cover h-[220px] 2xl:w-full md:h-[280px]' />
                                )}

                                <div className='mt-[20px] 2xl:mt-[25px]'>
                                    <p className='text-[14px] text-[#A0A0A0] 2xl:text-[17px]'>{formatDate(item?._createdAt)}</p>
                                    <div className='2xl:h-[120px]'>
                                        <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[23px] 4xl:text-[25px] leading-[25px] 2xl:leading-[30px]'>
                                            {item?.title?.[locale] ? 
                                                (item.title[locale].length > 72 ? 
                                                    item.title[locale].slice(0, 72) + "..." 
                                                    : item.title[locale])
                                                : ''}
                                        </p>
                                    </div>

                                    {item?.slug?.current && (
                                        <Link href={`/blog/${item.slug.current}`} className='text-[16px] mt-[8px] font-medium text-[#222E51] font-jost 2xl:text-[20px] flex flex-row items-center'>
                                            {
  locale === 'ru'
    ? "Читать статью"
    : locale === 'uz'
      ? "Maqolani o‘qish"
      : "Read article"
}

                                            <GrLinkNext className='ml-[8px]' />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        ))}

                    </div>
                    <div className='w-full items-center flex justify-center mt-[30px]'>
                        <Link href='/blog' className='buttonBlue w-[60%] 2xl:w-[15%]'>
                            {
                                locale === 'ru'
                                    ? "Все статьи"
                                    : locale === 'uz'
                                        ? "Barcha maqolalar"
                                        : "All articles"
                            }
                        </Link>

                    </div>
                </div>
            )}
        </>
    )
}

export default SimilarBlogs