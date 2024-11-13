"use client"
import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GrLinkNext } from "react-icons/gr"
import { ExpertDataOpinion } from '@/constants/Expert'




const ExpertOpinions: FC = () => {
    const [sliceNumber, setSliceNumber] = useState(9);

    const handleAddMore = () => {
        if (sliceNumber < ExpertDataOpinion.length) {
            setSliceNumber(sliceNumber + 9);
        }
    };

    const handleShowLess = () => {
        setSliceNumber(9);
    };

    
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[24px] 2xl:text-[40px] text-titleDark uppercase font-jost'>
                Мнение экспертов
            </p>
            <div className='mt-[20px] 2x:mt-[30px]'>
                <div className='flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[20px]'>
                    {ExpertDataOpinion.slice(0 , sliceNumber).map((item) => (
                        <div key={item.id} className='2xl:w-[23%] py-[25px] px-[20px] flex flex-col 2xl:py-[35px] 2xl:px-[25px] border border-[#E4E4E4]'>
                            <div>
                                <p className='text-[20px] leading-[26px] 2xl:leading-[30px] 2xl:text-[24px] text-titleDark font-medium font-jost'>{item.title}</p>
                                <p className='text-[15px] leading-[18px] 2xl:leading-[24.57px] 2xl:text-[17px] text-title80  font-jost mt-[12px]'>
                                {item.desciption.length > 101 ? item.desciption.slice(0, 101) + "..." : item.desciption}
                                </p>
                                <Link href={item.id} className='text-[#222E51] text-[16px] flex flex-row flex-nowrap items-center mt-[20px]  font-medium gap-[8px]'>
                                    Читать статью
                                    <GrLinkNext className='2xl:mt-[4px] w-[15px] h-[15px]' />
                                </Link>
                            </div>
                            <div className='mt-[25px] border-t border-r-[#E4E4E4]'>
                                <div className='flex flex-row gap-[10px] pt-[25px] items-center'>
                                    <div className='w-[40px] h-[40px] 2xl:w-[45px] 2xl:h-[45px] rounded-full  overflow-hidden '>
                                        <Image src={item.img} alt='image-rustiimmm' width={319} height={480} quality={100} className='w-full h-full object-cover ' />
                                    </div>
                                    <div>
                                        <p className='text-[16px] 2xl:text-[20px] font-medium text-titleDark font-jost'>{item.name}</p>
                                        <p className='text-[14px] 2xl:text-[17px] mt-[-8px] font-medium 2xl:leading-[24.57px] text-[#A0A0A0] font-jost'>{item.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='w-full items-center flex justify-center mt-[30px]'>
                    {sliceNumber < ExpertDataOpinion.length ? (
                        <button onClick={handleAddMore} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                            Загрузить еще
                        </button>
                    ) : (
                        <button onClick={handleShowLess} className='buttonBlue w-[60%] 2xl:w-[15%]'>
                            Скрыть
                        </button>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ExpertOpinions