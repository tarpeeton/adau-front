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










                        {locale === 'ru'
                            ? <> <span className='text-[#222E51] font-medium'>ADAU</span>
                                – Ассоциация Дизайнеров и Архитекторов  Узбекистана</>
                            : locale === 'uz'
                                ? <> <span className='text-[#222E51] font-medium'>ADAU</span>
                                    – O‘zbekiston Dizaynerlari   va Arxitektorlari Assotsiatsiyasi</>
                                : <> <span className='text-[#222E51] font-medium'>ADAU</span>
                                    – Association of Designers and Architects of Uzbekistan</>
                        }











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
                                ? "Элитное объединение самых развивающихся и талантливых представителей индустрии"
                                : locale === 'uz'
                                    ? "Sanoatning eng rivojlanayotgan va iqtidorli vakillarining elita birlashmasi"
                                    : "An elite association of the most progressive and talented industry representatives"
                            }
                        </p>
                        <p className=' mt-[20px] 2xl:mt-[40px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            {locale === 'ru'
                                ? "Куда идти начинающему дизайнеру за знаниями? «В дизайн-школу», - ответ очевиден. А вот вопрос: «Куда идти опытному дизайнеру или владельцу студии?» – многих поставит в ступор"
                                : locale === 'uz'
                                    ? "Boshlovchi dizayner bilim olish uchun qayerga boradi? «Dizayn maktabiga», - bu aniq javob. Lekin, tajribali dizayner yoki studiya egasi qayerga borishi kerak? Bu savol ko'pchilikni hayratda qoldiradi."
                                    : "Where should a beginner designer go to gain knowledge? 'To design school,' is the obvious answer. But the question: 'Where should an experienced designer or studio owner go?' leaves many puzzled."
                            }
                        </p>
                        <p className=' mt-[20px] 2xl:mt-[40px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            {locale === 'ru'
                                ? "Именно поэтому мы взяли на себя ответственность по объединению самых активных участников индустрии дизайна интерьера и архитектуры, и создали экспертное объединение профессионалов, которые способны дать ответы на самые сложные вопросы"
                                : locale === 'uz'
                                    ? "Aynan shu sababdan biz interyer dizayni va arxitektura industriyasining eng faol ishtirokchilarini birlashtirish mas'uliyatini o‘z zimmamizga oldik va eng murakkab savollarga javob bera oladigan mutaxassislar jamiyatini yaratdik."
                                    : "That is why we took on the responsibility of bringing together the most active participants in the interior design and architecture industry and created an expert community of professionals capable of answering the most complex questions."
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