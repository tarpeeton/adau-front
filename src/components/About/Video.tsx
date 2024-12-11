"use client"
import { FC, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'
import { client } from "@/sanity/lib/client"
import { IAboutBanner } from '@/interface/IAbout/about'
import useLocale from '@/hooks/useLocale'

import { IoIosPlay } from "react-icons/io"
import ContactUs from '../Modal/contacts-modal'


const Video: FC = () => {
  // aboutBanner
  const [isClient, setIsClient] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [bannerData, setBannerData] = useState<IAboutBanner[] | []>([])
  const [partnerModal, setPartnerModal] = useState(false)



  const handlePartnerModalSwitcher = () => setPartnerModal(!partnerModal)






  const locale = useLocale()

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const AboutBannerData = await client.fetch(`*[_type == "aboutBanner"]{
              _id,
video,
title,
description
              }`)
        setBannerData(AboutBannerData)
      } catch (error) {
        console.debug(error)
      }
    }
    fetchData()
  }, [])


  return (
    <div className='mt-[20px] 2xl:mt-[50px] px-[20px] 4xl:px-[240px] 2xl:px-[50px]'>
      <div className='flex flex-col '>
        {bannerData.slice(0, 1).map((item, index) => (
          <div key={index}>
            <div className=''>
              <h1 className='text-[26px] font-normal 2xl:text-[50px] 2xl:leading-[62px] font-jost leading-[32px] uppercase'>
                {item.title[locale].replace(/\\n/g, '\n').split(/(\(.*?\)|\n)/).map((word, index, array) => {
                  if (word.startsWith('(') && word.endsWith(')')) {
                    return (
                      <span key={index} className='text-[#222E51] 2xl:w-[30%] uppercase font-medium'>
                        {word.slice(1, -1)} {/* Removes the parentheses */}
                      </span>
                    )
                  } else if (word === '\n') {
                    return <br key={index} /> // Renders a line break without showing '\n'
                  } else {
                    // Check if the previous word was a parenthesis and this word is the start of a new text block
                    if (index > 0 && array[index - 1].startsWith('(') && array[index - 1].endsWith(')')) {
                      return (
                        <span key={index} className=''>
                          {word}
                        </span>
                      )
                    }
                    return word
                  }
                })}



              </h1>

            </div>

            <div className='flex flex-col 2xl:flex-row mt-[20px] 2xl:mt-[40px] 2xl:justify-between'>
              <div className='relative  w-full 2xl:w-[50%] h-[220px] 2xl:h-[500px] 4xl:h-[564px] 4xl:w-[60%]'>
                {isClient && (
                  <ReactPlayer
                    url={item?.video}
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

                <p className='mt-[20px] 2xl:mt-0 text-[15px] leading-[18px] 2xl:text-[20px] 2xl:leading-[28.9px] font-jost flex flex-col gap-[20px] 2xl:gap-[40px]'>
                  {item.description[locale].split('\\n').map((text, index) => (
                    <span key={index}>
                      {text}
                      {index !== item.description[locale].split('\\n').length - 1 && <br />}
                    </span>
                  ))}
                </p>


                <div className='w-full 2xl:w-[100%] justify-between  mt-[25px] 2xl:mt-[30px]  flex flex-row flex-nowrap 2xl:justify-between 4xl:w-full'>
                  <button onClick={handlePartnerModalSwitcher} className='buttonBlue     w-[54%]   2xl:w-[49%] '>
                    {locale === 'ru'
                      ? "Вступить в ассоциацию"
                      : locale === 'uz'
                        ? "Assotsiatsiyaga qo'shilish"
                        : "Join the Association"
                    }
                  </button>
                  <button onClick={handlePartnerModalSwitcher} className='borderedButton   w-[42%] 2xl:w-[49%] flex items-center justify-center'>
                    {locale === 'ru'
                      ? "Стать партнером"
                      : locale === 'uz'
                        ? "Hamkor bo'lish"
                        : "Become a Partner"
                    }

                  </button>
                  <ContactUs visible={partnerModal} close={handlePartnerModalSwitcher} />
                </div>

              </div>


            </div>
          </div>

        ))}

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
  )
}

export default Video