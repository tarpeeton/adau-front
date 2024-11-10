'use client'
import React, { FC, useState } from 'react'
import Image from 'next/image'



// images
import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'
import Link from 'next/link'




const FollowToBlog: FC = () => {
    const [email, setEmail] = useState('')




    return (
        <div className='mt-[80px] 2xl:mt-[200px]'>
            <div className=' bg-[#222E51] py-[40px] px-[16px] 2xl:py-[50px] 2xl:px-[50px]  4xl:px-[240px] flex flex-col 2xl:flex-row'>
                {/* TEXT AND BUTTON */}
                <div className='2xl:w-[60%]'>
                    <p className='text-[26px] 2xl:w-[90%] 2xl:text-[50px] 2xl:leading-[62px]  uppercase text-titleWhite font-jost leading-[32px]'>
                        Следите за новыми трендами в архитектуре!
                    </p>

                    <p className='mt-[10px] 2xl:mt-[20px] 2xl:w-[50%] text-[15px] leading-[18px] text-white opacity-[80%]'>
                        Подписывайтесь на наш блог, чтобы не пропустить новые статьи и тренды в дизайне и архитектуре
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
                        <button className='buttonWhite w-[50%]'>
                            Подписаться
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