"use client"
import { FC } from 'react'



const MissionData = [
    { number: '01', title: 'Создание сообщества архитекторов', description: 'Создание крупнейшего сообщества архитекторов и дизайнеров в стране' },
    { number: '02', title: 'Внедрение передовых стандартов', description: 'Внедрение международных стандартов в сфере архитектуры и дизайна' },
    { number: '03', title: `профессиональный\nрост`, description: 'Поддержка профессионального роста членов ассоциации через обучение' },
]




const Misson: FC = () => {
    return (
        <div className='mt-[80px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            {/* TITLE */}
            <div>
                <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Наша миссия и цели</p>
                <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] mt-[12px] text-[#414141] font-jost 2xl:mt-[15px]'>Фокус на развитие архитектуры и дизайна в Узбекистане, поддержка <br className='hidden 2xl:block' /> профессионалов и создание единой платформы для обмена опытом</p>
            </div>
            {/* CARD */}
            <div className='flex flex-col 2xl:flex-row mt-[20px] 2xl:mt-[50px] gap-[20px]'>
                {MissionData.map((item, index) => (
                    <div key={index} className='py-[25px] px-[20px] p-[30px] flex flex-col justify-between bg-[#F7F8FA] 2xl:h-[380px]'>
                        {/* NUMBER */}
                        <div>
                            <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#222E51] font-jost'>{item.number}</p>
                        </div>
                        {/* INFO */}
                        <div className='mt-[40px] 2xl:mt-0  2xl:h-[140px]'>
                            {item.title.split('\n').map((line, lineIndex) => (
                                <p key={lineIndex} className="text-[22px] leading-[29px] uppercase 2xl:text-[30px] 2xl:leading-[40px] font-jost ">
                                    {line}
                                </p>
                            ))}
                            <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] font-jost text-[#414141] mt-[8px] 2xl:mt-[10px]'>{item.description}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Misson