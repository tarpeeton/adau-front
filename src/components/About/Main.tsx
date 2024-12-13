"use client"
import dynamic from 'next/dynamic';
import { FC, useState , useEffect} from 'react';
import Video from './Video';
import Mission from './Mission'; // Note the corrected spelling
import Team from './Team';
// import Partners from './Partners';
import Invite from './Invite'
import Result from './Result'
import SomeForm from './Form'

// const MobileTimeLine = dynamic(() => import('./MobileTimeLine'), { ssr: false });
// const Timeline = dynamic(() => import('./TimeLine'), { ssr: false });

import { client } from "@/sanity/lib/client";

const About: FC = () => {
    // const [timeLineData , setTimeLineData] = useState([])
    
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const banner =  await client.fetch(
    //         `*[_type == "timeline"]{
    //         year,description,plan ,position,_rev
    //         }`
    //       )
    //       setTimeLineData(banner);
    //     } catch (error) {
    //       console.debug(error)
    //     }
    //   }
    //   fetchData()
    // } , [])



  return (
    <div>
      <Video />
      <Mission />
      <Team />
      {/* <Partners  active={false}/> */}
      {/* <div className='hidden 2xl:block'>
      <Timeline data={timeLineData} />
      </div> */}
      {/* <div className=' 2xl:hidden'>
        <MobileTimeLine  data={timeLineData}/>
      </div> */}
      <Invite />
      <Result />
      <SomeForm isTextOpen={true} />
    </div>
  );
};

export default About;
