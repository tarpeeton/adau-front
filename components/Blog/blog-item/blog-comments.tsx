"use client"
import { FC, useState, useEffect } from 'react'


const BlogComments: FC = () => {
    const [comment, setComment] = useState('')
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div>
                <h1 className='text-[] 2xl:text-[45px] uppercase text-titleDark'>Комментарии   (578)</h1>
            </div>
            <div className='flex flex-col gap-[] 2xl:gap-[20px] 2xl:mt-[20px]'>
                <div className='relative 2xl:w-full '>
                    <input
                        type="text"
                        id="name"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        className="border border-[#A0A0A0] block px-2.5 pb-2.5 pt-4 w-full text-sm text-titleDark bg-transparent border-1 dark:text-titleDark   focus:outline-none focus:ring-0 focus:border-[#A0A0A0] peer  2xl:min-h-[232px]"
                        placeholder=" "
                    />
                    <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#A0A0A0] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Ваш комментарий</label>
                </div>
            </div>
        </div>
    )
}

export default BlogComments