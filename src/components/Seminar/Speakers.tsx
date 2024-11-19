"use client"

import { FC  , useState , useEffect } from 'react'
import { client } from "@/sanity/lib/client";

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { urlFor } from '@/sanity/lib/image';
import { ISpeakersData } from '@/interface/spiker';

import { GrFormNextLink } from "react-icons/gr"
import useLocale from '@/hooks/useLocale'
import { Autoplay } from 'swiper/modules'




const Speakers: FC = () => {
    const locale = useLocale()
    const [data , setData] = useState<ISpeakersData[] | []>([])



    useEffect(() => {
        const fetchData = async () => {
          try {
            const Data = await client.fetch(
              `*[_type == "speaker"]`
            );
            setData(Data)
          } catch (error) {
            console.debug(error);
          }
        };
        fetchData();
      }, []);
      
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[26px] 2xl:text-[45px]  uppercase text-titleDark font-jost'>
                Наши спикеры
            </p>
            <div className='mt-[30px]'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={800}
                    autoplay={{ delay:900, disableOnInteraction: false }}
                    modules={[Autoplay]}
                    loop={false}
                    breakpoints={{
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                        },
                    }}
                >
                    {data.map((item) => (
                        <SwiperSlide key={item._id} className='cursor-pointer'>
                            <div>
                                <Image src={urlFor(item.image.asset._ref).url()} alt={item.name[locale]} width={467} height={520} quality={100} className='object-cover h-[380px] 2xl:h-[450px] 4xl:h-[520px]' />
                                <div className='mt-[30px]'>

                                    <p className='text-[22px] 2xl:text-[30px] font-jost text-titleDark font-medium'>{item.name[locale]}</p>
                                    <p className='text-[15px] 2xl:text-[20px] font-jost leading-[18px] text-[#414141] mt-[8px] 2xl:mt-[10px]'>
                                        {item.description[locale]}
                                    </p>
                                    <div className='mt-[20px] text-[20px] font-medium text-[#222E51] flex flex-row items-center gap-[5px]'>
                                        Мероприятия спикера
                                        <GrFormNextLink  className='2xl:w-[20px] 2xl:h-[30px] mt-[4px]'/>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Speakers