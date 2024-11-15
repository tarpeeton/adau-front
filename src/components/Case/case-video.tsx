'use client'
import { FC, useState, useEffect } from 'react'
import ReactPlayer from 'react-player'

// ICON
import { BsYoutube } from "react-icons/bs"


interface ICaseVideoProps {
    youtubeVideo: string,

}


const CaseVideo: FC<ICaseVideoProps> = ({youtubeVideo}) => {
    const [isClient, setIsClient] = useState(false)
    const [isPlaying, setIsPlaying] = useState(false)

    // Ensure this code runs only on the client side
    useEffect(() => {
        setIsClient(true)
    }, [])

    return (
        <div className='mt-[80px] 2xl:mt-[200px] px-[16px] 2xl:px-[50px] 4xl:px-[240px]'>
            <p className='text-[26px]  uppercase leading-[32px] 2xl:text-[45px] 2xl:leading-[59px] text-[#000000] font-jost'>
                Видео
            </p>
            <div className='mt-[30px] 2xl:h-[600px] h-[250px] cursor-pointer'>
                {isClient && (
                    <ReactPlayer
                        url={youtubeVideo}
                        playing={isPlaying}
                        controls={true}
                        width="100%"
                        height="100%"
                        light={true} // Show thumbnail before playing
                        playIcon={
                            <div className=" inset-0 flex items-center justify-center  bg-opacity-50  cursor-pointer">
                                <BsYoutube className='text-white w-[50px] h-[50px] 2xl:w-[60px] 2xl:h-[60px]' />
                            </div>
                        }
                        onClickPreview={() => setIsPlaying(true)} // Start playing after clicking on the thumbnail
                        pip={true}
                    />
                )}
            </div>
        </div>
    )
}

export default CaseVideo