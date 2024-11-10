"use client"
import {FC} from 'react';
import CaseBaner from './Banner'
import AboutCase from './CaseAbout'
import CaseResult from './case-result'


const CaseMain: FC = () => {
  return (
    <div>
        <CaseBaner />
        <AboutCase />
        <CaseResult />
    </div>
  );
};

export default CaseMain;