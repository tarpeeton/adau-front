import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { GrFormPreviousLink } from "react-icons/gr"
import { CiClock2 } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"

// image
import ImageSeminar from '@/public/oldSeminar/seimnarOLD.jpg'


interface ISeminarBanner {
  status: boolean;
  onButtonClick: () => void; // Prop type for button click handler
}


const SeminarBanner: FC<ISeminarBanner> = ({status , onButtonClick}) => {


  return (
    <div className='2xl:px-[50px] px-[16px] 2xl:mt-[25px] 4xl:px-[240px]'>
      <div className='flex flex-row items-center mt-[15px] text-[16px] 2xl:text-[20px] text-[#222E51] font-medium font-jost'>
        <GrFormPreviousLink className='2xl:w-[30px] w-[25px]  h-[25px] 2xl:h-[30px]' />
        <Link href='cases'>
          Назад
        </Link>
      </div>
      <div className='mt-[25px] 2xl:mt-[35px]'>
        <div className='flex flex-col'>
          <div className='order-[1] 2xl:order-2 h-[230px] 2xl:h-[550px] 4xl:h-[600px] 2xl:mt-[40px]'>
            <Image src={ImageSeminar} alt='ImageSeminar' quality={100} width={1000} height={600} className='object-cover w-full h-full' />
          </div>
          <div className='order-[2] 2xl:order-[0] mt-[25px] 2xl:mt-[0]'>
            <p className='text-[26px] leading-[32px] uppercase  2xl:leading-[59px] 2xl:text-[45px] text-titleDark'>Архитектура будущего: инновации, устойчивость</p>
            <p className='text-[14px] 2xl:w-[80%] mt-[10px] left-[18px] 2xl:leading-[24px] 2xl:text-[20px] text-[#414141]'>Новые тенденции в архитектуре сосредоточены на использовании экологичных материалов, внедрении энергосберегающих технологий и создании пространств, способных адаптироваться к изменениям окружающей среды. Эти подходы формируют устойчивые и инновационные решения, которые определяют будущее городов и зданий</p>
            <div className='mt-[25px] 2xl:mt-[30px] w-full 2xl:w-[15%]'>
              {status ? (
                <button className='buttonBlue w-full'>Записаться</button>
              ) : (
                <button onClick={onButtonClick} className='buttonBlue w-full'>Посмотреть запись</button>
              )}
            </div>
          </div>
          <div className='order-[3] 2xl:order-1 border-t border-t-[#E4E4E4] mt-[25px] 2xl:mt-[30px] pt-[25px] 2xl:pt-[30px]'>
            <div className='flex flex-row items-center text-[15px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px]'>
              <CiClock2 className='mr-[10px] w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
              <div>
                <p>31.10.2024; <span> 17:00</span></p>
              </div>
            </div>
            <div className='flex ml-[-3px] 2xl:ml-auto flex-row items-center text-[15px] mt-[5px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px]'>
              <CiLocationOn className='mr-[10px] w-[25px] h-[25px] 2xl:w-[28px] 2xl:h-[28px]' />
              <div>
                <p>Ташкент, ул.Такая-то, дом такой-то</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SeminarBanner