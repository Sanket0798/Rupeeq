import { Button } from '../ui';

const CreditCardsHero = () => {
  // Credit card data for the slider
  const creditCards = [
    {
      name: 'Razor Pay',
      image: '/assets/images/creditCards/card1.png',
    },
    {
      name: 'Alpha',
      image: '/assets/images/creditCards/card2.png',
    },
    {
      name: 'Axis Bank',
      image: '/assets/images/creditCards/card3.png',
    },
    {
      name: 'Razor Pay',
      image: '/assets/images/creditCards/card1.png',
    },
    {
      name: 'Alpha',
      image: '/assets/images/creditCards/card2.png',
    }
  ];

  return (
    <section id="credit-cards-hero" className="py-16 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
      {/* Header - Contained */}
      <div className="max-w-[1286px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
          <div>
            <h1 className="text-4xl lg:text-[50px] font-bold leading-tight mb-4">
              Smart <span className="text-custom-purple">Credit Cards</span> Designed For You
            </h1>
            <p className="text-lg text-[#747986] max-w-2xl">
              Choose From Our Wide Range Of Cards The One That Best Suits Your Needs.
            </p>
          </div>
          <Button variant="primary" size="lg" className="px-8 py-3 whitespace-nowrap">
            View More...
          </Button>
        </div>
      </div>

      {/* Auto-scrolling Credit Cards Slider - Full Width */}
      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        {/* <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none"></div> */}
        {/* <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div> */}
        
        {/* Scrolling container */}
        <div className="overflow-hidden">
          <div className="flex gap-8 animate-scroll-left">
            {/* First set of cards */}
            {creditCards.map((card, index) => (
              <div
                key={`card-1-${index}`}
                className="flex-shrink-0 w-[400px] lg:w-[450px] relative group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative">
                  {/* Tags - Show on every card when hovered */}
                  <div className="absolute top-6 right-6 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-custom-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Lorem
                    </span>
                    <span className="bg-custom-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Ipsum
                    </span>
                  </div>
                  
                  {/* Card Image */}
                  <div className="h-[300px] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-8">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback gradient card design
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center';
                        fallback.innerHTML = `
                          <div class="text-white text-center">
                            <div class="text-2xl font-bold mb-2">${card.name}</div>
                            <div class="text-sm opacity-80">Credit Card</div>
                          </div>
                        `;
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </div>
                  
                  {/* Card Name */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-custom-dark-text">{card.name}</h3>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {creditCards.map((card, index) => (
              <div
                key={`card-2-${index}`}
                className="flex-shrink-0 w-[400px] lg:w-[450px] relative group"
              >
                <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 relative">
                  {/* Tags - Show on every card when hovered */}
                  <div className="absolute top-6 right-6 z-10 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-custom-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Lorem
                    </span>
                    <span className="bg-custom-purple text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Ipsum
                    </span>
                  </div>
                  
                  {/* Card Image */}
                  <div className="h-[300px] bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center p-8">
                    <img
                      src={card.image}
                      alt={card.name}
                      className="w-full h-full object-contain"
                      onError={(e) => {
                        // Fallback gradient card design
                        e.target.style.display = 'none';
                        const fallback = document.createElement('div');
                        fallback.className = 'w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl shadow-2xl flex items-center justify-center';
                        fallback.innerHTML = `
                          <div class="text-white text-center">
                            <div class="text-2xl font-bold mb-2">${card.name}</div>
                            <div class="text-sm opacity-80">Credit Card</div>
                          </div>
                        `;
                        e.target.parentElement.appendChild(fallback);
                      }}
                    />
                  </div>
                  
                  {/* Card Name */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-custom-dark-text">{card.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardsHero;
