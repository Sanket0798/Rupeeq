import { ArrowRight, CheckCircle, Shield } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: 'Debt Consolidation',
      features: [
        'Combine multiple debts',
        'Lower interest rates',
        'Single monthly payment',
        'Improve credit score',
      ],
    },
    {
      title: 'Salaried Personal Loan',
      features: [
        'Quick approval process',
        'Minimal documentation',
        'Flexible repayment',
        'Competitive rates',
      ],
    },
    {
      title: 'Overdraft Facility',
      features: [
        'Instant credit access',
        'Pay interest on usage',
        'Revolving credit line',
        'No collateral needed',
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Find the Right Financial Products
          </h2>
          <p className="text-neutral-600">Tailored solutions for your unique needs</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Product Cards */}
          {products.map((product, index) => (
            <div key={index} className="card">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                {product.title}
              </h3>
              <ul className="space-y-3 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="text-primary flex items-center gap-2 hover:gap-3 transition-all font-semibold">
                Learn More <ArrowRight size={16} />
              </button>
            </div>
          ))}

          {/* Credit Score Card */}
          <div className="card bg-gradient-to-br from-secondary/10 to-primary/10 border-2 border-secondary">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-secondary" />
              <h3 className="text-xl font-semibold text-neutral-900">
                Free Credit Score Check
              </h3>
            </div>
            <p className="text-neutral-600 mb-6">
              Get your credit score instantly and understand your financial health better.
            </p>
            <div className="bg-white rounded-lg p-4 mb-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">23K+</div>
                <p className="text-sm text-neutral-600">Trusted Clients</p>
              </div>
            </div>
            <button className="w-full btn-primary">Check Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
