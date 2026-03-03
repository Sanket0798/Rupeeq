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
    <section className="relative md:-mt-7 pb-10 md:pb-8 px-8 md:px-0">
      <div className="max-w-[1366px]">
        {/* White Card Container with Shadow */}
        <div className="bg-white rounded-24 md:shadow-[5px_5px_5px_rgba(0,0,0,0.25)] md:py-[40px] relative z-10">
          {/* Header */}
          <div className="text-center mb-11 md:mb-[60px] px-0 md:px-0">
            <h2 className="font-bold text-3xl md:text-[40px] leading-[35px] md:leading-[48px] text-[#1E1E1E] md:text-black mb-5 md:mb-2">
              Search For IFSC/ MICR Codes
            </h2>
            <p className="font-normal text-sm md:text-xl leading-[22px] md:leading-[26px] text-[#8E8E8E] md:text-black">
              Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
            </p>
          </div>

          {/* Mobile Illustration - Only visible on mobile */}
          <div className="lg:hidden flex justify-center mb-[48px]">
            <div className="w-full max-w-[350px]">
              <img
                src="/assets/images/tools/Img2.png"
                alt="Search IFSC/MICR Illustration"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:justify-end gap-8 md:gap-12 items-center">
            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full lg:max-w-[730px] space-y-4 md:space-y-6 px-0 md:px-0">
              {/* Search By Bank */}
              <div>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by Bank
                </label>
                <input
                  type="text"
                  placeholder="Select Bank"
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full px-4 py-[15px] md:p-[14px] font-normal border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] md:leading-none md:text-[17px] rounded-full md:rounded-none"
                />
              </div>

              {/* Search By State */}
              <div>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by State
                </label>
                <input
                  type="text"
                  placeholder="Search State"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-[15px] md:p-[14px] font-normal border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] md:leading-none md:text-[17px] rounded-full md:rounded-none"
                />
              </div>

              {/* Search By City */}
              <div>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by City
                </label>
                <input
                  type="text"
                  placeholder="Search City"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-[15px] md:p-[14px] font-normal border border-[#E5E5E5] md:border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] md:leading-none md:text-[17px] rounded-full md:rounded-none"
                />
              </div>

              {/* Search By Branch */}
              <div>
                <label className="font-bold md:font-normal text-sm md:text-[17px] leading-[23px] text-[#58626C] md:text-black mb-2 md:mb-3 block">
                  Search by Branch
                </label>
                {/* Mobile: Textarea */}
                <textarea
                  placeholder="Search Branch"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  rows="4"
                  className="lg:hidden w-full px-4 py-[15px] font-normal border border-[#E5E5E5] focus:outline-none focus:ring-1 focus:ring-button-color bg-white md:bg-[#F5F5F5] placeholder:text-[#58626C]/50 md:placeholder:text-[#575757] text-custom-dark-text text-sm leading-[20px] rounded-[20px] resize-none"
                />
                {/* Desktop: Input */}
                <input
                  type="text"
                  placeholder="Search Branch"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="hidden lg:block w-full px-4 py-3 md:p-[14px] font-normal border-none focus:outline-none focus:ring-1 focus:ring-button-color bg-[#F5F5F5] placeholder:text-[#575757] text-custom-dark-text text-sm md:text-[17px]"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-button-color text-white font-normal text-base md:text-2xl leading-[24px] md:leading-[29px] py-3 md:py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit
                <RightArrowIcon color="white" />
              </button>

              <p className="font-normal md:font-medium text-xs md:text-base leading-[19px] md:leading-[24px] text-[#4B5768] md:text-black text-center md:text-start md:font-inter-tight">
                Clicking "Submit" means you agree to our Terms of Service
              </p>
            </form>

            {/* Desktop Illustration - Only visible on desktop */}
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
