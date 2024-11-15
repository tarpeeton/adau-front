'use client'

import { FC, useState, useEffect } from 'react'
import { Link } from '@/i18n/routing'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { GrLinkNext } from "react-icons/gr"
import { GrLinkPrevious } from "react-icons/gr"

import useSwiperNavigation from '@/hooks/useSwiperNavigation'
import useLocale from '@/hooks/useLocale'

import { client } from "@/sanity/lib/client";
import { IReviewData } from '@/interface/IReviews/review'
import formatDate from '@/hooks/useFormatDate'

import FullReviewsModal from '../Modal/reviews-modal'


interface IUserTestimonials {
    isShow: boolean
}








const UserTestimonials: FC<IUserTestimonials> = ({ isShow }) => {
    const { swiperRef, handlePrev, handleNext } = useSwiperNavigation()
    const locale = useLocale()
    const [reviewsData, setReviewsData] = useState<IReviewData[] | []>([])
    const [selectedReview, setSelectedReview] = useState<IReviewData | null>(null) // State to store selected review for modal
    const [isModalVisible, setModalVisible] = useState(false) // Modal visibility state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reviewsDataAll = await client.fetch(
                    `*[_type == "review" && references(*[_type == "reviewCategory" && name.ru == "Клиентов"]._id)]`
                );
                setReviewsData(reviewsDataAll)
            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [])

    // Function to open the modal with the selected review data
    const openModal = (review: IReviewData) => {
        setSelectedReview(review)
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <div>
            <div className="mt-[80px] 2xl:mt-[200px] py-[40px] 2xl:py-[100px] px-[20px] 4xl:pl-[240px] 2xl:px-[50px] bg-[#F7F8FA]">
                <p className="text-[26px] uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]">
                    Отзывы участников
                </p>
                <div className="mt-[20px] mdl:mt-[30px] 2xl:mt-[40px]">

                    <div className='mt-[20px] 2xl:mt-[40px]'>
                        <Swiper
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                            spaceBetween={10}
                            slidesPerView={1.1}
                            speed={750}
                            autoplay={{ delay: 1000, disableOnInteraction: false }}
                            loop={false}
                            breakpoints={{
                                1000: {
                                    slidesPerView: 3.2,
                                    spaceBetween: 20, // Adjust spacing between slides as needed for larger screens
                                },
                            }}
                        >
  {reviewsData.map((item, index) => (
                                <SwiperSlide key={index} className='cursor-pointer '>
                                    <div className='bg-white p-[20px] 2xl:p-[25px]'>
                                        {/* name */}
                                        <div className='flex flex-col'>
                                            <p className='text-[18px] leading-[26.01px] font-jost font-medium 2xl:text-[24px] 2xl:leading-[34.68px]'>{item.name[locale]}</p>
                                            <p className='text-[14px] leading-[18px] text-[#222E51] font-jost 2xl:text-[17px] 2xl:leading-[24.57px]'>{formatDate(item._createdAt)}</p>
                                        </div>
                                        {/* text */}
                                        <div className='2xl:relative'>
                                            <div className='mt-[15px] 2xl:mt-[25px] 2xl:h-[174px] 4xl:h-[190px]'>
                                                <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px]'>
                                                    {item?.commentary[locale].length > 242 ? item.commentary[locale].slice(0, 242) + "..." : item.commentary[locale]}
                                                </p>
                                            </div>
                                            {/* Link */}
                                            <div className='mt-[10px]'>
                                                <button onClick={() => openModal(item)}  className='text-[16px] group all ease-in-out flex flex-row flex-nowrap items-center 2xl:text-[20px]  font-medium font-jost text-[#222E51]'>
                                                    Читать полностью
                                                    <GrLinkNext className='ml-[4px] ease-in-out duration-300 group-hover:ml-[10px] 2ml-[8px] w-[20px] h-[20px]  2xl:w-[18px] 2xl:h-[18px] 2xl:mt-[3px]' />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </SwiperSlide>
                            ))}


                           
                        </Swiper>
                    </div>


                    <FullReviewsModal
                        visible={isModalVisible}
                        close={closeModal}
                        name={selectedReview?.name[locale] || ''}
                        date={selectedReview ? formatDate(selectedReview._createdAt) : ''}
                        text={selectedReview?.commentary[locale] || ''}
                    />



                    <div className={`flex flex-row gap-[10px] mt-[20px] 2xl:mt-[50px] w-full ${isShow ? 'justify-between' : 'justify-end'}`}>
                        {isShow && (<div className='hidden 2xl:block'>
                            <Link href='/reviews' className='buttonBlue'>
                                Больше отзывов
                            </Link>
                        </div>)}


                        <div className='flex flex-row gap-[10px]'>
                            <button onClick={handlePrev} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px] border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                                <GrLinkPrevious className='w-[30px] h-[30px] text-[#222E51]' />
                            </button>
                            <button onClick={handleNext} className='flex items-center justify-center rounded-full w-[60px] 2xl:w-[70px] 2xl:h-[70px] h-[60px]  4xl:w-[90px] 4xl:h-[90px]  border border-[#222E51] backdrop-blur-[15px] bg-inherit'>
                                <GrLinkNext className='w-[30px] h-[30px]  text-[#222E51]' />
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserTestimonials