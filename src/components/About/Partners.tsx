"use client"

import { FC   , useState , useEffect} from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
// ADMIN
import { client } from "@/sanity/lib/client"
import { urlFor } from '@/sanity/lib/image'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"


import useSwiperNavigation from '@/hooks/useSwiperNavigation'

import { IPartnersData } from '@/interface/partner'
import ContactUs from '../Modal/contacts-modal'


const chunkArray = <T,>(array: T[], size: number): T[][] => {
    const result: T[][] = []
    for (let i = 0; i < array.length; i += size) {
        result.push(array.slice(i, i + size))
    }
    return result
}

interface IPartners {
    active: boolean
}

const Partners: FC<IPartners> = ({active}) => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()
    const [open, setOpen] = useState(false)
    const handleChangeStatus = () => setOpen(!open)
    const [partnerData , setPartnerData] = useState<IPartnersData[] | []>([])
    const slidesData = chunkArray(partnerData, 8)













    useEffect(() => {
        const fetchData = async () => {
          try {
            const partners =  await client.fetch(
              `*[_type == "partner"]{_id,
name,
image}`
            )
            setPartnerData(partners)
          } catch (error) {
            console.debug(error)
          }
        }
        fetchData()
      } , [])

    return (
        <div className="mt-[80px] 2xl:mt-[200px] py-[40px] 2xl:py-[100px] px-[20px] 4xl:px-[240px] 2xl:px-[50px] ">
            <p className="text-[26px] font-jost uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]">
                Наши партнеры
            </p>
            <div className='mt-[20px] 2xl:mt-[30px]'>
            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                spaceBetween={10}
                slidesPerView={1}
                speed={920}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop={false}
               
            >
                {slidesData.map((group, slideIndex) => (
                        <SwiperSlide key={slideIndex}>
                            <div className="flex flex-row flex-wrap">
                                {group.map((partner, index) => (
                                    <div key={index} className="w-[50%] 2xl:w-[25%] flex justify-center items-center border border-[#E4E4E4] h-[115px] 2xl:h-[230] 4xl:h-[250px]">
                                        <Image src={urlFor(partner.image.asset._ref).url()} alt={`Partner ${index}`} width={100} height={100} quality={100} />
                                    </div>
                                ))}
                            </div>
                        </SwiperSlide>
                    ))}

            </Swiper>
            </div>
            <div className='flex flex-row justify-between items-center 2xl:mt-[50px] '>
            <ContactUs visible={open} close={handleChangeStatus} />

            {active ? (
                <div className='hidden 2xl:block w-[20%] '>
                    <button onClick={handleChangeStatus} className='buttonBlue'>
                    Стать партнером
                </button>
                    </div>
                
            ) : (null)}
            <div className='flex flex-row gap-[10px] mt-[20px] 2xl:mt-0 w-full justify-end'>
                <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
                <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                    <GrLinkNext className='w-[30px] h-[30px] text-[#222E51]' />
                </button>
            </div>
                </div>
            
        </div>
    )
}

export default Partners