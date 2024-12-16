'use client'
import { FC, useState, useEffect } from 'react'
import { IoIosArrowDown } from "react-icons/io"
import QuestionModal from '../Modal/question-modal'
import { client } from "@/sanity/lib/client"
import useLocale from '@/hooks/useLocale'





interface FaqDataInterface {
    question: { ru: string, uz: string, en: string },
    answer: { ru: string, uz: string, en: string }
}

const FaqComponent: FC = () => {
    const [activeId, setActiveId] = useState<number | null>(null);
    const [data, setData] = useState<FaqDataInterface[] | []>([])
    const locale = useLocale()

    const [open, setOpen] = useState(false)
    const toggleAccordion = (index: number) => {
        setActiveId(activeId === index ? null : index);
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                const query = `
              *[_type == "faq"] {
                question,
                answer
              }
            `;
                const featuredBlogs: FaqDataInterface[] = await client.fetch(query);
                setData(featuredBlogs);
            } catch (error) {
                console.debug(error, 'Error fetching data');
            }
        };

        fetchData();
    }, [locale]);
    // faq


    const handleChangeStatus = () => setOpen(!open)


    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[26px]  uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] '>
            {locale === 'ru' 
        ? "Часто задаваемые вопросы" 
        : locale === 'uz' 
        ? "Ko‘p beriladigan savollar" 
        : "Frequently Asked Questions"
    }
            </p>
            <div className='mt-[20px] 2xl:mt-[70px] flex flex-col gap-[20px] 2xl:gap-[40px]'>
                {data.map((item, index) => (
                    <div key={index} className='border-b border-b-[#E4E4E4] pb-[20px]'>
                        <button
                            onClick={() => toggleAccordion(index)}
                            className='flex flex-row justify-between w-full items-center'
                        >

                            <div className='w-[82%] text-left'>
                                <p className='text-[18px] text-[#414141] 2xl:text-[#121212]  leading-[22px] font-medium  2xl:text-[25px] 2xl:leading-[30px] '>{item.question[locale]}</p>
                            </div>
                            <div>
                                <IoIosArrowDown
                                    className={`text-titleDark 2xl:text-[25px] transform transition-transform ease-in-out duration-300 ${activeId === index ? 'rotate-180' : 'rotate-0'}`}
                                />
                            </div>
                        </button>
                        {activeId === index && (
                            <div className='mt-[10px]   2xl:text-[20px] mx-auto text-[15px] text-[#414141] leading-[20px]'>
                                {item.answer[locale]}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className='w-full flex items-center justify-center mt-[30px]'>
                <button onClick={handleChangeStatus} className='buttonBlue w-[60%] mdx:w-[50%] 2xl:w-[20%]'>
                    {locale === 'ru'
                        ? "Задать вопрос"
                        : locale === 'uz'
                            ? "Savol berish"
                            : "Ask a Question"
                    }
                </button>
                <QuestionModal visible={open} close={handleChangeStatus} />
            </div>
        </div>
    );
};

export default FaqComponent;