import {FC} from 'react';
import BannerService from './Banner'
import Service from './Service'
import MoreService from './MoreServices'
import ServiceCase from './Case'
import WhyChooseUs from './WhyChooseUs'


const MainService: FC = () => {
  return (
    <div>
      <BannerService />
      <Service />
      <MoreService />
      <ServiceCase />
      <WhyChooseUs />
    </div>
  );
};

export default MainService;