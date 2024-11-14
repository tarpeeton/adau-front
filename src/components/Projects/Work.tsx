"use client"
import { FC, useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ImageItem, SwiperItem } from '@/ui/swiperItem'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { client } from "@/sanity/lib/client"

// ICON
import { FaChevronDown } from "react-icons/fa6"


// images
import { ICase , ICaseCategory } from '@/interface/ICase/case'
import useLocale from '@/hooks/useLocale'



export interface DataItem {
    category?: string
    title: string
    description: string
    images: ImageItem[]
}

interface CategoryItem {
    cotegory: string
}



const Cotegory: CategoryItem[] = [
    { cotegory: "Интерьерные работы" },
    { cotegory: "Дизайн интерьеров" },
    { cotegory: "Архитектурные проекты" },
    { cotegory: "Градостроительные проекты" },
    { cotegory: "Концептуальные и творческие проекты" },
    { cotegory: "Другие" },
]



interface FilterState {
    name: string;
    id: string;
  }



const Work: FC = () => {
    const locale = useLocale()
    const [sliceNumber, setSliceNumber] = useState(9)
    const [caseData, setCaseData] = useState<ICase[]>([])
    const [caseCategory, setCaseCategory] = useState<ICaseCategory[]>([])
    const [activeFilter, setActiveFilter] = useState<FilterState>({ name: 'Все проекты', id: 'all-project' })
    const blogContainerRef = useRef<HTMLDivElement | null>(null)
    const filterRef = useRef<HTMLDivElement | null>(null)
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
  
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
      const fetchData = async () => {
        try {
          const CaseDataAll: ICase[] = await client.fetch(`*[_type == "case"]`)
          setCaseData(CaseDataAll)
        } catch (error) {
          console.debug(error)
        }
      }
      fetchData()
    }, [locale])
  
    useEffect(() => {
      const fetchCaseCategory = async () => {
        try {
          const CaseCategoryData: ICaseCategory[] = await client.fetch(`*[_type == "caseCategory"]`)
          setCaseCategory(CaseCategoryData)
        } catch (error) {
          console.debug(error)
        }
      }
      fetchCaseCategory()
    }, [locale])
  
    const filteredBlogData = activeFilter.id === 'all-project'
      ? caseData
      : caseData.filter(item => item.caseCategory?._ref === activeFilter.id)
  
    const handleMobileFilterSelect = (category: ICaseCategory) => {
      setActiveFilter({ name: category.name[locale], id: category._id })
      setMobileActiveFilter(false)
    }
  
    const isAllDataLoaded = sliceNumber >= filteredBlogData.length
  
    const handleToggle = () => {
      if (!isAllDataLoaded) {
        setSliceNumber(prev => Math.min(prev + 9, filteredBlogData.length))
      } else {
        setSliceNumber(prev => Math.max(prev - 9, 9))
      }
    }
  

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div>
                <p className="text-[26px] uppercase font-jost leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]">
                    Наши <br className='2xl:hidden' /> последние работы
                </p>
            </div>
            <div className='hidden slg:flex  slg:flex-row gap-[10px]'>
            <button
          className={`px-[15px] py-[13px] text-center text-[#121212] border ${activeFilter.id === 'all-project' ? 'bg-[#222E51] text-white' : ''}`}
          onClick={() => setActiveFilter({ name: 'Все проекты', id: 'all-project' })}
        >
          Все проекты
        </button>
        {caseCategory.map((item) => (
          <button
            key={item._id}
            className={`px-[15px] py-[13px] text-center text-[#121212] border ${activeFilter.id === item._id ? 'bg-[#222E51] text-white' : ''}`}
            onClick={() => setActiveFilter({ name: item.name[locale], id: item._id })}
          >
            {item.name[locale]}
          </button>
        ))}
            </div>
            <div className='2xl:hidden'>
                <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                    <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                        {activeFilter.name}
                    </p>
                    <div>
                        <FaChevronDown className='text-[#222E51]' />
                    </div>
                </button>
                {mobileActiveFilter && (
          <div ref={filterRef}>
            {caseCategory.map((item) => (
              <p
                key={item._id}
                onClick={() => handleMobileFilterSelect(item)}
                className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'
              >
                {item.name[locale]}
              </p>
            ))}
          </div>
        )}
            </div>
            <div className='mt-[15px] flex flex-col gap-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[1%]' ref={blogContainerRef}>
            {filteredBlogData.slice(0, sliceNumber).map((item) => (
          <SwiperItem key={item._id} item={item} width='32%' />
        ))}
            </div>
            {filteredBlogData.length > 9 && (
                <div className='w-full flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
                    <button onClick={handleToggle} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                        {isAllDataLoaded ? 'Скрыть' : 'Загрузить еще'}
                    </button>
                </div>
            )}
        </div>
    )
}

export default Work
