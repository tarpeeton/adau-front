'use client'
import { FC, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Link } from '@/i18n/routing'
import useLocale from '@/hooks/useLocale'
import { client } from "@/sanity/lib/client"

interface LocalizedContent {
    uz: string;
    ru: string;
    en: string;
}

interface AdditionalService {
    title: LocalizedContent;
    description: LocalizedContent;
}

const MoreService: FC = () => {
    const locale = useLocale()
    const [data, setData] = useState<AdditionalService[] | []>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `
              *[_type == "additionalService"] {
                title,
                description
              }
            `;
                const featuredBlogs: AdditionalService[] = await client.fetch(query);
                setData(featuredBlogs);
            } catch (error) {
                console.debug(error, 'Error fetching data');
            }
        };

        fetchData();
    }, [locale]);


    return (
        <div className='mt-[80px] 2xl:mt-[200px] 2xl:px-[50px] px-[16px] 4xl:px-[240px]'>
            <p className='text-[26px] uppercase  leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]'>
                {locale === 'ru'
                    ? "Дополнительные услуги"
                    : locale === 'uz'
                        ? "Qo'shimcha xizmatlar"
                        : "Additional Services"
                }

            </p>

            {/* MOBILE */}
            <div className='mt-[20px] 2xl:hidden'>
                <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    speed={850}
                    autoplay={{ delay: 2000, disableOnInteraction: false }}
                    loop={false}
                    className='w-full h-full'
                >



                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="py-[24px] px-[20px] border border-[#E4E4E4]">
                                <p className="text-[22px] w-[50%] leading-[29px] text-titleDark uppercase ">
                                    {item.title[locale]}
                                </p>
                                <p className="text-[15px] leading-[18px] text-title80 mt-[10px]">
                                    {item.description[locale]}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}


                </Swiper>
            </div>

            {/* DESKTOP */}
            <div className='mt-[40px] hidden 2xl:block'>
                {data.map((item, index) => (
                    <div key={index} className='border-t border-t-[#E4E4E4] py-[40px] flex flex-row flex-nowrap justify-between items-center'>
                        <div className='w-[25%]'>
                            <p className='w-[80%] uppercase text-[30px] leading-[40px] '>
                                {item.title[locale]}
                            </p>
                        </div>
                        <div className='w-[33%]'>
                            <p className=' text-[20px] leading-[24px] text-title80 '>
                                {item.description[locale]}</p>
                        </div>
                        <div className='w-[25%] flex flex-row justify-end'>
                            {/* <Link href='/project' className='buttonBlue w-[60%] mt-[45px]'>
             Посмотреть проекты
         </Link> */}
                        </div>
                    </div>
                ))}


            </div>

        </div>
    )
}

export default MoreService