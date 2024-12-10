import {FC} from 'react';
import Banner from './Banner'
import About from './About'
import Services from './Services'
// import Projects from './Projects'
// import Reviews from './Reviews';
// import Case from './Case'
// import SeminarAndTrenings from './TreningSeminar'
import Blog from './Blog'
import Form from './Form'

const Main: FC = () => {
  return (
    <div>
        <Banner />
        <About />
        <Services />
        {/* <Projects /> */}
        {/* <Reviews /> */}
        {/* <Case /> */}
        {/* <SeminarAndTrenings /> */}
        <Blog />
        <Form  title={{ru:'Станьте частью сообщества  архитекторов будущего!' , uz: "Kelajak me'morlari jamoasining bir qismiga aylaning!" , en: "Become part of the community of future architects!"}} text={{ru:'Присоединяйтесь к нам, чтобы вместе создавать проекты, которые вдохновляют и меняют города к лучшему' , uz: "Bizga qo‘shiling va shaharlarga ilhom baxsh etuvchi hamda ularni yaxshiroq qilishga yordam beruvchi loyihalarni birgalikda yarataylik" , en: "Join us to create projects that inspire and transform cities for the better"}}/>
    </div>
  );
};

export default Main;