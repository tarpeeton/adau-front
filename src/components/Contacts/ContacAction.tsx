"use client"
import React, {FC} from 'react';
import Image from 'next/image';
import { sendButtonCount } from '@/lib/api';


// images
import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'
import Link from 'next/link'




const ContactAction: FC = () => {
  const handleButton = async (button: string) => {
    await sendButtonCount(button)
}
  return (
    <div className='mt-[80px] 2xl:mt-[200px]'>
        <div className=' bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:px-[50px]  4xl:px-[240px] flex flex-col 2xl:flex-row'>
            {/* TEXT AND BUTTON */}
            <div className='2xl:w-[60%]'>
                    <p className='text-[26px] 2xl:w-[90%] 2xl:text-[50px] 2xl:leading-[62px]  uppercase text-titleWhite font-jost leading-[32px]'>
                    Мы всегда на связи!
                    </p>


                    <p className='mt-[10px] 2xl:mt-[20px] 2xl:w-[50%] text-[15px] leading-[18px] text-white opacity-[80%]'>
                    Свяжитесь с нами для обсуждения вашего проекта или сотрудничества. Мы ответим на все ваши вопросы
                    </p>
                    <div className='flex flex-row flex-nowrap justify-between mt-[25px] 2xl:w-[45%] 2xl:mt-[50px]'>
                        <Link href='/telegram' className='buttonWhite w-[55%]'>Написать нам</Link>
                        <Link href='tel:+998339394070' className='w-[42%]'>
              <button
                onClick={(e) => {
                  e.stopPropagation() // Prevents interfering with the link navigation
                  handleButton('phone')
                }}
                className='borderedButtonWhite  w-full flex items-center justify-center'
              >
                Позвонить
              </button>
            </Link>
                    </div>
            </div>
            <div className='mt-[30px] flex items-center gap-[8px] justify-center 2xl:w-[40%] 2xl:items-end 2xl:mt-[220px] 2xl:ml-[-80px]'>
                <Image  src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]'/>
                <Image  src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]'/>
                <Image  src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]'/>
                <Image  src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]'/>

            </div> 
        </div>
    </div>
  );
};

export default ContactAction;