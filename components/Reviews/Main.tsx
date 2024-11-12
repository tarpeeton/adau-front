"use client"
import { FC, useState, useEffect } from 'react'
import { GrLinkNext } from "react-icons/gr"
import FullReviewsModal from '../Modal/reviews-modal'


const Cotegory = [
    { cotegory: "Клиентов" },
]

const reviewData = [
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 0
    },
    {
        name: 'Иван Иванов',
        date: '29.10.2024',
        text: 'Lorem ipsum dolor sit amet consectetur. Ullamcorper suspendisse mi id pretium suspendisse lorem facilisi libero. Amet sed ultrices ornare dignissim. Tincidunt amet sit semper luctus turpis lobortis molestie metus. Id in et senectus sodales.',
        index: 1
    },
]


const MainReviews: FC = () => {
    const [activeFilter, setActiveFilter] = useState('Участников ассоциации')
    const [visible, setVisible] = useState(false)
    const [selectedReview, setSelectedReview] = useState<{ name: string, date: string, text: string } | null>(null)

    const [sliceNumber, setSliceNumber] = useState(9)

    const handleAddMore = () => {
        if (sliceNumber < reviewData.length) {
            setSliceNumber(sliceNumber + 9)
        }
    }

    const handleShowLess = () => {
        setSliceNumber(9)
    }




    const handleOpenModal = (name: string, date: string, text: string) => {
        setSelectedReview({ name, date, text })
        setVisible(true)
    }

    const handleCloseModal = () => {
        setVisible(false)
        setSelectedReview(null)
    }

    // Filter data based on the active filter
    const filteredData = reviewData.filter(item =>
        activeFilter === 'Участников ассоциации' || item.index === Cotegory.findIndex(c => c.cotegory === activeFilter)
    )
    return (
        <div className='mt-[30px] 2xl:mt-[60px] px-[16px] 2xl:px-[50px]  4xl:px-[240px]'>
            <h1 className='text-[26px] 2xl:text-[45px] uppercase'>
                Отзывы
            </h1>
            <div className='mt-[20px] 2xl:mt-[40px]'>
                <div className='flex flex-row 2xl:inline-block 2xl:gap-[50px] border-b border-b-[#E4E4E4]'>
                    <button
                        onClick={() => setActiveFilter('Участников ассоциации')}
                        className={`pb-[12px] mr-[10px]
                             border-b ${activeFilter === 'Участников ассоциации' ? 'border-b-2 border-[#222E51] text-[#222E51]'
                                : ' text-[#000000]'
                            }`}
                    >
                        <p className='text-[16px] 2xl:text-[22px] font-medium'>Участников ассоциации</p>
                    </button>
                    {Cotegory.map((item, index) => (
                        <button
                            onClick={() => setActiveFilter(item.cotegory)}
                            key={index}
                            className={`relative text-[16px] 2xl:text-[22px] ml-[30px] 2xl:ml-[50px] pb-[12px] font-medium transition-all duration-300 ${activeFilter === item.cotegory ? 'text-[#222E51]' : 'text-[#000000]'
                                }`}
                        >
                            {item.cotegory}
                            {activeFilter === item.cotegory && (
                                <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#222E51]'></span>
                            )}
                        </button>
                    ))}
                </div>

            </div>
            {/* CARD */}
            <div className='mt-[20px] 2xl:mt-[10px] flex flex-col gap-[12px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[20px]'>
                {filteredData.slice(0 , sliceNumber).map((item, index) => (
                    <div key={index} className='bg-[#F7F8FA] 2xl:mt-[30px] p-[20px] 2xl:p-[25px] cursor-pointer w-full 2xl:w-[450px]'>
                        {/* name */}
                        <div className='flex flex-col'>
                            <p className='text-[18px] leading-[26.01px] font-jost font-medium 2xl:text-[24px] 2xl:leading-[34.68px]'>{item.name}</p>
                            <p className='text-[14px] leading-[18px] text-[#222E51] font-jost 2xl:text-[17px] 2xl:leading-[24.57px]'>{item.date}</p>
                        </div>
                        {/* text */}
                        <div className='2xl:relative'>
                            <div className='mt-[15px] 2xl:mt-[25px] 2xl:h-[174px] 4xl:h-[190px]'>
                                <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px]'>
                                    {item?.text.length > 242 ? item.text.slice(0, 242) + "..." : item.text}
                                </p>
                            </div>
                            {/* Link */}
                            <div className='mt-[10px]'>
                                <button onClick={() => handleOpenModal(item.name, item.date, item.text)} className='text-[16px] group all ease-in-out flex flex-row flex-nowrap items-center 2xl:text-[20px]  font-medium font-jost text-[#222E51]'>
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