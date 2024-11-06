"use client"
import {FC, useRef} from 'react';


const MobileTimeLine: FC = () => {
    const startAnimation = useRef<HTMLDivElement>(null)





    
  return (
    <div  ref={startAnimation} className='mt-[80px] bg-[#222E51] pt-[40px] px-[16px]'>
        <p className='text-[26px] text-white uppercase font-jost'>Наш путь и планы на будущее</p>
        <div className='mt-[40px] flex flex-row h-full'>

        </div>
    </div>
  );
};

export default MobileTimeLine;