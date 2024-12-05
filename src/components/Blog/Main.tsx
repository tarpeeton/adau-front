"use client"
import {FC , useRef} from 'react';
import BannerBlog from './Banner'
import NewBlogs from './NewBlogs'
import CotegoryBlog from './Cotegory'
import SavedBlogs from './Save'
import BlogActions from './BlogActions'
import ExpertOpinions from './ExpertOpinions'
// import VideoAndMedia from './VideoMedia'
import PopularBlogs from './Popular'
import FollowToBlog from './Follow'


const MainBlog: FC = () => {
  const followRef = useRef<HTMLDivElement>(null)

  const scrollToFollow = () => {
    followRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <div>
      <BannerBlog />
      <NewBlogs />
      <CotegoryBlog/>
      <SavedBlogs />
      <BlogActions onClick={scrollToFollow} />
      <ExpertOpinions />
      {/* <VideoAndMedia /> */}
      <PopularBlogs />
      <div ref={followRef}>
        <FollowToBlog />
      </div>
    </div>
  );
};

export default MainBlog;