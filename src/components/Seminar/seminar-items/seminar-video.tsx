'use client'
import { FC, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { FaYoutube } from "react-icons/fa";

interface SeminarOldVideoProps {
  videoUrl: string | undefined;
  isFree: boolean | undefined;
  price: number | undefined;
}

const SeminarOldVideo: FC<SeminarOldVideoProps> = ({videoUrl,
  isFree,
  price}) => {

    console.log(price)

  const [isClient, setIsClient] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Ensure this code runs only on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
      <p className='text-[26px] 2xl:text-[45px] uppercase text-titleDark'>Видео</p>

      <div className='mt-[25px] 2xl:mt-[60px] h-[210px]  2xl:h-[600px] relative'>
        {isFree && price === undefined ? null : (
           <div className='absolute w-full h-full p-[20px]  backdrop-blur-[5px] z-[99]  flex flex-col 2xl:justify-center 2xl:items-center bg-[#00000080]'>

           <p className='text-[20px] 2xl:text-[40px] font-medium text-titleWhite'>Платный контент</p>
           <p className='  2xl:mt-[5px] 2xl:w-[30%] text-[14px] leading-[18px] 2xl:text-[20px]  2xl:leading-[25px] 2xl:text-center text-titleWhite text-opacity-[80%]'>Для того чтобы посмотреть запись семинара, необходимо приобрести доступ</p>
           <p className='text-[20px] 2xl:text-[40px] font-medium text-titleWhite  mt-[8px] 2xl:mt-[20px]'>{price} сум</p>
           <div className='w-[60%] mt-[20px] 2xl:w-[17%] '>
             <button className='buttonWhite w-full'>
               Купить
             </button>
           </div>
         </div>
        )}

       

{isClient && (
          <div className='relative w-full h-full'>
            <ReactPlayer
              url={videoUrl}
              playing={isPlaying}
              controls={true}
              width="100%"
              height="100%"
              light={!isPlaying} // Show thumbnail before playing
              onClickPreview={() => setIsPlaying(true)} // Ensure this starts playing on thumbnail click
              pip={true}
              className='relative'
            />
            {!isPlaying && (
              <button
                className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                onClick={() => setIsPlaying(true)}
              >
                <FaYoutube className='w-[50px] h-[50px] 2xl:w-[70px] 2xl:h-[70px] text-[#222E51]' />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default SeminarOldVideo