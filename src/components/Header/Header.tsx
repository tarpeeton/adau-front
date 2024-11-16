"use client"
import { FC, useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Logo from '@/public/logo.svg'
import { RxHamburgerMenu } from "react-icons/rx"

import handleshake from '@/public/handeshake.png'
import { FiPlus } from "react-icons/fi"
import { IoIosArrowDown } from "react-icons/io"
import ContactUs from '../Modal/contacts-modal'
import QuestionModal from '../Modal/question-modal'
import { IoMdClose } from "react-icons/io"
import { Link } from '@/i18n/routing'



const Header = ({ locale }: { locale: string }) => {
  const menuRef = useRef<HTMLDivElement | null>(null) // Create a ref for the menu
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openMenu, setIsOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const [question, setQuestion] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)
  let dropdownTimer: NodeJS.Timeout

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer) // Stop any pending close actions
    setOpenDropdown(true)
  }

  const handleMouseLeave = () => {
    dropdownTimer = setTimeout(() => {
      setOpenDropdown(false)
    }, 200) // Delay closing to avoid flickering
  }

  const handleClickMenu = () => setIsOpen(!openMenu)
  const handleContacsSwitcher = () => setVisible(!visible)
  const handleQuestionSwitcher = () => setQuestion(!question)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [menuRef])

  return (
    <div className='px-[16px] relative py-[12px] 2xl:px-[50px] 4xl:px-[240px] flex justify-between border border-b-[#E4E4E4]'>
      {/* LOGO */}
      <Link href='/'>
        <Image src={Logo} width={132} height={63} quality={100} alt='Logo' className='' />
      </Link>
      {/* LINKS */}
      <div className='hidden 2xl:flex  items-center gap-[55px] ml-[100px]'>



        <div
          className='relative'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={dropdownRef}
        >
          <Link href='/about' className='text-[20px] leading-[28.9px] text-titleDark flex items-center gap-[5px] hover:text-[#222E51] transition ease-in-out duration-300'>
            О нас 
            
            <IoIosArrowDown
              size={20}
              className={`text-[#222E51] mt-[3px] transition-transform duration-300 ${openDropdown ? 'rotate-180' : ''}`}
            />
          </Link>
          {openDropdown && (
            <div className='absolute top-full left-[-15px] mt-2 bg-white shadow-lg rounded-lg z-10 w-[200px]'>
              <ul>
                <li>
                  <Link href='/blog' className="block px-4 py-2 text-titleDark  hover:text-[#222E51] text-[17px] hover:bg-gray-100">Блог</Link>
                </li>
                <li>
                  <Link href='/contacts' className="block px-4 py-2 text-titleDark hover:text-[#222E51] text-[17px] hover:bg-gray-100">Контакты</Link>
                </li>
              </ul>
            </div>
          )}
        </div>







        <Link href='/services' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300'>
          Услуги
        </Link>
        <Link href='/project' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300'>
          Проекты
        </Link>
        <Link href='/seminar' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300'>
          Семинары и тренинги
        </Link>

      </div>


      <ContactUs visible={visible} close={handleContacsSwitcher} />
      <QuestionModal visible={question} close={handleQuestionSwitcher} />


      {openMenu && (
        <div className='fixed top-0 right-0 w-[300px] z-[999]'>
          {/* Overlay */}
          <div className='fixed inset-0 bg-black opacity-50 z-[999998]' onClick={handleClickMenu} />

          <div ref={menuRef} className='bg-white absolute top-0 h-screen right-0 w-[80%] slg:w-[50%] 2xl:w-[40%] z-[99999999] '>
            <div className='px-[20px] h-[87px] flex items-center justify-end border-b border-[#E8E8E8]  '>
              <div className='flex flex-row justify-end items-center h-[65px]'>
                <button onClick={handleClickMenu}>
                  <IoMdClose size={30} className='text-black slg:w-[40px] slg:h-[40px]' />
                </button>
                <div className='hidden 2xl:block w-[1px]' />
              </div>
            </div>

            <div className='flex flex-col  mt-[20px] bg-white pb-[20px] '>
              <div className='flex flex-col relative '>
                <Link onClick={handleClickMenu} href='/about' className='text-[20px] leading-[28.9px] text-titleDark flex items-center gap-[5px] hover:text-[#222E51] transition ease-in-out duration-300 p-[20px]'>
                  О нас <IoIosArrowDown size={20} className='text-[#222E51] mt-[3px]' />
                </Link>
                <Link onClick={handleClickMenu} href='/services' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300 p-[20px]'>
                  Услуги
                </Link>
                <Link onClick={handleClickMenu} href='/project' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300 p-[20px]'>
                  Проекты
                </Link>
                <Link onClick={handleClickMenu} href='/seminar' className='text-[20px] leading-[28.9px] text-titleDark hover:text-[#222E51] transition ease-in-out duration-300 p-[20px]'>
                  Семинары и тренинги
                </Link>
              </div>


              <div className='flex flex-col gap-[10px] px-[20px] absolute bottom-[20px]'>
                <div onClick={handleContacsSwitcher} className='borderedButton cursor-pointer text-center flex items-center justify-center'>
                  Стать партнером
                  <Image src={handleshake} width={21} height={15} quality={100} alt='Handle SHake' className=' object-contain w-[21px] h-[15px] mt-[3px]' />
                </div>
                <button onClick={handleQuestionSwitcher} className='buttonBlue'>
                  Вступить в ассоциацию
                  <FiPlus size={19} className='mt-[3px]' />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}


      {/* Hamberger */}
      <button onClick={handleClickMenu} className='flex items-center text-blue100 mdl:hidden'>
        <RxHamburgerMenu size={35} />
      </button>
      <div className='hidden mdl:flex buttons  items-center gap-[15px] ml-[100px] '>
        <div onClick={handleContacsSwitcher} className='borderedButton cursor-pointer'>
          Стать партнером
          <Image src={handleshake} width={21} height={15} quality={100} alt='Handle SHake' className=' object-contain w-[21px] h-[15px] mt-[3px]' />
        </div>
        <button onClick={handleQuestionSwitcher} className='buttonBlue'>
          Вступить в ассоциацию
          <FiPlus size={19} className='mt-[3px]' />
        </button>
      </div>
    </div>
  )
}

export default Header