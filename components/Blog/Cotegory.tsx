import { FC } from 'react'
import Image from 'next/image'


// IMages
import Arhitek from '@/public/cotegory/ar.png'
import Interyer from '@/public/cotegory/interyer.png'
import Logo from '@/public/cotegory/logo.png'
import Mirovoy from '@/public/cotegory/mirovoy.png'
import Tex from '@/public/cotegory/tex.png'
import Urbanistika from '@/public/cotegory/urbanistika.png'



const CotegoryBlog: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[100px]'>
            <p className='text-titleDark font-jost 2xl:text-[40px] uppercase'>Категории блога</p>
            <div className='2xl:mt-[30px] flex flex-col 2xl:flex-row gap-[20px] overflow-hidden'>
                <div className='relative 2xl:w-[32%] bg-[#F7F8FA] 2xl:h-[286px]'>
                    <div className='flex flex-col 2xl:mt-[30px] 2xl:ml-[30px]'>
                        <p className='2xl:text-[30px] text-titleDark font-jost'>Архитектура</p>
                        <p className='2xl:text-[20px] font-medium text-[#222E51] font-jost mt-1'>Читать статьи</p>
                    </div>
                    <div className='absolute bottom-[-20px] right-[-10px] w-[150px] h-[150px]'>
                        <Image src={Arhitek} width={120} alt='cotegory-image' height={120} className='object-cover w-full h-full' />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CotegoryBlog