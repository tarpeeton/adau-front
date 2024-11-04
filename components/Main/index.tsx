import {FC} from 'react';
import Banner from './Banner'
import About from './About'
import Services from './Services'
import Projects from './Projects'


const Main: FC = () => {
  return (
    <div>
        <Banner />
        <About />
        <Services />
        <Projects />
    </div>
  );
};

export default Main;