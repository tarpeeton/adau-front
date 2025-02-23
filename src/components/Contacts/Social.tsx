"use client"
import { FC } from 'react'
import { sendButtonCount } from '@/lib/api'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


import Instagram from '@/public/socials/inst.png'
import Telegram from '@/public/socials/telegram.png'
import Facebook from '@/public/socials/facebook.png'
// import LinkedIn from '@/public/socials/linkedin.png'
import Link from 'next/link'
import useLocale from '@/hooks/useLocale'



const DataSocialsLinks = [
    { id: 1, title: 'Instagram', forCounter: 'instagram', name: 'adau_uz', link: 'https://www.instagram.com/adau.uz?igsh=MTQyY25lZzd2aTQybA%3D%3D&utm_source=qr', img: Instagram },
    { id: 2, title: 'Facebook', forCounter: '', name: 'adau_uz', link: 'https://www.facebook.com/adau_uz', img: Facebook },
    // { id: 3, title: 'LinkedIn',  forCounter: '', name: 'adau_uz', link: 'https://www.linkedin.com/in/adau_uz', img: LinkedIn },
    { id: 4, title: 'Telegram', forCounter: 'telegram', name: 'adau_uz', link: 'https://t.me/ADAUdizaynArxitektura', img: Telegram },
]









const Socials: FC = () => {
    const locale = useLocale()

    const handleButton = async (button: string) => {
        await sendButtonCount(button)
    }

    return (
        <div className='px-[16px] 2xl:px-[50px] 4xl:px-[240px] mt-[80px] 2xl:mt-[200px]'>
            <p className='text-[24px] 2xl:text-[45px] text-titleDark font-jost uppercase'>
                {
                    locale === 'ru'
                        ? "Мы в социальных сетях"
                        : locale === 'uz'
                            ? "Bizning ijtimoiy tarmoqlarimiz"
                            : "We are on social media"
                }

            </p>

            <div className='block 2xl:hidden  mt-[25px]'>
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    speed={700}
                    autoplay={{ delay: 1200, disableOnInteraction: true }}
                    loop={true}

                >
                    {DataSocialsLinks.map((item) => (
                        <SwiperSlide key={item.id}>

                            <div className=' h-[330px] 2xl:w-[23%] bg-[#F7F8FA] py-[20px] px-[20px]  flex flex-col justify-between '>
                                <div className='flex flex-row justify-between'>
                                    <div>
                                        <p className='text-titleDark text-[20px] font-jost'>{item.title}</p>
                                        <p className='text-[#222E51] text-[14px] font-jost'>{item.name}</p>
                                    </div>
                                    <Image src={item?.img} quality={100} width={71} height={71} alt='instagram' className='object-cover w-[99px] h-[99px] ' />

                                </div>
                                <Link href={item.link} className='buttonBlue'>
                                    {
                                        locale === 'ru'
                                            ? "Подписаться"
                                            : locale === 'uz'
                                                ? "Obuna bo‘lish"
                                                : "Subscribe"
                                    }

                                </Link>
                            </div>
                        </SwiperSlide>


                    ))}
                </Swiper>
            </div>

            <div className=' hidden 2xl:flex flex-col gap-[30px] 2xl:flex-row justify-between mt-[30px]'>
                {DataSocialsLinks.map((item) => (
                    <div key={item.id} className=' h-[200px] 2xl:w-[23%] bg-[#F7F8FA] py-[15px] px-[10px] 2xl:p-[30px] flex flex-col justify-between 2xl:h-[300px]'>
                        <div className='flex flex-row justify-between'>
                            <div>
                                <p className='text-titleDark text-[24px] 2xl:text-[30px] font-jost'>{item.title}</p>
                                <p className='text-[#222E51] text-[18px] 2xl:text-[20px] font-jost'>{item.name}</p>
                            </div>
                            <Image src={item?.img} quality={100} width={71} height={71} alt='instagram' className='object-cover 2xl:w-[90px]' />

                        </div>
                        <Link href={item.link} className='w-full'>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation() // Prevents interfering with the link navigation
                                    handleButton(item.forCounter)
                                }}
                                className='buttonBlue w-full'
                            >
                                {
                                    locale === 'ru'
                                        ? "Подписаться"
                                        : locale === 'uz'
                                            ? "Obuna bo‘lish"
                                            : "Subscribe"
                                }

                            </button>

                        </Link>
                    </div>
                ))}




            </div>
        </div>
    )
}

export default Socials