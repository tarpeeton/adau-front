"use client"
import { FC } from 'react'
import { Modal } from 'antd'
import { IoClose } from "react-icons/io5"




interface IReviewFull {
    visible: boolean
    close: () => void
    name?: string
    date?: string
    text?: string
}


const FullReviewsModal: FC<IReviewFull> = ({ visible, close , name , date , text }) => {






    return (
        <div className='bg-white'>
            <Modal
                open={visible}
                footer={null}
                onCancel={close} // Using the close function
                centered
                closeIcon={<IoClose size={25} />}
                width={600}
            >
                <div className='flex flex-col'>
                    <div className='flex flex-row gap-[12px]'>
                       
                        <div>
                            <p className='text-[16px] mdl:text-[24px] text-titleDark  font-semibold'>
                                {name}
                            </p>
                            <p className='text-[14px] mdl:text-[17px] text-[#222E51] font-medium '>
                                {date}
                            </p>
                        </div>
                    </div>
                    <div className='mt-[20px] mdl:mt-[30px]'>
                        <p className='text-[15px] mdl:text-[20px] text-titleDark 2xl:leading-[28.9px] '>
                            {text}
                        </p>
                    </div>
                </div>
            </Modal>

        </div>
    )
}

export default FullReviewsModal