import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import BlogDetailsLeftSidebarArea from '../components/Blog/BlogDetailsLeftSidebarArea';

const BlogDetailsLeftSidebar = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle='Blog Details Left Sidebar'
        pageName='Blog Details Left Sidebar'
      />
      <BlogDetailsLeftSidebarArea />
    </>
  );
};

export default BlogDetailsLeftSidebar;
