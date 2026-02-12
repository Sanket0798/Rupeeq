const PartnersMarquee = () => {
  // Partner logos data - using actual logo paths from public/assets/images/partners
  const partners = [
    { name: 'Partner 1', logo: '/assets/images/partners/1.png', alt: 'Partner 1 Logo' },
    { name: 'Partner 2', logo: '/assets/images/partners/2.jpg', alt: 'Partner 2 Logo' },
    { name: 'Partner 3', logo: '/assets/images/partners/3.png', alt: 'Partner 3 Logo' },
    { name: 'Partner 4', logo: '/assets/images/partners/4.png', alt: 'Partner 4 Logo' },
    { name: 'Partner 5', logo: '/assets/images/partners/5.png', alt: 'Partner 5 Logo' },
    { name: 'Partner 6', logo: '/assets/images/partners/6.png', alt: 'Partner 6 Logo' },
    { name: 'Partner 7', logo: '/assets/images/partners/7.png', alt: 'Partner 7 Logo' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-[30px]">
        <h2 className="text-3xl lg:text-[50px] font-medium leading-[1.2] tracing-0 text-custom-dark-text mb-6">
          Trusted across <span className="text-custom-dark-blue font-bold">980+</span> locations{' '}
          <span className="text-custom-dark-blue font-bold">nationwide</span>
        </h2>
        <p className="text-[#070129] text-[22px] font-normal leading-7 tracking-0">
          Partner with us to enable secure and seamless financial solutions.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full">
        {/* Gradient overlays for smooth fade effect */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

        {/* Scrolling content */}
        <div className="flex animate-marquee">
          {duplicatedPartners.map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 flex items-center justify-center h-20 w-40"
            >
              <div className="flex items-center justify-center w-full h-full transition-shadow duration-300">
                <img
                  src={partner.logo}
                  alt={partner.alt}
                  className="max-w-full max-h-full object-contain transition-all duration-300"
                  onError={(e) => {
                    // Fallback to partner name if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="hidden text-sm font-medium text-gray-600">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      {/* <div className="flex justify-center mt-8 space-x-2">
        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div> */}
    </section>
  );
};

export default PartnersMarquee;