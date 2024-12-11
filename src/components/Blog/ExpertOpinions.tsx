"use client"
import { FC, useState, useEffect } from 'react'
import Image from 'next/image'
import { GrLinkNext } from "react-icons/gr"
import useLocale from '@/hooks/useLocale'

import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import { IBlog } from '@/interface/IBlogs/blog'
import { Link } from '@/i18n/routing'



const ExpertOpinions: FC = () => {
    const [sliceNumber, setSliceNumber] = useState(9);
    const [expertOpinion, setExpertOpinion] = useState<IBlog[] | []>([])
    const locale = useLocale()

    // FETCH DATA
    useEffect(() => {
        const fetchData = async () => {
            try {
                const featuredBlogs = await client.fetch(`
                    *[_type == "blog" && expert == true] {
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
                        featured,
                        expert
                    }
                `)

                setExpertOpinion(featuredBlogs)
                console.log(featuredBlogs, 'featuredBlogs')
            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [locale])











    const handleAddMore = () => {
        if (sliceNumber < expertOpinion.length) {
            setSliceNumber(prev => Math.min(prev + 9, expertOpinion.length));
        }
    };

    const handleShowLess = () => {
        setSliceNumber(9);
    };
    // expert
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[24px] 2xl:text-[40px] text-titleDark uppercase font-jost'>
                {
                    locale === 'ru'
                        ? "Мнение экспертов"
                        : locale === 'uz'
                            ? "Mutaxassislar fikri"
                            : "Expert opinions"
                }

            </p>
            <div className='mt-[20px] 2x:mt-[30px]'>
                <div className='flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[20px]'>
                    {expertOpinion.slice(0, sliceNumber).map((item, index) => (
                        <div key={index} className='2xl:w-[23%] py-[25px] px-[20px] flex flex-col 2xl:py-[35px] 2xl:px-[25px] border border-[#E4E4E4]'>
                            <div>
                                <p className='text-[20px] leading-[26px] 2xl:leading-[30px] 2xl:text-[24px] text-titleDark font-medium font-jost'>{item.title[locale]}</p>
                                <p className='text-[15px] leading-[18px] 2xl:leading-[24.57px] 2xl:text-[17px] text-title80  font-jost mt-[12px]'>
                                    {item?.description[locale].length > 101 ? item.description[locale].slice(0, 101) + "..." : item?.description[locale]}
                                </p>
                                <Link href={`/blog/${item.slug.current}`} className='text-[#222E51] text-[16px] flex flex-row flex-nowrap items-center mt-[20px]  font-medium gap-[8px]'>
                                    {
                                        locale === 'ru'
                                            ? "Читать статьи"
                                            : locale === 'uz'
                                                ? "Maqolalarni o‘qish"
                                                : "Read articles"
                                    }

                                    <GrLinkNext className='2xl:mt-[4px] w-[15px] h-[15px]' />
                                </Link>
                            </div>
                            <div className='mt-[25px] border-t border-r-[#E4E4E4]'>
                                <div className='flex flex-row gap-[10px] pt-[25px] items-center'>
                                    <div className='w-[40px] h-[40px] 2xl:w-[45px] 2xl:h-[45px] rounded-full  overflow-hidden '>
                                        {item?.userImage?.asset._ref && (
                                            <Image src={urlFor(item.userImage.asset._ref).url()} alt='image-rustiimmm' width={319} height={480} quality={100} className='w-full h-full object-cover ' />
                                        )}

                                    </div>
                                    <div>
                                        <p className='text-[16px] 2xl:text-[20px] font-medium text-titleDark font-jost'>{item?.userName[locale]}</p>
                                        <p className='text-[14px] 2xl:text-[17px] mt-[-8px] font-medium 2xl:leading-[24.57px] text-[#A0A0A0] font-jost'>{item?.userOccupation[locale]}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {expertOpinion.length > 9 && (
                    <div className='w-full items-center flex justify-center mt-[30px]'>
                        {sliceNumber < expertOpinion?.length ? (
                            <button onClick={handleAddMore} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                                {
                                    locale === 'ru'
                                        ? "Загрузить еще"
                                        : locale === 'uz'
                                            ? "Ko'proq korsatish"
                                            : "Load more"
                                }

                            </button>
                        ) : (
                            <button onClick={handleShowLess} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                                {
                                    locale === 'ru'
                                        ? "Скрыть"
                                        : locale === 'uz'
                                            ? "Yashirish"
                                            : "Hide"
                                }

                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default ExpertOpinions