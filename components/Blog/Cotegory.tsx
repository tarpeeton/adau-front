import { FC } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { GrLinkNext } from "react-icons/gr";
// IMages
import Arhitek from '@/public/cotegory/ar.png'
import Interyer from '@/public/cotegory/interyer.png'
import Logo from '@/public/cotegory/logo.png'
import Mirovoy from '@/public/cotegory/mirovoy.png'
import Tex from '@/public/cotegory/tex.png'
import Urbanistika from '@/public/cotegory/urbanistika.png'



const Data = [
    { title: 'Архитектура', link: '', url: Arhitek },
    { title: 'Дизайн интерьеров', link: '', url: Interyer },
    { title: 'Мировые тренды', link: '', url: Mirovoy },
    { title: 'Технологии в строительстве', link: '', url: Tex },
    { title: 'Урбанистика', link: '', url: Urbanistika },
    { title: 'Новости ассоциации', link: '', url: Logo },
]



const CotegoryBlog: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[24px] text-titleDark font-jost 2xl:text-[40px] uppercase'>Категории блога</p>
            <div className='mt-[20px] 2xl:mt-[30px] flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[20px] overflow-hidden'>
                {Data.map((item , index) => (
                    <div key={index} className='relative h-[200px] w-full 2xl:w-[32%] bg-[#F7F8FA] 2xl:h-[320px] overflow-hidden'>
                        <div className='flex flex-col 2xl:mt-[30px] 2xl:ml-[30px] mt-[20px] ml-[20px]'>
                            <p className=' text-[20px] 2xl:text-[30px] text-titleDark font-jost'>{item.title}</p>
                            <Link href={`${item.link}`} className='2xl:text-[20px] font-medium text-[#222E51] font-jost mt-1 flex flex-row items-center'>Читать статьи <GrLinkNext className='ml-[5px]' /> </Link>
                        </div>
                        <div className='absolute bottom-[-20px] w-[200px] h-[200px] right-[0] 2xl:w-[257px] 2xl:h-[250px] '>
                            <Image src={item.url} width={400} quality={100} alt='cotegory-image' height={300} className='object-contain w-full h-full' />
                        </div>
                    </div>
                ))}


            </div>
        </div>
    )
}

export default CotegoryBlog