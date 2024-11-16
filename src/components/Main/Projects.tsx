"use client"
import { FC, useState } from 'react'
import Image from 'next/image'
import One from '@/public/project/one.jpg'
import Five from '@/public/project/five.jpg'
import four from '@/public/project/four.jpg'
import six from '@/public/project/six.jpg'
import three from '@/public/project/three.jpg'
import two from '@/public/project/two.jpg'
import { Link } from '@/i18n/routing'




const data = [
    {path: One},
    {path: two},
    {path: Five},
    {path: four},
    {path: six},
    {path: three},
]



const Projects: FC = () => {
    const [activeButton, setActiveButton] = useState<string>('Интерьеры') // Set default active button

    const handleButtonClick = (buttonName: string) => {
        setActiveButton(buttonName)
    }




    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>

            <div>
                <p className='text-[26px] font-jost leading-[32px] 2xl:text-[50px] 2xl:leading-[59px] mb-[20px] 2xl:mb-[30px]'>
                    Наши проекты
                </p>
            </div>

            <div className='flex flex-col mt-[25px] 2xl:mt-[40px]'>
                <div className='flex flex-row '>
                    <button
                        onClick={() => handleButtonClick('Интерьеры')}
                        className={`pb-[12px] px-[10px] 2xl:px-[40px]  border-b-2 ${activeButton === 'Интерьеры' ? 'text-[#222E51] border-b-[#222E51] font-medium' : 'text-[#000000] border-b'
                            }`}
                    >
                        <p className='text-[16px] leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]'>Интерьеры</p>
                    </button>
                    <button
                        onClick={() => handleButtonClick('Архитектура')}
                        className={`pb-[12px] px-[10px] 2xl:px-[40px]  border-b-2 ${activeButton === 'Архитектура' ? 'text-[#222E51] border-b-[#222E51] font-medium' : 'text-[#000000] border-b'
                            }`}
                    >
                        <p className='text-[16px] leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]'>Архитектура</p>
                    </button>
                    <button
                        onClick={() => handleButtonClick('Дизайн')}
                        className={`pb-[12px] px-[10px] 2xl:px-[40px]  border-b-2 ${activeButton === 'Дизайн' ? 'text-[#222E51] border-b-[#222E51] font-medium' : 'text-[#000000] border-b'
                            }`}
                    >
                        <p className='text-[16px] leading-[23.12px] 2xl:text-[24px] 2xl:leading-[34.68px]'>Дизайн</p>
                    </button>
                </div>

                <div className='mt-[20px] 2xl:mt-[30px] flex flex-col gap-[12px] 2xl:flex-row 2xl:flex-wrap'>
                    {data.map((item , index) => (
                    <Image  key={index} src={item.path} alt='' width={467} height={350} quality={100} className='object-cover 2xl:w-[32%]'/>
                    ))}
                 </div>

                 <div className='w-[50%] 2xl:w-[18%] mx-auto flex items-center justify-center mt-[40px] 2xl:mt-[60px]'>
                    <Link href='/project' className='buttonBlue w-full'>
                    Смотреть все
                    </Link>
                 </div>
            </div>
        </div>
    )
}

export default Projects