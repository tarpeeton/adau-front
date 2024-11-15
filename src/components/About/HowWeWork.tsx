'use client'
import { FC, useState } from 'react'
import Image from 'next/image'
import { IoIosArrowDown } from "react-icons/io"
// image
import HowWorkImage from '@/public/HowWorkImage.jpg'
import ContactUs from '../Modal/contacts-modal'





const AccardionData = [
    { id: '01', title: 'Консультация и обсуждение задачи клиента', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
    { id: '02', title: 'Разработка индивидуального плана', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
    { id: '03', title: 'Согласование проекта и его реализация', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
    { id: '04', title: 'Итоговая проверка и передача результата', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
]

const HowWeWork: FC = () => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const [open ,setOpen] = useState(false)
    
    const toggleAccordion = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };
    const handleChangeStatus = () => setOpen(!open)

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
             <p className='text-[26px] hidden 2xl:block uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Как мы работаем</p>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between'>
                <p className='text-[26px] 2xl:hidden uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>Как мы работаем</p>
                {/* Image */}
                <div className='h-[250px] mt-[20px] 2xl:h-[650px] 2xl:w-[45%] 2xl:mt-[-50px]'>
                    <Image src={HowWorkImage} quality={100} width={607} height={701} alt='HowWork Image' className='w-full h-full object-cover' />
                </div>
                {/* Accordion */}
                <div className='mt-[30px] flex flex-col gap-[25px] 2xl:gap-[40px] 2xl:order-[-1] 2xl:w-[50%] 2xl:mt-[60px] 2xl:min-h-[540px] 2xl:justify-between'>
                    {AccardionData.map((item) => (
                        <div key={item.id} className='border-b border-b-[#E4E4E4] pb-[20px]'>
                            <button
                                onClick={() => toggleAccordion(item.id)}
                                className='flex flex-row justify-between w-full'
                            >
                                <div className='text-title80 2xl:text-[#222E51] text-[18px] 2xl:text-[25px] font-medium'>{item.id}</div>
                                <div className='w-[82%] text-left'>
                                    <p className='text-[18px] leading-[22px] font-medium text-title80 2xl:text-[#222E51] 2xl:text-[25px] 2xl:leading-[30px] '>{item.title}</p>
                                </div>
                                <div>
                                    <IoIosArrowDown
                                        className={`text-[#222E51] 2xl:text-[25px] transform transition-transform ease-in-out duration-300 ${activeId === item.id ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </div>
                            </button>
                            {activeId === item.id && (
                                <div className='mt-[10px] w-[82%] 2xl:text-[20px] mx-auto text-[15px] text-[#414141] leading-[20px]'>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
                    <button onClick={handleChangeStatus} className='buttonBlue w-[60%] 2xl:w-[30%] '>
                    Заказать консульатцию
                    </button>
        <ContactUs visible={open} close={handleChangeStatus}/>
                </div>
            </div>
        </div>
    );
};

export default HowWeWork;
