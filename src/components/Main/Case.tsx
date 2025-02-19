'use client'
import { FC, useState, useRef, useEffect } from 'react'


import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Image from 'next/image'


import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"
import { Swiper as SwiperCore } from 'swiper/types' // импортируем тип SwiperCore

import { Link } from '@/i18n/routing'

import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'
import { ICase } from '@/interface/ICase/case'
import useLocale from '@/hooks/useLocale'






const Case: FC = () => {
  const [caseData, setCaseData] = useState<ICase[] | []>([])
  const locale = useLocale()
  const swiperRefs = useRef<Array<SwiperCore | null>>([])
  const [activeIndices, setActiveIndices] = useState<number[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CaseDataAll = await client.fetch(`*[_type == "case"]`)
        setCaseData(CaseDataAll)
        setActiveIndices(new Array(CaseDataAll.length).fill(0))
      } catch (error) {
        console.debug(error)
      }
    }
    fetchData()
  }, [])

  const handleSlideChange = (swiper: SwiperCore, index: number) => {
    const newActiveIndices = [...activeIndices]
    newActiveIndices[index] = swiper.realIndex
    setActiveIndices(newActiveIndices)
  }

  const handlePrev = (index: number) => swiperRefs.current[index]?.slidePrev()
  const handleNext = (index: number) => swiperRefs.current[index]?.slideNext()





  return (
    <section className='mt-[80px] 2xl:mt-[200px]  px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
      <p className="text-[26px] font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]  ">
        Кейсы
      </p>

      <div className='flex flex-col'>
        <div className='flex flex-col 2xl:flex-row 2xl:flex-wrap 2xl:gap-[20px]'>
          {caseData.map((item, index) => {

            return (<div key={index} className='mt-[30px] 2xl:mt-[30px] 2xl:w-[48%]'>
              <div className='relative '>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  onSwiper={(swiper) => (swiperRefs.current[index] = swiper)}
                  onSlideChange={(swiper) => handleSlideChange(swiper, index)}
                  modules={[Autoplay]}
                  speed={800}
                  autoplay={{ delay: 1500, disableOnInteraction: false }}
                  loop={false}
                >
                  {item?.slider?.map((image, index) => (

                    <SwiperSlide key={index}>
                      <Image src={urlFor(image.asset._ref).url()} alt='One' width={710} height={500} quality={100} className='h-[220px] 2xl:h-[450px] 4xl:h-[500px] object-cover w-full ' />
                    </SwiperSlide>

                  ))}
                </Swiper>
                <div className='absolute bottom-[20px] left-1/2 transform -translate-x-1/2 z-[99] flex items-center gap-[15px] justify-center'>
                  {item.slider.map((_, i) => (
                    <div
                      key={i}
                      className={`w-[25px] h-[3px] ${i === activeIndices[index] ? 'bg-white' : 'bg-white opacity-[50%]'}`}
                    ></div>
                  ))}
                </div>
                <div className='absolute w-[90%] bottom-[80px] 2xl:w-[95%] 2xl:bottom-[200px] justify-between left-1/2 transform -translate-x-1/2 z-[99] flex items-center gap-[15px]'>
                  <button onClick={() => handlePrev(index)} className='flex items-center justify-center rounded-full w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] border border-[#FFFFFF] bg-titleWhite'>
                    <GrLinkPrevious className='w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px] text-[#222E51]' />
                  </button>
                  <button onClick={() => handleNext(index)} className='flex items-center justify-center rounded-full w-[40px] h-[40px] 2xl:w-[60px] 2xl:h-[60px] border border-[#FFFFFF] bg-white'>
                    <GrLinkNext className='w-[15px] h-[15px] 2xl:w-[20px] 2xl:h-[20px] text-[#222E51]' />
                  </button>
                </div>

              </div>
              <div className='mt-[20px] 2xl:mt-[25px]'>

                <p className='text-[20px] leading-[28.9px] font-jost font-medium 2xl:text-[35px] 2xl:leading-[]'>
                  {item.title[locale]}</p>
                <p className='text-[15px] text-[#414141] font-jost leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] 2xl:w-[90%] 2xl:mt-[8px]'>
                  {item.description[locale].length > 73 ? item.description[locale].slice(0, 73) + '...' : item.description[locale]}
                  </p>

                <Link href={`/cases/${item.slug.current}`} className='mt-[10px] 2xl:mt-[20px] flex items-center gap-[5px] text-[16px] leading-6 font-medium font-jost text-[#222E51] 2xl:text-[20px] 2xl:leading-6'>
                  Подробнее
                  <GrLinkNext />
                </Link>
              </div>
            </div>)

          })}
        </div>
      </div>
      <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
        <Link href='/project' className='buttonBlue'>
          Узнать больше о нашем опыте
        </Link>
      </div>
    </section>
  )
}

export default Case