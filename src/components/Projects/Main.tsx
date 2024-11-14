import {FC} from 'react';
import BannerProjects from './Banner'
import Work from './Work'
import TopCases from './Сase'
import HowWeWork from '../About/HowWeWork'
import WhyChooseUs from '../Services/WhyChooseUs'
import SomeForm from '../About/Form'
import FaqComponent from '../Services/Faq'
import Partners from '../About/Partners'
import Form from '../Main/Form'


const MainProjects: FC = () => {
  return (
    <div>
        <BannerProjects />
        <Work />
        <TopCases />
        <HowWeWork />
        <WhyChooseUs title='Заказать проект' />
        <SomeForm />
        <FaqComponent />
        <Partners  active={true}/>
        <Form title='Готовы начать свой проект?' text='Свяжитесь с нами для консультации и начните работу над своим проектом уже сегодня' />
    </div>
  );
};

export default MainProjects;