'use client'
import { FC, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import ContactUs from '../Modal/contacts-modal'


import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import Image from 'next/image'



// Image
import ServiceBanner from '@/public/serviceBanner.jpg'
import useLocale from '@/hooks/useLocale'


// Lokalizatsiya matnlarini obyekt sifatida saqlash
const localizedText = {
    ru: `
      Профессиональная команда «ADAU» готова предложить Вам услуги в области организации семинаров для дальнейшего стратегического планирования, разработки и реализации рекламных кампаний в Республике Узбекистан с учетом всех особенностей гео-рынка.\n«ADAU» стремится к созданию открытого и доверительного диалога со своими Клиентами и Партнерами, результатом которого является успешная и действенная реализация поставленных целей на практике.\n

    Мы твердо убеждены в том, что успех в бизнесе основан в равной степени как на профессионализме, так и на нравственных принципах руководства и сотрудников. Каждый сотрудник Компании в полной мере оценивает свою личную ответственность за качество реализации каждого проекта.\n

    Мы не стремимся к краткосрочной прибыли, наша цель – долгосрочное успешное развитие Компании и Партнерства. Наши ресурсы – это Ваши возможности для продвижения в рамках нашей страны.\n
    `,
    uz: `
      «ADAU» jamoasi O‘zbekiston Respublikasi geosiyosiy bozori xususiyatlarini hisobga olgan holda, strategik rejalashtirish, reklama kampaniyalarini ishlab chiqish va amalga oshirish bo‘yicha seminarlarni tashkil etish xizmatlarini taklif etadi.\n
      Biz ochiq va ishonchli muloqotni rivojlantirishga intilamiz, bu muloqot natijasida qo‘yilgan maqsadlarni muvaffaqiyatli amalga oshirishga erishiladi. Biz biznesda muvaffaqiyat kasbiylik va axloqiy tamoyillarga asoslangan deb ishonamiz.\n
      Har bir xodim loyiha sifatiga bo‘lgan shaxsiy mas’uliyatni to‘liq tushunadi. Biz qisqa muddatli foyda olishga intilmaymiz, balki kompaniyaning uzoq muddatli muvaffaqiyatli rivojlanishini va hamkorlikni maqsad qilganmiz. Bizning resurslarimiz - bu sizning imkoniyatlaringiz.
    `,
    en: `
      The professional team "ADAU" is ready to offer you services in organizing seminars for further strategic planning, development, and implementation of advertising campaigns in the Republic of Uzbekistan, taking into account all the peculiarities of the geo-market.\n
      "ADAU" strives to create open and trusting dialogue with its Clients and Partners, resulting in successful and effective implementation of the set goals in practice.\n
      We firmly believe that success in business is equally based on professionalism and moral principles of management and employees. Each employee of the Company fully appreciates their personal responsibility for the quality of implementation of each project. We are not striving for short-term profit; our goal is the long-term successful development of the Company and Partnership. Our resources are your opportunities for promotion within our country.
    `,
};





const BannerService: FC = () => {
    const { swiperRef } = useSwiperNavigation()
    const [open, setOpen] = useState(false)
    const locale = useLocale()
    const content = localizedText[locale] || localizedText.en; // Agar til topilmasa, ingliz tilini qo'llaymiz

    const handleModal = () => setOpen(!open)

    return (
        <div className='mt-[30px] 2xl:mt-[0]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                {/* INFO */}
                <div className='px-[16px] 2xl:px-0 2xl:w-[45%] 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center'>
                    <div className='2xl:w-[70%]'>
                        <p className='text-[26px] font-jost uppercase 2xl:text-[40px] 3xl:text-[50px]'>
                            {locale === 'ru' ? "Наша деятельность" : locale === 'uz' ? "Bizning faoliyatimiz" : "Our Activities"}

                        </p>
                        <div className='mt-[16px] text-[15px] leading-[18px] 2xl:w-full font-normal 2xl:text-[16px] 3xl:text-[18px] 2xl:leading-[25px] 2xl:mt-[20px]'>
                            {content.split("\n").map((paragraph, index) => (
                                <div key={index} className="mb-[10px]">
                                    {paragraph.trim()}
                                </div>
                            ))}
                        </div>

                        <button onClick={handleModal} className='mt-[20px] buttonBlue w-[60%] 2xl:mt-[30px]'>

                            {locale === 'ru' ? "Связаться с нами" : locale === 'uz' ? "Biz bilan bog'lanish" : "Contact us"}
                        </button>
                    </div>
                </div>

                <ContactUs visible={open} close={handleModal} />

                {/* SLIDER */}
                <div className='mt-[30px] w-full 2xl:w-[50%] relative h-[470px] 2xl:h-[738px] 2xl:mt-0'>
                    <Swiper
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        spaceBetween={10}
                        slidesPerView={1}
                        speed={1000}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        loop={false}
                        breakpoints={{
                            1000: {
                                slidesPerView: 1,
                                spaceBetween: 30, // Adjust spacing between slides as needed for larger screens
                            },
                        }}
                        className='w-full h-full'
                    >
                        <SwiperSlide>
                            <div className='w-full h-full relative'>
                                {/* <div className='absolute top-[20px] left-[16px]'>
                                    <p className='text-[20px] 2xl:text-[30px] text-titleWhite font-jost'>Семинар <br />«Архитекторы будущего»</p>
                                    <p className='text-[15px] 2xl:text-[20px] 2xl:leading-[20px] w-[90%] text-[#D9D9D9] leading-[15px] mt-[8px] font-jost'>Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit consectetur.</p>
                                </div> */}

                                <Image src={ServiceBanner} width={800} height={850} quality={100} alt='Image banner Slider' className='w-full h-full object-cover' />
                            </div>
                        </SwiperSlide>
                    </Swiper>

                    {/* <div className='absolute bottom-[15px] 4xl:right-[260px] right-[20px]  z-[990] flex items-center 2xl:bottom-[20px] 2xl:right-auto 2xl:left-[40px]'>
                        <button onClick={handlePrev} className='flex items-center justify-center w-[50px] h-[50px]'>
                            <GrLinkPrevious className='w-[30px] h-[30px] text-titleWhite' />
                        </button>
                        <button onClick={handleNext} className='flex items-center justify-center w-[50px] h-[50px]'>
                            <GrLinkNext className='w-[30px] h-[30px] text-titleWhite' />
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default BannerService
