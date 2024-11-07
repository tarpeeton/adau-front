import {FC} from 'react';
import BannerService from './Banner'
import Service from './Service'
import MoreService from './MoreServices'


const MainService: FC = () => {
  return (
    <div>
      <BannerService />
      <Service />
      <MoreService />
    </div>
  );
};

export default MainService;