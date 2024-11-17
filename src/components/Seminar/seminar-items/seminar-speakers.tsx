"use client"

import { FC } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { urlFor } from '@/sanity/lib/image';



interface ISeminarSpeakersProps {
    locale: "ru" | "uz" | "en"
    speakers: Array<{
      name: {
        ru: string;
        uz: string;
        en: string;
      };
      position: {
        ru: string;
        uz: string;
        en: string;
      };
      image: {
        _type: 'image';
        asset: {
          _ref: string;
          _type: 'reference';
        };
      };
      description: {
        ru: string;
        uz: string;
        en: string;
      };
    }>;
  }


const SeminarSpeakers: FC<ISeminarSpeakersProps> = ({speakers , locale}) => {

  if (!speakers || speakers.length === 0) {
    return null;
  }


    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[26px] 2xl:text-[45px]  uppercase text-titleDark font-jost'>
            спикеры
            </p>
            <div className='mt-[30px]'>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={1}
                    speed={720}
                    autoplay={{ delay: 1500, disableOnInteraction: false }}
                    loop={false}
                    breakpoints={{
                        1000: {
                            slidesPerView: 4,
                            spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                        },
                    }}
                >
                    {speakers.map((item , index) => (
                        <SwiperSlide key={index} className='cursor-pointer'>
                            <div>
                                <Image src={urlFor(item.image.asset._ref).url()} alt={item.name[locale]} width={467} height={520} quality={100} className='object-cover h-[380px] 2xl:h-[450px] 4xl:h-[520px]' />
                                <div className='mt-[30px]'>

                                    <p className='text-[22px] 2xl:text-[30px] font-jost text-titleDark font-medium'>{item.name[locale]}</p>
                                    <p className='text-[15px] 2xl:text-[20px] font-jost leading-[18px] text-[#414141] mt-[8px] 2xl:mt-[10px]'>
                                        {item.description[locale]}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>

                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default SeminarSpeakers