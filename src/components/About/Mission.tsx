"use client"
import useLocale from '@/hooks/useLocale'
import { FC } from 'react'



const MissionData = [
    {
        number: '01',
        title: {
            ru: 'Создание сообщества архитекторов',
            uz: 'Meʼmorlar hamjamiyatini yaratish',
            en: 'Creating an architects’ community'
        },
        description: {
            ru: 'Создание крупнейшего сообщества архитекторов и дизайнеров в стране',
            uz: 'Mamlakatdagi eng yirik meʼmorlar va dizaynerlar hamjamiyatini yaratish',
            en: 'Establishing the largest community of architects and designers in the country'
        }
    },
    {
        number: '02',
        title: {
            ru: 'Внедрение передовых стандартов',
            uz: 'Ilg‘or standartlarni joriy qilish',
            en: 'Implementing advanced standards'
        },
        description: {
            ru: 'Внедрение международных стандартов в сфере архитектуры и дизайна',
            uz: 'Arxitektura va dizayn sohasida xalqaro standartlarni joriy qilish',
            en: 'Implementing international standards in the field of architecture and design'
        }
    },
    {
        number: '03',
        title: {
            ru: 'Профессиональный рост',
            uz: 'Kasbiy o‘sish',
            en: 'Professional growth'
        },
        description: {
            ru: 'Поддержка профессионального роста членов ассоциации через обучение',
            uz: 'Uyushma aʼzolarining kasbiy o‘sishini taʼlim orqali qo‘llab-quvvatlash',
            en: 'Supporting the professional growth of association members through education'
        }
    }
]




const Misson: FC = () => {
    const locale = useLocale()

    return (
        <div className='mt-[80px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            {/* TITLE */}
            <div>
                <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>

                    {
                        locale === 'ru'
                            ? "Наша миссия и цели"
                            : locale === 'uz'
                                ? "Bizning missiya va maqsadlarimiz"
                                : "Our mission and goals"
                    }

                </p>
                <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] mt-[12px] text-[#414141] font-jost 2xl:mt-[15px]'>

                    {
                        locale === 'ru'
                            ? (
                                <>
                                    Фокус на развитие архитектуры и дизайна в Узбекистане, поддержка <br className='hidden 2xl:block' />
                                    профессионалов и создание единой платформы для обмена опытом
                                </>
                            )
                            : locale === 'uz'
                                ? (
                                    <>
                                        Arxitektura va dizaynni O‘zbekistonda rivojlantirishga e’tibor,<br className='hidden 2xl:block' />
                                        mutaxassislarni qo‘llab-quvvatlash va tajriba almashish uchun yagona platforma yaratish
                                    </>
                                )
                                : (
                                    <>
                                        Focus on the development of architecture and design in Uzbekistan,
                                        support for professionals and the creation of a unified platform for sharing experiences
                                    </>
                                )
                    }

                </p>
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
                            {item.title[locale].split('\n').map((line, lineIndex) => (
                                <p key={lineIndex} className="text-[22px] leading-[29px] uppercase 2xl:text-[30px] 2xl:leading-[40px] font-jost ">
                                    {line}
                                </p>
                            ))}
                            <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] font-jost text-[#414141] mt-[8px] 2xl:mt-[10px]'>{item.description[locale]}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Misson