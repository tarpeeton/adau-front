import Image from 'next/image'
import { FC } from 'react'
import AbourUsImage from '@/public/about.jpg'



const About: FC = () => {
    return (
        <div className='mt-[60px] 2xl:mt-[100px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <div className='flex flex-col '>
                <div className='2xl:flex 2xl:justify-end'>
                    <h1 className='text-[26px] font-normal  2xl:text-[50px] 2xl:leading-[62px]  font-jost leading-[32px]'>
                        <span className='text-[#222E51] font-medium'>ADAU</span>
                        – Ассоциация Дизайнеров <div className='2xl:hidden'>и Архитекторов <br /> Узбекистана</div>
                    </h1>
                </div>
                <p className=' hidden 2xl:block  2xl:text-[50px] 2xl:leading-[62px]'>
                    и Архитекторов Узбекистана
                </p>
                <div className='flex flex-col 2xl:flex-row mt-[20px] 2xl:mt-[40px]'>
                    <Image src={AbourUsImage} alt='AbourUsImage' width={850} height={500} quality={100} className='' />
                    <p className=' 2xl:order-[-1] mt-[20px] 2xl:mt-0 text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>
                        Элитное объединение самых развивающихся и талантливых представителей индустрии



                    </p>
                    <p className=' 2xl:order-[-1] mt-[20px] 2xl:mt-0 text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                        Куда идти начинающему дизайнеру за знаниями? «В дизайн-школу»,- ответ очевиден А вот вопрос: «Куда идти опытному дизайнеру или владельцу студии?» – многих поставит в ступор


                    </p>
                    <p className=' 2xl:order-[-1] mt-[20px] 2xl:mt-0 text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                        Именно поэтому мы взяли на себя ответственность по объединению самых активных участников индустрии дизайна интерьера и архитектуры, и создали экспертное объединение профессионалов, которые способны дать ответы на самые сложные вопросы
                    </p>



                </div>
            </div>
        </div>
    )
}

export default About