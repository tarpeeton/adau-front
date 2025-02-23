'use client'
import React, { FC, useState } from 'react'
import Image from 'next/image'



// images
import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'
import useLocale from '@/hooks/useLocale'




const FollowToBlog: FC = () => {
    const [email, setEmail] = useState('')
    const locale = useLocale()

    const handleSubscribe = () => {
        if (email) {
            localStorage.setItem('subscribedEmail', email)
            alert('Вы успешно подписались! Теперь вы будете получать уведомления о новых блогах.')
            setEmail('')
        } else {
            alert('Пожалуйста, введите ваш e-mail.')
        }
    }

    // Function to check for new blog posts (this should be replaced with actual blog detection logic)
    const checkForNewBlogs = () => {
        const storedEmail = localStorage.getItem('subscribedEmail')
        if (storedEmail) {
            // Simulate a new blog notification
            console.log(`Уведомление: На вашем устройстве обнаружена новая статья.`)
        }
    }


    return (
        <div className='mt-[80px] 2xl:mt-[200px]'>
            <div className=' bg-[#222E51] py-[40px] px-[16px] 2xl:py-[50px] 2xl:px-[50px]  4xl:px-[240px] flex flex-col 2xl:flex-row'>
                {/* TEXT AND BUTTON */}
                <div className='2xl:w-[60%]'>
                    <p className='text-[26px] 2xl:w-[90%] 2xl:text-[50px] 2xl:leading-[62px]  uppercase text-titleWhite font-jost leading-[32px]'>
                        {
                            locale === 'ru'
                                ? "Следите за новыми трендами в архитектуре!"
                                : locale === 'uz'
                                    ? "Arxitekturadagi yangi tendensiyalarni kuzatib boring!"
                                    : "Stay updated with new trends in architecture!"
                        }

                    </p>

                    <p className='mt-[10px] 2xl:mt-[20px] 2xl:w-[50%] text-[15px] leading-[18px] text-white opacity-[80%]'>
                        {
                            locale === 'ru'
                                ? "Подписывайтесь на наш блог, чтобы не пропустить новые статьи и тренды в дизайне и архитектуре"
                                : locale === 'uz'
                                    ? "Dizayn va arxitektura bo‘yicha yangi maqolalar va tendensiyalarni o‘tkazib yubormaslik uchun blogimizga obuna bo‘ling"
                                    : "Subscribe to our blog to stay updated with new articles and trends in design and architecture"
                        }

                    </p>
                </div>

                <div className='mt-[30px] flex flex-col items-center gap-[8px] justify-center 2xl:w-[40%]  2xl:ml-[-80px] '>
                    <div className='relative mt-[20px] w-full 2xl:w-[60%] 2xl:mt-[30px]'>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                        />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">E-mail *</label>


                    </div>
                    <div className='2xl:mt-[20px] mt-[15px] 2xl:w-[60%] w-full'>
                        <button onClick={handleSubscribe} className='buttonWhite w-full relative 2xl:w-[50%] z-[999]'>
                            {
                                locale === 'ru'
                                    ? "Подписаться"
                                    : locale === 'uz'
                                        ? "Obuna bo‘lish"
                                        : "Subscribe"
                            }

                        </button>
                    </div>
                    <div className='flex flex-row mt-[20px]  2xl:mt-[-20px]'>
                        <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[135px]' />
                        <Image src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[135px]' />
                        <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[135px] ml-[-8px]' />
                        <Image src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[135px] ml-[-8px]' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FollowToBlog