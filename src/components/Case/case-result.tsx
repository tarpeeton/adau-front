'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io"
import { urlFor } from '@/sanity/lib/image'
import useLocale from '@/hooks/useLocale'










interface ICaseResultProps {
    results: Array<{
        _key: string
        title: {
            en: string
            ru: string
            uz: string
        }
        result: {
            en: string
            ru: string
            uz: string
        }
    }>
    resultImage?: {
        asset: {
            _ref: string
            _type: string
        }
    }
}





const CaseResult: FC<ICaseResultProps> = ({ results, resultImage }) => {
    const [activeId, setActiveId] = useState<string | null>('01')
    const locale = useLocale()
    const toggleAccordion = (id: string) => {
        setActiveId(activeId === id ? null : id)
    }

    console.log(results, "RESULT")

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[26px] hidden 2xl:block uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Результаты</p>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                <p className='text-[26px] 2xl:hidden uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Результаты</p>
                {/* Image */}
                <div className='h-[250px] mt-[20px] 2xl:h-[650px] 2xl:w-[45%] 2xl:mt-[-50px]'>
                    {resultImage?.asset._ref && (
                        <Image src={urlFor(resultImage?.asset._ref).url()} quality={100} width={800} height={800} alt={resultImage.asset._ref} className='w-full h-full object-cover' />
                    )}

                </div>
                {/* Accordion */}
                <div className='mt-[30px] flex flex-col gap-[25px] 2xl:gap-[40px] 2xl:order-[-1] 2xl:w-[50%] 2xl:mt-[60px] 2xl:min-h-[540px] '>
                    {results.map((item) => (
                        <div key={item._key} className='border-b border-b-[#E4E4E4] pb-[20px] 2xl:pb-[40px]'>
                            <button
                                onClick={() => toggleAccordion(item._key)}
                                className='flex flex-row justify-between w-full'
                            >

                                <div className='w-[82%] text-left'>
                                    <p className='text-[18px] leading-[22px] font-medium text-title80 2xl:text-[#222E51] 2xl:text-[25px] 2xl:leading-[30px] font-jost '>{item.title[locale]}</p>
                                </div>
                                <div>
                                    <IoIosArrowDown
                                        className={`text-[#222E51] 2xl:text-[25px] transform transition-transform ease-in-out duration-300 ${activeId === item._key ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </div>
                            </button>
                            {activeId === item._key && (
                                <div className='mt-[10px]  mx-auto text-[15px] text-[#414141] leading-[20px] 2xl:w-full 2xl:text-[20px]  2xl:leading-[24px] font-jost'>
                                    {item.result[locale]}
                                </div>
                            )}
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}

export default CaseResult
