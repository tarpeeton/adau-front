import {FC} from 'react';
import BannerBlog from './Banner'
import NewBlogs from './NewBlogs'
import CotegoryBlog from './Cotegory'
import SavedBlogs from './Save'
import BlogAcrions from './BlogActions'


const MainBlog: FC = () => {
  return (
    <div>
      <BannerBlog />
      <NewBlogs />
      <CotegoryBlog/>
      <SavedBlogs />
      <BlogAcrions />
    </div>
  );
};

export default MainBlog;