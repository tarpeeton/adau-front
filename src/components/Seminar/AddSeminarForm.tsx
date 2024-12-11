'use client'
import React, { FC, useState } from 'react'
import Image from 'next/image'
import ScheduleModal from '../Modal/schedule-modal'


// images
import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'
import useLocale from '@/hooks/useLocale'


interface IAddSeminarForm {
    onClick: () => void;
}


const AddSeminarForm: FC<IAddSeminarForm> = ({ onClick }) => {
    const [modal, setModal] = useState(false)
    const locale = useLocale()

    const hadnleModalSwitcher = () => setModal(!modal)


    return (
        <div className='mt-[80px] 2xl:mt-[200px]'>
            <div className=' bg-[#222E51] py-[40px] px-[16px] 2xl:py-[100px] 2xl:px-[50px]  4xl:px-[240px] flex flex-col 2xl:flex-row'>
                {/* TEXT AND BUTTON */}
                <div className='2xl:w-[60%]'>
                    <p className='text-[26px] 2xl:w-[90%] 2xl:text-[50px] 2xl:leading-[62px]  uppercase text-titleWhite font-jost leading-[32px]'>
                        {
                            locale === 'ru'
                                ? "Не упустите возможность присоединиться!"
                                : locale === 'uz'
                                    ? "Qo‘shilish imkoniyatini boy bermang!"
                                    : "Don't miss the chance to join!"
                        }


                    </p>


                    <p className='mt-[10px] 2xl:mt-[20px] 2xl:w-[50%] text-[15px] 2xl:text-[20px] 2xl:leading-[24px] leading-[18px] text-titleWhite opacity-[80%]'>
                        {
                            locale === 'ru'
                                ? "Запишитесь на семинар, чтобы узнать новейшие тренды и получить практические знания от ведущих экспертов"
                                : locale === 'uz'
                                    ? "Eng yangi tendensiyalarni o‘rganish va yetakchi mutaxassislardan amaliy bilim olish uchun seminarga yoziling"
                                    : "Sign up for the seminar to learn the latest trends and gain practical knowledge from leading experts"
                        }

                    </p>
                    <div className='flex flex-row flex-nowrap justify-between mt-[25px] 2xl:w-[60%] 2xl:mt-[50px] 2xl:justify-normal 2xl:gap-[20px]'>
                        <button onClick={onClick} className='buttonWhite w-[48%] 2xl:w-[45%]'>
                            {
                                locale === 'ru'
                                    ? "Записаться"
                                    : locale === 'uz'
                                        ? "Ro‘yxatdan o‘tish"
                                        : "Register"
                            }

                        </button>
                        <button onClick={hadnleModalSwitcher} className='borderedButtonWhite w-[48%] flex items-center justify-center 2xl:w-[45%]'>
                            {
                                locale === 'ru'
                                    ? "Расписание"
                                    : locale === 'uz'
                                        ? "Jadval"
                                        : "Schedule"
                            }

                        </button>
                    </div>
                </div>

                {/* MODAL */}
                <ScheduleModal visible={modal} close={hadnleModalSwitcher} />


                <div className='mt-[30px] flex items-center gap-[8px] justify-center 2xl:w-[40%] 2xl:items-end 2xl:mt-[220px] 2xl:ml-[-80px]'>
                    <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                    <Image src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                    <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />
                    <Image src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />

                </div>
            </div>
        </div>
    )
}

export default AddSeminarForm