import { useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BlueChevronUpIcon } from '../common/SvgIcons';
import { Button } from '../ui';

const TrustSection = () => {
  const sectionRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleOverdraftClick = () => {
    if (location.pathname === '/overdraft-facility') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/overdraft-facility');
    }
  };

  const trustPoints = [
    {
      title: 'Zero Unsolicited Messages',
      description: 'We Contact You Only When You Ask Us To.',
    },
    {
      title: 'No Pushy Sales',
      description: "Guidance Focused On What's Right For You.",
    },
    {
      title: 'Full Control',
      description: 'You Choose How And When We Connect',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-6 md:py-[42px] bg-gradient-to-r rounded-t-3xl md:rounded-t-24 mx-[14px] from-[#5528A9] to-[#34CA8D]"
    >
      <div className="mx-auto px-4 md:px-0" style={{ width: '90%', maxWidth: '1400px' }}>
        {/* Main heading */}
        <div className="text-center mb-6 md:mb-[30px]">
          <h2 className="text-2xl md:text-3xl lg:text-[40px] leading-[30px] md:leading-[47px] font-semibold md:font-bold text-white mb-3 md:mb-3">
            RupeeQ Motto: <br className="md:hidden" />No Spam. Just Trust.
          </h2>
          <p className="text-sm md:text-2xl font-normal md:font-semibold leading-[19px] md:leading-[30px] text-[#B0E6EC] mb-6 md:mb-[30px]">
            Talk To A Real Advisor - Only When You Want To.
          </p>
        </div>

        {/* Trust points grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-4 md:gap-y-0 gap-[6px] mb-6 md:mb-[30px]">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white flex rounded-[10px] md:rounded-none items-start gap-y-2 md:gap-y-3 justify-between flex-col backdrop-blur-sm p-4 md:p-6 shadow-[5px_5px_5px_0px_rgba(0,0,0,0.25)]"
            >
              <h3 className="text-lg md:text-[30px] font-bold md:font-semibold leading-[28px] md:leading-[38px] tracing-0 text-button-color">
                {point.title}
              </h3>
              <p className="text-[#070707] text-xs md:text-base leading-[20px] md:leading-[23px] font-medium">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-2 md:gap-16 justify-center items-center">
          <Button variant="primary-white-scale" size="md" className="gap-[10px] w-[194px] sm:w-auto" onClick={handleOverdraftClick}>
            Schedule a Call
            <BlueChevronUpIcon />
          </Button>
          <Button variant="primary-white-scale" size="md" className="gap-[10px] w-[194px] sm:w-auto" onClick={handleOverdraftClick}>
            Chat with Us
            <BlueChevronUpIcon />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
