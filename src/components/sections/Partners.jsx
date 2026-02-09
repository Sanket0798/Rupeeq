const Partners = () => {
  const partners = [
    'nCred',
    'Kotak',
    'MoneyView',
    'HDFC',
    'Piramal',
    'Tata Capital',
    'ICICI',
    'Bajaj Finserv',
  ];

  return (
    <section className="py-16 bg-neutral-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">
            Trusted across 980+ locations nationwide
          </h2>
          <p className="text-neutral-600">Partnered with India's leading financial institutions</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-lg font-semibold text-neutral-700">{partner}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
