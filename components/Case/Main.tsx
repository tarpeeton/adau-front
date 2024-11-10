"use client"
import {FC} from 'react';
import CaseBaner from './case-banner'
import AboutCase from './case-about'
import CaseResult from './case-result'
import CaseVideo from './case-video'


const CaseMain: FC = () => {
  return (
    <div>
        <CaseBaner />
        <AboutCase />
        <CaseResult />
        <CaseVideo />
    </div>
  );
};

export default CaseMain;