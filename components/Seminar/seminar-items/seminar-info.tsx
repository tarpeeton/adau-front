'use client'
import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { MdCheck } from 'react-icons/md'



const dataPrice = [
  {
    id: 1,
    status: 'Стандарт',
    options: [
      { id: 1, item: 'Доступ ко всем лекциям и сессиям семинара' },
      { id: 2, item: 'Пакет раздаточных материалов' },
      { id: 3, item: 'Сертификат об участии' }
    ],
    price: '50 000'
  },
  {
    id: 2,
    status: 'Премиум',
    options: [
      { id: 1, item: 'Все преимущества билета Стандарт' },
      { id: 2, item: 'Доступ к записям всех выступлений' },
      { id: 3, item: 'Эксклюзивные материалы и презентации от спикеров' },
      { id: 4, item: 'Приглашение на сессию вопросов и ответов с экспертами' }
    ],
    price: '100 000'
  },
  {
    id: 3,
    status: 'VIP',
    options: [
      { id: 1, item: 'Все преимущества билета Премиум' },
      { id: 2, item: 'Место в первых рядах для максимального комфорта' },
      { id: 3, item: 'Возможность личного общения и нетворкинг с ключевыми спикерами' },
      { id: 4, item: 'Участие в закрытых мастер-классах и воркшопах' },
      { id: 5, item: 'Памятный подарок от организаторов' }
    ],
    price: '250 000'
  }
]




const InfoPrice: FC = () => {




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
          {dataPrice.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='p-[20px] 2xl:px-[25px] border border-[#E4E4E4] min-h-[440px] flex flex-col justify-between'>
                <div>
                  <div className='pb-[20px] border-b border-b-[#E4E4E4]'>
                    <p className='text-[22px] 2xl:text-[]'>{item.status}</p>
                  </div>
                  <div className='mt-[20px] 2xl:mt-[] flex flex-col gap-[12px]'>
                    {item.options.map((option) => (
                      <div key={option.id} className='flex flex-row items-center gap-[8px]'>
                        <div className='w-[20px] h-[20px]'>
                        <MdCheck className='text-[#222E51] w-full h-full' />

                          </div>
                        <p className='w-[95%] text-[15px] leading-[18px]'>
                          {option.item}

                        </p>
                      </div>
                    ))}

                  </div>
                </div>
                <div>
                  <p className='text-[22px] 2xl:text-[] text-[#222E51]'>{item.price} сум</p>
                  <div className='mt-[10px] 2xl:mt-[] w-full'>
                      <button className='buttonBlue w-full'>
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