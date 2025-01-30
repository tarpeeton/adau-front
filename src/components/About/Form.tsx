"use client"
import { FC, useState, useRef } from 'react'
import Image from 'next/image'
import axios from 'axios'




// icons
import { IoIosArrowDown } from "react-icons/io"
import { Triangle } from 'react-loader-spinner'



import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'
import useLocale from '@/hooks/useLocale'




interface ISomeFormProps {
    isTextOpen: boolean
}
interface SelectedItem {
    ru: string;
    uz: string;
    en: string;
}

const SomeForm: FC<ISomeFormProps> = ({ isTextOpen }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [openSelect, setOpenSelect] = useState(false)
    const [selectedMessageType, setSelectMessageType] = useState<SelectedItem>({
        ru: 'Тема сообщения',
        uz: 'Xabar mavzusi',
        en: 'Message Topic',
      });
    const [loadingDataPost, setLoadingDataPost] = useState(false)
    const locale = useLocale()

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
        phone: "",
        companyName: ""
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleOpenSelect = () => setOpenSelect(!openSelect)

    const handleMessageType = (msg: SelectedItem) => {
        setSelectMessageType(msg)
        setOpenSelect(false)
    }






    const sendDataForm = async () => {
        setLoadingDataPost(true)

        try {
            // Creating FormData and adding form fields
            const formPayload = new FormData()
            formPayload.append('name', formData.name)
            formPayload.append('phone', formData.phone)
            formPayload.append('email', formData.email)
            formPayload.append('text', formData.text)
            formPayload.append('companyName', formData.companyName)
            formPayload.append('theme', selectedMessageType.ru)

            // Add the file to FormData if it exists
            if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
                formPayload.append('file', fileInputRef.current.files[0])
            }

            // Send the data via axios POST request
            const response = await axios.post('https://adau.result-me.uz/api/form/message', formPayload, {
                headers: {
                    'API-Key': 'VJs4krbxFMj78Q5IsUIkdZdi8A1MSItugxlHJiwRALyE7c8lCiGcLY6OsugGPzRmjSJ3nzdFh6iUZD9lmYeSzPpm7FTwcGttS0js',
                    'Content-Type': 'multipart/form-data'
                }
            })

            console.log('Form submitted successfully:', response.data)
            setFormData({
                name: '',
                email: '',
                text: '',
                phone: "",
                companyName: ""
            })
            setSelectMessageType({
                ru: 'Тема сообщения',
                uz: 'Xabar mavzusi',
                en: 'Message Topic',
              })
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setLoadingDataPost(false)
        }
    }

    return (
        <div className='mt-[80px] 2xl:mt-[200px] py-[40px] 2xl:py-[100px] px-[16px] bg-[#222E51] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-col 2xl:flex-row 2xl:justify-between 2xl:items-center'>
                <div className='2xl:flex 2xl:flex-col  2xl:w-[40%]' >
                    <p className='text-[26px] 2xl:text-[50px] uppercase leading-[32px] 2xl:leading-[62px] font-jost text-titleWhite'>
                        {
                            locale === 'ru'
                                ? <>Отправить нам <b /> сообщение</>
                                : locale === 'uz'
                                    ? <>Bizga  xabar <b /> yuborish</>
                                    : <>Send us a <b /> message</>
                        }

                    </p>
                    <p className='mt-[10px] hidden text-[20px] text-white font-jost 2xl:block opacity-[80%]' >
                        {
                            locale === 'ru'
                                ? "Напишите нам, и мы ответим в кратчайшие сроки!"
                                : locale === 'uz'
                                    ? "Bizga yozing, biz  qisqa vaqt ichida javob beramiz!"
                                    : "Write to us, and we will respond as soon as possible!"
                        }

                    </p>
                    <div className=' hidden 2xl:block mt-[30px] relative border-t border-t-[#636F93]' >
                        <div className='absolute top-[40px]  z-50'>
                            <p className='text-[25px] text-white font-jost'>
                            +998 78 113 60 71
                            </p>
                            <p className='text-[25px] text-white font-jost mt-[4px]'>adau.uzbekistan@gmail.com</p>
                            <p className='text-[25px] text-white font-jost mt-[4px]'>
                                {
                                    locale === 'ru'
                                        ? "Город Ташкент, Алмазарский район, улица Нурафшон, дом 50/7."
                                        : locale === 'uz'
                                            ? "Toshkent shahri, Olmazor tumani, Nurafshon ko‘chasi, 50/7-uy."
                                            : "City of Tashkent, Almazar district, Nurafshon street, house 50/7."
                                }

                            </p>
                        </div>
                        <div className=' mt-[40px] flex items-center gap-[8px] justify-center 2xl:items-end 2xl:mt-[210px] '>
                            <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                            <Image src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                            <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />
                            <Image src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />

                        </div>
                    </div>
                </div>

                <p className='mt-[10px] text-[15px] text-white font-jost 2xl:hidden opacity-[80%]' >

                    {
                        locale === 'ru'
                            ? <>Напишите нам, и мы ответим в кратчайшие <b className='mdl:hidden' /> сроки!</>
                            : locale === 'uz'
                                ? <>Bizga yozing, biz  qisqa <b className='mdl:hidden' /> vaqt ichida javob beramiz!</>
                                : <>Write to us, and we will respond as soon as possible <b className='mdl:hidden' />!</>
                    }

                </p>
                <div className='inputs flex flex-col mt-[30px] 2xl:w-[50%] 4xl:w-[30%] 2xl:items-center'>
                    <div className='relative 2xl:w-[60%] '>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                        />
                        <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            {
                                locale === 'ru'
                                    ? "Имя и фамилия *"
                                    : locale === 'uz'
                                        ? "Ism va familiya *"
                                        : "First and Last Name *"
                            }
                        </label>
                    </div>
                    <div className='relative mt-[20px] 2xl:w-[60%] 2xl:mt-[30px] '>
                        <input
                            type="tel"
                            id="phone"
                            value={formData.phone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/[^0-9+ ]/g, '');
                                setFormData({ ...formData, phone: value });
                            }}
                            onKeyPress={(e) => {
                                const pattern = /[0-9+ ]/;
                                const inputChar = String.fromCharCode(e.charCode);
                                if (!pattern.test(inputChar)) {
                                    e.preventDefault();
                                }
                            }}
                            pattern="[0-9+ ]+"
                            required
                            className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                        />
                        <label htmlFor="phone" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">{
                            locale === 'ru'
                                ? "Номер телефона *"
                                : locale === 'uz'
                                    ? "Telefon raqami *"
                                    : "Phone number *"
                        }
                        </label>
                    </div>
                    <div className='relative mt-[20px] 2xl:w-[60%] 2xl:mt-[30px]' >
                        <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                            placeholder=" "
                        />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">E-mail *</label>
                    </div>
                    <div className='relative mt-[20px] cursor-pointer 2xl:w-[60%] 2xl:mt-[30px]' >
                        <div onClick={handleOpenSelect} id="floating_outlined_select" className="border border-white px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer flex flex-row justify-between items-center">
                            {selectedMessageType[locale]}
                            <IoIosArrowDown
                                className={`transform transition-transform ease-in-out duration-500 ${openSelect ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </div>
                        <p className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                        {locale === 'ru'
                            ? "Тема сообщения"
                            : locale === 'uz'
                                ? "Xabar mavzusi"
                                : "Message Subject"
                        }
                        </p>
                    </div>
                    {openSelect && (
                        <div className='mt-[5px] flex flex-col gap-[5px] 2xl:w-[60%]' >
                            <button onClick={() => handleMessageType({ru:'Вступить в ассоциацию' , uz: "Assotsiatsiyaga qo'shilish" , en: "Join the Association"})} className='p-[5px] border border-gray-600 flex items-center justify-center text-white font-jost text-[14px]' >
                            {locale === 'ru'
                                    ? "Вступить в ассоциацию"
                                    : locale === 'uz'
                                        ? "Assotsiatsiyaga qo'shilish"
                                        : "Join the Association"
                                }
                            </button>
                            <button onClick={() => handleMessageType({ru:'Стать партнером' , uz: "Hamkor bo'lish" , en: "Become a Partner"})}   className='p-[5px] border border-gray-600 flex items-center justify-center text-white font-jost text-[14px]' >
                            {locale === 'ru'
                                    ? "Стать партнером"
                                    : locale === 'uz'
                                        ? "Hamkor bo'lish"
                                        : "Become a Partner"
                                }
                            </button>
                            <button onClick={() => handleMessageType({ru:'Получить информацию' , uz: "Ma'lumot olish" , en: "Get Information"})} className='p-[5px] border border-gray-600 flex items-center justify-center text-white font-jost text-[14px]' >
                            {locale === 'ru'
                                    ? "Получить информацию"
                                    : locale === 'uz'
                                        ? "Ma'lumot olish"
                                        : "Get Information"
                                }
                            </button>
                        </div>
                    )}

                    {selectedMessageType.ru === 'Получить информацию' && (
                        <div className='relative mt-[20px] 2xl:w-[60%] 2xl:mt-[30px]' >
                            <input
                                type="text"
                                id="text"
                                value={formData.text}
                                onChange={handleInputChange}
                                className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder=" "
                            />
                            <label htmlFor="text" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            {locale === 'ru'
                                    ? "Текст сообщения *"
                                    : locale === 'uz'
                                        ? "Xabar matni *"
                                        : "Message Text *"
                                }</label>
                        </div>
                    )}
                    {selectedMessageType.ru === 'Стать партнером' && (
                        <div className='relative mt-[20px] 2xl:w-[60%] 2xl:mt-[30px]' >
                            <input
                                type="text"
                                id="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer"
                                placeholder=" "
                            />
                            <label htmlFor="companyName" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
                            {locale === 'ru'
                                    ? "Наименование компании / организации *"
                                    : locale === 'uz'
                                        ? "Kompaniya / tashkilot nomi *"
                                        : "Company / Organization Name *"
                                }
                            </label>
                        </div>
                    )}


                    <button
                        onClick={sendDataForm}
                        className='bg-white py-[15px] px-[20px] text-[15px] font-medium font-jost mt-[30px] text-[#222E51] flex justify-center items-center 2xl:w-[40%] 2xl:ml-[-140px] '
                        disabled={loadingDataPost} // Disable button while loading
                    >
                        {loadingDataPost ? (
                            <Triangle
                                visible={true}
                                height="20"
                                width="20"
                                color="#222E51"
                                ariaLabel="triangle-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        ) : (
                            <>{locale === 'ru'
                                ? "Отправить"
                                : locale === 'uz'
                                    ? "Yuborish"
                                    : "Send"
                            }</>
                        )}
                    </button>


                    <div className='mt-[30px] relative border-t border-t-[#636F93] 2xl:hidden'>
                        <div className='absolute top-[20px]  z-50'>
                            <p className='text-[15px] text-white font-jost'>
                            +998 78 113 60 71</p>
                            <p className='text-[15px] text-white font-jost mt-[4px]'>adau.uzbekistan@gmail.com</p>
                            <p className='text-[15px] text-white font-jost mt-[4px]'>
                            {
                                    locale === 'ru'
                                        ? "Город Ташкент, Алмазарский район, улица Нурафшон, дом 50/7."
                                        : locale === 'uz'
                                            ? "Toshkent shahri, Olmazor tumani, Nurafshon ko‘chasi, 50/7-uy."
                                            : "City of Tashkent, Almazar district, Nurafshon street, house 50/7."
                                }
                            </p>
                        </div>
                        <div className=' mt-[40px] flex items-center gap-[8px] justify-center 2xl:w-[40%] 2xl:items-end 2xl:mt-[220px] 2xl:ml-[-80px]' >
                            <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                            <Image src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]' />
                            <Image src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />
                            <Image src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]' />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomeForm
