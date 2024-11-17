import { FC } from 'react'
import Image from 'next/image'
import { ISeminarProgramItem } from '@/interface/ISeminar/seminar';
import { urlFor } from '@/sanity/lib/image';


  
  interface ISeminarProggramProps {
    program?: ISeminarProgramItem[];
    locale: 'ru' | 'uz' | 'en';
  }

const SeminarProggram: FC<ISeminarProggramProps> = ({program = [], locale}) => {



  if (!program || program.length === 0) {
    return null;
}
    

    return (
        <div className='mt-[80px] 2xl:mt-[140px] 4xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>

            <h2 className='uppercase text-[26px] 2xl:text-[45px] text-titleDark'>Программа семинара</h2>
            <div className='mt-[20px] 2xl:mt-[30px] flex flex-col 2xl:flex-row 2xl:flex-wrap gap-[12px] 2xl:gap-[20px]'>
                {program?.map((item, index) => (
                    <div key={index} className='border border-[#E4E4E4] p-[20px] 2xl:p-[25px] 2xl:w-[23.5%]'>
                        <div className='flex flex-row gap-[10px]'>
                            <div className='w-[40px] h-[40px] 2xl:w-[45px] 2xl:h-[45px]'>
                                <Image src={urlFor(item.speaker.image.asset._ref).url()} alt='user-image' quality={100} width={300} height={450} className='w-full h-full object-cover rounded-full' />
                            </div>
                            <div>
                                <p className='text-[16px] 2xl:text-[20px] text-titleDark font-medium'>{item.speaker.name[locale]}</p>
                                <p className='text-[14px] 2xl:text-[17px] text-[#A0A0A0] mt-[-8px]'>{item.speaker.position[locale]}</p>
                            </div>
                        </div>
                        <div className='min-h-[72px] mt-[40px] 2xl:mt-[80px] '>
                            <p className='text-[18px] 2xl:text-[22px] text-titleDark'>{item.topic}</p>
                            <div className='my-[12px] bg-[#E4E4E4] w-full h-[2px] 2xl:my-[20px]' />
                            <p className='text-[16px] 2xl:text-[20px] text-[#222E51] font-medium'>{item.timeSlot}</p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default SeminarProggram