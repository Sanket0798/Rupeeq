import { useState } from 'react';

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
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1286px] mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-[40px] font-bold mb-4">
            <span className="text-custom-dark-text">Search For IFSC/ MICR Codes</span>
          </h2>
          <p className="text-[#747986] text-lg">
            Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Form */}
          <div className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Search By Bank */}
              <div>
                <label className="text-custom-dark-text font-semibold mb-2 block">
                  Search By Bank
                </label>
                <select
                  value={selectedBank}
                  onChange={(e) => setSelectedBank(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-[#F5F5F5] text-gray-500"
                >
                  <option value="">Select Bank</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="sbi">State Bank of India</option>
                  <option value="axis">Axis Bank</option>
                  <option value="kotak">Kotak Mahindra Bank</option>
                </select>
              </div>

              {/* Search By State */}
              <div>
                <label className="text-custom-dark-text font-semibold mb-2 block">
                  Search By State
                </label>
                <input
                  type="text"
                  placeholder="Search State"
                  value={selectedState}
                  onChange={(e) => setSelectedState(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-[#F5F5F5] placeholder:text-gray-400"
                />
              </div>

              {/* Search By City */}
              <div>
                <label className="text-custom-dark-text font-semibold mb-2 block">
                  Search By City
                </label>
                <input
                  type="text"
                  placeholder="Search City"
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-[#F5F5F5] placeholder:text-gray-400"
                />
              </div>

              {/* Search By Branch */}
              <div>
                <label className="text-custom-dark-text font-semibold mb-2 block">
                  Search By Branch
                </label>
                <input
                  type="text"
                  placeholder="Search Branch"
                  value={selectedBranch}
                  onChange={(e) => setSelectedBranch(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-button-color bg-[#F5F5F5] placeholder:text-gray-400"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-button-color text-white font-semibold text-lg py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit
                <span>→</span>
              </button>

              <p className="text-sm text-[#747986] text-center">
                Clicking "Submit" means you agree to our Terms of Service
              </p>
            </form>
          </div>

          {/* Right Side - Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/assets/images/tools/search-illustration.png" 
                alt="Search IFSC/MICR Illustration"
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback illustration if image not found
                  e.target.style.display = 'none';
                  const fallback = document.createElement('div');
                  fallback.className = 'bg-gradient-to-br from-green-50 to-blue-50 rounded-3xl p-12 flex items-center justify-center';
                  fallback.innerHTML = `
                    <div class="text-center relative">
                      <div class="absolute -top-8 -left-8 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-2xl">✓</div>
                      <div class="absolute -top-8 -right-8 w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center text-2xl">💡</div>
                      <div class="bg-white rounded-2xl p-8 shadow-lg mb-4">
                        <div class="text-6xl mb-2">🔍</div>
                        <div class="h-2 bg-purple-200 rounded mb-2"></div>
                        <div class="h-2 bg-purple-200 rounded mb-2"></div>
                        <div class="h-2 bg-purple-200 rounded w-3/4 mx-auto"></div>
                      </div>
                      <div class="flex justify-center">
                        <div class="text-6xl">👩‍💼</div>
                      </div>
                    </div>
                  `;
                  e.target.parentElement.appendChild(fallback);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IFSCMICRSearchSection;
