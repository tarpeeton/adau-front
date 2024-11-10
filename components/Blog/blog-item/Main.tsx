import {FC} from 'react';
import SomeBlog from './some-blog'
import BlogShare from './blog-share'


const BlogItemMain: FC = () => {
  return (
    <div>
        <SomeBlog />
        <BlogShare />
    </div>
  );
};

export default BlogItemMain;