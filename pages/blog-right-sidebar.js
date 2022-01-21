import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import BlogRightSidebarArea from '../components/Blog/BlogRightSidebarArea';

const BlogRightSidebar = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle='Blog Right Sidebar'
        pageName='Blog Right Sidebar'
      />
      <BlogRightSidebarArea />
    </>
  );
};

export default BlogRightSidebar;
