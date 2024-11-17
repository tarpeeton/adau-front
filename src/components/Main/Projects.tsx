"use client"
import { FC, useState, useEffect } from 'react'
import { Link } from '@/i18n/routing'
import Image from 'next/image'

import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'


import { ICaseCategory, ICase } from '@/interface/ICase/case'
import useLocale from '@/hooks/useLocale'


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import useSwiperNavigation from '@/hooks/useSwiperNavigation'











interface FilterState {
    name: string
    id: string
}


const Projects: FC = () => {
    const [activeFilter, setActiveFilter] = useState<FilterState>({ name: 'Все проекты', id: 'all-project' })
    const [caseData, setCaseData] = useState<ICase[]>([])
    const [caseCategory, setCaseCategory] = useState<ICaseCategory[]>([])
    const locale = useLocale()
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()

    useEffect(() => {
        const fetchData = async () => {
            try {
                const CaseDataAll: ICase[] = await client.fetch(`*[_type == "case"]`)
                setCaseData(CaseDataAll)
            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [])

    useEffect(() => {
        const fetchCaseCategory = async () => {
            try {
                const CaseCategoryData: ICaseCategory[] = await client.fetch(`*[_type == "caseCategory"]`)
                setCaseCategory(CaseCategoryData)
            } catch (error) {
                console.debug(error)
            }
        }
        fetchCaseCategory()
    }, [])

    const handleButtonClick = (category: ICaseCategory) => {
        setActiveFilter({ name: category.name[locale] || 'Все проекты', id: category._id })
    }

    const filteredCaseData = activeFilter.id === 'all-project'
        ? caseData
        : caseData.filter(item => item.caseCategory?._ref === activeFilter.id)



    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>

            <div>
                <p className='text-[26px] font-jost leading-[32px] 2xl:text-[50px] 2xl:leading-[59px] '>
                    Наши проекты
                </p>
            </div>

            <div className=' 2xl:inline-block mt-[25px] 2xl:mt-[40px]'>

                <div className='flex 2xl:hidden'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={0}
                        slidesPerView={3}
                        speed={920}
                        autoplay={{ delay: 1500, disableOnInteraction: false }}
                        modules={[Autoplay]}
                        loop={false}
                    >
                        <div className='inline-block border-b-[10px]'>
                            
                            <SwiperSlide>

                                <button
                                    onClick={() => setActiveFilter({ name: 'Все проекты', id: 'all-project' })}
                                    className={`pb-[12px]  ${activeFilter.id === 'all-project' ? 'text-[#222E51] border-b-[2px] border-b-[#222E51] ' : 'text-[#000000]'}`}
                                >
                                    <p className='text-[14px] font-medium leading-[23.12px]'>Все проекты</p>
                                </button>

                            </SwiperSlide>
                            {caseCategory.map((item) => (
                                <SwiperSlide key={item._id}>
                                    <button
                                        key={item._id}
                                        onClick={() => handleButtonClick(item)}
                                        className={`pb-[12px] font-medium   ${activeFilter.id === item._id ? 'text-[#222E51] border-b-[2px]  border-b-[#222E51] ' : 'text-[#000000]'}`}
                                    >
                                        <p className='text-[14px] leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]'>{item.name[locale]}</p>
                                    </button>
                                </SwiperSlide>

                            ))}

                        </div>
                    </Swiper>
                </div>


                <div className='hidden 2xl:flex flex-row 2xl:gap-[40px]  border-b border-b-[#E4E4E4]'>
                    <button
                        onClick={() => setActiveFilter({ name: 'Все проекты', id: 'all-project' })}
                        className={`pb-[12px]  ${activeFilter.id === 'all-project' ? 'text-[#222E51] border-b-[2px] border-b-[#222E51] ' : 'text-[#000000]'}`}
                    >
                        <p className='text-[16px] font-medium leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]'>Все проекты</p>
                    </button>
                    {caseCategory.map((item) => (
                        <button
                            key={item._id}
                            onClick={() => handleButtonClick(item)}
                            className={`pb-[12px] font-medium px-[10px]  ${activeFilter.id === item._id ? 'text-[#222E51] border-b-[2px] border-b-[#222E51] ' : 'text-[#000000]'}`}
                        >
                            <p className='text-[16px] leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]'>{item.name[locale]}</p>
                        </button>
                    ))}


                </div>
            </div>





            <div className='mt-[20px] 2xl:mt-[30px] flex flex-col gap-[12px] 2xl:flex-row 2xl:flex-wrap'>
                {filteredCaseData.map((item, index) => (
                    <Image key={index} src={urlFor(item.slider[0].asset._ref).url()} alt='' width={467} height={350} quality={100} className='object-cover 2xl:w-[32%] 2xl:h-[350px]' />
                ))}
            </div>

            <div className='w-[50%] 2xl:w-[18%] mx-auto flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
                <Link href='/project' className='buttonBlue w-full'>
                    Смотреть все
                </Link>
            </div>
        </div>
    )
}

export default Projects