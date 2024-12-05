"use client"
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"
import { FC, useState, useRef, useEffect } from 'react'
import axios from 'axios'
import { client } from '@/sanity/lib/client'
import { ISeminarCategory } from '@/interface/ISeminar/seminar'

// icons
import { IoIosArrowDown } from "react-icons/io"
import { Triangle } from 'react-loader-spinner'
import useLocale from '@/hooks/useLocale'


// interface
interface IReviewFull {
    visible: boolean
    close: () => void
   
}


const SeminarModal: FC<IReviewFull> = ({ visible, close }) => {
    const [openSelect, setOpenSelect] = useState(false)
    const [selectedMessageType, setSelectMessageType] = useState('Мероприятие')
    const [loadingDataPost, setLoadingDataPost] = useState(false)
    const [themes, setThemes] = useState<ISeminarCategory[]>([])
    const [seminarData, setSeminarData] = useState(null)
    const locale = useLocale()

    const [formData, setFormData] = useState({
        nameseminar: '',
        emailseminar: '',
        phoneseminar: '',
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

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await client.fetch(`
                    *[_type == "seminarCategory"]{
                        _type,
                        _id,
                        _rev,
                        _createdAt,
                        _updatedAt,
                        title
                    }
                `)
                if (data) {
                    setThemes(data)
                } else {
                    console.warn('No data found')
                }
            } catch (error) {
                console.error('Error fetching seminar data:', error)
            }
        }
    
        fetchData()
    }, [])

    useEffect(() => {
        const fetchData = async () => {
          try {
            const data = await client.fetch(
              `*[_type == "seminar"{
                ...,
                seminarProgram[]{
                  ...,
                  speaker-> {
                    name,
                    position,
                    image,
                    description
                  }
                },
                speakers[]-> {
                  name,
                  position,
                  image,
                  description
                }
              }`,
              
            )
    
            if (data) {
              setSeminarData(data)
            } else {
              console.warn('No data found for the provided slug')
            }
          } catch (error) {
            console.debug('Error fetching seminar data:', error)
          }
        }
    
          fetchData()
      }, [])

    const sendDataForm = async () => {
        setLoadingDataPost(true);
        try {
            // Создаем объект FormData и добавляем поля формы
            const formPayload = new FormData();
            formPayload.append('name', formData.nameseminar);
            formPayload.append('email', formData.emailseminar);
            formPayload.append('phone', formData.phoneseminar);
            formPayload.append('event', selectedMessageType);
    
            // Отправляем данные с использованием axios и добавлением API-Key в заголовок
            const response = await axios.post('https://adau.result-me.uz/api/form/seminar', formPayload, {
                headers: {
                    'API-Key': 'VJs4krbxFMj78Q5IsUIkdZdi8A1MSItugxlHJiwRALyE7c8lCiGcLY6OsugGPzRmjSJ3nzdFh6iUZD9lmYeSzPpm7FTwcGttS0js',
                    'Content-Type': 'multipart/form-data'
                }
            });
    
            console.log('Form submitted successfully:', response.data);
    
            // Очищаем форму после успешной отправки
            setFormData({
                nameseminar: '',
                emailseminar: '',
                phoneseminar: ''
            });
            setSelectMessageType('Мероприятие');
        } catch (error) {
            console.error('Error submitting form:', error);
        } finally {
            setLoadingDataPost(false);
        }
    };
    

  




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
                    Запись на семинар
                    </p>
                    <div className='inputs flex flex-col mt-[30px] '>
                    <div className='relative  '>
                        <input
                            type="text"
                            id="nameseminar"
                            value={formData.nameseminar}
                            onChange={handleInputChange}
                            className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                            placeholder=" "
                        />
                        <label htmlFor="nameseminar" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">Имя *</label>
                    </div>
                    <div className='relative mt-[20px]  2xl:mt-[30px]'>
                        <input
                            type="text"
                            id="emailseminar"
                            value={formData.emailseminar}
                            onChange={handleInputChange}
                            className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                            placeholder=" "
                        />
                        <label htmlFor="emailseminar" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">E-mail *</label>
                    </div>
                    <div className='relative mt-[20px]  2xl:mt-[30px]'>
                        <input
                            type="text"
                            id="phoneseminar"
                            value={formData.phoneseminar}
                            onChange={handleInputChange}
                            className="border border-[#E4E4E4] block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer 2xl:text-[20px]"
                            placeholder=" "
                        />
                        <label htmlFor="phoneseminar" className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[17px]">Телефон</label>
                    </div>



                    <div className='relative mt-[20px] cursor-pointer 2xl:mt-[30px]'>
                        <div onClick={handleOpenSelect}  className="border border-[#E4E4E4]  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent border-1 appearance-none dark:focus:border-titleDark focus:outline-none focus:ring-0 focus:border-titleDark peer flex items-center justify-between">
                            <p className='2xl:text-[20px]'>
                            {selectedMessageType}
                            </p>
                            <IoIosArrowDown
                                className={`transform transition-transform ease-in-out duration-500 ${openSelect ? 'rotate-180' : 'rotate-0'}`}
                            />
                        </div>
                        <p className="absolute text-sm text-gray-500 dark:text-[#A0A0A0] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-[#A0A0A0] peer-focus:dark:text-[#A0A0A0] peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 text-[14px] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1 2xl:text-[20px]">Выберите мероприятие</p>
                    </div>
                    {openSelect && (
                        <div className='mt-[5px] flex flex-col gap-[5px] '>
                            {themes.map((theme) => (
                                <button
                                    key={theme._id}
                                    onClick={() => handleMessageType(theme.title[locale])}
                                    className='p-[5px] border border-gray-600 flex items-center justify-center text-titleDark font-jost text-[14px] '
                                >
                                    {theme.title[locale]}
                                </button>
                            ))}
                        </div>
                    )}



                  
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

export default SeminarModal