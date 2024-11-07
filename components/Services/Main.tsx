import {FC} from 'react';
import BannerService from './Banner'
import Service from './Service'
import MoreService from './MoreServices'
import ServiceCase from './Case'


const MainService: FC = () => {
  return (
    <div>
      <BannerService />
      <Service />
      <MoreService />
      <ServiceCase />
    </div>
  );
};

export default MainService;