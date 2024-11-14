"use client"
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import { FC, useState, useRef } from 'react'
import Link from 'next/link'



// icons
import { CiClock2 } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import { GrFormNextLink } from "react-icons/gr"
import { FaChevronDown } from "react-icons/fa6"



const Mothdata = [
    {
        cotegory: 'Январь 2024',
    },
    {
        cotegory: 'Февраль 2024',
    },
    {
        cotegory: 'Март 2024',
    },
    {
        cotegory: 'Апрель 2024',
    },
    {
        cotegory: 'Май 2024',
    },
    {
        cotegory: 'Июнь 2024',
    },
    {
        cotegory: 'Июль 2024',
    },
    {
        cotegory: 'Август 2024',
    },
]

const Data = [
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Январь 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Февраль 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Март 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Апрель 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Январь 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Февраль 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Март 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Апрель 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Январь 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Февраль 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Март 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Апрель 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Январь 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Февраль 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Март 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Апрель 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Январь 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Февраль 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Март 2024', link: 'ss', addres: 'tashkent str street' },
    { title: 'Семинар архитекторов', time: '17:00', date: '31.10.2024 ', cotegory: 'Апрель 2024', link: 'ss', addres: 'tashkent str street' },
]


interface IReviewFull {
    visible: boolean
    close: () => void

}


const ScheduleModal: FC<IReviewFull> = ({ visible, close }) => {
    const [activeFilter, setActiveFilter] = useState('Январь 2024')

    const [mobileActiveFilter, setMobileActiveFilter] = useState(false)

    const filteredData = Data.filter(item => item.cotegory === activeFilter)
    const handleActiveFilter = () => setMobileActiveFilter(!mobileActiveFilter)

    // Tanlangandan Keyin OChirsh
    const handleMobileFilterSelect = (cotegory: string) => {
        setActiveFilter(cotegory)
        setMobileActiveFilter(false)
    }







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
                        <button onClick={handleActiveFilter} className='w-full mt-[20px] 2xl:hidden flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>
                            <p className='text-[15px] font-medium font-jost text-[#222E51]'>
                                {activeFilter}
                            </p>
                            <div>
                                <FaChevronDown className='text-[#222E51]' />
                            </div>
                        </button>
                        {mobileActiveFilter && (
                            <div>
                                {Mothdata.map((item, index) => (
                                    <p key={index} onClick={() => handleMobileFilterSelect(item.cotegory)} className='text-[15px] font-semibold font-jost text-[#222E51] w-full mt-[20px] flex flex-row justify-between pb-[13px] border-b border-b-[#222E51]'>{item.cotegory}</p>
                                ))}
                            </div>
                        )}
                        <div className='mt-[20px] flex flex-col gap-[12px]'>
                            {filteredData.map((item, index) => (
                                <div key={index} className='border border-[#E4E4E4] p-[15px]'>
                                    <p className='text-[18px] text-titleDark font-medium
     '>{item.title}</p>
                                    <p className='text-[14px] mt-[10px] text-[#414141] flex flex-row gap-[4px]'>
                                        <CiClock2 className=' w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
                                        {item.date}; {item.time}
                                    </p>
                                    <p className='text-[14px] mt-[5px] text-[#414141] flex flex-row gap-[4px]'>
                                        <CiLocationOn className=' w-[25px] ml-[-2.5px] h-[25px] 2xl:w-[28px] 2xl:h-[28px]' />
                                        {item.addres}
                                    </p>
                                    <div className='w-full flex items-center justify-end mt-[20px]'>
                                        <Link href={item.link} className='flex font-medium flex-row items-center gap-[5px] text-[#222E51] text-[16px]'>
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
                            {Mothdata.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveFilter(item.cotegory)}
                                    className={`p-[20px] w-full text-[20px] border-b border-b-[#E4E4E4] text-left font-jost font-medium ${activeFilter === item.cotegory ? 'bg-[#222E51] text-white' : 'text-[#121212]'}`}
                                >
                                    {item.cotegory}
                                </button>
                            ))}
                        </div>
                        <div className='mt-[30px] px-[20px] w-[80%] overflow-hidden'>
                            <div className='flex flex-row 2xl:flex-wrap gap-[20px] max-h-[500px] scrollbar-hide overflow-y-auto'>
                                {filteredData.map((item, index) => (
                                    <div key={index} className='border  border-[#E4E4E4] p-[20px]'>
                                        <p className='text-[22px] text-titleDark font-medium
     '>{item.title}</p>
                                        <p className='text-[17px] mt-[10px] text-[#414141] flex flex-row gap-[4px]'>
                                            <CiClock2 className=' w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
                                            {item.date}; {item.time}
                                        </p>
                                        <p className='text-[17px] mt-[5px] text-[#414141] flex flex-row gap-[4px]'>
                                            <CiLocationOn className=' w-[25px]  h-[25px] 2xl:w-[28px] 2xl:h-[28px]' />
                                            {item.addres}
                                        </p>
                                        <div className='w-full flex items-center justify-end mt-[20px]'>
                                            <Link href={item.link} className='flex font-medium flex-row items-center  text-[#222E51] text-[17px]'>
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