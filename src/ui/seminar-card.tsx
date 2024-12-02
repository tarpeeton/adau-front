import { FC, useState } from 'react'
import formatDate from '@/hooks/useFormatDate'
import { Link } from '@/i18n/routing'
import useLocale from '@/hooks/useLocale'
import { CiClock2 } from "react-icons/ci"
import { CiLocationOn } from "react-icons/ci"
import SeminarModal from '@/components/Modal/seminar-modal'


interface ISeminarCardProps {
  inSwiper: boolean
  item: {
    title: { ru: string, uz: string, en: string }
    description: { ru: string, uz: string, en: string }
    date: string
    time: string
    address: { ru: string, uz: string, en: string }
    slug: { current: string }
  }
}




const SeminarCard: FC<ISeminarCardProps> = ({ item, inSwiper }) => {
  const locale = useLocale()

  const [modal, setModal] = useState(false)

  const handleChangeModal = () => setModal(!modal)

  return (
    <div className={`p-[20px] relative 2xl:p-[30px] border border-[#E4E4E4] 2xl:mt-[20px] ${inSwiper ? '2xl:w-full' : '2xl:w-[32%]'} `} >
      <div className='pb-[15px]  border-b border-b-[#E4E4E4]' style={{ minHeight: '160px' }}>
        <p className='text-[20px] text-titleDark font-medium font-jost mb-[8px] 2xl:text-[30px]'>
          {item.title[locale]}

        </p>
        <p className='text-[15px] leading-[18px]  2xl:text-[18px] 2xl:leading-[22px] text-title80 font-jost'>

          {item.description[locale].length > 143 ? item.description[locale].slice(0, 143) + '....' : item.description[locale]}


        </p>
      </div>
      <div className='mt-[15px] flex flex-col justify-between '>
        <div  >
          <div className='flex flex-row items-center text-[15px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px]'>
            <CiClock2 className='mr-[10px] w-[20px] h-[20px] 2xl:w-[25px] 2xl:h-[25px] 2xl:ml-[1px]' />
            <div >
              <p>{formatDate(item.date)}; <span>{item.time}</span></p>
            </div>
          </div>
          <div className='flex flex-row items-center text-[15px] mt-[5px] leading-[18px] text-[#222E51] font-jost  2xl:text-[20px] break-words 2xl:min-h-[36px]'>
            <div className='w-[25px] flex items-center justify-center h-[25px] 2xl:w-[28px] 2xl:h-[28px]'>
              <CiLocationOn className='w-[25px] h-[25px] 2xl:w-[28px] 2xl:h-[28px] ' />
            </div>
            <div className='flex items-center ' style={{ minHeight: '36px' }}>
              <p>{item.address[locale]}</p>
            </div>
          </div>
        </div>
        {/* button for info */}
        <div className='mt-[25px]  flex flex-row gap-[11px] w-full'>
          <Link className='borderedButton w-[48%] flex items-center justify-center' href={`/seminar/${item.slug.current}`}>Подробнее</Link>
          <button onClick={handleChangeModal} className='buttonBlue w-[48%] flex items-center justify-center'>Записаться</button>
          <SeminarModal visible={modal} close={handleChangeModal} />
        </div>
      </div>
    </div>

  )
}

export default SeminarCard