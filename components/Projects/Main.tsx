import {FC} from 'react';
import BannerProjects from './Banner'
import Work from './Work'


const MainProjects: FC = () => {
  return (
    <div>
        <BannerProjects />
        <Work />
    </div>
  );
};

export default MainProjects;