"use client"
import {FC , useState , useEffect, useRef} from 'react';
import BannerSeminar from './Banner'
import NewSeminar from './NewSeminar'
import WhyInvite from './WhyInvite'
import AddSeminarForm from './AddSeminarForm'
import FaqComponent from '../Services/Faq'
import Partners from '../About/Partners'
import Speakers from './Speakers'
import UserTestimonials from './UserTestimonials'
import SeminarForm from './SeminarForm'
import OldSeminar from './OldSeminar'
import { client } from "@/sanity/lib/client";
import useLocale from '@/hooks/useLocale'
import { ISeminarCategory  , ISeminarData} from '@/interface/ISeminar/seminar';
import QuestionForm from './QuestionForm'


const MainSeminar: FC = () => {
  const [cotegory , setCotegory] = useState<ISeminarCategory[] | []>([])
  const [data , setData] = useState<ISeminarData[] | []>([])
  const [oldData , setOldData]= useState<ISeminarData[] | []>([])
  const formRef = useRef<HTMLDivElement>(null)

  const locale = useLocale()

useEffect(() => {
  const fetchData = async () => {
    try {
      const cotegoryData =  await client.fetch(
        `*[_type == "seminarCategory"]`
      )
      setCotegory(cotegoryData)
    } catch (error) {
      console.debug(error)
    }
  }
  fetchData()
} , [locale])


useEffect(() => {
  const fetchData = async () => {
    try {
      const Data = await client.fetch(
        `*[_type == "seminar"]`
      );
      
      // Filtering seminars with status "old"
      const oldSeminars = Data.filter((seminar: ISeminarData) => seminar.status === 'old');
      const NewSeminar = Data.filter((seminar: ISeminarData) => seminar.status === 'new');
      setData(NewSeminar);
      setOldData(oldSeminars);

    } catch (error) {
      console.debug(error);
    }
  };
  fetchData();
}, [locale]);


 const handleScrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
}


  return (
    <div>
        <BannerSeminar />
        <NewSeminar cotegory={cotegory} data={data}/>
        <OldSeminar cotegory={cotegory} data={oldData}/>
        <WhyInvite />
        <AddSeminarForm onClick={handleScrollToForm} />
        <Speakers />
        {/* <UserTestimonials  isShow={true}/> */}
        <FaqComponent />
        <div ref={formRef}>
          <SeminarForm data={data} />
        </div>
        {/* <Partners active={true} /> */}
        {/* <QuestionForm/> */}
    </div>
  );
};

export default MainSeminar;