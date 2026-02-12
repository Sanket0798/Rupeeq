import { useState } from 'react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(0); // First FAQ open by default

  const faqs = [
    {
      id: 1,
      question: "What is a personal Loan?",
      answer: "A personal loan is the money lent to an individual from a bank or NBFC for a short-term at pre-determined interest rates. The money can be used to fulfil any critical needs."
    },
    {
      id: 2,
      question: "How much time does it take to get loan approval?",
      answer: "Loan approval typically takes 24-48 hours once all required documents are submitted. In some cases, pre-approved customers can get instant approval within minutes."
    },
    {
      id: 3,
      question: "Will Rupeeq charge any fee from its customers?",
      answer: "RupeeQ does not charge any fees from customers for loan comparison and application services. We earn commission from our partner lenders when you successfully get a loan."
    },
    {
      id: 4,
      question: "Can I track my loan application?",
      answer: "Yes, you can track your loan application status in real-time through your RupeeQ dashboard. You'll receive SMS and email updates at every stage of the process."
    },
    {
      id: 5,
      question: "What documents are required for a personal loan?",
      answer: "Basic documents include identity proof (Aadhaar/PAN), address proof, income proof (salary slips/bank statements), and employment proof. Specific requirements may vary by lender."
    },
    {
      id: 6,
      question: "What is the minimum credit score required?",
      answer: "While requirements vary by lender, generally a credit score of 650+ is preferred for personal loans. However, we work with lenders who consider applications with lower scores too."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1386px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ Content */}
          <div className="space-y-6 max-w-[630px] w-full">
            {/* Header */}
            <div className="mb-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-purple-600 mb-2">
                Questions?
              </h2>
              <p className="text-2xl lg:text-3xl font-bold text-gray-900">
                We've Got Answers
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className="border-b border-gray-200 pb-4"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center text-left py-4 hover:text-purple-600 transition-colors duration-300"
                  >
                    <span className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </span>
                    <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center">
                      {openFAQ === index ? (
                        <span className="text-2xl text-purple-600 font-bold">−</span>
                      ) : (
                        <span className="text-2xl text-purple-600 font-bold">+</span>
                      )}
                    </span>
                  </button>

                  {/* Answer with smooth animation */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="pb-4 pr-8">
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Decorative Question Marks */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96">
              {/* Large central question mark */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-600 to-teal-500 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">?</span>
                </div>
              </div>

              {/* Smaller question marks around */}
              <div className="absolute top-8 right-12">
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-400">?</span>
                </div>
              </div>

              <div className="absolute bottom-12 left-8">
                <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-gray-300">?</span>
                </div>
              </div>

              <div className="absolute top-20 left-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-purple-400">?</span>
                </div>
              </div>

              <div className="absolute bottom-20 right-8">
                <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-teal-400">?</span>
                </div>
              </div>

              {/* Floating icons */}
              <div className="absolute top-4 left-1/3">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">👍</span>
                </div>
              </div>

              <div className="absolute bottom-8 left-1/4">
                <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">❤️</span>
                </div>
              </div>

              <div className="absolute top-1/3 right-4">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">⭐</span>
                </div>
              </div>

              {/* Gradient squares */}
              <div className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded"></div>
              <div className="absolute top-1/2 left-8 w-6 h-6 bg-gradient-to-br from-teal-500 to-green-500 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;