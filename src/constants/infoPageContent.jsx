import { Input, FormFieldError } from '../components/ui';

// Personal Loan Info Pages
export const personalLoanInfo1Content = {
  title: 'Personal Loan',
  mainTitle: (
    <>
      PERSONAL LOAN
    </>
  ),
  subtitle: 'Multi-Purpose',
  illustration: '/assets/images/auth/Img1.png',
  illustrationClass: '',
  bottomText: (
    <>
      One click.
      <br />
      Total financial freedom.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[rgba(80,132,255,0.25)] to-white',
  titleMargin: 'mb-[92px]',
  formMarginTop: 'mt-0',
  alignItems: 'gap-[42px]',
  nextRoute: '/personal-loan-info-2',
};

export const personalLoanInfo2Content = {
  title: 'Personal Loan',
  mainTitle: (
    <>
      PERSONAL LOAN
    </>
  ),
  subtitle: 'Multi-Purpose',
  illustration: '/assets/images/auth/Img1.png',
  illustrationClass: '',
  bottomText: (
    <>
      One click.
      <br />
      Total financial freedom.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[rgba(80,132,255,0.25)] to-white',
  titleMargin: 'mb-[92px]',
  formMarginTop: 'mt-0',
  initialFormData: {
    salaryType: 'salaried',
    monthlyIncome: '',
    companyName: '',
    city: '',
    state: '',
    pincode: '',
  },
  locationGridCols: 'grid-cols-3',
  showPincode: true,
};

// Debt Consolidation Info Pages
export const debtConsolidationInfo1Content = {
  title: 'Debt Consolidation',
  mainTitle: (
    <>
      DEBT<br />CONSOLIDATION
    </>
  ),
  subtitle: 'One Loan, One EMI',
  illustration: '/assets/images/auth/Img2.png',
  illustrationClass: 'w-full max-w-sm',
  bottomText: (
    <>
      One click.
      <br />
      Total financial freedom.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[#B0E6EC]/50 to-white',
  titleMargin: 'mb-8',
  formMarginTop: '',
  alignItems: 'items-center gap-[42px]',
  nextRoute: '/debt-consolidation-info-2',
};

export const debtConsolidationInfo2Content = {
  title: 'Debt Consolidation',
  mainTitle: (
    <>
      DEBT<br />CONSOLIDATION
    </>
  ),
  subtitle: 'One Loan, One EMI',
  illustration: '/assets/images/auth/Img2.png',
  illustrationClass: 'w-full max-w-sm',
  bottomText: (
    <>
      One click.
      <br />
      Total financial freedom.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[#B0E6EC]/50 to-white',
  titleMargin: 'mb-8',
  formMarginTop: '',
  initialFormData: {
    salaryType: 'salaried',
    monthlyIncome: '',
    companyName: '',
    currentEMI: '',
    ccOutstanding: '',
    emiDelay: '',
    residenceStatus: '',
    city: '',
    state: '',
    pincode: '',
  },
  locationGridCols: 'grid-cols-3',
  showPincode: true,
  additionalFields: (formData, handleChange, errors = {}) => (
    <>
      {/* Company Name and Current EMI - side by side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
            Company Name
          </label>
          <Input
            type="text"
            name="companyName"
            placeholder="Enter Your Company Name"
            value={formData.companyName}
            onChange={handleChange}
            className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
          />
          {errors.companyName && (
            <FormFieldError error={errors.companyName} />
          )}
        </div>
        <div>
          <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
            Current EMI
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C]">₹</span>
            <Input
              type="text"
              name="currentEMI"
              placeholder="₹"
              value={formData.currentEMI}
              onChange={handleChange}
              className="bg-white border-[#D0D0D0] rounded-[20px] py-3 pl-4 placeholder:font-semibold"
            />
          </div>
          {errors.currentEMI && (
            <FormFieldError error={errors.currentEMI} />
          )}
        </div>
      </div>

      {/* CC Outstanding and EMI Delay */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
            CC Outstanding
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#58626C]">₹</span>
            <Input
              type="text"
              name="ccOutstanding"
              placeholder="₹"
              value={formData.ccOutstanding}
              onChange={handleChange}
              className="bg-white border-[#D0D0D0] rounded-[20px] py-3 pl-4 placeholder:font-semibold"
            />
          </div>
          {errors.ccOutstanding && (
            <FormFieldError error={errors.ccOutstanding} />
          )}
        </div>
        <div>
          <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
            EMI Delay in last 6 Months
          </label>
          <Input
            type="text"
            name="emiDelay"
            placeholder="Enter details"
            value={formData.emiDelay}
            onChange={handleChange}
            className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
          />
          {errors.emiDelay && (
            <FormFieldError error={errors.emiDelay} />
          )}
        </div>
      </div>

      {/* Residence Status */}
      <div className="mb-4">
        <label className="block text-sm md:text-base leading-[26px] font-bold tracing-[4%] text-[#58626C] mb-2">
          Residence Status
        </label>
        <Input
          type="text"
          name="residenceStatus"
          placeholder="Enter your Residence Status"
          value={formData.residenceStatus}
          onChange={handleChange}
          className="bg-white border-[#D0D0D0] rounded-[20px] py-3"
        />
        {errors.residenceStatus && (
          <FormFieldError error={errors.residenceStatus} />
        )}
      </div>
    </>
  ),
};

// Overdraft Facility Info Pages
export const overdraftFacilityInfo1Content = {
  title: 'Overdraft Facility',
  mainTitle: (
    <>
      OVERDRAFT FACILITY
    </>
  ),
  subtitle: 'Pay for Only What You Use',
  illustration: '/assets/images/auth/Img3.png',
  illustrationClass: 'w-full max-w-sm',
  bottomText: (
    <>
      Use funds whenever you need,
      <br />
      pay interest only on what you use.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[#F9AAA6]/30 to-white',
  titleMargin: 'mb-8',
  formMarginTop: '',
  alignItems: 'items-center gap-[42px]',
  nextRoute: '/overdraft-facility-info-2',
};

export const overdraftFacilityInfo2Content = {
  title: 'Overdraft Facility',
  mainTitle: (
    <>
      OVERDRAFT FACILITY
    </>
  ),
  subtitle: 'Pay for Only What You Use',
  illustration: '/assets/images/auth/Img3.png',
  illustrationClass: 'w-full max-w-sm',
  bottomText: (
    <>
      Use funds whenever you need,
      <br />
      pay interest only on what you use.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[#F9AAA6]/30 to-white',
  titleMargin: 'mb-8',
  formMarginTop: '',
  initialFormData: {
    salaryType: 'salaried',
    monthlyIncome: '',
    companyName: '',
    city: '',
    state: '',
    pincode: '',
  },
  locationGridCols: 'grid-cols-3',
  showPincode: true,
};

// Short Term Loan Info Pages
export const shortTermLoanInfo1Content = {
  title: 'Short Term Loan',
  mainTitle: (
    <>
      SHORT TERM<br />PERSONAL LOAN
    </>
  ),
  subtitle: 'QUICK FINANCING OPTION',
  illustration: '/assets/images/auth/Img4.png',
  illustrationClass: 'w-full max-w-sm',
  bottomText: (
    <>
      One click.
      <br />
      Total financial freedom.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[#0072F2]/20 to-white',
  titleMargin: 'mb-8',
  formMarginTop: 'mt-0',
  alignItems: 'gap-[42px]',
  nextRoute: '/short-term-loan-info-2',
};

export const shortTermLoanInfo2Content = {
  title: 'Short Term Loan',
  mainTitle: (
    <>
      SHORT TERM<br />PERSONAL LOAN
    </>
  ),
  subtitle: 'QUICK FINANCING OPTION',
  illustration: '/assets/images/auth/Img4.png',
  illustrationClass: 'w-full max-w-sm',
  bottomText: (
    <>
      One click.
      <br />
      Total financial freedom.
    </>
  ),
  cardBackground: 'bg-gradient-to-b from-[#0072F2]/20 to-white',
  titleMargin: 'mb-8',
  formMarginTop: 'mt-0',
  initialFormData: {
    salaryType: 'salaried',
    monthlyIncome: '',
    companyName: '',
    city: '',
    state: '',
    pincode: '',
  },
  locationGridCols: 'grid-cols-3',
  showPincode: true,
};
