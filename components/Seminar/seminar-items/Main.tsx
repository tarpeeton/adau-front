import {FC} from 'react';
import SeminarBanner from './seminar-banner'
import SeminarProggram from './seminar-proggram'


const MainSeminarItems: FC = () => {
  return (
    <div>
        <SeminarBanner />
        <SeminarProggram />
    </div>
  );
};

export default MainSeminarItems;