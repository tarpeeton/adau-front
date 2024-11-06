"use client"
import {FC , useState , useEffect} from 'react';
import ReactPlayer from 'react-player'

// ICON
import { IoIosPlay } from "react-icons/io"
// DEFAULT VIDEO
const video = 'https://youtu.be/TlMUknHQYLU?si=iJivAS3Vd9ygABzt'

const Video: FC = () => {
    
  const [isClient, setIsClient] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // Ensure this code runs only on the client side
  useEffect(() => {
      setIsClient(true)
  }, [])

 


  return (
    <div className='mt-[20px] 2xl:mt-[50px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
            <div className='flex flex-col '>
                <div className='2xl:flex 2xl:justify-end'>
                    <h1 className='text-[26px] font-normal  2xl:text-[50px] 2xl:leading-[62px]  font-jost leading-[32px]'>
                        <span className='text-[#222E51] font-medium'>ADAU</span>
                        – Ассоциация Дизайнеров <div className='2xl:hidden'>и Архитекторов <br /> Узбекистана</div>
                    </h1>
                </div>
                <p className=' hidden 2xl:block  2xl:text-[50px] 2xl:leading-[62px]'>
                    и Архитекторов Узбекистана
                </p>
                <div className='flex flex-col 2xl:flex-row mt-[20px] 2xl:mt-[40px] 2xl:justify-between'>
                  <div className='relative  w-full 2xl:w-[50%] h-[220px] 2xl:h-[500px] 4xl:h-[564px] 4xl:w-[60%]'>
                    {isClient && (
                      <ReactPlayer
                      url={video}
                      playing={isPlaying}
                      controls={true}
                      width="100%"
                      height="100%"
                      light={true} // Show thumbnail before playing
                      playIcon={
                          <div className=" inset-0 flex items-center justify-center  bg-opacity-50 cursor-pointer 2xl:h-[500px] h-[210px]">
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
                  

                    <div className='flex flex-col 2xl:order-[-1] 2xl:w-[40%] 2xl:justify-between 4xl:w-[30%]'>
                        <p className='  mt-[20px] 2xl:mt-0 text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>
                            Элитное объединение самых развивающихся и талантливых представителей индустрии
                        </p>
                        <p className=' mt-[20px] 2xl:mt-[40px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            Куда идти начинающему дизайнеру за знаниями? «В дизайн-школу»,- ответ очевиден А вот вопрос: «Куда идти опытному дизайнеру или владельцу студии?» – многих поставит в ступор

                        </p>
                        <p className=' mt-[20px] 2xl:mt-[40px] text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost'>

                            Именно поэтому мы взяли на себя ответственность по объединению самых активных участников индустрии дизайна интерьера и архитектуры, и создали экспертное объединение профессионалов, которые способны дать ответы на самые сложные вопросы
                        </p>

                        <div className='w-full 2xl:w-[100%] justify-between  mt-[25px] 2xl:mt-[30px]  flex flex-row flex-nowrap 2xl:justify-between 4xl:w-full'>
                            <button className='buttonBlue     w-[54%]   2xl:w-[49%] '>Вступить в ассоциацию</button>
                            <button className='borderedButton   w-[42%] 2xl:w-[49%] flex items-center justify-center'>Стать партнером</button>
                        </div>

                    </div>


                </div>
            </div>
            <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        .playButtonPulse {
          animation: pulse 1.5s infinite ease-in-out;
        }
      `}</style>
        </div>
  );
};

export default Video;