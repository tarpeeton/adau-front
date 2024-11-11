"use client"
import { FC, useState, useEffect } from 'react'
import Image from 'next/image'





import ImageUser from '@/public/Anastasiya.jpg'


const UserData = [
    { id: '1', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' },
    { id: '2', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' },
    { id: '3', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' },
    { id: '4', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' },
    { id: '5', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' },
    { id: '6', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' },
    { id: '7', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' },
    { id: '8', name: 'Anastasiya', date: '21.12.2025', image: ImageUser, text: 'Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur.ю Lorem ipsum dolor sit amet consectetur. Dictumst non lacus consectetur curabitur malesuada laoreet est diam maecenas. Arcu convallis elit pellentesque imperdiet arcu. Lorem ipsum dolor sit amet consectetur' }
]





const BlogComments: FC = () => {
    const [comment, setComment] = useState('Ваш комментарий')
    const [sliceNumber, setSliceNumber] = useState(3)

    const handleAddMore = () => {
        if (sliceNumber < UserData.length) {
            setSliceNumber(sliceNumber + 3)
        }
    }

    const handleShowLess = () => {
        setSliceNumber(3)
    }



    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div>
                <h1 className='text-[] 2xl:text-[45px] uppercase text-titleDark'>Комментарии   (578)</h1>
            </div>
            <div className='flex flex-col gap-[15px] 2xl:gap-[20px] mt-[25px] 2xl:mt-[20px]'>
                <div className='relative 2xl:w-full '>
                    <textarea
                        id="name"
                        value={comment}
                        onChange={e => setComment(e.target.value)}
                        className="border border-[#A0A0A0] block px-2.5 pb-2.5 pt-4 w-full text-sm text-titleDark bg-transparent border-1 dark:text-titleDark   focus:outline-none focus:ring-0 focus:border-[#A0A0A0] peer min-h-[160px] 2xl:min-h-[232px]"
                        placeholder=" "
                    />
                    <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-titleWhite px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] peer-focus:text-[17px] peer-focus:font-medium rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Ваш комментарий</label>
                </div>
                <div>
                    <button className='buttonBlue w-[50%] 2xl:w-[15%]'>
                        Опубликовать
                    </button>
                </div>
            </div>
            {/* COMMENTS */}

            <div className='mt-[40px] 2xl:mt-[60px] flex flex-col gap-[25px] 2xl:gap-[40px]'>


                {UserData.slice(0, sliceNumber).map((item) => (
                    <div key={item.id} className='pb-[25px] 2xl:pb-[40px] border-b border-b-[#E4E4E4] flex flex-col gap-[15px] 2xl:gap-[20px]'>
                        <div className='flex flex-row gap-[5px] 2xl:gap-[10px] items-center'>
                            <div className='w-[30px] h-[30px] 2xl:w-[45px] 2xl:h-[45px]'>
                                <Image src={item.image} alt='user-image' quality={100} width={400} height={400} className='w-full h-full object-cover rounded-full' />
                            </div>
                            <div>
                                <p className='text-[14px] font-medium text-titleDark 2xl:text-[20px]'>{item.name}</p>
                                <p className='text-[12px] mt-[-5px] font-medium text-[#A0A0A0] 2xl:text-[17px]'>{item.date}</p>
                            </div>
                        </div>
                        <div>
                            <p className='text-[15px] 2xl:text-[20px] leading-[18px] 2xl:leading-[24px] text-titleDark'>Lorem
                                {item.text}
                            </p>
                        </div>
                    </div>
                ))}










            </div>

            <div className='w-full items-center flex justify-center mt-[30px]'>
                {UserData.length > 6 && sliceNumber < UserData.length ? (
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

export default BlogComments