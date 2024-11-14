"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ReactPlayer from 'react-player'
import { FaChevronDown } from "react-icons/fa6"



// Sample video URLs for demonstration purposes
const BlogData = [
    {
        title: 'Инновации меняют архитектуру',
        category: "Видео-обзоры",
        video: 'https://youtu.be/nI6ZP9nz4Y8?si=wEnNySOY6SOuOmV6'
    },
    {
        title: 'Инновации меняют архитектуру',
        category: "Интервью",
        video: 'https://youtu.be/nI6ZP9nz4Y8?si=wEnNySOY6SOuOmV6'
    },
    {
        title: 'Инновации меняют архитектуру',
        category: "Записи семинаров",
        video: 'https://youtu.be/nI6ZP9nz4Y8?si=wEnNySOY6SOuOmV6'
    },

]

const Cotegory = [
    { cotegory: "Видео-обзоры" },
    { cotegory: "Интервью" },
    { cotegory: "Записи семинаров" },
]

const NewBlogs: FC = () => {
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [activeFilter, setActiveFilter] = useState('Все видео')
    const [isPlaying, setIsPlaying] = useState(false)
    const [isClient, setIsClient] = useState(false)

    const blogContainerRef = useRef<HTMLDivElement | null>(null)
    const filterRef = useRef<HTMLDivElement | null>(null)

    useEffect(() => {
        setIsClient(true)
    }, [])

    const handleActiveFilter = () => setMobileActiveFilter(!mobileActiveFilter)

    useEffect(() => {
        if (mobileActiveFilter && filterRef.current) {
            gsap.fromTo(
                filterRef.current.children,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }
            )
        } else if (filterRef.current) {
            gsap.to(filterRef.current.children, { opacity: 0, y: -20, duration: 0.2, stagger: 0.1 })
        }
    }, [mobileActiveFilter])

    useEffect(() => {
        if (blogContainerRef.current) {
            gsap.fromTo(
                blogContainerRef.current.children,
                { opacity: 0, y: 30, scale: 0.95 }, // Start with slightly smaller and lower opacity
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.6, // Increase duration for a smoother effect
                    stagger: 0.15, // Reduce stagger for faster consecutive animations
                    ease: "power2.out" // Use a smoother easing function
                }
            )
        }
    }, [activeFilter])

    const filteredBlogData = activeFilter === 'Все видео'
        ? BlogData
        : BlogData.filter(item => item.category === activeFilter)

    const handleMobileFilterSelect = (cotegory: string) => {
        setActiveFilter(cotegory)
        setMobileActiveFilter(false)
    }



    const [sliceNumber, setSliceNumber] = useState(3);

    const handleAddMore = () => {
        if (sliceNumber < filteredBlogData.length) {
            setSliceNumber(sliceNumber + 3);
        }
    };

    const handleShowLess = () => {
        setSliceNumber(6);
    };








    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <p className="text-[26px] uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]">
                Видео и медиа
            </p>

            <div className='hidden 2xl:flex flex-row items-center mt-[40px] w-[50%] 2xl:gap-[40px] border-b border-[#E4E4E4]'>
                <button
                    onClick={() => setActiveFilter('Все видео')}
                    className={`pb-[12px] mr-[10px]
                             border-b ${activeFilter === 'Все видео' ? 'border-b-2 border-[#222E51] text-[#222E51]'
                            : ' text-[#000000]'
                        }`}
                >
                    <p className='text-[22px] font-medium'>Все видео</p>
                </button>
                {Cotegory.map((item, index) => (
                    <button
                        onClick={() => setActiveFilter(item.cotegory)}
                        key={index}
                        className={`relative text-[22px] pb-[12px] font-medium transition-all duration-300 ${activeFilter === item.cotegory ? 'text-[#222E51]' : 'text-[#000000]'
                            }`}
                    >
                        {item.cotegory}
                        {activeFilter === item.cotegory && (
                            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#222E51]'></span>
                        )}
                    </button>
                ))}
            </div>
            <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                <p className='text-[15px] font-medium font-jost text-[#222E51]'>{activeFilter}</p>
                <div>
                    <FaChevronDown className='text-[#222E51]' />
                </div>
            </button>

            {mobileActiveFilter && (
                <div ref={filterRef}>
                    {Cotegory.map((item, index) => (
                        <p
                            key={index}
                            onClick={() => handleMobileFilterSelect(item.cotegory)}
                            className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
                        >
                            {item.cotegory}
                        </p>
                    ))}
                </div>
            )}
            <div ref={blogContainerRef} className='mt-[20px] 2xl:mt-[30px] flex flex-col gap-[30px] 2xl:flex-row 2xl:gap-[20px]'>
                {filteredBlogData.slice(0 , sliceNumber).map((item, index) => (
                    <div key={index} className='2xl:w-[349px]'>
                        <div className='relative mt-[20px] 2xl:mt-[25px]'>
                            <div className='h-[250px] 2xl:h-[280px]'>
                                {isClient && (
                                    <ReactPlayer
                                        url={item.video}
                                        playing={isPlaying}
                                        controls={true}
                                        width="100%"
                                        height="100%"
                                        onClickPreview={() => setIsPlaying(true)}
                                        pip={true}
                                    />
                                )}
                            </div>

                            <div className='2xl:h-[120px]'>
                                <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[22px] leading-[25px] 2xl:leading-[30px] 2xl:mt-[20px]'>{item.title.length > 72 ? item.title.slice(0, 72) + "..." : item.title}</p>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
            <div className='w-full items-center flex justify-center mt-[30px]'>
                {filteredBlogData.length > 3 && sliceNumber < filteredBlogData.length ? (
                    <button onClick={handleAddMore} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                        Загрузить еще
                    </button>
                ) : (
                    sliceNumber > 3 && (
                        <button onClick={handleShowLess} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                            Скрыть
                        </button>
                    )
                )}
            </div>
        </div>
    )
}

export default NewBlogs
