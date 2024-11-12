"use client"
import {FC, useState , useEffect , useRef} from 'react';
import SeminarBanner from './seminar-banner'
import SeminarProggram from './seminar-proggram'
import SeminarSpeakers from './seminar-speakers'
import InfoPrice from './seminar-info'
import SeminarOldVideo from './seminar-video'
import UserTestimonials from '../UserTestimonials'
import SeminarActions from './seminar-actions'


const MainSeminarItems: FC = () => {
  const [status, setStatus] = useState(false);
  const videoRef = useRef<HTMLDivElement | null>(null);

  const handleScrollToVideo = () => {
    if (videoRef.current) {
      videoRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div>
        <SeminarBanner status={status} onButtonClick={handleScrollToVideo}  />
        <SeminarProggram />
        <SeminarSpeakers />
        {status ? (<InfoPrice />) : (<div ref={videoRef}><SeminarOldVideo /> </div>)}
        
        <UserTestimonials  isShow={false}/>
        <SeminarActions />
    </div>
  );
};

export default MainSeminarItems;