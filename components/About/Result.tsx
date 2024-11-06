

import { FC } from 'react'


const Result: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-col 2xl:flex-row'>
                <div className='pb-[30px] border-b border-b-[#E4E4E4] 2xl:w-[55%] '>
                    <p className='text-[26px] 2xl:text-[50px] leading-[32px] 2xl:leading-[62px] font-jost text-titleDark'>Цифры говорят <br /> сами за себя</p>
                    <div className='mt-[30px] hidden 2xl:flex w-[70%]  items-center 2xl:w-[40%] '>
                    <p className='buttonBlue'>
                        Вступить в ассоциацию
                    </p>
                </div>
                </div>
                {/* RESULT */}
                <div className='flex flex-col gap-[30px] 2xl:w-[50%]'>
                    <div className='border-b border-b-[#E4E4E4] pb-[30px] mt-[20px] 2xl:mt-0'>
                        <p className='text-[26px]'>500+</p>
                        <p className='text-[15px]'>партнёров по Узбекистану</p>
                    </div>
                    <div className='border-b border-b-[#E4E4E4] pb-[30px]'>
                        <p className='text-[26px]'>300+</p>
                        <p className='text-[15px]'>членов в ассоциации</p>
                    </div>
                    <div className='border-b border-b-[#E4E4E4] pb-[30px]'>
                        <p className='text-[26px]'>1500+</p>
                        <p className='text-[15px]'>компаний работают с нами</p>
                    </div>
                </div>
                <div className='mt-[30px] w-[70%]  flex items-center 2xl:w-[40%] 2xl:hidden '>
                    <p className='buttonBlue'>
                        Вступить в ассоциацию

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Result