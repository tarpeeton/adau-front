"use client"
import {FC} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { GrLinkNext } from "react-icons/gr"


import { BlogData } from '../NewBlogs';

const SimilarBlogs: FC = () => {
  return (
    <div className='px-[16px] 2xl:px-[50px] 4xl:px-[240px] mt-[80px] 2xl:mt-[200px]'>
             <p className="text-[26px]  uppercase font-jost leading-[32px] 2xl:text-[40px] 2xl:leading-[59px]  ">
             Похожие статьи
            </p>

            <div  className='mt-[20px] 2xl:mt-[41px] flex flex-col gap-[30px] 2xl:flex-row 2xl:flex-wrap 2xl:gap-[20px]'>
                {BlogData?.map((item, index) => (
                    <div key={index} className='2xl:w-[335px]'>
                        <Image src={item.url} width={345} height={345} quality={100} alt='blogIMage' className=' w-full object-cover h-[220px] 2xl:w-full md:h-[280px]' />
                        <div className='mt-[20px] 2xl:mt-[25px]'>
                            <p className='text-[14px] text-[#A0A0A0] 2xl:text-[17px]'>{item.date}</p>
                            <div className='2xl:h-[120px]'>
                                <p className='text-[20px] mt-[5px] font-medium font-jost text-titleDark 2xl:text-[23px] 4xl:text-[25px] leading-[25px] 2xl:leading-[30px]'>{item.title.length > 72 ? item.title.slice(0, 72) + "..." : item.title}</p>
                            </div>

                            <p className='text-[16px] mt-[8px] font-medium text-[#222E51] font-jost 2xl:text-[20px] flex flex-row items-center'>
                                Читать статью
                                <GrLinkNext className='ml-[8px]' />
                            </p>
                        </div>
                    </div>
                ))}

            </div>
            <div className='w-full items-center flex justify-center mt-[30px]'>
                    <Link href='/blog' className='buttonBlue w-[60%] 2xl:w-[15%]'>
                    Все статьи
                    </Link>
             
            </div>
    </div>
  );
};

export default SimilarBlogs;