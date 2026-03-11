/**
 * Blog Content Configuration
 * Content for different blog categories
 */

export const BLOG_CATEGORIES = [
  { id: 'all', label: 'All Blogs' },
  { id: 'personal-loan', label: 'Personal Loan' },
  { id: 'credit-score', label: 'Credit Score' },
  { id: 'credit-card', label: 'Credit Card' }
];

export const BLOG_HERO_CONTENT = {
  all: {
    titleLines: [
      { text: "MASTER YOUR", highlight: false },
      { text: "FINANCIAL JOURNEY", highlight: true }
    ],
    descriptions: [
      "Discover expert insights, tips, and strategies to take control of your finances. From budgeting basics to advanced investment strategies, we've got you covered."
    ],
    tagline: {
      line1: "Learn. Grow. Prosper.",
      line2: "Your Financial Education Starts Here"
    }
  },
  'personal-loan': {
    titleLines: [
      { text: "EVERYTHING ABOUT", highlight: false },
      { text: "PERSONAL LOANS", highlight: true }
    ],
    descriptions: [
      "Navigate the world of personal loans with confidence. Get expert advice on loan eligibility, interest rates, and repayment strategies. Learn how to choose the right loan for your needs."
    ],
    tagline: {
      line1: "Smart Borrowing.",
      line2: "Better Financial Health."
    }
  },
  'credit-score': {
    titleLines: [
      { text: "BUILD & MAINTAIN", highlight: false },
      { text: "EXCELLENT CREDIT SCORE", highlight: true }
    ],
    descriptions: [
      "Your credit score matters. Learn how to build, improve, and maintain a healthy credit profile. Discover tips for credit reports, credit management, and boosting your score."
    ],
    tagline: {
      line1: "Good Credit Score.",
      line2: "Better Opportunities."
    }
  },
  'credit-card': {
    titleLines: [
      { text: "MASTER THE ART OF", highlight: false },
      { text: "CREDIT CARDS", highlight: true }
    ],
    descriptions: [
      "Learn everything about credit cards - from choosing the right card to maximizing rewards and managing payments. Get expert tips on credit card usage and benefits."
    ],
    tagline: {
      line1: "Use Credit Cards Wisely.",
      line2: "Unlock Maximum Benefits."
    }
  }
};
