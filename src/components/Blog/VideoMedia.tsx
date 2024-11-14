"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import ReactPlayer from 'react-player'
import { FaChevronDown } from "react-icons/fa6"
import useLocale from '@/hooks/useLocale'
import { client } from "@/sanity/lib/client"

import { IMediaVideo, IVideoCategory } from '@/interface/IVideo/video'






const NewBlogs: FC = () => {
    const locale = useLocale();

    const [mobileActiveFilter, setMobileActiveFilter] = useState(false);
    const [activeFilter, setActiveFilter] = useState<{ name: string, id: string }>({ name: 'Все видео', id: 'all-videos' });
    const [mediaCategories, setMediaCategories] = useState<IVideoCategory[]>([]);
    const [videos, setVideos] = useState<IMediaVideo[]>([]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const blogContainerRef = useRef<HTMLDivElement | null>(null);
    const filterRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const videoCategories = await client.fetch<IVideoCategory[]>(`
                    *[_type == "videoCategory"] { name, _id }
                `);
                setMediaCategories(videoCategories);
            } catch (error) {
                console.debug(error);
            }
        };
        fetchData();
    }, [locale]);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const allVideos = await client.fetch<IMediaVideo[]>(`
                    *[_type == "mediaVideo"] {
                        _id,
                        _createdAt,
                        title,
                        slug,
                        description,
                        videoFile,
                        videoUrl,
                        category,
                        mediaType,
                        featured,
                        expert
                    }
                `);
                setVideos(allVideos);
            } catch (error) {
                console.debug(error);
            }
        };
        fetchVideos();
    }, [locale]);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleActiveFilter = () => setMobileActiveFilter(!mobileActiveFilter);

    const handleFilterSelect = (categoryId: string, categoryName: string) => {
        setActiveFilter({ id: categoryId, name: categoryName });
        setMobileActiveFilter(false);
    };

    useEffect(() => {
        if (mobileActiveFilter && filterRef.current) {
            gsap.fromTo(
                filterRef.current.children,
                { opacity: 0, y: -20 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.1, ease: "power2.out" }
            );
        } else if (filterRef.current) {
            gsap.to(filterRef.current.children, { opacity: 0, y: -20, duration: 0.2, stagger: 0.1 });
        }
    }, [mobileActiveFilter]);

    useEffect(() => {
        if (blogContainerRef.current) {
            gsap.fromTo(
                blogContainerRef.current.children,
                { opacity: 0, y: 30, scale: 0.95 },
                { opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" }
            );
        }
    }, [activeFilter]);

    const filteredVideos = activeFilter.id === 'all-videos'
        ? videos
        : videos.filter(video => video.category._ref === activeFilter.id);


    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <p className="text-[26px] uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px]">
                Видео и медиа
            </p>

            <div className='hidden 2xl:inline-block  items-center mt-[40px] 2xl:gap-[40px] border-b border-[#E4E4E4]'>
                <div className='flex flex-row gap-[40px]'>
                <button
                    onClick={() => handleFilterSelect('all-videos', 'Все видео')}
                    className={`pb-[12px] mr-[10px] ${activeFilter.id === 'all-videos' ? 'border-b-2 border-[#222E51] text-[#222E51]' : 'text-[#000000]'}`}
                >
                    <p className='text-[22px] font-medium'>Все видео</p>
                </button>
                {mediaCategories.map((item) => (
                    <button
                        onClick={() => handleFilterSelect(item._id, item.name[locale])}
                        key={item._id}
                        className={`relative text-[22px] pb-[12px] font-medium transition-all duration-300 ${activeFilter.id === item._id ? 'text-[#222E51]' : 'text-[#000000]'}`}
                    >
                        {item.name[locale]}
                        {activeFilter.id === item._id && (
                            <span className='absolute bottom-0 left-0 w-full h-[2px] bg-[#222E51]'></span>
                        )}
                    </button>
                ))}
                </div>
               
            </div>
            <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                <p className='text-[15px] font-medium font-jost text-[#222E51]'>{activeFilter.name}</p>
                <div>
                    <FaChevronDown className='text-[#222E51]' />
                </div>
            </button>

            {mobileActiveFilter && (
                <div ref={filterRef} className='mt-[10px]'>
                    <p
                        onClick={() => handleFilterSelect('all-videos', 'Все видео')}
                        className='text-[15px] font-semibold font-jost text-[#222E51] w-full pb-[13px] border-b border-[#222E51] cursor-pointer'
                    >
                        Все видео
                    </p>
                    {mediaCategories.map((item) => (
                        <p
                            key={item._id}
                            onClick={() => handleFilterSelect(item._id, item.name[locale])}
                            className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[10px] pb-[13px] border-b border-[#222E51] cursor-pointer'
                        >
                            {item.name[locale]}
                        </p>
                    ))}
                </div>
            )}
            <div ref={blogContainerRef} className='mt-[20px] 2xl:mt-[30px] flex flex-col gap-[30px] 2xl:flex-row 2xl:gap-[20px]'>
            {filteredVideos.map((item) => (
                    <div key={item._id} className='2xl:w-[349px]'>
                        <div className='relative mt-[20px] 2xl:mt-[25px]'>
                            <div className='h-[250px] 2xl:h-[280px]'>
                                {isClient && (
                                    <ReactPlayer
                                        url={item.videoUrl || ''}
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
                                <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[22px] leading-[25px] 2xl:leading-[30px] 2xl:mt-[20px]'>
                                    {item.title[locale].length > 72 ? item.title[locale].slice(0, 72) + "..." : item.title[locale]}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className='w-full items-center flex justify-center mt-[30px]'>
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
            </div> */}
        </div>
    )
}

export default NewBlogs
