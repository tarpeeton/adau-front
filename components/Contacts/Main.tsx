import {FC} from 'react';
import Banner from './Banner'
import ContactInfo from './ContactInfo'
import Map from './Map'
import Socials from './Social'


const MainContacts: FC = () => {
  return (
    <div>
        <Banner />
        <ContactInfo />
        <Map />
        <Socials />
    </div>
  );
};

export default MainContacts;