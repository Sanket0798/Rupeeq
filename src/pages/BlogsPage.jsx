import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import BlogsHero from '../components/sections/BlogsHero';
import BlogListingSection from '../components/sections/BlogListingSection';
import BlogCTASection from '../components/sections/BlogCTASection';

const VALID_TABS = ['all', 'personal-loan', 'credit-score', 'credit-card'];

const BlogsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabFromUrl = searchParams.get('tab');
  const activeTab = VALID_TABS.includes(tabFromUrl) ? tabFromUrl : 'all';

  const [activeCategory, setActiveCategory] = useState(activeTab);

  useEffect(() => {
    setActiveCategory(activeTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  const handleTabChange = (tabId) => {
    setActiveCategory(tabId);
    setSearchParams(tabId === 'all' ? {} : { tab: tabId });
  };

  return (
    <div className="min-h-screen bg-white">
      <BlogsHero onTabChange={handleTabChange} initialTab={activeCategory} />
      <BlogListingSection category={activeCategory} onTabChange={handleTabChange} />
      <BlogCTASection />
    </div>
  );
};

export default BlogsPage;
