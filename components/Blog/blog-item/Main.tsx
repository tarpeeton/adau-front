import {FC} from 'react';
import SomeBlog from './some-blog'
import BlogShare from './blog-share'
import BlogComments from './blog-comments'
import SimilarBlogs from './blog-similar'
import FollowToBlog from '../Follow'


const BlogItemMain: FC = () => {
  return (
    <div>
        <SomeBlog />
        <BlogShare />
        <BlogComments />
        <SimilarBlogs />
        <FollowToBlog />
    </div>
  );
};

export default BlogItemMain;