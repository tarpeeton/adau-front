
import {FC } from 'react';
import Video from './Video'
import Misson from './Mission'
import Team from './Team'
import Partners from './Partners'
import Timeline from './TimeLine'


const About: FC = () => {



  return (
    <div>
      <Video />
      <Misson />
      <Team />
      <Partners />
      <Timeline />
    </div>
  );
};

export default About;