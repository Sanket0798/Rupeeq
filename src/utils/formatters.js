/**
 * Format number to Indian currency format
 * @param {number} amount - Amount to format
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Format number with Indian numbering system (lakhs, crores)
 * @param {number} num - Number to format
 * @returns {string} Formatted number string
 */
export const formatIndianNumber = (num) => {
  return num.toLocaleString('en-IN');
};

/**
 * Calculate EMI (Equated Monthly Installment)
 * @param {number} principal - Loan amount
 * @param {number} ratePerAnnum - Annual interest rate (in percentage)
 * @param {number} tenureMonths - Loan tenure in months
 * @returns {number} Monthly EMI amount
 */
export const calculateEMI = (principal, ratePerAnnum, tenureMonths) => {
  const monthlyRate = ratePerAnnum / 12 / 100;
  const emi = (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) / 
              (Math.pow(1 + monthlyRate, tenureMonths) - 1);
  return Math.round(emi);
};
