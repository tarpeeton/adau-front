'use client'
import { FC, useState } from 'react'
import { IoIosArrowDown } from "react-icons/io"
// image
import HowWorkImage from '@/public/HowWorkImage.jpg'

const AccardionData = [
    { id: '01', title: 'Консультация и обсуждение задачи клиента', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
    { id: '02', title: 'Разработка индивидуального плана', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
    { id: '03', title: 'Согласование проекта и его реализация', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
    { id: '04', title: 'Итоговая проверка и передача результата', answer: 'Мы начинаем с детальной консультации, чтобы понять ваши цели и задачи. На этом этапе мы обсуждаем ключевые детали проекта, формируем общее видение и определяем путь реализации' },
]

const FaqComponent: FC = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
      setActiveId(activeId === id ? null : id);
  };
  return (
    <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
          <p className='text-[26px]  uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>
          Часто задаваемые вопросы
          </p>
          <div className='mt-[20px] 2xl:mt-[70px] flex flex-col gap-[20px] 2xl:gap-[40px]'>
          {AccardionData.map((item) => (
                        <div key={item.id} className='border-b border-b-[#E4E4E4] pb-[20px]'>
                            <button
                                onClick={() => toggleAccordion(item.id)}
                                className='flex flex-row justify-between w-full items-center'
                            >
                                
                                <div className='w-[82%] text-left'>
                                    <p className='text-[18px] text-[#414141] 2xl:text-[#121212] font-jost leading-[22px] font-medium  2xl:text-[25px] 2xl:leading-[30px] '>{item.title}</p>
                                </div>
                                <div>
                                    <IoIosArrowDown
                                        className={`text-titleDark 2xl:text-[25px] transform transition-transform ease-in-out duration-300 ${activeId === item.id ? 'rotate-180' : 'rotate-0'}`}
                                    />
                                </div>
                            </button>
                            {activeId === item.id && (
                                <div className='mt-[10px] font-jost  2xl:text-[20px] mx-auto text-[15px] text-[#414141] leading-[20px]'>
                                    {item.answer}
                                </div>
                            )}
                        </div>
                    ))}
          </div>
          <div className='w-full flex items-center justify-center mt-[30px]'>
        <button className='buttonBlue w-[60%] mdx:w-[50%] 2xl:w-[20%]'>
        Задать вопрос
        </button>
          </div>
    </div>
  );
};

export default FaqComponent;