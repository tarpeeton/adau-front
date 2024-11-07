import {FC} from 'react';
import BannerService from './Banner'
import Service from './Service'


const MainService: FC = () => {
  return (
    <div>
      <BannerService />
      <Service />
    </div>
  );
};

export default MainService;