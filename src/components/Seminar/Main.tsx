import {FC} from 'react';
import BannerSeminar from './Banner'
import NewSeminar from './NewSeminar'
import WhyInvite from './WhyInvite'
import AddSeminarForm from './AddSeminarForm'
import FaqComponent from '../Services/Faq'
import Partners from '../About/Partners'
import SomeForm from '../About/Form'
import Speakers from './Speakers'
import UserTestimonials from './UserTestimonials'
import SeminarForm from './SeminarForm'
import OldSeminar from './OldSeminar'


const MainSeminar: FC = () => {
  return (
    <div>
        <BannerSeminar />
        <NewSeminar />
        <OldSeminar />
        <WhyInvite />
        <AddSeminarForm />
        <Speakers />
        <UserTestimonials  isShow={true}/>
        <FaqComponent />
        <SeminarForm />
        <Partners active={true} />
        <SomeForm />
    </div>
  );
};

export default MainSeminar;