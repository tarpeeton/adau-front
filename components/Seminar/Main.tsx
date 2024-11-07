import {FC} from 'react';
import BannerSeminar from './Banner'
import NewSeminar from './NewSeminar'


const MainSeminar: FC = () => {
  return (
    <div>
        <BannerSeminar />
        <NewSeminar />
    </div>
  );
};

export default MainSeminar;