import { FC } from 'react'


const AboutCase: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div>

            </div>
            <p className='2xl:text-[45px] uppercase text-titleDark font-jost'>О проекте</p>
            <p className='2xl:mt-[20px] 2xl:text-[20px] 2xl:leading-[24px] text-title80 2xl:w-[60%] font-jost'>Green Horizon — это проект экологически устойчивого многофункционального комплекса, интегрированного в природный ландшафт и ориентированного на гармонию с окружающей средой. Он включает жилые и коммерческие помещения, общественные пространства и рекреационные зоны, призванные создать комфортное, функциональное и экологически чистое пространство</p>
            <div className='flex flex-col gap-[20px] 2xl:flex-row 2xl:justify-between 2xl:mt-[40px]'>
                <div className='2xl:p-[30px] border border-[#E4E4E4] 2xl:w-[49%]'>
                    <div className=' border-b border-b-[#E4E4E4] pb-[30px]'>
                        <p className=' uppercase text-titleDark text-[] 2xl:text-[30px] font-jost'>Задачи</p>
                    </div>
                    <div className=' mt-[] 2xl:mt-[30px] w-[97%] ml-auto'>
                        <ul className='flex flex-col gap-[20px]'>
                            <li className=' list-disc text-[] 2xl:text-[20px] 2xl:leading-[24px] font-jost'>Снизить энергопотребление на 40% по сравнению со стандартным городским комплексом</li>
                            <li className=' list-disc text-[] 2xl:text-[20px] 2xl:leading-[24px] font-jost'>Максимально сохранить местную флору и фауну на участке строительства</li>
                            <li className=' list-disc text-[] 2xl:text-[20px] 2xl:leading-[24px] font-jost'>Интегрировать элементы "зелёной" архитектуры, такие как зеленые крыши и фасады, системы сбора дождевой воды, солнечные панели</li>
                        </ul>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default AboutCase