
"use cleint"
import { FC, useState } from 'react'
import ContactUs from '../Modal/contacts-modal'
import useLocale from '@/hooks/useLocale'

const Result: FC = () => {
    const [open, setOpen] = useState(false)
    const locale = useLocale()
    const handleChangeOpen = () => setOpen(!open)


    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-col 2xl:flex-row'>
                <div className='pb-[30px] border-b border-b-[#E4E4E4] 2xl:w-[55%] 2xl:border-b-0 '>
                    <p className='text-[26px] 2xl:text-[50px] leading-[32px] 2xl:leading-[62px] font-jost text-titleDark'>
                        {
                            locale === 'ru'
                                ? <>Цифры говорят <br /> сами за себя</>
                                : locale === 'uz'
                                    ? <>Raqamlar <br /> o‘zlari gapiradi</>
                                    : <>Numbers  speak  <br /> for themselves</>
                        }


                    </p>
                    <div className='mt-[30px] hidden 2xl:flex w-[70%]  items-center 2xl:w-[40%] '>
                        <button onClick={handleChangeOpen} className='buttonBlue'>
                            {
                                locale === 'ru'
                                    ? "Вступить в ассоциацию"
                                    : locale === 'uz'
                                        ? "Assotsiatsiyaga qo‘shilish"
                                        : "Join the association"
                            }

                        </button>
                    </div>
                </div>
                {/* RESULT */}
                <div className='flex flex-col gap-[30px] 2xl:w-[50%]'>
                    <div className='border-b border-b-[#E4E4E4] pb-[30px] mt-[20px] 2xl:mt-0'>
                        <p className='text-[26px]'>500+</p>
                        <p className='text-[15px]'>
                            {
                                locale === 'ru'
                                    ? "Партнёров по Узбекистану"
                                    : locale === 'uz'
                                        ? "O‘zbekistondagi hamkorlar"
                                        : "Partners in Uzbekistan"
                            }

                        </p>
                    </div>
                    <div className='border-b border-b-[#E4E4E4] pb-[30px]'>
                        <p className='text-[26px]'>300+</p>
                        <p className='text-[15px]'>
                            {
                                locale === 'ru'
                                    ? "Членов в ассоциации"
                                    : locale === 'uz'
                                        ? "Assotsiatsiya a’zolari"
                                        : "Members in the association"
                            }

                        </p>
                    </div>
                    <div className='border-b border-b-[#E4E4E4] pb-[30px] 2xl:border-b-0'>
                        <p className='text-[26px]'>1500+</p>
                        <p className='text-[15px]'>
                            {
                                locale === 'ru'
                                    ? "Компаний работают с нами"
                                    : locale === 'uz'
                                        ? "Biz bilan ishlaydigan kompaniyalar"
                                        : "Companies work with us"
                            }

                        </p>
                    </div>
                </div>
                <div className='mt-[30px] w-[70%]  flex items-center 2xl:w-[40%] 2xl:hidden '>
                    <button onClick={handleChangeOpen} className='buttonBlue'>
                        {
                            locale === 'ru'
                                ? "Вступить в ассоциацию"
                                : locale === 'uz'
                                    ? "Assotsiatsiyaga qo‘shilish"
                                    : "Join the association"
                        }


                    </button>
                </div>
                <ContactUs visible={open} close={handleChangeOpen} />

            </div>
        </div>
    )
}

export default Result