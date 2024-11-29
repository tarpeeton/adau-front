"use client"
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import { FC, useState, useRef } from 'react'
import axios from 'axios'



// icons
import { IoIosArrowDown } from "react-icons/io"

import { Triangle } from 'react-loader-spinner'



interface IReviewFull {
    visible: boolean
    close: () => void
   
}


const ContactUs: FC<IReviewFull> = ({ visible, close }) => {
    const fileInputRef = useRef<HTMLInputElement | null>(null)
    const [openSelect, setOpenSelect] = useState(false)
    const [selectedMessageType, setSelectMessageType] = useState('Тема сообщения')
    const [fileName, setFileName] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [loadingDataPost, setLoadingDataPost] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        textModal: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

    const handleOpenSelect = () => setOpenSelect(!openSelect)

    const handleMessageType = (msg: string) => {
        setSelectMessageType(msg)
        setOpenSelect(false)
    }

    const handleFileUploadClick = () => {
        // Trigger the hidden file input click
        fileInputRef.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setIsLoading(true)
            setFileName(file.name)

            // Simulate upload process (remove after actual API implementation)
            setTimeout(() => {
                setIsLoading(false)
            }, 1000)
        }
    }

    const sendDataForm = async () => {
        setLoadingDataPost(true)
        try {
            // Create FormData and append fields
            const formPayload = new FormData()
            formPayload.append('name', formData.name)
            formPayload.append('email', formData.email)
            formPayload.append('theme', selectedMessageType)
            formPayload.append('text', formData.textModal)

            // Append file if exists
            if (fileInputRef.current?.files && fileInputRef.current.files[0]) {
                formPayload.append('file', fileInputRef.current.files[0])
            }

            // Send data using axios
            const response = await axios.post('https://adau.result-me.uz/api/form/message', formPayload, {
                headers: {
                    'API-Key': 'VJs4krbxFMj78Q5IsUIkdZdi8A1MSItugxlHJiwRALyE7c8lCiGcLY6OsugGPzRmjSJ3nzdFh6iUZD9lmYeSzPpm7FTwcGttS0js',
                    'Content-Type': 'multipart/form-data' // Important for file upload
                }
            })

            console.log('Form submitted successfully:', response.data)

            // Clear form after successful submission
            setFormData({
                name: '',
                email: '',
                textModal: ''
            })
            setFileName(null)
            setSelectMessageType('Тема сообщения')
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setLoadingDataPost(false)
        }
    }
  



    return (
            <Modal
                open={visible}
                footer={null}
                onCancel={close} // Using the close function
                centered
                closeIcon={<IoClose size={25} />}
                width={400}
            >
                <div className='flex flex-col'>
                    <p className='text-[22px] 2xl:text-[28px] text-titleDark font-medium'>
                Связаться с нами

                    </p>
                    <div className='inputs flex flex-col mt-[30px] '>
                    <div className='relative  '>
                        <input
                            type="text"
                            id="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                            placeholder=" "
                        />
                        <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">Имя *</label>
                    </div>
                    <div className='relative mt-[20px]  2xl:mt-[30px]'>
                        <input
                            type="text"
                            id="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                            placeholder=" "
                        />
                        <label htmlFor="email" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">E-mail *</label>
                    </div>
                    <div className='relative mt-[20px] cursor-pointer 2xl:mt-[30px]'>
                        <div onClick={handleOpenSelect} id="floating_outlined_select" className="border border-[#E4E4E4]  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer flex items-center justify-between">
                            <p className='2xl:text-[20px]'>
                            {selectedMessageType}

                            </p>
                            <IoIosArrowDown
                                className={`transform transition-transform ease-in-out duration-500 ${openSelect ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </div>
                        <p className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[20px]">Тема сообщения</p>
                    </div>
                    {openSelect && (
                        <div className='mt-[5px] flex flex-col gap-[5px] '>
                            <button onClick={() => handleMessageType('Тема 1')} className='p-[5px] border border-gray-600 flex items-center justify-center text-titleDark font-jost text-[14px] '>
                                Тема 1
                            </button>
                            <button onClick={() => handleMessageType('Тема 2')} className='p-[5px] border border-gray-600 flex items-center justify-center text-titleDark font-jost text-[14px] '>
                                Тема 2
                            </button>
                            <button onClick={() => handleMessageType('Тема 3')} className='p-[5px] border border-gray-600 flex items-center justify-center text-titleDark font-jost text-[14px] '>
                                Тема 3
                            </button>
                        </div>
                    )}

<div className='relative  mt-[20px] '>
                        <input
                            type="textModal"
                            id="textModal"
                            value={formData.textModal}
                            onChange={handleInputChange}
                            className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                            placeholder=" "
                        />
                        <label htmlFor="textModal" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">Текст сообщения *</label>
                    </div>


                    <div className='relative cursor-pointer '>
                    <div className='relative mt-[20px]'>
                        <div onClick={handleFileUploadClick} className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer  items-center justify-between cursor-pointer">
                            <p className='2xl:text-[20px]'>
                                {fileName ? fileName : ' + Прикрепить файл'}
                            </p>
                            {isLoading && (
                                <Triangle
                                    height="20"
                                    width="20"
                                    color="grey"
                                    ariaLabel="triangle-loading"
                                    visible={true}
                                />
                            )}
                        </div>
                        <input
                            ref={fileInputRef}
                            type="file"
                            className="hidden"
                            onChange={handleFileChange}
                        />
                    </div>
                    </div>
                    <button
                        onClick={sendDataForm}
                        className='py-[15px] px-[20px] text-[15px] font-medium font-jost mt-[30px]  flex justify-center items-center buttonBlue '
                        disabled={loadingDataPost} // Disable button while loading
                    >
                        {loadingDataPost ? (
                            <Triangle
                                visible={true}
                                height="20"
                                width="20"
                                color="#fff"
                                ariaLabel="triangle-loading"
                                wrapperStyle={{}}
                                wrapperClass=""
                            />
                        ) : (
                            'Отправить'
                        )}
                    </button>

                </div>
                </div>
            </Modal>

    )
}

export default ContactUs