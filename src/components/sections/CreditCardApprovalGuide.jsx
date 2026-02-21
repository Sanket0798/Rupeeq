import { useState } from 'react';

const CreditCardApprovalGuide = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    datetime: '',
    project: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-[1286px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#747986] text-lg mb-2">Book Appointment</p>
          <h2 className="text-3xl lg:text-[48px] font-bold mb-4">
            Let's Schedule Your Credit Card Approval
          </h2>
          <p className="text-[#747986] text-lg max-w-3xl mx-auto">
            Choose Your Time, Share Your Vision — Let's Start Planning Something Impactful Today
          </p>
        </div>

        {/* Form and Illustration Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Devanno Smith"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Devannosmith@gmail.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all"
                />
              </div>

              {/* Preferred Date & Time Field */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Preferred Date & Time
                </label>
                <input
                  type="text"
                  name="datetime"
                  placeholder="Input a convenient date and time"
                  value={formData.datetime}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all"
                />
              </div>

              {/* Tell Us About Your Project Field */}
              <div>
                <label className="block text-gray-900 font-medium mb-2">
                  Tell Us About Your Project
                </label>
                <textarea
                  name="project"
                  placeholder="Briefly describe your goals or campaign needs.."
                  value={formData.project}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl bg-[#F8F9FA] border border-gray-200 focus:outline-none focus:ring-2 focus:ring-button-color focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-button-color text-white font-semibold py-4 rounded-full hover:bg-[#4a2470] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Submit
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>

              {/* Terms Text */}
              <p className="text-sm text-gray-600 text-center">
                Clicking 'Submit' means you agree to our Terms of Service
              </p>
            </form>
          </div>

          {/* Right - Illustration */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative w-full max-w-lg">
              <img 
                src="/assets/images/creditCards/approval-illustration.png" 
                alt="Credit Card Approval" 
                className="w-full h-auto"
                onError={(e) => {
                  // Fallback illustration using CSS
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `
                    <div class="w-full aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-12 flex items-center justify-center">
                      <div class="relative w-full h-full">
                        <!-- Shield Icon -->
                        <div class="absolute top-8 left-8 w-20 h-20 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg">
                          <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        
                        <!-- Person Avatar -->
                        <div class="absolute top-1/3 left-1/4 w-24 h-24 bg-orange-400 rounded-full"></div>
                        
                        <!-- Document Cards -->
                        <div class="absolute top-1/4 right-12 w-32 h-24 bg-white rounded-xl shadow-xl border-4 border-pink-400"></div>
                        <div class="absolute top-1/3 right-4 w-32 h-32 bg-white rounded-xl shadow-xl p-4">
                          <div class="space-y-2">
                            <div class="flex items-center gap-2">
                              <div class="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div class="h-2 bg-gray-200 rounded flex-1"></div>
                            </div>
                            <div class="flex items-center gap-2">
                              <div class="w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                </svg>
                              </div>
                              <div class="h-2 bg-gray-200 rounded flex-1"></div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Bottom Form Card -->
                        <div class="absolute bottom-8 left-8 right-8 bg-white rounded-2xl shadow-2xl p-6">
                          <div class="space-y-3">
                            <div class="h-3 bg-gray-200 rounded w-3/4"></div>
                            <div class="h-3 bg-gray-200 rounded w-full"></div>
                            <div class="flex gap-2">
                              <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <div class="w-3 h-3 bg-purple-500 rounded-full"></div>
                              <div class="w-3 h-3 bg-gray-300 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                        
                        <!-- Checkmark Badge -->
                        <div class="absolute bottom-12 right-12 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                          <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  `;
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditCardApprovalGuide;
