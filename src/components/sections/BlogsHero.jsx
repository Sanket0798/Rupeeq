import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BLOG_CATEGORIES, BLOG_HERO_CONTENT } from '../../constants/blogContent';

/**
 * BlogsHero - Hero section with tab navigation for blog categories
 */
const BlogsHero = ({ onTabChange, initialTab = 'all' }) => {
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sync when parent tab changes (URL-driven)
  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descriptionsRef = useRef(null);
  const taglineRef = useRef(null);
  const tabsRef = useRef(null);

  const activeContent = BLOG_HERO_CONTENT[activeTab];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations
      if (window.innerWidth >= 768) {
        // Desktop animations
        gsap.from(tabsRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.2
        });

        gsap.from(titleRef.current, {
          opacity: 0,
          y: 50,
          duration: 1,
          ease: 'power3.out',
          delay: 0.4
        });

        if (descriptionsRef.current) {
          gsap.from(descriptionsRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.6
          });
        }

        if (taglineRef.current) {
          gsap.from(taglineRef.current, {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out',
            delay: 0.8
          });
        }
      } else {
        // Mobile animations
        gsap.from(tabsRef.current, {
          opacity: 0,
          y: -20,
          duration: 0.6,
          ease: 'power3.out',
          delay: 0.2
        });

        gsap.from(titleRef.current, {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.4
        });

        if (descriptionsRef.current) {
          gsap.from(descriptionsRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.6
          });
        }

        if (taglineRef.current) {
          gsap.from(taglineRef.current, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: 'power2.out',
            delay: 0.8
          });
        }
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate content change when tab switches
  useEffect(() => {
    if (titleRef.current && descriptionsRef.current) {
      gsap.fromTo(
        [titleRef.current, descriptionsRef.current, taglineRef.current],
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.1 }
      );
    }
  }, [activeTab]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    if (onTabChange) {
      onTabChange(tabId);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative pt-20 md:pt-24 pb-12 md:pb-20 overflow-hidden bg-gradient-to-b from-[#DDEDF9] via-[#DDEDF9] to-[#F7F7F7] [mask-image:linear-gradient(to_bottom,black_80%,transparent)]"
      style={{
        marginTop: '-80px',
        paddingTop: '150px',
      }}
    >
      {/* Background gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-full -z-10"
      />
      {/* Background Pattern Overlay - Desktop Only */}
      <div
        className="hidden md:block absolute inset-0 -right-[1300px] -top-[400px]"
        style={{
          backgroundImage: 'url(/assets/images/bg/HowWorksBg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          transform: 'rotate(41.99deg)',
        }}
      />

      {/* Content */}
      <div className="max-w-[1293px] mx-auto w-full relative z-10 px-4 md:px-0">
        {/* Tab Navigation */}
        <div ref={tabsRef} className="mb-6 md:mb-[49px]">
          {/* Mobile: 2x2 Grid */}
          <div className="md:hidden grid grid-cols-2 gap-3 bg-white rounded-3xl p-3 w-full max-w-md mx-auto">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`py-3 px-4 rounded-full font-medium text-sm leading-[110%] transition-all duration-300 ${activeTab === category.id
                  ? 'bg-custom-purple text-white shadow-md'
                  : 'bg-gray-50 text-[#1C1C29] hover:bg-purple-50 hover:text-custom-purple'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
          
          {/* Desktop: Horizontal Layout */}
          <div className="hidden md:flex items-center justify-between bg-white rounded-full w-[628px] h-[48px]">
            {BLOG_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleTabClick(category.id)}
                className={`py-3 px-5 rounded-full font-medium text-base leading-[110%] transition-all duration-300 ${activeTab === category.id
                  ? 'bg-custom-purple text-white scale-105'
                  : 'bg-white text-[#1C1C29] hover:bg-purple-50 hover:text-custom-purple'
                  }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Hero Content */}
        <div className="text-center">
          {/* Show banner images only for "All Blogs" tab */}
          {activeTab === 'all' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-[25px]">
              {/* Finance Banner - Larger, Left Side (2 columns) */}
              <div className="relative group cursor-pointer md:col-span-2 md:row-span-2">
                <img
                  src="/assets/images/blogs/finance.svg"
                  alt="Finance"
                  className="w-full h-full object-cover rounded-2xl md:rounded-3xl duration-300"
                />
                {/* Finance Label */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <span className="font-extrabold text-2xl md:text-[40px] leading-tight md:leading-[68px] text-custom-purple">Finance</span>
                </div>
              </div>

              {/* Credit Cards Banner - Top Right */}
              <div className="relative group cursor-pointer">
                <img
                  src="/assets/images/blogs/CreditCards.svg"
                  alt="Credit Cards"
                  className="w-full h-auto rounded-2xl md:rounded-3xl transition-shadow duration-300"
                />
                {/* Credit Cards Label */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <span className="font-bold text-base md:text-lg leading-tight md:leading-[22px] text-custom-purple underline">Credit Cards</span>
                </div>
              </div>

              {/* Credit Score Banner - Bottom Right */}
              <div className="relative group cursor-pointer">
                <img
                  src="/assets/images/blogs/CreditScore.svg"
                  alt="Credit Score"
                  className="w-full h-auto rounded-2xl md:rounded-3xl transition-shadow duration-300"
                />
                {/* Credit Score Label */}
                <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4">
                  <span className="font-bold text-base md:text-lg leading-tight md:leading-[22px] text-custom-purple underline">Credit Score</span>
                </div>
              </div>
            </div>
          ) : (
            <>
              {/* Title */}
              <h1 ref={titleRef} className="text-[28px] md:text-[48px] text-custom-dark-text font-semibold leading-[38px] md:leading-[60px] tracking-[2%] mb-6 md:mb-8">
                {activeContent.titleLines.map((line, index) => (
                  <span key={index}>
                    {line.highlight ? (
                      <span className="text-custom-purple font-extrabold">{line.text}</span>
                    ) : (
                      line.text
                    )}
                    {index < activeContent.titleLines.length - 1 && <br />}
                  </span>
                ))}
              </h1>

              {/* Descriptions */}
              <div ref={descriptionsRef} className="mb-8 md:mb-10">
                {activeContent.descriptions.map((desc, index) => (
                  <p
                    key={index}
                    className="text-custom-dark-text text-base md:text-lg leading-relaxed mb-4"
                  >
                    {desc}
                  </p>
                ))}
              </div>

              {/* Tagline */}
              {activeContent.tagline && (
                <div ref={taglineRef} className="mb-8">
                  <h2 className="text-[22px] md:text-[32px] font-bold text-custom-purple leading-[120%] tracking-[2%]">
                    {activeContent.tagline.line1}
                  </h2>
                  <p className="text-[22px] md:text-[32px] font-bold text-custom-purple leading-[120%] tracking-[2%]">
                    {activeContent.tagline.line2}
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogsHero;
