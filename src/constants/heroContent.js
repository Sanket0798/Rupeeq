/**
 * Hero Section Content Configuration
 * All content for hero sections across different loan pages
 */

export const PERSONAL_LOAN_HERO = {
  titleLines: [
    { text: "STOP GUESSING. SEE", highlight: false },
    { text: "PERSONAL LOAN ", highlight: false },
    { text: "OFFERS", highlight: true },
    { text: "THAT FIT YOUR NEEDS", highlight: true }
  ],
  descriptions: [
    "Big plans. Small emergencies. Or simply the need to breathe easy. With RupeeQ, you don't apply blindly for a personal loan – you get loan offers that actually match your credit profile, from trusted banks and NBFCs."
  ],
  tagline: {
    line1: "Compare. Choose. Apply.",
    line2: "All Online. No Guesswork. No Spam."
  },
  formTitle: "Check Personal Loan Offers",
  formButtonText: "Sign In",
  benefits: [
    'Free Credit Score Check',
    'Profile - matched loan offers',
    'Multiple banks. One application',
    'Transparent interest rates',
    'Zero spam promise'
  ],
  benefitsTitle: 'Why Choose <span class="text-custom-purple">RupeeQ</span> For Your Personal Loan?',
  actionButtons: [
    { text: "Check Your Loan Eligibility", route: "/login/personal-loan" },
    { text: "Get your Personal Loan Offers", route: "/login/personal-loan" }
  ],
  loginRoute: "/login/personal-loan",
  illustrationSrc: "/assets/images/hero/2.png"
};

export const DEBT_CONSOLIDATION_HERO = {
  titleLines: [
    { text: "DEBT CONSOLIDATION", highlight: true },
    { text: "LOAN IN INDIA", highlight: false }
  ],
  descriptions: [
    "Struggling with multiple EMIs every month?",
    "Debt consolidation helps you combine all your loans into one affordable EMI – so your finances feel lighter and more manageable."
  ],
  tagline: {
    line1: "Quick Check • No Spam • No Impact On Your Credit Score",
    line2: ""
  },
  formTitle: "Quick Apply: Check your Offer",
  formButtonText: "Submit",
  benefits: [
    'Check Credit Score for Free',
    'Compare top lenders offering consolidation loans from 10.49% p.a.',
    'Loan Amounts raning from INR 1 Lakh Upto INR 50 Lakhs',
    'Fast Digital Disbursal, no brand visits',
    'Dedicated experts, no spam calls'
  ],
  benefitsTitle: 'Why Choose <span class="text-custom-purple">Debt Consolidation On RupeeQ?</span>',
  howItWorks: {
    title: "Why Managing Multiple EMIs Gets Difficult?",
    subtitle: "When You're Paying Several EMIs At Once, It Often Leads To:",
    points: [
      "High Monthly Outflow",
      "Different Due Dates And Missed Payments",
      "Stress On Savings And Cash Flow"
    ]
  },
  actionButtons: [
    { text: "Check If You Can Reduce Your EMI", route: "/login/debt-consolidation" }
  ],
  loginRoute: "/login/debt-consolidation",
  illustrationSrc: "/assets/images/hero/2.png"
};

export const OVERDRAFT_FACILITY_HERO = {
  titleLines: [
    { text: "FLEXILOAN/ OVERDRAFT", highlight: true },
    { text: "FLEXIBLE CREDIT", highlight: false }
  ],
  descriptions: [
    "Unexpected expenses don't wait for payday. With an Overdraft Personal Credit Line from RupeeQ, you can access funds instantly whenever you need them – and pay interest only on the amount you use.",
    "A personal overdraft gives you the flexibility of revolving credit without repaying for a loan each time."
  ],
  tagline: null,
  formTitle: "Quick Overdraft Offers",
  formButtonText: "Submit",
  benefits: [
    'Pre-approved limit from top banks & NBFCs',
    'Interest only on amount used',
    'Flexible repayments options Partially or Fully',
    'Revolving credit facility',
    'Quick digital approval through RupeeQ'
  ],
  benefitsTitle: 'Why Choose <span class="text-custom-purple">Overdraft Credit Line With RupeeQ?</span>',
  howItWorks: {
    title: "How Does It Work?",
    description: "A Flexible Credit Product Lets You Access Money Up To A Set Limit, Pay Interest Only On What You Use, And Re-Use The Credit When You Pay It Back – Similar To A Credit Card Or Overdraft."
  },
  actionButtons: [],
  loginRoute: "/login/overdraft-facility",
  illustrationSrc: "/assets/images/hero/2.png"
};

export const SHORT_TERM_LOAN_HERO = {
  titleLines: [
    { text: "SHORT TERM", highlight: true },
    { text: "PERSONAL LOAN", highlight: false }
  ],
  descriptions: [
    "A short-term personal loan is a quick financing option designed to cover immediate expenses, typically repaid within a few months to a couple of years.",
    "It offers fast approval, flexible usage, and fixed monthly installments, making it ideal for emergencies or short-term cash needs."
  ],
  tagline: null,
  formTitle: "Quick Short Term Loan Offers",
  formButtonText: "Submit",
  benefits: [
    'Funds in your account within 24-48 hours',
    'Repay within 1 to 12 months',
    'Flexible repayments options Partially or Fully',
    'Minimal paperwork',
    '100% Digital Process'
  ],
  benefitsTitle: 'Why Choose <span class="text-custom-purple">Short Term Loan?</span>',
  howItWorks: {
    title: "How Does It Work?",
    description: "Short-Term Personal Loan Is Pretty Straightforward — It's A Small To Mid-Size Loan You Borrow For A Short Period, Usually To Cover An Urgent Expense Or Cash Gap."
  },
  actionButtons: [],
  loginRoute: "/login/short-term-loan",
  illustrationSrc: "/assets/images/hero/2.png"
};
