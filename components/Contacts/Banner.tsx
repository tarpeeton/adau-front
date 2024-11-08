import { FC } from 'react'
import Image from 'next/image'

// image
import ContactImage from '@/public/contact.jpg'

const Banner: FC = () => {
    return (
        <div className=' py-[40px] 2xl:py-[30px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                <div className='2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'>
                    <div className='2xl:w-[60%]'>
                        <p className='text-[26px] 2xl:text-[50px] text-titleDark  font-jost'>Свяжитесь с нами</p>
                        <p className='text-[18px] 2xl:text-[20px] 2xl:mt-[10px] 2xl:leading-[28.9px] text-titleDark  font-jost'>Мы всегда готовы ответить на ваши вопросы и помочь с любыми запросами по нашим услугам или мероприятиям</p>
                        <div className='mt-[20px] 2xl:mt-[40px]'>
                            <button className='buttonBlue text-titleDark  font-jost'>Свяжитесь с нами</button>

                        </div>

                    </div>
                </div>
                <div className='mt-[20px] 2xl:mt-0 Image 2xl:w-[55%] 2xl:h-[710px]'>
                    <Image src={ContactImage} width={600} height={800} quality={100} alt='ContactIMage' className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Banner