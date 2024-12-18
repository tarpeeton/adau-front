'use client';
import { FC } from 'react';

import Image from 'next/image';
import One from "@/public/service/one.jpg";
import Two from "@/public/service/two.jpg";
import Three from "@/public/service/threee.jpg";

import useLocale from '@/hooks/useLocale';


const Service: FC = () => {
    const locale = useLocale()

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <div className='flex flex-col'>
                <p className='text-[26px] uppercase  leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]'>
                    {locale === 'ru'
                        ? `Основные   направления услуг`
                        : locale === 'uz'
                            ? `Asosiy  xizmat yo'nalishlari`
                            : `Main  Service Directions`
                    }
                </p>
                <div className='flex flex-col gap-[40px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[2%]'>
                    <div className='2xl:w-[32%]'>
                        <Image src={One} alt='service image' width={467} height={450} quality={100} className='object-cover h-[220px] 2xl:h-[400px] ' />
                        <div className=' mt-[20px] 2xl:mt-[25px] 2xl:relative '>
                            <p className='text-[22px] leading-[29px]  text-titleDark 2xl:text-[30px] 2xl:leading-[40px]'>
                                {locale === 'ru'
                                    ? "Организация семинаров и тренингов"
                                    : locale === 'uz'
                                        ? "Seminarlar va treninglarni tashkil qilish"
                                        : "Organization of Seminars and Trainings"
                                }
                            </p>
                            {/* <p className='text-[15px] leading-[18px] mt-[5px]  2xl:text-[20px] 2xl:leading-[24px] text-title80'>
                                        Lorem ipsum dolor sit amet consectetur. Ut vitae sapien vitae
                                    </p>
                                    <div className='w-[60%] 2xl:absolute  bottom-0 mt-[20px] 2xl:mt-[25px]'>
                                        <Link href='/project' className='buttonBlue'>
                                            Узнать подробнее
                                        </Link>
                                    </div> */}
                        </div>
                    </div>

                    <div className='2xl:w-[32%]'>
                        <Image src={Two} alt='service image' width={467} height={450} quality={100} className='object-cover h-[220px] 2xl:h-[400px]' />
                        <div className=' mt-[20px] 2xl:mt-[25px] 2xl:relative '>
                            <p className='text-[22px] leading-[29px]  text-titleDark 2xl:text-[30px] 2xl:leading-[40px]'>
                                {locale === 'ru'
                                    ? "Консультации по дизайну"
                                    : locale === 'uz'
                                        ? "Dizayn bo'yicha maslahatlar"
                                        : "Design Consultations"
                                }
                            </p>
                            {/* <p className='text-[15px] leading-[18px] mt-[5px]  2xl:text-[20px] 2xl:leading-[24px] text-title80'>
                                        Lorem ipsum dolor sit amet consectetur. Ut vitae sapien vitae
                                    </p>
                                    <div className='w-[60%] 2xl:absolute  bottom-0 mt-[20px] 2xl:mt-[25px]'>
                                        <Link href='/project' className='buttonBlue'>
                                            Узнать подробнее
                                        </Link>
                                    </div> */}
                        </div>
                    </div>

                    <div className='2xl:w-[32%]'>
                        <Image src={Three} alt='service image' width={467} height={450} quality={100} className='object-cover h-[220px] 2xl:h-[400px]' />
                        <div className=' mt-[20px] 2xl:mt-[25px] 2xl:relative '>
                            <p className='text-[22px] leading-[29px]  text-titleDark 2xl:text-[30px] 2xl:leading-[40px]'>
                                {locale === 'ru'
                                    ? "Разработка интерьеров"
                                    : locale === 'uz'
                                        ? "Interyerlarni ishlab chiqish"
                                        : "Interior Development"
                                }
                            </p>
                            {/* <p className='text-[15px] leading-[18px] mt-[5px]  2xl:text-[20px] 2xl:leading-[24px] text-title80'>
                                        Lorem ipsum dolor sit amet consectetur. Ut vitae sapien vitae
                                    </p>
                                    <div className='w-[60%] 2xl:absolute  bottom-0 mt-[20px] 2xl:mt-[25px]'>
                                        <Link href='/project' className='buttonBlue'>
                                            Узнать подробнее
                                        </Link>
                                    </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;
