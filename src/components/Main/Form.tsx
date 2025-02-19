"use client"
import React, { FC, useState } from 'react';
import Image from 'next/image';
import ContactUs from '../Modal/contacts-modal';

// images
import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'
import useLocale from '@/hooks/useLocale';

interface IFormPropsText {
  title: {
    ru: string
    uz: string
    en: string
  },
  text: {
    ru: string
    uz: string
    en: string
  }
}


const Form: FC<IFormPropsText> = ({ title, text }) => {
  const [invite, setInvite] = useState(false)
  const handleOpenAdd = () => setInvite(!invite)
  const locale = useLocale()

  return (
    <section className='mt-[80px] 2xl:mt-[200px]'>
      <div className=' bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:px-[50px]  4xl:px-[240px] flex flex-col 2xl:flex-row'>
        {/* TEXT AND BUTTON */}
        <div className='2xl:w-[65%]'>
          <p className='text-[26px] 2xl:w-[95%] 2xl:text-[50px] 2xl:leading-[62px]  uppercase text-titleWhite font-jost leading-[32px]'>
            {title[locale]}
          </p>


          <p className='mt-[10px] 2xl:mt-[20px] 2xl:w-[50%] text-[15px] leading-[18px] text-[#A0A0A0]'>{text[locale]}</p>
          <div className='flex flex-row flex-nowrap justify-between mt-[25px] 2xl:w-[55%] 2xl:mt-[50px]'>
            <button onClick={handleOpenAdd} className='buttonWhite font-bold w-[55%]'>
              {locale === 'ru'
                ? "Вступить в ассоциацию"
                : locale === 'uz'
                  ? "Assotsiatsiyaga qo'shilish"
                  : "Join the Association"
              }

            </button>
            <button onClick={handleOpenAdd} className='borderedButtonWhite w-[43%] flex items-center justify-center'>
              {locale === 'ru'
                ? "Стать партнером"
                : locale === 'uz'
                  ? "Hamkor bo'lish"
                  : "Become a Partner"
              }
            </button>
            <ContactUs visible={invite} close={handleOpenAdd} />

          </div>
        </div>
        <div className='mt-[30px] flex items-center gap-[8px] justify-center 2xl:w-[40%] 2xl:items-end 2xl:mt-[220px] 2xl:ml-[-80px]'>
          <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
          <Image src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
          <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />
          <Image src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />

        </div>
      </div>
    </section>
  );
};

export default Form;