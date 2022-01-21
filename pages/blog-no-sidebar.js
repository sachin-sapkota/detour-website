import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import BlogNoSidebarArea from '../components/Blog/BlogNoSidebarArea';

const BlogNoSidebar = () => {
  return (
    <>
      <PageBannerTwo bannerTitle='Blog No Sidebar' pageName='Blog No Sidebar' />
      <BlogNoSidebarArea />
    </>
  );
};

export default BlogNoSidebar;
