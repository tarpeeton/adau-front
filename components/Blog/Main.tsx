import {FC} from 'react';
import BannerBlog from './Banner'
import NewBlogs from './NewBlogs'
import CotegoryBlog from './Cotegory'
import SavedBlogs from './Save'
import BlogAcrions from './BlogActions'
import ExpertOpinions from './ExpertOpinions'
import VideoAndMedia from './VideoMedia'
import PopularBlogs from './Popular'


const MainBlog: FC = () => {
  return (
    <div>
      <BannerBlog />
      <NewBlogs />
      <CotegoryBlog/>
      <SavedBlogs />
      <BlogAcrions />
      <ExpertOpinions />
      <VideoAndMedia />
      <PopularBlogs />
    </div>
  );
};

export default MainBlog;