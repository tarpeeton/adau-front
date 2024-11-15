'use client'
import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MdCheck } from 'react-icons/md'
import useLocale from '@/hooks/useLocale'
import SeminarModal from '@/components/Modal/seminar-modal'

interface IInfoPriceProps {

  priceData: Array<{
    _key: string
    title: {
      ru: string
      uz: string
      en: string
    }
    price: number
    options: string[]
  }>
}




const InfoPrice: FC<IInfoPriceProps> = (priceData) => {
  const [open, setOpen] = useState(false)
  const locale = useLocale()
  const handleChangeStatus = () => setOpen(!open)

  return (
    <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
      <p className='text-[26px] 2xl:text-[45px] uppercase text-titleDark'>Стоимость участия</p>
      <div className="mt-[20px] 2xl:mt-[40px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          speed={720}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop={false}
          breakpoints={{
            1000: {
              slidesPerView: 3,
              spaceBetween: 20, // Adjust spacing between slides as needed for larger screens
            },
          }}
        >
          {priceData.priceData.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='p-[20px] 2xl:px-[25px] border border-[#E4E4E4] min-h-[440px] 2xl:min-h-[500px] flex flex-col justify-between cursor-pointer'>
                <div>
                  <div className='pb-[20px] border-b border-b-[#E4E4E4]'>
                    <p className='text-[22px] 2xl:text-[30px]'>{item.title[locale]}</p>
                  </div>
                  <div className='mt-[20px] 2xl:mt-[30px] flex flex-col gap-[12px] 2xl:gap-[20px]'>
                    {item.options.map((option, index) => (
                      <div key={index} className='flex flex-row  gap-[8px]  '>
                        <div className='w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px]'>
                          <MdCheck className='text-[#222E51] w-full h-full font-medium' />

                        </div>
                        <p className='w-[95%] text-[15px] leading-[18px] 2xl:text-[20px]'>
                          {option}
                        </p>
                      </div>
                    ))}

                  </div>
                </div>
                <SeminarModal visible={open} close={handleChangeStatus}/>
                <div>
                  <p className='text-[22px] 2xl:text-[30px] text-[#222E51]'>{item.price} сум</p>
                  <div className='mt-[10px] 2xl:mt-[20px] w-full'>
                    <button onClick={handleChangeStatus} className='buttonBlue w-full'>
                      Записаться
                    </button>
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

export default InfoPrice