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


const Footer: FC = () => {
    return (
        <div>
            <div className='flex flex-col 2xl:flex-row 2xl:flex-nowrap py-[40px] px-[16px] 2xl:px-[50px] 4xl:px-[240px] border-b border-b-[#E3E7EF] 2xl:justify-between '>
                <div>
                    <Image src={FooterLogo} width={163} height={63} quality={100} alt='footer logo' className='object-cover' />
                </div>
                <div className='flex flex-row gap-[8px] mt-[20px] 2xl:order-[2]'>
                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'><FaInstagram className='w-[20px] h-[20px]' /></div>
                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'><FaTelegramPlane className='w-[20px] h-[20px]' /></div>
                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'><FaWhatsapp className='w-[20px] h-[20px]' /></div>
                    <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full border border-[#222E51] text-[#222E51]'><FaPhone className='w-[20px] h-[20px]' /></div>
                </div>
                <div className='mt-[30px] flex flex-row flex-wrap 2xl:w-[50%] 2xl:flex-nowrap 2xl:mt-0'>
                    <div className='w-[48%] 2xl:w-[33%]'>
                        <p className='text-[18px]  2xl:text-[25px] font-medium font-jost text-titleDark'>О нас</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Об ассоциации</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Контакты</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Блог</p>
                    </div>
                    <div className='w-[48%]'>
                        <p className='text-[18px]  2xl:text-[25px] font-medium font-jost text-titleDark'>Деятельность</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Услуги</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Проекты</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Семинары</p>
                    </div>
                    <div className='w-[48%] mt-[30px] 2xl:mt-0'>
                        <p className='text-[18px]  2xl:text-[25px] font-medium font-jost text-titleDark'>Контакты</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>Физический адрес</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>+998 90 999 99 99</p>
                        <p className='text-[15px] mt-[10px] 2xl:text-[20px] font-normal text-titleDark font-jost'>name@domain.uz</p>
                    </div>

                </div>
            </div>
            <div className='flex flex-row justify-between items-center px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>

                <div>
                    <p className='text-[14px] 2xl:text-[18px] font-jost text-[#222E51]'>© 2024 ADAU.<br className='2xl:hidden'/> Все права защищены</p>
                </div>
                <div><Image src={ResultAgencyLogo} alt='Result Agency' width={163} height={63} quality={100} className='object-cover' /></div>
            </div>
        </div>
    )
}

export default Footer