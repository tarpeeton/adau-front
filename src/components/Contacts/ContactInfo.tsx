"use client"
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { sendButtonCount } from '@/lib/api'
import useLocale from '@/hooks/useLocale'
import { client } from "@/sanity/lib/client"

interface IContactInfo {
    phone: string,
    email: string,
    officeAddress:  {ru: string , uz: string , en:string},
    workingHours: {ru: string , uz: string , en:string},

}


const ContactInfo: FC = () => {
    const locale = useLocale()
    const [info, setInfo] = useState<IContactInfo | null>(null)

    const handleButton = async (button: string) => {
        await sendButtonCount(button)
    }

    useEffect(() => {
        const fetchContactInfo = async () => {
            try {
                const contactInfo = await client.fetch<IContactInfo>(`
                    *[_type == "contactInfo"][0]{
                        phone,
                        email,
                        officeAddress,
                        workingHours
                    }
                `);
                setInfo(contactInfo);
            } catch (error) {
                console.error('Error fetching contact info:', error);
            }
        };
        fetchContactInfo();
    }, [locale]);

    return (
        <div className='mt-[60px] 2xl:mt-[100px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[26px] 2xl:text-[45px] text-titleDark font-jost uppercase'>
                {
                    locale === 'ru'
                        ? "Наши контакты"
                        : locale === 'uz'
                            ? "Bizning kontaktlarimiz"
                            : "Our contacts"
                }

            </p>
            <div className='flex flex-col 2xl:mt-[30px] mt-[20px]'>
                <div className=' flex flex-col'>
                    <div className='2xl:py-[30px] py-[25px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                        <p className='2xl:text-[30px] text-titleDark opacity-[40%] text-[15px]'>
                            {
                                locale === 'ru'
                                    ? "Телефон"
                                    : locale === 'uz'
                                        ? "Telefon"
                                        : "Phone"
                            }

                        </p>
                        <div className='flex flex-col gap-[5px] 2xl:items-end'>
                            <p className='text-titleDark 2xl:text-[30px] text-[20px]'>
                                {info?.phone}
                            </p>
                            <Link
                                href={`tel:${info?.phone}`}
                            >
                                <button
                                    onClick={(e) => {
                                        e.stopPropagation(); // Prevents interfering with the link navigation
                                        handleButton('phone');
                                    }}
                                    className='text-[#222E51] underline decoration-solid decoration-skip-ink decoration-0 text-[14px] 2xl:text-[20px]'
                                >
                                    {
                                        locale === 'ru'
                                            ? "Позвонить"
                                            : locale === 'uz'
                                                ? "Qo‘ng‘iroq qilish"
                                                : "Call"
                                    }

                                </button>

                            </Link>

                        </div>
                    </div>
                    <div className='2xl:py-[30px] py-[25px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                        <p className='2xl:text-[30px] text-titleDark opacity-[40%] text-[15px]'>
                            {
                                locale === 'ru'
                                    ? "Электронная почта"
                                    : locale === 'uz'
                                        ? "Elektron pochta"
                                        : "Email"
                            }

                        </p>
                        <div className='flex flex-col gap-[5px] 2xl:items-end'>
                            <p className='text-titleDark 2xl:text-[30px] text-[20px]'>
                            {info?.email}

                            </p>
                            <Link
                                href={`mailto:info.${info?.email}`}
                                className='text-[#222E51] underline decoration-solid decoration-skip-ink decoration-0 text-[14px] 2xl:text-[20px]'
                            >
                                {
                                    locale === 'ru'
                                        ? "Отправить E-mail"
                                        : locale === 'uz'
                                            ? "E-mail ga Yozish"
                                            : "Send E-mail"
                                }

                            </Link>

                        </div>
                    </div>
                    <div className='2xl:py-[30px] py-[25px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                        <p className='2xl:text-[30px] text-titleDark opacity-[40%] text-[15px]'>
                            {
                                locale === 'ru'
                                    ? "Адрес офиса"
                                    : locale === 'uz'
                                        ? "Ofis manzili"
                                        : "Office address"
                            }

                        </p>
                        <div className='flex flex-col gap-[5px] 2xl:items-end'>
                            <p className='text-titleDark 2xl:text-[30px] text-[20px]'>
                               {info?.officeAddress[locale]}

                            </p>
                            <Link
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${info?.officeAddress.ru}`)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='text-[#222E51] underline decoration-solid decoration-skip-ink decoration-0 text-[14px] 2xl:text-[20px]'
                            >
                                {
                                    locale === 'ru'
                                        ? "Проложить маршрут"
                                        : locale === 'uz'
                                            ? "Yo‘nalishni korish"
                                            : "Get directions"
                                }

                            </Link>

                        </div>
                    </div>
                    <div className='2xl:py-[30px] py-[25px] border-t border-t-[#E4E4E4] 2xl:flex 2xl:flex-row 2xl:justify-between'>
                        <p className='2xl:text-[30px] text-titleDark opacity-[40%] text-[15px]'>
                            {
                                locale === 'ru'
                                    ? "Часы работы"
                                    : locale === 'uz'
                                        ? "Ish vaqti"
                                        : "Working hours"
                            }

                        </p>
                        <div className='flex flex-col gap-[5px] 2xl:items-end'>
                            <p className='text-titleDark 2xl:text-[30px] text-[20px]'>
                                {info?.workingHours[locale]}
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactInfo