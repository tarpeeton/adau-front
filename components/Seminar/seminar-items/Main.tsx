"use client"
import {FC, useState} from 'react';
import SeminarBanner from './seminar-banner'
import SeminarProggram from './seminar-proggram'
import SeminarSpeakers from './seminar-speakers'
import InfoPrice from './seminar-info'
import SeminarOldVideo from './seminar-video'


const MainSeminarItems: FC = () => {
  const [status , setStatus ] = useState(false)
  return (
    <div>
        <SeminarBanner />
        <SeminarProggram />
        <SeminarSpeakers />
        {status ? (<InfoPrice />) : (<SeminarOldVideo />)}
        
        
    </div>
  );
};

export default MainSeminarItems;