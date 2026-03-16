/**
 * Application Routes Configuration
 * Centralized route definitions for better maintainability
 */

export const ROUTES = {
  // Main Pages
  HOME: '/',
  ABOUT_US: '/about-us',
  OUR_MISSION: '/our-mission',
  CONSENT_WITHDRAWAL: '/consent-withdrawal',
  CAREERS: '/careers',
  CONTACT_US: '/contact-us',
  BLOGS: '/blogs',
  BLOG_DETAIL: '/blogs/:slug',

  // Loan Pages
  PERSONAL_LOAN: '/personal-loan',
  DEBT_CONSOLIDATION: '/debt-consolidation',
  BUSINESS_LOAN: '/business-loan',
  HOME_LOAN: '/home-loan',
  CREDIT_CARDS: '/credit-cards',
  OVERDRAFT_FACILITY: '/overdraft-facility',
  SHORT_TERM_LOAN: '/short-term-loan',

  // Legal Pages
  PRIVACY_POLICY: '/privacy-policy',
  TERMS_AND_CONDITIONS: '/terms-and-conditions',
  FAQ_PAGE: '/faq',
  DISCLAIMER: '/disclaimer',

  // Tools
  EMI_CALCULATOR: '/emi-calculator',
  IFSC_MICR: '/ifsc-micr',
  CREDIT_SCORE: '/credit-score',

  // Login Pages
  LOGIN: {
    HOME: '/login/home',
    PERSONAL_LOAN: '/login/personal-loan',
    DEBT_CONSOLIDATION: '/login/debt-consolidation',
    OVERDRAFT_FACILITY: '/login/overdraft-facility',
    SHORT_TERM_LOAN: '/login/short-term-loan',
  },

  // Application Flow
  EMPLOYMENT_TYPE: '/employment-type',
  PERSONAL_INFORMATION: '/personal-information',

  // Personal Loan Flow
  PERSONAL_LOAN_INFO_1: '/personal-loan-info-1',
  PERSONAL_LOAN_INFO_2: '/personal-loan-info-2',

  // Debt Consolidation Flow
  DEBT_CONSOLIDATION_INFO_1: '/debt-consolidation-info-1',
  DEBT_CONSOLIDATION_INFO_2: '/debt-consolidation-info-2',

  // Overdraft Facility Flow
  OVERDRAFT_FACILITY_INFO_1: '/overdraft-facility-info-1',
  OVERDRAFT_FACILITY_INFO_2: '/overdraft-facility-info-2',

  // Short Term Loan Flow
  SHORT_TERM_LOAN_INFO_1: '/short-term-loan-info-1',
  SHORT_TERM_LOAN_INFO_2: '/short-term-loan-info-2',

  // Dashboard
  LOAN_OFFERS_DASHBOARD: '/loan-offers',
};

/**
 * Routes where navbar should be hidden
 */
export const HIDE_NAVBAR_ROUTES = [
  ROUTES.EMPLOYMENT_TYPE,
  ROUTES.PERSONAL_INFORMATION,
  ROUTES.PERSONAL_LOAN_INFO_1,
  ROUTES.PERSONAL_LOAN_INFO_2,
  ROUTES.DEBT_CONSOLIDATION_INFO_1,
  ROUTES.DEBT_CONSOLIDATION_INFO_2,
  ROUTES.OVERDRAFT_FACILITY_INFO_1,
  ROUTES.OVERDRAFT_FACILITY_INFO_2,
  ROUTES.SHORT_TERM_LOAN_INFO_1,
  ROUTES.SHORT_TERM_LOAN_INFO_2,
];

/**
 * Routes where footer should be shown
 */
export const SHOW_FOOTER_ROUTES = [
  ROUTES.PRIVACY_POLICY,
  ROUTES.TERMS_AND_CONDITIONS,
  ROUTES.FAQ_PAGE,
  ROUTES.DISCLAIMER,
  ROUTES.HOME,
  ROUTES.ABOUT_US,
  ROUTES.OUR_MISSION,
  ROUTES.CONSENT_WITHDRAWAL,
  ROUTES.CAREERS,
  ROUTES.CONTACT_US,
  ROUTES.PERSONAL_LOAN,
  ROUTES.DEBT_CONSOLIDATION,
  ROUTES.BUSINESS_LOAN,
  ROUTES.HOME_LOAN,
  ROUTES.CREDIT_CARDS,
  ROUTES.EMI_CALCULATOR,
  ROUTES.IFSC_MICR,
  ROUTES.CREDIT_SCORE,
  ROUTES.OVERDRAFT_FACILITY,
  ROUTES.SHORT_TERM_LOAN,
  ROUTES.BLOGS,
  ROUTES.LOGIN.HOME,
  ROUTES.LOAN_OFFERS_DASHBOARD,
];

/**
 * Routes where scroll to top button should be hidden
 */
export const HIDE_SCROLL_TO_TOP_ROUTES = HIDE_NAVBAR_ROUTES;

export default ROUTES;
