import {FC} from 'react';
import Banner from './Banner'
import ContactInfo from './ContactInfo'
import Map from './Map'
import Socials from './Social'
import FaqComponent from '../Services/Faq'
import AddUser from './Add'
import ContactAction from './ContacAction'
import SomeForm from '../About/Form'


const MainContacts: FC = () => {
  return (
    <div>
        <Banner />
        <ContactInfo />
        <SomeForm />
        <Map />
        <Socials />
        <FaqComponent />
        <AddUser />
        <ContactAction />
    </div>
  );
};

export default MainContacts;