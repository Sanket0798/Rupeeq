import { FileText, CheckCircle, Search, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: 'Simple Application',
      description: 'Fill out a quick online form with your basic details',
    },
    {
      number: '02',
      icon: <CheckCircle className="w-12 h-12 text-secondary" />,
      title: 'Quick Verification',
      description: 'Our team verifies your information within 24 hours',
    },
    {
      number: '03',
      icon: <Search className="w-12 h-12 text-accent-purple" />,
      title: 'Transparent Selection',
      description: 'Choose from multiple lender options with clear terms',
    },
    {
      number: '04',
      icon: <Zap className="w-12 h-12 text-accent-orange" />,
      title: 'Easy Accessibility',
      description: 'Get funds disbursed directly to your account',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            How It Works
          </h2>
          <p className="text-neutral-600">Simple steps to get your loan approved</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="card text-center hover:scale-105">
                <div className="text-6xl font-bold text-neutral-100 mb-4">
                  {step.number}
                </div>
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-neutral-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
