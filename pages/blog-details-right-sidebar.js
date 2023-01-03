import React from 'react';
import PageBannerTwo from '../components/common/PageBannerTwo';
import BlogDetailsRightSidebarArea from '../components/Blog/BlogDetailsRightSidebarArea';

const BlogDetailsRightSidebar = () => {
  return (
    <>
      <PageBannerTwo
        bannerTitle='Blog Details right Sidebar'
        pageName='Blog Details right Sidebar'
      />
      <BlogDetailsRightSidebarArea />
    </>
  );
};

export default BlogDetailsRightSidebar;
