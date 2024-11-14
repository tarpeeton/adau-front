"use client"
import { FC, useState, useEffect } from 'react'
import { GrLinkNext } from "react-icons/gr"
import FullReviewsModal from '../Modal/reviews-modal'
import { IReviewsCotegory, IReviewData } from '@/interface/IReviews/review'
import { client } from "@/sanity/lib/client"
import useLocale from '@/hooks/useLocale'
import formatDate from '@/hooks/useFormatDate'




const MainReviews: FC = () => {
    const [activeIndex, setActiveIndex] = useState<string | null>('')

    const [visible, setVisible] = useState(false)
    const [selectedReview, setSelectedReview] = useState<{ name: string, date: string, text: string } | null>(null)
    const [reviewData, setReviewData] = useState<IReviewData[] | []>([])
    const [sliceNumber, setSliceNumber] = useState(9)
    const [reviewCotegory, setReviewCotegory] = useState<IReviewsCotegory[] | []>([])

    const locale = useLocale()


    const handleAddMore = () => {
        if (sliceNumber < reviewData.length) {
            setSliceNumber(sliceNumber + 9)
        }
    }

    const handleShowLess = () => {
        setSliceNumber(9)
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categories = await client.fetch(`*[_type == "reviewCategory"]`)
                setReviewCotegory(categories)

                // Set activeIndex to the first category's ID if available
                if (categories.length > 0) {
                    setActiveIndex(categories[0]._id)
                }
            } catch (error) {
                console.error("Error fetching categories:", error)
            }
        }
        fetchCategories()
    }, [locale])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const reviews = await client.fetch(`*[_type == "review"]{
                    _id,
                    name,
                    category,
                    commentary,
                    _createdAt
                }`)
                setReviewData(reviews)
            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [locale])


    const handleOpenModal = (name: string, date: string, text: string) => {
        setSelectedReview({ name, date, text })
        setVisible(true)
    }

    const handleCloseModal = () => {
        setVisible(false)
        setSelectedReview(null)
    }

    // Filter data based on the active filter
    const filteredData = reviewData?.filter(review => review.category._ref === activeIndex) || []
    const handleButtonClick = (index: string) => {
        setActiveIndex(index)
    }
    return (
        <div className='mt-[30px] 2xl:mt-[60px] px-[16px] 2xl:px-[50px]  4xl:px-[240px]'>
            <h1 className='text-[26px] 2xl:text-[45px] uppercase'>
                Отзывы
            </h1>
            <div className='mt-[20px] 2xl:mt-[40px]'>
                <div className='flex flex-row 2xl:inline-block 2xl:gap-[50px] border-b border-b-[#E4E4E4]'>
                    {reviewCotegory?.map((item) => (
                        <button
                            key={item._rev}
                            onClick={() => handleButtonClick(item._id)}
                            className={`pb-[12px] px-[10px] 2xl:px-[40px] font-medium border-b-[2px] ${activeIndex === item._id
                                ? 'text-[#222E51] border-b-[#222E51] '
                                : 'text-[#000000] border-b'
                                }`}
                        >
                            <p className="text-[16px] leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]">
                                {item.name[locale]}
                            </p>
                        </button>
                    ))}
                </div>

            </div>
            {/* CARD */}
            <div className='mt-[20px] 2xl:mt-[10px] flex flex-col gap-[12px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[20px]'>
                {filteredData.slice(0, sliceNumber).map((item, index) => (
                    <div key={index} className='bg-[#F7F8FA] 2xl:mt-[30px] p-[20px] 2xl:p-[25px] cursor-pointer w-full 2xl:w-[450px]'>
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
                                <button onClick={() => handleOpenModal(item.name[locale], formatDate(item._createdAt), item.commentary[locale])} className='text-[16px] group all ease-in-out flex flex-row flex-nowrap items-center 2xl:text-[20px]  font-medium font-jost text-[#222E51]'>
                                    Читать полностью
                                    <GrLinkNext className='ml-[4px] ease-in-out duration-300 group-hover:ml-[10px] 2ml-[8px] w-[17px] h-[17px]  2xl:w-[20px] 2xl:h-[20px]' />
                                </button>
                            </div>
                        </div>
                        <FullReviewsModal
                            visible={visible}
                            close={handleCloseModal}
                            name={selectedReview?.name}
                            date={selectedReview?.date}
                            text={selectedReview?.text}
                        />
                    </div>
                ))}
            </div>
            <div className='w-full items-center flex justify-center mt-[30px]'>
                {reviewData.length > 9 && sliceNumber < reviewData.length ? (
                    <button onClick={handleAddMore} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                        Загрузить еще
                    </button>
                ) : (
                    sliceNumber > 9 && (
                        <button onClick={handleShowLess} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                            Скрыть
                        </button>
                    )
                )}
            </div>
        </div>
    )
}

export default MainReviews