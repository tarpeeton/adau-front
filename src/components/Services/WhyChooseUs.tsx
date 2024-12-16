"use client"
import { FC, useState, useEffect } from 'react'
// import gsap from 'gsap'
import ContactUs from '../Modal/contacts-modal'
import { client } from '@/sanity/lib/client'
import useLocale from '@/hooks/useLocale'

interface WhyChooseItem {
    number: string
    title: {
        uz: string
        ru: string
        en: string
    }
    description: {
        uz: string
        ru: string
        en: string
    }
}

interface IWhyChooseUs {
    title: {
        ru: string
        uz: string
        en: string
    }
    project: boolean
}

const WhyChooseUs: FC<IWhyChooseUs> = ({ title, project }) => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState<WhyChooseItem[]>([])
    const locale = useLocale()


    useEffect(() => {
        const fetchData = async () => {
            const query = `*[_type == "whyChooseUs"] | order(number asc)`
            const result = await client.fetch(query)
            setData(result)
        }

        fetchData()
    }, [])

    const handleChangeStatus = () => setOpen(!open)

    const getTitle = (item: WhyChooseItem) => {
        return item.title[locale as keyof typeof item.title] || item.title.ru
    }

    const getDescription = (item: WhyChooseItem) => {
        return item.description[locale as keyof typeof item.description] || item.description.ru
    }

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[200px]'>
            <div className='flex flex-col'>
                {/* title and description */}
                <div>
                    <p className='text-[26px] uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] '>
                        {locale === 'ru'
                            ? <>Почему клиенты <br className='2xl:hidden' /> выбирают нас</>
                            : locale === 'uz'
                                ? <>Nega mijozlar <br className='2xl:hidden' /> bizni tanlashadi</>
                                : <>Why Clients <br className='2xl:hidden' /> Choose Us</>
                        }


                    </p>
                    <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px] mt-[12px] text-[#414141]  2xl:mt-[15px]'>
                        {locale === 'ru'
                            ? "Мы объединяем опыт и креативные решения. Наши клиенты выбирают нас за качество, надежность и внимание к их уникальным потребностям."
                            : locale === 'uz'
                                ? "Biz tajriba va ijodiy yechimlarni birlashtiramiz. Mijozlarimiz bizni sifat, ishonchlilik va ularning o‘ziga xos ehtiyojlariga bo‘lgan eʼtibor uchun tanlaydilar."
                                : "We combine experience and creative solutions. Our clients choose us for quality, reliability, and attention to their unique needs."
                        }
                    </p>
                </div>
                {/* CARD */}
                <div className=' 2xl:mt-[50px]  grid grid-cols-1 slg:grid-cols-2 2xl:grid-cols-4 mt-[20px] gap-4'>
                    {data.map((item, index) => (
                        <div
                            key={index}
                            className='py-[25px] px-[20px] p-[30px] flex flex-col justify-between bg-[#F7F8FA] 2xl:h-[380px] transition-transform duration-800 ease-in-out 2xl:w-[345px] cursor-pointer'
                        >
                            {/* NUMBER */}
                            <div>
                                <p className='text-[26px] leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] '>{item.number}</p>
                            </div>
                            {/* INFO */}
                            <div className='mt-[40px] 2xl:mt-0 2xl:h-[140px]'>
                                <p className="text-[22px] leading-[29px] uppercase 2xl:text-[30px] 2xl:leading-[40px] ">
                                    {getTitle(item)}
                                </p>
                                <p className='text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[24px]  mt-[8px] 2xl:mt-[10px]'>
                                    {getDescription(item)}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* button */}
                {project && (
                    <div className='mt-[20px] 2xl:mt-[40px]'>
                        <button onClick={handleChangeStatus} className='buttonBlue'>
                            {title[locale]}
                        </button>
                        <ContactUs visible={open} close={handleChangeStatus} />
                    </div>
                )}

            </div>
        </div>
    )
}

export default WhyChooseUs
