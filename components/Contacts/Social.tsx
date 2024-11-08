import { FC } from 'react'
import Image from 'next/image'

const Socials: FC = () => {
    return (
        <div className='px-[16px] 2xl:px-[50px] 4xl:px-[240px] mt-[80px] 2xl:mt-[200px]'>
            <p className='text-[24px] 2xl:text-[45px] text-titleDark font-jost uppercase'>
                Мы в социальных сетях
            </p>
            <div className='flex 2xl:flex-row 2xl:justify-between'>
                <div className='2xl:w-[23%] bg-[#F7F8FA] py-[15px] px-[10px]'>

                </div>
            </div>
        </div>
    )
}

export default Socials