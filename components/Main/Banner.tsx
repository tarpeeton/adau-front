"use client"
import { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image'
import BannerImage from '@/public/ccc.jpg'
import { GrLinkNext } from "react-icons/gr";
import { GrLinkPrevious } from "react-icons/gr";




const Banner: FC = () => {
  return (
    <div className="banner-container px-[20px] 2xl:px-[50px] mt-[15px] 2xl:mt-[60px] relative">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
      >
        <SwiperSlide>
            <div className='flex flex-col'>
                    <div className='mb-[12px]'>
                        <p className='text-titleDark font-jost text-[26px] leading-[32px]'>Элитное объединение самых развивающихся и талантливых представителей индустрии</p>
                    </div>
                    <div className='flex flex-col mb-[25px] 2xl:mb-[40px]'>
                        <p className='mb-[20px] text-[15px] leading-[18px] font-jost'>Мы взяли на себя ответственность по объединению самых активных участников индустрии дизайна интерьера и архитектуры</p>
                        <div className='flex flex-row gap-[10px]'>
                            <button className='buttonBlue'>
                            Вступить в ассоциацию
                            </button>
                            <button className='borderedButton'>
                            Стать партнером
                            </button>
                        </div>
                    </div>
                    <div>
                        <Image  src={BannerImage} alt='' width={1440} height={444} quality={100} className=' 2xl:h-[444px] h-[370px] rounded-[10px]'/>
                    </div>
            </div>
        </SwiperSlide>
      </Swiper>

      <div className='absolute bottom-[20px] right-[30px] z-[99] flex items-center gap-[15px]'>
            <button className='flex items-center justify-center rounded-full w-[70px] h-[70px] border border-[#FFFFFF] backdrop-blur-[15px] bg-inherit'>
                <GrLinkPrevious className='w-[30px] h-[30px] text-titleWhite' />
            </button>
            <button className='flex items-center justify-center rounded-full w-[70px] h-[70px] border border-[#FFFFFF] backdrop-blur-[15px] bg-inherit'>
                <GrLinkNext  className='w-[30px] h-[30px] text-titleWhite'/>
            </button>
      </div>
    </div>
  );
};

export default Banner;
