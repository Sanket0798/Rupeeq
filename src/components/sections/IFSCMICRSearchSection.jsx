import { useState } from 'react';
import { RightArrowIcon } from '../common/SvgIcons';

const IFSCMICRSearchSection = () => {
  const [selectedBank, setSelectedBank] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedBranch, setSelectedBranch] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative -mt-10 md:-mt-7 pb-16 md:pb-20">
      <div className="max-w-[1366px]">
        {/* White Card Container with Shadow */}
        <div className="bg-white rounded-24 shadow-[5px_5px_5px_rgba(0,0,0,0.25)] py-[40px] relative z-10">
          {/* Header */}
          <div className="text-center mb-8 md:mb-[60px]">
            <h2 className="font-bold text-[40px] leading-[48px] text-black mb-2">
              Search For IFSC/ MICR Codes
            </h2>
            <p className="font-normal text-xl leading-[26px] text-black">
              Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
            </p>
          </div>

          <div className="flex justify-end gap-8 md:gap-12 items-center">
            {/* Left Side - Form */}
            <form onSubmit={handleSubmit} className="max-w-[730px] w-full space-y-6">
              {/* Search By Bank */}
              <div>
                <label className="font-normal text-[17px] leading-[23px] text-black mb-3 block">
                  Search By Bank
                </label>
                <input
                  type="text"
                  placeholder="Select Bank"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full px-4 py-3 md:p-[14px] font-normal border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-[#F5F5F5] placeholder:text-[#575757] text-custom-dark-text text-sm md:text-[17px]"
                />
              </div>

              {/* Search By State */}
              <div>
                <label className="font-normal text-[17px] leading-[23px] text-black mb-3 block">
                  Search By State
                </label>
                <input
                  type="text"
                  placeholder="Search State"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 md:p-[14px] font-normal border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-[#F5F5F5] placeholder:text-[#575757] text-custom-dark-text text-sm md:text-[17px]"
                />
              </div>

              {/* Search By City */}
              <div>
                <label className="font-normal text-[17px] leading-[23px] text-black mb-3 block">
                  Search By City
                </label>
                <input
                  type="text"
                  placeholder="Search City"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 md:p-[14px] font-normal border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-[#F5F5F5] placeholder:text-[#575757] text-custom-dark-text text-sm md:text-[17px]"
                />
              </div>

              {/* Search By Branch */}
              <div>
                <label className="font-normal text-[17px] leading-[23px] text-black mb-3 block">
                  Search By Branch
                </label>
                <input
                  type="text"
                  placeholder="Search Branch"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full px-4 py-3 md:p-[14px] font-normal border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-[#F5F5F5] placeholder:text-[#575757] text-custom-dark-text text-sm md:text-[17px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-button-color text-white font-normal md:leading-[29px] text-base md:text-2xl py-3 md:py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit
                <RightArrowIcon color="white" />
              </button>

              <p className="font-medium text-base leading-[24px] text-black font-inter-tight">
                Clicking "Submit" means you agree to our Terms of Service
              </p>
            </form>

            {/* Right Side - Illustration */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative left-28">
                <img
                  src="/assets/images/tools/Img2.png"
                  alt="Search IFSC/MICR Illustration"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IFSCMICRSearchSection;
