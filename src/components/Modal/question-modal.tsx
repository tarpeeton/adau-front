"use client"
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import { FC, useState, useRef } from 'react'
import axios from 'axios'



// icons
import { IoIosArrowDown } from "react-icons/io"
import { FiPlus } from "react-icons/fi"
import { Triangle } from 'react-loader-spinner'



interface IReviewFull {
    visible: boolean
    close: () => void

}


const QuestionModal: FC<IReviewFull> = ({ visible, close }) => {
    const [loadingDataPost, setLoadingDataPost] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
        phone: ''
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target
        setFormData({ ...formData, [id]: value })
    }

   
   

    const sendDataForm = async () => {
        setLoadingDataPost(true)
        try {
            // Replace with your API endpoint and payload structure
            const response = await axios.post('/api/your-endpoint', {
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                text:formData.text
            })
            console.log('Form submitted successfully:', response.data)
        } catch (error) {
            console.error('Error submitting form:', error)
        } finally {
            setLoadingDataPost(false)
        }
    }






    return (
        <div className='bg-white'>
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
                        <div className='relative  mt-[20px]  2xl:mt-[30px] '>
                            <input
                                type="phone"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                                placeholder=" "
                            />
                            <label htmlFor="name" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">Телефон *</label>
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
                        <div className='relative  mt-[20px] '>
                            <input
                                type="text"
                                id="text"
                                value={formData.text}
                                onChange={handleInputChange}
                                className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                                placeholder=" "
                            />
                            <label htmlFor="text" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">Вопрос *</label>
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

        </div>
    )
}

export default QuestionModal