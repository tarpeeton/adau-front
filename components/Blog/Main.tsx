import {FC} from 'react';
import BannerBlog from './Banner'
import NewBlogs from './NewBlogs'
import CotegoryBlog from './Cotegory'


const MainBlog: FC = () => {
  return (
    <div>
      <BannerBlog />
      <NewBlogs />
      <CotegoryBlog/>
    </div>
  );
};

export default MainBlog;