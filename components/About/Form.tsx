"use client"
import { FC, useState, useRef } from 'react'
import Image from 'next/image'
import axios from 'axios' 



// icons
import { IoIosArrowDown } from "react-icons/io"
import { FiPlus } from "react-icons/fi"
import { Triangle } from 'react-loader-spinner'








import A from '@/public/form/a.png'
import D from '@/public/form/d.png'
import U from '@/public/form/u.png'





const SomeForm: FC = () => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [openSelect, setOpenSelect] = useState(false)
    const [selectedMessageType, setSelectMessageType] = useState('Тема сообщения')
    const [fileName, setFileName] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [loadingDataPost, setLoadingDataPost] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleOpenSelect = () => setOpenSelect(!openSelect)

    // Select Tipini Olish
    const handleMessageType = (msg: string) => {
        setSelectMessageType(msg)
        setOpenSelect(false)
    }

    const handleFileUploadClick = () => {
        const input = document.createElement('input')
        input.type = 'file'
        input.style.display = 'none'
        input.onchange = (e: Event) => {
            const target = e.target as HTMLInputElement
            if (target.files && target.files.length > 0) {
                setIsLoading(true)
                setFileName(target.files[0].name)
                console.log(target.files[0])

                // Simulate an upload process for demonstration
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            }
        }
        document.body.appendChild(input)
        input.click()
        document.body.removeChild(input)
    }

    const sendDataForm = async () => {
        setLoadingDataPost(true)
        try {
            // Replace with your API endpoint and payload structure
            const response = await axios.post('/api/your-endpoint', {
                name: formData.name,
                email: formData.email,
                messageType: selectedMessageType,
                fileName: fileName
            })
            console.log('Form submitted successfully:', response.data)
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setLoadingDataPost(false)
        }
    }

    return (
        <div className='mt-[80px] 2xl:mt-[200px] py-[40px] px-[16px] bg-[#222E51]'>
            <div className='flex flex-col'>
                <p className='text-[26px] 2xl:text-[50px] uppercase leading-[32px] 2xl:leading-[62px] font-jost text-titleWhite'>
                    Отправить нам <b /> сообщение
                </p>
                <p className='mt-[10px] text-[15px] text-white font-jost'>
                    Напишите нам, и мы ответим в кратчайшие <b className='mdl:hidden' /> сроки!
                </p>
                <div className='inputs flex flex-col mt-[30px]'>
                    <div className='relative'>
                        <input 
                            type="text" 
                            id="name" 
                            value={formData.name} 
                            onChange={handleInputChange} 
                            className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" 
                            placeholder=" " 
                        />
                        <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Имя *</label>
                    </div>
                    <div className='relative mt-[20px]'>
                        <input 
                            type="text" 
                            id="email" 
                            value={formData.email} 
                            onChange={handleInputChange} 
                            className="border border-white block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer" 
                            placeholder=" " 
                        />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">E-mail *</label>
                    </div>
                    <div className='relative mt-[20px] cursor-pointer'>
                        <div onClick={handleOpenSelect} id="floating_outlined_select" className="border border-white px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer flex flex-row justify-between items-center">
                            {selectedMessageType}
                            <IoIosArrowDown />
                        </div>
                        <p className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-[#222E51] px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Тема сообщения</p>
                    </div>
                    {openSelect && (
                        <div className='mt-[5px] flex flex-col gap-[5px]'>
                            <button onClick={() => handleMessageType('Тема 1')} className='p-[5px] border border-gray-600 flex items-center justify-center text-white font-jost text-[14px]'>
                                Тема 1
                            </button>
                            <button onClick={() => handleMessageType('Тема 2')} className='p-[5px] border border-gray-600 flex items-center justify-center text-white font-jost text-[14px]'>
                                Тема 2
                            </button>
                            <button onClick={() => handleMessageType('Тема 3')} className='p-[5px] border border-gray-600 flex items-center justify-center text-white font-jost text-[14px]'>
                                Тема 3
                            </button>
                        </div>
                    )}
                    <div className='relative'>
                        <div ref={fileInputRef} onClick={handleFileUploadClick} className="mt-[20px] border border-white px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-white focus:outline-none focus:ring-0 focus:border-white peer flex flex-row items-center text-[15px]">
                            {fileName ? (
                                <span className='truncate'>{fileName}</span>
                            ) : (
                                <>
                                    <FiPlus className='text-[18px] mt-[3px] mr-[3px]' />
                                    Прикрепить файл
                                </>
                            )}
                            {isLoading && (
                                <Triangle
                                    visible={true}
                                    height="20"
                                    width="100%"
                                    color="#4fa94d"
                                    ariaLabel="triangle-loading"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                />
                            )}
                        </div>
                    </div>
                    <button 
                        onClick={sendDataForm} 
                        className='bg-white py-[15px] px-[20px] text-[15px] font-medium font-jost mt-[30px] text-[#222E51] flex justify-center items-center'
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
                            'Отправить'
                        )}
                    </button>


                    <div className='mt-[30px] relative border-t border-t-[#636F93]'>
                        <div className='absolute top-[20px]  z-50'>
                            <p className='text-[15px] text-white font-jost'>+998 90 999 99 99</p>
                            <p className='text-[15px] text-white font-jost mt-[4px]'>adauassatsion@gmai.com</p>
                            <p className='text-[15px] text-white font-jost mt-[4px]'>tashkent , ul , chilan</p>
                        </div>
                    <div className=' mt-[40px] flex items-center gap-[8px] justify-center 2xl:w-[40%] 2xl:items-end 2xl:mt-[220px] 2xl:ml-[-80px]'>
                <Image  src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]'/>
                <Image  src={D} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px]'/>
                <Image  src={A} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]'/>
                <Image  src={U} width={73} height={73} alt='A' quality={100} className='opacity-[20%] w-[73px] h-[73px] 2xl:w-[163px] 2xl:h-[163px] ml-[-8px]'/>

            </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SomeForm
