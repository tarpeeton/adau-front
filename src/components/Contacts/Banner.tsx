"use client"
import { FC, useState } from 'react'
import Image from 'next/image'
// image
import ContactImage from '@/public/contact.jpg'
import ContactUs from '../Modal/contacts-modal'
import useLocale from '@/hooks/useLocale'



const Banner: FC = () => {
    const [open, setOpen] = useState(false)
    const locale = useLocale()

    const handleModal = () => setOpen(!open)


    return (
        <div className=' py-[30px] 2xl:py-[30px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                <div className='2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-start'>
                    <div className='2xl:w-[65%]'>
                        <p className='text-[26px] 2xl:text-[50px] text-titleDark uppercase  font-jost'>
                            {
                                locale === 'ru'
                                    ? "Свяжитесь с нами"
                                    : locale === 'uz'
                                        ? "Biz bilan bog‘laning"
                                        : "Contact us"
                            }


                        </p>
                        <p className='text-[18px] mt-[12px] 2xl:text-[20px] 2xl:mt-[10px] 2xl:leading-[28.9px] text-titleDark  font-jost'>
                            {
                                locale === 'ru'
                                    ? "Мы всегда готовы ответить на ваши вопросы и помочь с любыми запросами по нашим услугам или мероприятиям"
                                    : locale === 'uz'
                                        ? "Biz har doim sizning savollaringizga javob berishga va xizmatlarimiz yoki tadbirlarimiz bo‘yicha har qanday so‘rovlaringizga yordam berishga tayyormiz"
                                        : "We are always ready to answer your questions and assist with any inquiries about our services or events"
                            }

                        </p>
                        <div className='mt-[20px] 2xl:mt-[40px]'>
                            <button onClick={handleModal} className='buttonBlue text-titleDark w-[50%]  2xl:w-[40%] font-jost'>
                                {
                                    locale === 'ru'
                                        ? "Написать нам"
                                        : locale === 'uz'
                                            ? "Bizga yozish"
                                            : "Write to us"
                                }

                            </button>
                            <ContactUs visible={open} close={handleModal} />
                        </div>
                    </div>
                </div>
                <div className='mt-[40px] 2xl:mt-0 Image 2xl:w-[55%] 2xl:h-[710px] h-[350px]'>
                    <Image src={ContactImage} width={1000} height={820} quality={100} alt='ContactIMage' className='w-full h-full object-cover' />
                </div>
            </div>
        </div>
    )
}

export default Banner