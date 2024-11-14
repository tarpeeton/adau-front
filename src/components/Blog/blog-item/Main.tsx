"use client";
import { FC, useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { client } from "@/sanity/lib/client";
import { IBlog } from '@/interface/IBlogs/blog';
import SomeBlog from './some-blog';
import BlogShare from './blog-share';
import BlogComments from './blog-comments';
import SimilarBlogs from './blog-similar';
import FollowToBlog from '../Follow';

const BlogItemMain: FC = () => {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchBlogData = async () => {
    if (slug) {
      try {
        const data = await client.fetch<IBlog>(
          `*[_type == "blog" && slug.current == $slug][0] {
            _id,
            _createdAt,
            title,
            slug,
            description,
            userName,
            userOccupation,
            userImage,
            mainImage,
            category,
            popular,
            additionalContent,
            "comments": *[_type == "comment" && references(^._id)] {
              _id,
              text,
              _createdAt
            }
          }`,
          { slug }
        );
        setBlogData(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog data:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchBlogData();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!blogData) return <div>Blog not found</div>;

  return (
    <div>
      {/* Pass the blog data to the child components or render as needed */}
      <SomeBlog blog={blogData} />
      <BlogShare />
      <BlogComments refetchComments={fetchBlogData} blogID={blogData._id} comments={blogData.comments} /> {/* Pass comments here */}
      <SimilarBlogs />
      <FollowToBlog />
    </div>
  );
};

export default BlogItemMain;
