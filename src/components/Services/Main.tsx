"use client"
import {FC} from 'react';
import BannerService from './Banner'
import Service from './Service'
// import MoreService from './MoreServices'
// import ServiceCase from './Case'
import WhyChooseUs from './WhyChooseUs'
// import HowWeWork from '../About/HowWeWork'
import FaqComponent from './Faq'
import Form from '../Main/Form'


const MainService: FC = () => {
  return (
    <div>
      <BannerService />
      <Service />
      {/* <MoreService /> */}
      {/* <ServiceCase /> */}
      <WhyChooseUs project={true}  title={{ru:'Вступить в ассоциацию' , uz: "Assotsiatsiyaga qo'shilish" , en: "Join the association"}}/>
      {/* <HowWeWork /> */}
      <FaqComponent />
      <Form  text={{ru:'Поддержка на всех этапах проекта, гарантия высокого качества услуг' , uz: "Barcha etaplar bo'yicha qo'llanma, tez tez ko'chirilgan qo'shimcha xizmatlar" , en: "Support on all project stages, high-quality additional services"}} title={{ru:'Готовы начать работать   с нами ?' , uz: "Biz bilan ishlashga tayyormisiz ?" , en: "Ready to start working with us ?"}}/>
    </div>
  );
};

export default MainService;