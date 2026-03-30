import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BLOG_CATEGORIES } from '../../constants/blogContent';

/**
 * BlogsHero - Tab navigation bar only (no hero content)
 */
const BlogsHero = ({ onTabChange, initialTab = 'all' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const tabsRef = useRef(null);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(tabsRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, tabsRef);
    return () => ctx.revert();
  }, []);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) onTabChange(tabId);
  };

  return (
    <section
      // className="relative overflow-hidden bg-gradient-to-b from-[#DDEDF9] to-[#F7F7F7]"
      className="relative overflow-hidden bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9]/60 to-transparent"
      style={{ marginTop: '-80px', paddingTop: '110px', paddingBottom: '24px' }}
    >
      {/* Background pattern - desktop only */}
      <div
        className="hidden md:block absolute inset-0 -right-[1300px] -top-[400px] -z-0"
        // style={{
        //   backgroundImage: 'url(/assets/images/bg/HowWorksBg.png)',
        //   backgroundSize: 'cover',
        //   backgroundPosition: 'center',
        //   backgroundRepeat: 'no-repeat',
        //   transform: 'rotate(41.99deg)',
        // }}
      />

      <div className="max-w-[1293px] mx-auto px-4 md:px-6 lg:px-0 relative z-10">
        {/* Mobile: 2x2 grid */}
        <div
          ref={tabsRef}
          className="md:hidden grid grid-cols-2 gap-3 bg-white rounded-3xl p-3 w-full max-w-md mx-auto"
        >
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              className={`py-3 px-4 rounded-full font-medium text-sm transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-custom-purple text-white shadow-md'
                  : 'bg-gray-50 text-[#1C1C29] hover:bg-purple-50 hover:text-custom-purple'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Desktop: pill row */}
        <div
          ref={tabsRef}
          className="hidden md:flex items-center bg-white rounded-full w-fit h-[48px] px-1 gap-1 shadow-card"
        >
          {BLOG_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleTabClick(cat.id)}
              className={`py-2 px-6 rounded-full font-medium text-base transition-all duration-300 ${
                activeTab === cat.id
                  ? 'bg-custom-purple text-white scale-105'
                  : 'text-[#1C1C29] hover:bg-purple-50 hover:text-custom-purple'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
