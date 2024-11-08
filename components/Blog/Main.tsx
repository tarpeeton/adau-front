import {FC} from 'react';
import BannerBlog from './Banner'
import NewBlogs from './NewBlogs'


const MainBlog: FC = () => {
  return (
    <div>
      <BannerBlog />
      <NewBlogs />
    </div>
  );
};

export default MainBlog;