"use client"
import { FC } from 'react'
import Image from 'next/image'

// icons
import { FaInstagram } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { FaWhatsapp } from "react-icons/fa"
import { FaPhone } from "react-icons/fa6"
// image
import FooterLogo from '@/public/footerLOGO.png'
import ResultAgencyLogo from '@/public/result.png'
import { Link } from '@/i18n/routing'
import { sendButtonCount } from '@/lib/api'



const Footer: FC = () => {


    const handleButton = async (button: string) => {
        await sendButtonCount(button)
    }

    return (
        <div>
            <div className='flex flex-col 2xl:flex-row 2xl:flex-nowrap py-[40px] px-[16px] 2xl:px-[50px] 4xl:px-[240px] border-b border-b-[#E3E7EF] 2xl:justify-between '>
                <div>
                    <Link href='/'>
                        <Image src={FooterLogo} width={163} height={63} quality={100} alt='footer logo' className='object-cover' />
                    </Link>

                </div>
                <div className='flex flex-row gap-[8px] mt-[20px] 2xl:order-[2]'>
                    <Link href='/' className=''>
                        <button
                            onClick={(e) => {
                                e.stopPropagation() // Prevents interfering with the link navigation
                                handleButton('instagram')
                            }}
                            className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'
                        >
                            <FaInstagram className='w-[20px] h-[20px]' />

                        </button>
                    </Link>
                    <Link href='/' >

                        <button
                            onClick={(e) => {
                                e.stopPropagation() // Prevents interfering with the link navigation
                                handleButton('telegram')
                            }}
                            className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'
                        >
                            <FaTelegramPlane className='w-[20px] h-[20px]' />


                        </button>
                    </Link>
                    <Link href='/' >

                        <button
                            onClick={(e) => {
                                e.stopPropagation() // Prevents interfering with the link navigation
                                handleButton('whatsapp')
                            }}
                            className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'
                        >
                            <FaWhatsapp className='w-[20px] h-[20px]' />



                        </button>
                    </Link>
                    <Link href='/' className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'>
                        <button
                            onClick={(e) => {
                                e.stopPropagation() // Prevents interfering with the link navigation
                                handleButton('phone')
                            }}
                            className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'
                        >
                            <FaPhone className='w-[20px] h-[20px]' />


                        </button>

                    </Link>
                </div>
                <div className='mt-[30px] flex flex-row flex-wrap 2xl:w-[50%] 2xl:flex-nowrap 2xl:mt-0'>
                    <div className='w-[48%] 2xl:w-[33%] flex flex-col'>
                        <Link href='/about' className='text-[18px]  2xl:text-[25px] font-medium font-jost text-titleDark'>О нас</Link>
                        <Link href='/about' className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Об ассоциации</Link>
                        <Link href='/contacts' className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Контакты</Link>
                        <Link href='/blog' className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Блог</Link>
                    </div>
                    <div className='w-[48%] flex flex-col'>
                        <p className='text-[18px]  2xl:text-[25px] font-medium font-jost text-titleDark'>Деятельность</p>
                        <Link href='/services' className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Услуги</Link>
                        <Link href='/project' className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Проекты</Link>
                        <Link href='/seminar' className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Семинары</Link>
                    </div>
                    <div className='w-[48%] mt-[30px] 2xl:mt-0 flex flex-col'>
                        <p className='text-[18px]  2xl:text-[25px] font-medium font-jost text-titleDark'>Контакты</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Физический адрес</p>
                        <Link href="tel:+998909999999">
                            <button
                                onClick={(e) => {
                                    e.stopPropagation() // Prevents interfering with the link navigation
                                    handleButton('phone')
                                }}
                                className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'
                            >
                                +998 90 999 99 99
                            </button>
                        </Link>
                        <Link href="mailto:adau.uzbekistan@gmail.com?subject=Subject%20Here&body=Message%20Here" className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>adau.uzbekistan@gmail.com</Link>
                    </div>

                </div>
            </div>
            <div className='flex flex-row justify-between items-center px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>

                <div>
                    <p className='text-[14px] 2xl:text-[18px] font-jost text-[#222E51]'>© 2024 ADAU.<br className='2xl:hidden' /> Все права защищены</p>
                </div>
                <div><Image src={ResultAgencyLogo} alt='Result Agency' width={163} height={63} quality={100} className='object-cover' /></div>
            </div>
        </div>
    )
}

export default Footer