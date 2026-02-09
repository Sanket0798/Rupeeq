import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What documents do I need to apply for a loan?',
      answer: 'You typically need ID proof, address proof, income proof (salary slips or bank statements), and PAN card. Specific requirements may vary based on the loan type.',
    },
    {
      question: 'How long does the approval process take?',
      answer: 'Most applications are processed within 24-48 hours. Once approved, funds can be disbursed within 1-3 business days.',
    },
    {
      question: 'What is the minimum credit score required?',
      answer: 'While requirements vary by lender, a credit score of 650 or above generally improves your chances of approval and better interest rates.',
    },
    {
      question: 'Can I prepay my loan without penalties?',
      answer: 'Many of our partner lenders offer flexible prepayment options. Terms vary, so check with your specific lender for details.',
    },
    {
      question: 'Is checking my credit score free?',
      answer: 'Yes! We offer completely free credit score checks with no hidden charges. You can check your score as many times as you want.',
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
              Questions? We've Got Answers
            </h2>
            <p className="text-neutral-600 mb-8">
              Find answers to commonly asked questions about our services
            </p>
            <div className="flex justify-center lg:justify-start">
              <HelpCircle className="w-64 h-64 text-primary/20" />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button
                  onClick={() => toggle(index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-semibold text-neutral-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-600 transition-transform ${
                      openIndex === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-neutral-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
