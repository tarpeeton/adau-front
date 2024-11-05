import {FC} from 'react';
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Projects from './Projects'
import Reviews from './Reviews';
import Case from './Case'
import SeminarAndTrenings from './TreningSeminar'
import Blog from './Blog'

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
    </div>
  );
};

export default Main;