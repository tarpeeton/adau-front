"use client"
import { FC, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import ContactUs from '../Modal/contacts-modal'

const WhyChooseData = [
    { number: '01', title: 'Команда профессионалов', description: 'Профессиональная команда с многолетним опытом' },
    { number: '02', title: 'Индивидуальный подход', description: 'Индивидуальный подход к каждому проекту' },
    { number: '03', title: 'Гарантия\nкачества', description: 'Гарантия качества и соблюдения сроков' },
    { number: '04', title: 'Партнеры', description: 'Широкая сеть партнёров и доступ к эксклюзивным ресурсам' },
]

interface IWhyChooseUs {
    title: string
}

const WhyChooseUs: FC<IWhyChooseUs> = ({ title }) => {
    const [open, setOpen] = useState(false)
    const handleChangeStatus = () => setOpen(!open)

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[200px]'>
            <div className='flex flex-col'>
                {/* title and description */}
                <div>
                    <p className='text-[26px] uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Почему клиенты <br className='2xl:hidden' /> выбирают нас</p>
                    <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] mt-[12px] text-[#414141] font-jost 2xl:mt-[15px]'>
                        Мы объединяем опыт и креативные решения. Наши клиенты выбирают нас за качество, надежность и внимание к их уникальным потребностям.
                    </p>
                </div>
                {/* CARD */}
                <div className='flex flex-col 2xl:flex-row mt-[20px] 2xl:mt-[50px] gap-[20px]'>
                    {WhyChooseData.map((item, index) => (
                        <div
                            key={index}
                            className=' py-[25px] px-[20px] p-[30px] flex flex-col justify-between bg-[#F7F8FA] 2xl:h-[380px] transition-transform duration-800 ease-in-out 2xl:w-[345px] cursor-pointer'
                            onMouseEnter={(e) => {
                                gsap.to(e.currentTarget, {
                                    backgroundColor: '#222E51',
                                    color: '#ffffff',
                                    duration: 0.7,
                                    ease: 'power2.out',
                                })
                            }}
                            onMouseLeave={(e) => {
                                gsap.to(e.currentTarget, {
                                    backgroundColor: '#F7F8FA',
                                    color: '#414141',
                                    duration: 0.6,
                                    ease: 'power2.out',
                                })
                            }}
                        >
                            {/* NUMBER */}
                            <div>
                                <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] font-jost'>{item.number}</p>
                            </div>
                            {/* INFO */}
                            <div className='mt-[40px] 2xl:mt-0 2xl:h-[140px]'>
                                {item.title.split('\n').map((line, lineIndex) => (
                                    <p key={lineIndex} className="text-[22px] leading-[29px] uppercase 2xl:text-[30px] 2xl:leading-[40px] font-jost">
                                        {line}
                                    </p>
                                ))}
                                <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] font-jost mt-[8px] 2xl:mt-[10px]'>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* button */}
                <div className='mt-[20px] 2xl:mt-[40px]'>
                    <button onClick={handleChangeStatus} className='buttonBlue'>
                        {title}
                    </button>
                    <ContactUs visible={open} close={handleChangeStatus} />
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs
