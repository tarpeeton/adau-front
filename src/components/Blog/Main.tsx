import {FC} from 'react';
import BannerBlog from './Banner'
import NewBlogs from './NewBlogs'
import CotegoryBlog from './Cotegory'
// import SavedBlogs from './Save'
// import BlogActions from './BlogActions'
// import ExpertOpinions from './ExpertOpinions'
// import VideoAndMedia from './VideoMedia'
// import PopularBlogs from './Popular'
// import FollowToBlog from './Follow'


const MainBlog: FC = () => {
  return (
    <div>
      <BannerBlog />
      <NewBlogs />
      <CotegoryBlog/>
      {/* <SavedBlogs />
      <BlogActions />
      <ExpertOpinions />
      <VideoAndMedia />
      <PopularBlogs />
      <FollowToBlog /> */}
    </div>
  );
};

export default MainBlog;