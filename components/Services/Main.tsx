import {FC} from 'react';
import BannerService from './Banner'
import Service from './Service'
import MoreService from './MoreServices'
import ServiceCase from './Case'
import WhyChooseUs from './WhyChooseUs'
import HowWeWork from '../About/HowWeWork'


const MainService: FC = () => {
  return (
    <div>
      <BannerService />
      <Service />
      <MoreService />
      <ServiceCase />
      <WhyChooseUs />
      <HowWeWork />
    </div>
  );
};

export default MainService;