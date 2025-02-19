'use client';
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image from 'next/image';
import One from "@/public/service/one.jpg";
import Two from "@/public/service/two.jpg";
import Three from "@/public/service/threee.jpg";
import { Link } from '@/i18n/routing';
import { Autoplay } from 'swiper/modules'
import useLocale from '@/hooks/useLocale';



const Services: FC = () => {
    const locale = useLocale()

    return (
        <section className='mt-[80px] 2xl:mt-[200px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <div className='flex flex-col'>
                <p className='text-[26px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]'>
                    {locale === 'ru'
                        ? "Наши услуги"
                        : locale === 'uz'
                            ? "Bizning xizmatlarimiz"
                            : "Our Services"
                    }
                </p>

                <div>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={1}
                        speed={920}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        loop={false}
                        breakpoints={{
                            1000: {
                                slidesPerView: 3,
                                spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                            },
                        }}
                    >
                        <SwiperSlide className='cursor-pointer'>
                            <div>
                                <Image src={One} alt='service image' width={467} height={450} quality={100} className='object-cover h-[220px] 2xl:h-[400px] ' />
                                <div className='2xl:h-[210px] mt-[20px] 2xl:mt-[25px] 2xl:relative 2xl:pb-[80px]'>
                                    <p className='text-[22px] leading-[29px] font-jost text-titleDark 2xl:text-[30px] 2xl:leading-[40px]'>
                                        {locale === 'ru'
                                            ? "Организация семинаров и тренингов"
                                            : locale === 'uz'
                                                ? "Seminarlar va treninglarni tashkil qilish"
                                                : "Organization of Seminars and Trainings"
                                        }
                                    </p>
                                    {/* <p className='text-[15px] leading-[18px] mt-[5px] font-jost 2xl:text-[20px] 2xl:leading-[24px] text-title80'>
                                        Lorem ipsum dolor sit amet consectetur. Ut vitae sapien vitae
                                    </p>
                                    <div className='w-[60%] 2xl:absolute  bottom-0 mt-[20px] 2xl:mt-[25px]'>
                                        <Link href='/services' className='buttonBlue'>
                                            Узнать подробнее
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='cursor-pointer'>
                            <div>
                                <Image src={Two} alt='service image' width={467} height={450} quality={100} className='object-cover h-[220px] 2xl:h-[400px]' />
                                <div className='2xl:h-[210px] mt-[20px] 2xl:mt-[25px] 2xl:relative 2xl:pb-[80px]'>
                                    <p className='text-[22px] leading-[29px] font-jost text-titleDark 2xl:text-[30px] 2xl:leading-[40px]'>
                                        {locale === 'ru'
                                            ? "Консультации по дизайну"
                                            : locale === 'uz'
                                                ? "Dizayn bo'yicha maslahatlar"
                                                : "Design Consultations"
                                        }
                                    </p>
                                    {/* <p className='text-[15px] leading-[18px] mt-[5px] font-jost 2xl:text-[20px] 2xl:leading-[24px] text-title80'>
                                        Lorem ipsum dolor sit amet consectetur. Ut vitae sapien vitae
                                    </p>
                                    <div className='w-[60%] 2xl:absolute  bottom-0 mt-[20px] 2xl:mt-[25px]'>
                                        <Link href='/services' className='buttonBlue'>
                                            Узнать подробнее
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide className='cursor-pointer'>
                            <div >
                                <Image src={Three} alt='service image' width={467} height={450} quality={100} className='object-cover h-[220px] 2xl:h-[400px]' />
                                <div className='2xl:h-[210px] mt-[20px] 2xl:mt-[25px] 2xl:relative 2xl:pb-[80px]'>
                                    <p className='text-[22px] leading-[29px] font-jost text-titleDark 2xl:text-[30px] 2xl:leading-[40px]'>
                                        {locale === 'ru'
                                            ? "Разработка интерьеров"
                                            : locale === 'uz'
                                                ? "Interyerlarni ishlab chiqish"
                                                : "Interior Development"
                                        }
                                    </p>
                                    {/* <p className='text-[15px] leading-[18px] mt-[5px] font-jost 2xl:text-[20px] 2xl:leading-[24px] text-title80'>
                                        Lorem ipsum dolor sit amet consectetur. Ut vitae sapien vitae
                                    </p>
                                    <div className='w-[60%] 2xl:absolute  bottom-0 mt-[20px] 2xl:mt-[25px]'>
                                        <Link href='/services' className='buttonBlue'>
                                            Узнать подробнее
                                        </Link>
                                    </div> */}
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Services;
