import {FC} from 'react';
import SeminarBanner from './seminar-banner'
import SeminarProggram from './seminar-proggram'
import SeminarSpeakers from './seminar-speakers'
import InfoPrice from './seminar-info'


const MainSeminarItems: FC = () => {
  return (
    <div>
        <SeminarBanner />
        <SeminarProggram />
        <SeminarSpeakers />
        <InfoPrice />
    </div>
  );
};

export default MainSeminarItems;