"use client"
import {FC} from 'react';
import CaseBaner from './case-banner'
import AboutCase from './case-about'
import CaseResult from './case-result'
import CaseVideo from './case-video'
import UserTestimonials from '../Seminar/UserTestimonials'
import CaseAction from './case-action'


const CaseMain: FC = () => {
  return (
    <div>
        <CaseBaner />
        <AboutCase />
        <CaseResult />
        <CaseVideo />
        <UserTestimonials  isShow={false}/>
        <CaseAction />
    </div>
  );
};

export default CaseMain;