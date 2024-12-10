'use client'
import { FC, useRef } from 'react'
import BannerProjects from './Banner'
import Work from './Work'
import TopCases from './Сase'
import HowWeWork from '../About/HowWeWork'
import WhyChooseUs from '../Services/WhyChooseUs'
import FaqComponent from '../Services/Faq'
// import Partners from '../About/Partners'
import Form from '../Main/Form'
import ProjectQuestion from './ProjectQuestion'


const MainProjects: FC = () => {
  const topCasesRef = useRef<HTMLDivElement | null>(null)

  const scrollToTopCases = () => {
    if (topCasesRef.current) {
      topCasesRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }


  return (
    <div>
      <BannerProjects scrollToTopCases={scrollToTopCases} />
      <div ref={topCasesRef}>
        <Work />
      </div>
      <TopCases />
      <HowWeWork />
      <WhyChooseUs  title={{ru:'Заказать проект' , uz: "Loyiha buyutma berish" , en: "Order a Project"}} project={false} />
      <ProjectQuestion />
      <FaqComponent />
      {/* <Partners active={true} /> */}
     

      <Form 
  title={{
    ru: 'Готовы начать свой проект?', 
    uz: "O'z Loyihangizni boshlashga tayyormisiz?", 
    en: "Ready to start your project?"
  }} 
  text={{
    ru: 'Свяжитесь с нами для консультации и начните работу над своим проектом уже сегодня', 
    uz: "Biz bilan bog'laning va bugun loyihangiz ustida ishlashni boshlang", 
    en: "Contact us for a consultation and start working on your project today"
  }} 
/>



    </div>
  )
}

export default MainProjects