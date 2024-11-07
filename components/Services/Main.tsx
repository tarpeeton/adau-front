import {FC} from 'react';
import BannerService from './Banner'
import Service from './Service'
import MoreService from './MoreServices'
import ServiceCase from './Case'
import WhyChooseUs from './WhyChooseUs'
import HowWeWork from '../About/HowWeWork'
import FaqComponent from './Faq'
import Form from '../Main/Form'


const MainService: FC = () => {
  return (
    <div>
      <BannerService />
      <Service />
      <MoreService />
      <ServiceCase />
      <WhyChooseUs />
      <HowWeWork />
      <FaqComponent />
      <Form  text='Поддержка на всех этапах проекта, гарантия высокого качества услуг' title='Готовы начать работать с нами?'/>
    </div>
  );
};

export default MainService;