"use client"
import {FC , useState , useEffect} from 'react';
import ReactPlayer from 'react-player'

// ICON
import { IoIosPlay } from "react-icons/io"
// DEFAULT VIDEO
const video = 'https://youtu.be/TlMUknHQYLU?si=iJivAS3Vd9ygABzt'

const BannerSeminar: FC = () => {
    const [isClient, setIsClient] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)
  
    // Ensure this code runs only on the client side
    useEffect(() => {
        setIsClient(true)
    }, [])
  
    return (
        <div className='mt-[20px] 2xl:mt-[40px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <div className='flex flex-col 2xl:flex-row 2xl:flex-wrap 2xl:justify-between'>
                <div className='2xl:w-[30%]'>
                    <p className='uppercase text-[26px] 2xl:text-[50px] text-titleDark'>Семинары и <br className='2xl:hidden' /> тренинги ADAU</p>
                    <div className='hidden 2xl:block'> 
                    <button className=' buttonBlue w-[60%] mt-[25px] '>
                    Записаться на семинар
                    </button>
                    </div>
                    
                </div>
                <div className='mt-[15px] h-[230px] 2xl:order-2 2xl:mt-[30px] 2xl:w-full 2xl:h-[476px]'>
                {isClient && (
                      <ReactPlayer
                      url={video}
                      playing={isPlaying}
                      controls={true}
                      width="100%"
                      height="100%"
                      light={true} // Show thumbnail before playing
                      playIcon={
                          <div className=" inset-0 flex items-center justify-center  bg-opacity-50 cursor-pointer 2xl:h-[500px] h-[230px] ">
                              <div className=' playButtonPulse rounded-full w-[90px] h-[90px] flex items-center justify-center border border-white'>
                                  <button className=" playButtonPulse rounded-full bg-white  w-[65px] h-[65px] flex items-center justify-center text-center">
                                      <IoIosPlay className='text-[#222E51]' size={29} />
                                  </button>
                              </div>

                          </div>
                      }
                      onClickPreview={() => setIsPlaying(true)} // Start playing after clicking on the thumbnail
                      pip={true}
                  />
                    )}
                </div>
                <div className='mt-[25px] 2xl:w-[60%]'>
                    <p className='text-[15px] leading-[18px] font-jost 2xl:text-[20px] 2xl:leading-[28.9px] '>
                    ADAU регулярно проводит обучающие мероприятия, семинары и воркшопы, чтобы поддержать профессиональный рост дизайнеров и архитекторов. Участники получают возможность изучать новейшие тенденции, улучшать навыки и обмениваться опытом с коллегами. Наши мероприятия — это ценный ресурс для тех, кто стремится оставаться на передовой архитектуры и дизайна
                    </p>
                    <button className='buttonBlue w-[60%] mt-[25px] 2xl:hidden'>
                    Записаться на семинар
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BannerSeminar