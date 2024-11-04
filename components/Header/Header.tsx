"use client"
import { FC, useState } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx"
import Link from 'next/link'
import handleshake from '@/public/handeshake.png'
import { FiPlus } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"



const Header: FC = () => {
    const [openMenu, setIsOpen] = useState(false)

    const handleClickMenu = () => setIsOpen(!openMenu)





    return (
        <div className='px-[16px] py-[12px] 2xl:px-[50px] 4xl:px-[240px] flex justify-between border border-b-[#E4E4E4]'>
            {/* LOGO */}
            <div>
                <Image src={Logo} width={132} height={63} quality={100} alt='Logo' className='' />
            </div>
            {/* LINKS */}
            <div className='hidden 2xl:flex  items-center gap-[55px] ml-[100px]'>
                <Link href='/about' className='text-[20px] leading-[28.9px] text-titleDark flex items-center gap-[5px] hover:text-[#222E51] transition ease-in-out duration-300'>
                    О нас <IoIosArrowDown size={20} className='text-[#222E51] mt-[3px]' />
                </Link>
                <Link href='/about' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300'>
                    Услуги
                </Link>
                <Link href='/about' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300'>
                    Проекты
                </Link>
                <Link href='/about' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300'>
                    Семинары и тренинги
                </Link>

            </div>

            {/* Hamberger */}
            <button onClick={handleClickMenu} className='flex items-center text-blue100 mdl:hidden'>
                <RxHamburgerMenu size={35} />
            </button>
            <div className='hidden mdl:flex buttons  items-center gap-[15px] ml-[100px] '>
                <Link href='nn' className='borderedButton'>
                    Стать партнером
                    <Image src={handleshake} width={21} height={15} quality={100} alt='Handle SHake' className=' object-contain w-[21px] h-[15px] mt-[3px]' />
                </Link>
                <Link href='ggg' className='buttonBlue'>
                    Вступить в ассоциацию
                    <FiPlus size={19} className='mt-[3px]' />
                </Link>
            </div>
        </div>
    )
}

export default Header