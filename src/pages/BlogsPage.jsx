import { useState } from 'react';
import BlogsHero from '../components/sections/BlogsHero';
import BlogListingSection from '../components/sections/BlogListingSection';
import BlogCTASection from '../components/sections/BlogCTASection';

/**
 * BlogsPage - Main blogs page with tabbed hero section
 */
const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const handleTabChange = (tabId) => {
    setActiveCategory(tabId);
  };

  return (
    <div className="min-h-screen bg-white">
      <BlogsHero onTabChange={handleTabChange} />
      <BlogListingSection category={activeCategory} />
      <BlogCTASection />
    </div>
  );
};

export default BlogsPage;
