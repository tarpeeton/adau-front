"use client"
import {FC} from 'react';
import CaseBaner from './Banner'
import AboutCase from './CaseAbout'


const CaseMain: FC = () => {
  return (
    <div>
        <CaseBaner />
        <AboutCase />
    </div>
  );
};

export default CaseMain;