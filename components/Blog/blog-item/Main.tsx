import {FC} from 'react';
import SomeBlog from './some-blog'
import BlogShare from './blog-share'
import BlogComments from './blog-comments'


const BlogItemMain: FC = () => {
  return (
    <div>
        <SomeBlog />
        <BlogShare />
        <BlogComments />
    </div>
  );
};

export default BlogItemMain;