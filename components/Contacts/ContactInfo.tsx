import Link from 'next/link'
import {FC} from 'react';


const ContactInfo: FC = () => {
  return (
    <div className='mt-[80px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
        <p className='text-[24px] 2xl:text-[45px] text-titleDark font-jost uppercase'>
        Наши контакты
        </p>
        <div className='flex flex-col 2xl:mt-[30px]'>
            <div className=' flex flex-col'>
                <div className='2xl:py-[30px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                    <p className='2xl:text-[30px] text-titleDark opacity-[40%]'>Телефон</p>
                    <div className='flex flex-col gap-[5px] 2xl:items-end'>
                        <p className='text-titleDark 2xl:text-[30px]'>+998 33 939 40 70</p>
                        <Link href='tel:+998339394070' className='text-[#222E51] underline  2xl:text-[20px]'>Позвонить</Link>
                    </div>
                </div>
                <div className='2xl:py-[30px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                    <p className='2xl:text-[30px] text-titleDark opacity-[40%]'>Электронная почта</p>
                    <div className='flex flex-col gap-[5px] 2xl:items-end'>
                        <p className='text-titleDark 2xl:text-[30px]'> info.adau.uz@gmail.com</p>
                        <Link href='mailto:info.adau.uz@gmail.com' className='text-[#222E51] underline 2xl:text-[20px]'>Отправить E-mail</Link>

                    </div>
                </div>
                <div className='2xl:py-[30px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                    <p className='2xl:text-[30px] text-titleDark opacity-[40%]'>Адрес офиса</p>
                    <div className='flex flex-col gap-[5px] 2xl:items-end'>
                        <p className='text-titleDark 2xl:text-[30px]'>123 Anywhere St., Any City, Узбекистан</p>
                        <Link href='tel:+998339394070' className='text-[#222E51] underline  2xl:text-[20px]'>Проложить маршрут</Link>
                    </div>
                </div>
                <div className='2xl:py-[30px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                    <p className='2xl:text-[30px] text-titleDark opacity-[40%]'>Часы работы</p>
                    <div className='flex flex-col gap-[5px] 2xl:items-end'>
                        <p className='text-titleDark 2xl:text-[30px]'>Пн-Пт, 9:00 - 18:00</p>
                       
                    </div>
                </div>
            </div>

        </div>
    </div>
  );
};

export default ContactInfo;