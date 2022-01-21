import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import BlogDetailsArea from '../components/Blog/BlogDetailsArea';

const BlogDetails = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle='Blog Details No Sidebar'
        pageName='Blog Details No Sidebar'
      />
      <BlogDetailsArea />
    </>
  );
};

export default BlogDetails;
