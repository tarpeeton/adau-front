"use client"
import Image from 'next/image'
import { FC } from 'react'
import AbourUsImage from '@/public/about.jpg'
import { Link } from '@/i18n/routing'
import useLocale from '@/hooks/useLocale'


const About: FC = () => {
    const locale = useLocale()


    return (
        <div className='mt-[60px] 2xl:mt-[100px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <div className='flex flex-col '>
                <div className='2xl:flex 2xl:justify-end'>
                    <h1 className='text-[26px] font-normal  2xl:text-[50px] 2xl:leading-[62px]  font-jost leading-[32px]'>
                        {locale === 'ru' ? (
                            <> 
                                <span className='text-[#222E51] font-medium'>ADAU</span>
                                – Ассоциация Дизайнеров <span className='2xl:hidden'>
                                    и Архитекторов  Узбекистана
                                </span>
                            </>
                        ) : locale === 'uz' ? (
                            <> 
                                <span className='text-[#222E51] font-medium'>ADAU</span>
                                – O'zbekiston Dizaynerlari <span className='2xl:hidden'>
                                    va Arxitektorlari Assotsiatsiyasi
                                </span>
                            </>
                        ) : (
                            <> 
                                <span className='text-[#222E51] font-medium'>ADAU</span>
                                – Association of Designers <span className='2xl:hidden'>
                                    and Architects of Uzbekistan
                                </span>
                            </>
                        )}
                    </h1>
                </div>
                <p className=' hidden 2xl:block  2xl:text-[50px] 2xl:leading-[62px]'>
                    {locale === 'ru'
                        ? "и Архитекторов Узбекистана"
                        : locale === 'uz'
                            ? "va Arxitektorlari Assotsiatsiyasi"
                            : "and Architects of Uzbekistan"
                    }
                </p>
                <div className='flex flex-col 2xl:flex-row mt-[20px] 2xl:mt-[40px] 2xl:justify-between'>
                    <Image src={AbourUsImage} alt='AbourUsImage' width={850} height={500} quality={100} className='h-[250px] object-cover 2xl:w-[48%] 2xl:h-[500px] 4xl:w-[60%] 4xl:h-[580px]' />
                    <div className='flex flex-col 2xl:order-[-1] 2xl:w-[45%] 2xl:justify-between 4xl:w-[30%]'>
                        <p className='  mt-[20px] 2xl:mt-0 text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            {locale === 'ru'
                                ? "Где начинающий дизайнер ищет знания? Очевидно — в дизайн-школе."
                                : locale === 'uz'
                                    ? "Yangi boshlovchi dizayner bilimni qayerdan izlaydi? Aniqki — dizayn maktabidan.  "
                                    : "Where does a beginner designer seek knowledge? Obviously — in a design school.  "
                            }
                        </p>
                        <p className=' mt-[20px] 2xl:mt-[40px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            {locale === 'ru'
                                ? "Но куда обратиться опытному дизайнеру или владельцу студии в поисках новых возможностей, поддержки и роста?"
                                : locale === 'uz'
                                    ? "Lekin yangi imkoniyatlar, qo‘llab-quvvatlash va o‘sish uchun tajribali dizayner yoki studiya egasi qayerga murojaat qilishi mumkin?  "
                                    : "But where can an experienced designer or a studio owner turn to find new opportunities, support, and growth?  "
                            }
                        </p>
                        <p className=' mt-[20px] 2xl:mt-[40px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            {locale === 'ru'
                                ? "Ответ — Ассоциация дизайнеров и архитекторов Узбекистана."
                                : locale === 'uz'
                                    ? "Javob — O‘zbekiston Dizaynerlar va Arxitektorlar Assotsiatsiyasi.  "
                                    : "The answer is — The Association of Designers and Architects of Uzbekistan.  "
                            }
                        </p>
                        <p className=' mt-[20px] 2xl:mt-[40px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            {locale === 'ru'
                                ? "Мы объединяем самых активных и амбициозных профессионалов индустрии, чтобы вместе решать самые сложные задачи, обмениваться опытом и прокладывать путь к новым достижениям. Присоединившись к нашему сообществу, вы станете частью круга экспертов, которые формируют будущее дизайна и архитектуры."
                                : locale === 'uz'
                                    ? "Biz sohaning eng faol va intiluvchan mutaxassislarini birlashtiramiz, shunda birgalikda eng murakkab vazifalarni hal qilish, tajriba almashish va yangi yutuqlarga yo‘l ochish imkoniyatiga ega bo‘lamiz. Bizning hamjamiyatimizga qo‘shilishingiz orqali, siz dizayn va arxitektura kelajagini shakllantirayotgan ekspertlar doirasining bir qismiga aylanasiz.  "
                                    : "We unite the most active and ambitious professionals in the industry to solve the most complex challenges together, exchange experience, and pave the way for new achievements. By joining our community, you become part of a circle of experts shaping the future of design and architecture. "
                            }
                        </p>

                        <div className='w-[60%] 2xl:w-[40%] mt-[25px] 2xl:mt-[30px] 4xl:w-[50%]'>
                            <Link href='/about' className='buttonBlue text-center'>
                                {locale === 'ru'
                                    ? "Подробнее о нас"
                                    : locale === 'uz'
                                        ? "Biz haqimizda batafsil"
                                        : "Learn More About Us"
                                }
                            </Link>
                        </div>

                    </div>


                </div>
            </div>
        </div>
    )
}

export default About