"use client"
import React, { FC } from 'react'
import Image from 'next/image'
import { FaTelegramPlane } from "react-icons/fa"
import { FaFacebookF } from "react-icons/fa"
import { FaInstagram } from "react-icons/fa"

// images
import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'
import Link from 'next/link'
import useLocale from '@/hooks/useLocale'




const BlogShare: FC = () => {
    const locale = useLocale()

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                const message = locale === 'ru'
                    ? 'Ссылка скопирована в буфер обмена!'
                    : locale === 'uz'
                        ? 'Havola buferga nusxalandi!'
                        : 'Link copied to clipboard!';
                alert(message);
            })
            .catch(err => {
                console.error('Ошибка при копировании ссылки: ', err);
            });
    };
    

    return (
        <div className='mt-[80px] 2xl:mt-[200px]'>
            <div className=' bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:px-[50px]  4xl:px-[240px] flex flex-col 2xl:flex-row'>
                <div className='2xl:w-[60%]'>
                    <p className='text-[26px] 2xl:w-[90%] 2xl:text-[50px] 2xl:leading-[62px]  uppercase text-titleWhite font-jost leading-[32px]'>
                        {
                            locale === 'ru'
                                ? <>Поделитесь новостью <br /> с коллегами!</>
                                : locale === 'uz'
                                    ? <>Yangilikni  hamkasblaringiz <br /> bilan bo‘lishing!</>
                                    : <>Share the news <br /> with colleagues!</>
                        }

                    </p>
                    <p className='mt-[10px] 2xl:mt-[20px] 2xl:w-[50%] text-[15px] leading-[18px] text-white opacity-[80%]'>
                        {
                            locale === 'ru'
                                ? "Будьте в курсе трендов архитектуры и делитесь новостью с коллегами"
                                : locale === 'uz'
                                    ? "Arxitektura tendensiyalaridan xabardor bo‘ling va yangiliklarni hamkasblaringiz bilan ulashing"
                                    : "Stay updated with architectural trends and share the news with colleagues"
                        }

                    </p>
                    <div className='flex flex-row flex-nowrap justify-between mt-[25px] 2xl:w-[60%] 2xl:mt-[50px]'>
                        <button onClick={handleCopyLink} className='buttonWhite w-[50%] 2xl:w-[45%]'>
                            {
                                locale === 'ru'
                                    ? "Копировать ссылку"
                                    : locale === 'uz'
                                        ? "Havolani nusxalash"
                                        : "Copy link"
                            }

                        </button>
                        <div className='w-[48%] 2xl:w-[52%] flex flex-row gap-[4px] items-center'>
                            <Link href={`https://www.instagram.com/share?url=${encodeURIComponent(window.location.href)}`} target="_blank" className='w-[50px] h-[50px] 2xl:h-[55px] 2xl:w-[55px] flex items-center justify-center border border-white border-opacity-[50%]'>
                                <FaInstagram className='w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] text-white' />
                            </Link>
                            <Link href={`https://t.me/share/url?url=${encodeURIComponent(window.location.href)}`} target="_blank" className='w-[50px] h-[50px] 2xl:h-[55px] 2xl:w-[55px] flex items-center justify-center border border-white border-opacity-[50%]'>
                                <FaTelegramPlane className='w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] text-white' />
                            </Link>
                            <Link href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`} target="_blank" className='w-[50px] h-[50px] 2xl:h-[55px] 2xl:w-[55px] flex items-center justify-center border border-white border-opacity-[50%]'>
                                <FaFacebookF className='w-[30px] h-[30px] 2xl:w-[35px] 2xl:h-[35px] text-white' />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='mt-[30px] flex items-center gap-[8px] justify-center 2xl:w-[40%] 2xl:items-end 2xl:mt-[220px] 2xl:ml-[-80px]'>
                    <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                    <Image src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                    <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />
                    <Image src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />
                </div>
            </div>
        </div>
    )
}

export default BlogShare