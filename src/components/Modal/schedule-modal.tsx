"use client"
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import { FC, useState, useRef, useEffect } from 'react'
import { Link } from '@/i18n/routing'

import { client } from "@/sanity/lib/client"
import { ISeminarData } from '@/interface/ISeminar/seminar'


// icons
import { CiClock2 } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { GrFormNextLink } from "react-icons/gr"
import { FaChevronDown } from "react-icons/fa6"
import useLocale from '@/hooks/useLocale'
import formatDate from '@/hooks/useFormatDate'






interface IReviewFull {
    visible: boolean
    close: () => void

}


const ScheduleModal: FC<IReviewFull> = ({ visible, close }) => {
    const [activeFilter, setActiveFilter] = useState<string>('')
    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)
    const [data, setData] = useState<ISeminarData[]>([])
    const [monthData, setMonthData] = useState<string[]>([])
    const locale = useLocale()

    const handleActiveFilterToggle = () => {
        setMobileActiveFilter(prev => !prev)
    }

    const handleMobileFilterSelect = (category: string) => {
        setActiveFilter(category)
        setMobileActiveFilter(false)
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData: ISeminarData[] = await client.fetch(`*[_type == "seminar"]`)
                setData(fetchedData)

                // Array of month names in Uzbek
                const uzbekMonths = [
                    'Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun',
                    'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'
                ]

                // Extract unique months from data and format them based on the locale

                // Extract unique months from data and format them based on the locale
                const uniqueMonths: string[] = Array.from(
                    new Set(
                        fetchedData.map(item => {
                            const date = new Date(item.date)
                            if (locale === 'uz') {
                                // Format date in Uzbek
                                const monthName = uzbekMonths[date.getMonth()] // Get the month name
                                const year = date.getFullYear()
                                return `${monthName} ${year}` // Format as "Month Year"
                            } else {
                                // Format date for other locales (e.g., 'ru', 'en')
                                return date.toLocaleDateString(locale, { month: 'long', year: 'numeric' })
                            }
                        })
                    )
                ).sort((a, b) => {
                    // Extract the year and month from the formatted strings
                    const [monthA, yearA] = a.split(' ')
                    const [monthB, yearB] = b.split(' ')

                    // Convert the year parts to numbers
                    const yearANum = parseInt(yearA, 10)
                    const yearBNum = parseInt(yearB, 10)

                    // Get the month index from the Uzbek months array (works for 'uz' locale)
                    const monthAIndex = uzbekMonths.indexOf(monthA)
                    const monthBIndex = uzbekMonths.indexOf(monthB)

                    // Construct Date objects for comparison
                    const dateA = new Date(yearANum, monthAIndex)
                    const dateB = new Date(yearBNum, monthBIndex)

                    return dateA.getTime() - dateB.getTime()
                })

                setMonthData(uniqueMonths)
                if (uniqueMonths.length > 0) {
                    setActiveFilter(uniqueMonths[0])
                }

            } catch (error) {
                console.debug(error)
            }
        }
        fetchData()
    }, [locale])

    const filteredData = data.filter(item => {
        const eventMonth = new Date(item.date).toLocaleString(locale, { month: 'long', year: 'numeric' })
        return eventMonth === activeFilter
    })


    return (
        <div className='bg-white'>
            <Modal
                open={visible}
                footer={null}
                onCancel={close} // Using the close function
                centered
                width={1200}
                closable={false}
            >
                <div >
                    <div className='flex flex-row justify-between items-center 2xl:border-b 2xl:border-b-[#E4E4E4] 2xl:pb-[30px]'>
                        <p className='text-[22px] 2xl:text-[28px] text-titleDark font-medium'>
                            Расписание
                        </p>
                        <button onClick={close} className='w-[25px] h-[25px] 2xl:w-[30px] 2xl:h-[30px]'>
                            <IoClose className='text-[#A0A0A0] w-full h-full' />
                        </button>
                    </div>
                    {/* MOBILE */}
                    <div className='mt-[20px] 2xl:mt-0 block 2xl:hidden'>
                        <button onClick={handleActiveFilterToggle} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                            <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                                {activeFilter}
                            </p>
                            <div>
                                <FaChevronDown className='text-[#222E51]' />
                            </div>
                        </button>
                        {mobileActiveFilter && (
                            <div>
                                {monthData.map((item, index) => (
                                    <p key={index} onClick={() => handleMobileFilterSelect(item)} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>{item}</p>
                                ))}
                            </div>
                        )}
                        <div className='mt-[20px] flex flex-col gap-[12px]'>
                            {filteredData.map((item, index) => (
                                <div key={index} className='border border-[#E4E4E4] p-[15px]'>
                                    <p className='text-[18px] text-titleDark font-medium
     '>
                                        {item.title[locale]}

                                    </p>
                                    <p className='text-[14px] mt-[10px] text-[#414141] flex flex-row gap-[4px]'>
                                        <CiClock2 className=' w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
                                        {formatDate(item.date)}; {item.time}
                                    </p>
                                    <p className='text-[14px] mt-[5px] text-[#414141] flex flex-row gap-[4px]'>
                                        <CiLocationOn className=' w-[25px] ml-[-2.5px] h-[25px] 2xl:w-[28px] 2xl:h-[28px]' />
                                        {item.address[locale]}
                                    </p>
                                    <div className='w-full flex items-center justify-end mt-[20px]'>
                                        <Link href={`/seminar/${item.slug.current}`} className='flex font-medium flex-row items-center gap-[5px] text-[#222E51] text-[16px]'>
                                            Перейти
                                            <GrFormNextLink className='w-[20px] h-[20px]' />
                                        </Link>
                                    </div>

                                </div>
                            ))}

                        </div>
                    </div>
                    {/* DESKTOP */}
                    <div className='hidden 2xl:flex flex-row  overflow-hidden'>
                        <div className='w-[20%]  flex flex-col max-h-[500px] scrollbar-hide overflow-y-auto border-r border-r-[#E4E4E4]'>
                            {monthData.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFilter(item)}
                                    className={`p-[20px] w-full text-[20px] border-b border-b-[#E4E4E4] text-left font-jost font-medium ${activeFilter === item ? 'bg-[#222E51] text-white' : 'text-[#121212]'}`}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className='mt-[30px] px-[20px] w-[80%] overflow-hidden'>
                            <div className='flex flex-row 2xl:flex-wrap gap-[20px] max-h-[500px] scrollbar-hide overflow-y-auto'>
                                {filteredData.map((item, index) => (
                                    <div key={index} className='border  border-[#E4E4E4] p-[20px]'>
                                        <p className='text-[22px] text-titleDark  font-medium
     '>
                                            {item.title[locale].length > 20 ? item.title[locale].slice(0, 20) + '...' : item.title[locale]}

                                        </p>
                                        <p className='text-[17px] mt-[10px] text-[#414141] flex flex-row gap-[4px]'>
                                            <CiClock2 className=' w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
                                            {formatDate(item.date)}; {item.time}
                                        </p>
                                        <p className='text-[17px] break-words mt-[5px] text-[#414141] flex flex-row gap-[4px]'>
                                            <div className='w-[25px]  h-[25px] 2xl:w-[28px] 2xl:h-[28px]'>
                                                <CiLocationOn className=' w-[25px]  h-[25px] 2xl:w-[28px] 2xl:h-[28px]' />
                                            </div>
                                            {item.address[locale]}
                                        </p>
                                        <div className='w-full flex items-center justify-end mt-[20px]'>
                                            <Link href={`/seminar/${item.slug.current}`} className='flex font-medium flex-row items-center  text-[#222E51] text-[17px]'>
                                                Перейти
                                                <GrFormNextLink className='w-[25px] h-[25px]' />
                                            </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default ScheduleModal