import { SpiralIcon } from "../common/SvgIcons";

const FeaturesBenefitsSection = ({ title, features }) => {
  return (
    <section className="w-full py-16 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-[1224px] mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] text-custom-dark-text font-bold leading-[32px] mb-6">
            {title}
          </h2>
        </div>

        {/* Features Grid - Single Big Box */}
        <div className="bg-[#F7F7F7] rounded-3xl shadow-[5px_5px_5px_0px_rgba(0,0,0,0.15)] py-14 px-11 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-[102px] h-[102px] bg-[#B0E6EC]/30 rounded-full flex items-center justify-center">
                    <img src={feature.icon} alt="" />
                  </div>
                  <div>
                    <h3 className="text-[30px] leading-[38px] text-custom-dark-text font-semibold mb-5">
                      {feature.title}
                    </h3>
                    <p className="text-[#4B5768] text-lg leading-[20px]">
                      {feature.description}
                    </p>
                  </div>
                </div>
                {/* Dotted line separator - show for all except last row */}
                {index < features.length - 1 && (
                  <div className="border-b-2 border-dashed border-[#CCCCCC]"></div>
                )}
              </div>
            ))}
          </div>

          {/* Spiral Icon in bottom right */}
          <div className="absolute bottom-0 right-[220px]">
            <SpiralIcon />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefitsSection;
