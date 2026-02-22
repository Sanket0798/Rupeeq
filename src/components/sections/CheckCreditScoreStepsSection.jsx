import { CreditScoreStepsIcon, PagesIcon } from "../common/SvgIcons";

const CheckCreditScoreStepsSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Credit Check',
      description: '→ Visit Our Credit Score Page.'
    },
    {
      number: '02',
      title: 'Enter Details',
      description: '→ Enter Details About Yourself, Like Name, Mobile Number, And Email Address. This Will Trigger An OTP.'
    },
    {
      number: '03',
      title: 'Verification',
      description: '→ Verify The OTP, And Your Credit Report Will Be Displayed On The Screen.'
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1168px] mx-auto flex flex-col justify-center items-center">
        {/* Header with Icon */}
        <div className="flex items-center max-w-[740px] gap-x-7 mb-[89px]">
          <PagesIcon />
          <div className="flex flex-col items-center gap-y-[15px]">
            <h2 className="text-[30px] font-semibold leading-[38px] tracing-[0px] text-custom-purple">
              Check Your Credit Score For Free
            </h2>
            <p className="text-2xl leading-[29px] tracing-[0%] text-[#7D7D7D] font-normal text-center max-w-[562px] w-full">
              Given below are the three easy steps to check your credit score for free by entering minimal information.
            </p>
          </div>
        </div>

        {/* Steps Timeline */}
        <div className="flex justify-center">
          <CreditScoreStepsIcon />
        </div>

        <div className="flex flex-row items-center justify-between w-full mt-[47px] mb-[89px]">
          <div className="flex flex-col items-center">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Credit Check</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Visit our credit score page.</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Enter Details</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Enter Details About Yourself, Like Name, Mobile Number, And Email Address. This Will Trigger An OTP.</p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-2xl leading-[34px] tracing-[0%] text-custom-dark-text font-medium">Verification</h3>
            <p className="text-xl leading-[26px] tracing-[0%] text-[#7D7D7D] font-normal text-center w-[300px]">→ Verify the OTP, and your credit report will be displayed on the screen.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckCreditScoreStepsSection;
