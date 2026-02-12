const PartnersMarquee = () => {
  // Partner logos data - you can replace these with actual logo URLs
  const partners = [
    { name: 'nCred', logo: '/logos/ncred.png', color: 'text-orange-500' },
    { name: 'IDFC FIRST Bank', logo: '/logos/idfc.png', color: 'text-red-700' },
    { name: 'Kotak', logo: '/logos/kotak.png', color: 'text-blue-600' },
    { name: 'Money View', logo: '/logos/moneyview.png', color: 'text-green-600' },
    { name: 'HDFC BANK', logo: '/logos/hdfc.png', color: 'text-blue-700' },
    { name: 'Piramal', logo: '/logos/piramal.png', color: 'text-orange-600' },
    { name: 'TATA CAPITAL', logo: '/logos/tata.png', color: 'text-blue-800' },
    { name: 'Partner 8', logo: '/logos/partner8.png', color: 'text-purple-600' },
  ];

  // Duplicate the array to create seamless loop
  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          Trusted across <span className="text-purple-600">980+</span> locations{' '}
          <span className="text-purple-600">nationwide</span>
        </h2>
        <p className="text-gray-600 text-lg">
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
              {/* Placeholder for logo - replace with actual img tags when you have logos */}
              <div className="flex items-center justify-center w-full h-full bg-gray-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <span className={`font-bold text-lg ${partner.color}`}>
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center mt-8 space-x-2">
        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>
    </section>
  );
};

export default PartnersMarquee;