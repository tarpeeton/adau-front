import {FC} from 'react';
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Reviews from './Reviews';
import Case from './Case'
import SeminarAndTrenings from './TreningSeminar'
import Blog from './Blog'
import Form from './Form'

const Main: FC = () => {
  return (
    <div>
        <Banner />
        <About />
        <Services />
        <Projects />
        <Reviews />
        <Case />
        <SeminarAndTrenings />
        <Blog />
        <Form  title='Станьте частью сообщества архитекторов будущего!' text='Присоединяйтесь к нам, чтобы вместе создавать проекты, которые вдохновляют и меняют города к лучшему'/>
    </div>
  );
};

export default Main;