'use client'

import { FC, useState, useEffect } from 'react'

import Image from 'next/image'
import ReactPlayer from 'react-player'
import { GrFormPreviousLink } from "react-icons/gr"

// HOOKS
import { handleBack } from '@/hooks/useBack'


// ICON
import { BsYoutube } from "react-icons/bs"
import { IBlog } from '@/interface/IBlogs/blog'
import { urlFor } from '@/sanity/lib/image'
import useLocale from '@/hooks/useLocale'
import formatDate from '@/hooks/useFormatDate'



interface IBlogItemProps {
    blog: IBlog
}


const SomeBlog: FC<IBlogItemProps> = ({ blog }) => {

    const [isClient, setIsClient] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
    const locale = useLocale()
    // Ensure this code runs only on the client side
    useEffect(() => {
        setIsClient(true)
    }, [])






    return (
        <div className='2xl:px-[200px] px-[16px] 2xl:mt-[25px]'>
            <div className='flex flex-row items-center mt-[15px] text-[16px] 2xl:text-[20px] text-[#222E51] font-medium font-jost'>
                <GrFormPreviousLink className='2xl:w-[30px] w-[25px]  h-[25px] 2xl:h-[30px]' />
                <button onClick={handleBack}>
                    
                    {locale === 'ru'
                ? "Назад"
                : locale === 'uz'
                  ? "Orqaga"
                  : "Back"
              }

                </button>
            </div>
            <div className='2xl:mt-[50px]'>
                <div className='flex flex-row gap-[10px] pt-[25px] items-center'>
                    <div className='w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px] rounded-full '>
                        {blog?.userImage?.asset?._ref && (
                            <Image src={urlFor(blog.userImage.asset._ref).url()} alt='image-user' width={500} height={450} quality={100} className='w-full h-full rounded-full' />
                        )}

                    </div>
                    <div>
                        <p className='text-[14px] 2xl:text-[20px] font-medium text-titleDark font-jost'>
                            {blog?.userName[locale] && (
                                blog.userName[locale])}
                        </p>
                        <p className=' text-[12px] 2xl:text-[17px] 2xl:mt-[-8px] font-medium 2xl:leading-[24.57px] text-[#A0A0A0] font-jost mt-[-5px]'>
                            {blog?.userOccupation && (
                                blog.userOccupation[locale])}
                        </p>
                    </div>
                </div>
                <div className='2xl:mt-[20px] mt-[10px]'>
                    <p className='text-titleDark text-[22px] leading-[29px] 2xl:text-[40px] uppercase 2xl:leading-[57.8px]'>
                        {blog?.title[locale]}
                    </p>
                    <p className='text-title80 mt-[10px] 2xl:mt-[8px] text-[14px] 2xl:text-[20px] 2xl:leading-[24px] '>
                        {formatDate(blog._createdAt)}
                    </p>
                </div>
                <div className='mt-[25px] 2xl:mt-[40px] h-[220px] 2xl:h-[500px]'>
                    {blog?.mainImage?.asset?._ref && (
                        <Image src={urlFor(blog?.mainImage.asset._ref).url()} alt='image-blog' width={700} height={600} quality={100} className='w-full h-full object-cover' />
                    )}

                </div>
                <div className='2xl:mt-[40px] mt-[25px]'>
                    <p className='2xl:text-[20px] text-[14px] leading-[18px] 2xl:leading-[24px] text-[#333333]'>
                        {blog?.description[locale]}
                    </p>
                </div>
                <div className='mt-[10px] 2xl:mt-[30px] flex flex-col gap-[10px] 2xl:gap-[20px] '>


                    {blog?.additionalContent &&
                        blog?.additionalContent.length > 0 &&
                        blog?.additionalContent.map((item, index) => {
                            // Проверяем, есть ли данные для отображения
                            if (!item || (!item?.title && !item?.description && !item?.youtubeLink)) {
                                return null; // Если пустой объект или все значения null, ничего не рендерим
                            }

                            return (
                                <div key={index}>
                                    <div className="flex flex-col 2xl:gap-[15px]">
                                        {item?.title && (
                                            <p className="text-[18px] 2xl:text-[25px] 2xl:leading-[30px] font-[454] text-[#333333]">
                                                {item?.title[locale]}
                                            </p>
                                        )}
                                        {item?.description && (
                                            <p className="mt-[5px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[25px] text-[#333333]">
                                                {item?.description[locale]}
                                            </p>
                                        )}
                                    </div>
                                    {item?.youtubeLink && (
                                        <div className="2xl:h-[550px] h-[200px] mt-[25px] 2xl:mt-[60px]">
                                            {isClient && (
                                                <ReactPlayer
                                                    url={item.youtubeLink}
                                                    playing={isPlaying}
                                                    controls={true}
                                                    width="100%"
                                                    height="100%"
                                                    light={true}
                                                    playIcon={
                                                        <div className="inset-0 flex items-center justify-center bg-opacity-50 cursor-pointer">
                                                            <BsYoutube className="text-white w-[60px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]" />
                                                        </div>
                                                    }
                                                    onClickPreview={() => setIsPlaying(true)}
                                                    pip={true}
                                                />
                                            )}
                                        </div>
                                    )}
                                </div>
                            );
                        })}



                    {/* {blog.additionalContent.map((item, index) => (
                        <div key={index}>
                            <div className='flex flex-col 2xl:gap-[15px]'>
                                <p className='text-[18px] 2xl:text-[25px] 2xl:leading-[30px] font-[454] text-[#333333] '>{item.title[locale]}</p>
                                <p className='mt-[5px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[25px] font-medium text-[#333333]'>{item.description[locale]}</p>
                            </div>
                            {item.youtubeLink && (
                                <div className='2xl:h-[550px] h-[200px] mt-[25px] 2xl:mt-[60px]'>
                                    {isClient && (
                                        <ReactPlayer
                                            url={item.youtubeLink}
                                            playing={isPlaying}
                                            controls={true}
                                            width="100%"
                                            height="100%"
                                            light={true}
                                            playIcon={
                                                <div className="inset-0 flex items-center justify-center bg-opacity-50 cursor-pointer">
                                                    <BsYoutube className='text-white w-[60px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]' />
                                                </div>
                                            }
                                            onClickPreview={() => setIsPlaying(true)}
                                            pip={true}
                                        />
                                    )}
                                </div>
                            )}
                        </div>
                    ))} */}








                </div>
            </div>
        </div>
    )
}

export default SomeBlog