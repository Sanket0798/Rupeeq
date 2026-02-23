import * as yup from 'yup';

// Mobile Number Validation
export const mobileNumberSchema = yup.object({
  mobileNumber: yup
    .string()
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number starting with 6-9')
    .required('Mobile number is required'),
});

// OTP Validation
export const otpSchema = yup.object({
  mobileNumber: yup
    .string()
    .matches(/^[6-9]\d{9}$/, 'Please enter a valid 10-digit mobile number')
    .required('Mobile number is required'),
  otp: yup
    .string()
    .matches(/^\d{6}$/, 'OTP must be 6 digits')
    .required('OTP is required'),
});

// Personal Information Page 1 Validation
export const personalInfoPage1Schema = yup.object({
  loanAmount: yup
    .number()
    .typeError('Loan amount must be a number')
    .min(50000, 'Minimum loan amount is ₹50,000')
    .max(5000000, 'Maximum loan amount is ₹50,00,000')
    .required('Loan amount is required'),
  salutation: yup
    .string()
    .oneOf(['mr', 'mrs', 'miss'], 'Please select a salutation')
    .required('Salutation is required'),
  fullName: yup
    .string()
    .min(3, 'Name must be at least 3 characters')
    .max(50, 'Name must not exceed 50 characters')
    .matches(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces')
    .required('Full name is required'),
  occupation: yup
    .string()
    .min(2, 'Occupation must be at least 2 characters')
    .required('Occupation is required'),
  pancard: yup
    .string()
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, 'Invalid PAN card format (e.g., ABCDE1234F)')
    .required('PAN card is required'),
  dateOfBirth: yup
    .string()
    .matches(/^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4}$/, 'Date must be in DD/MM/YYYY format')
    .test('age', 'You must be at least 18 years old', function(value) {
      if (!value) return false;
      const [day, month, year] = value.split('/');
      const birthDate = new Date(year, month - 1, day);
      const today = new Date();
      const age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        return age - 1 >= 18;
      }
      return age >= 18;
    })
    .required('Date of birth is required'),
  emailId: yup
    .string()
    .email('Invalid email address')
    .required('Email is required'),
});

// Personal Information Page 2 Validation
export const personalInfoPage2Schema = yup.object({
  salaryType: yup
    .string()
    .oneOf(['salaried', 'self-employed-business', 'self-employed-professional'], 'Please select a salary type')
    .required('Salary type is required'),
  monthlyIncome: yup
    .number()
    .typeError('Monthly income must be a number')
    .min(15000, 'Minimum monthly income is ₹15,000')
    .required('Monthly income is required'),
  companyName: yup
    .string()
    .min(2, 'Company name must be at least 2 characters')
    .required('Company name is required'),
  city: yup
    .string()
    .required('City is required'),
  state: yup
    .string()
    .required('State is required'),
});

// Debt Consolidation Page 2 Additional Fields
export const debtConsolidationPage2Schema = personalInfoPage2Schema.shape({
  currentEMI: yup
    .number()
    .typeError('Current EMI must be a number')
    .min(0, 'Current EMI cannot be negative')
    .required('Current EMI is required'),
  ccOutstanding: yup
    .number()
    .typeError('CC Outstanding must be a number')
    .min(0, 'CC Outstanding cannot be negative')
    .required('CC Outstanding is required'),
  emiDelay: yup
    .string()
    .required('EMI delay information is required'),
  residenceStatus: yup
    .string()
    .required('Residence status is required'),
  pincode: yup
    .string()
    .matches(/^\d{6}$/, 'Pincode must be 6 digits')
    .required('Pincode is required'),
});

// Helper function to validate a single field
export const validateField = async (schema, fieldName, value) => {
  try {
    await schema.validateAt(fieldName, { [fieldName]: value });
    return null; // No error
  } catch (error) {
    return error.message;
  }
};

// Helper function to validate entire form
export const validateForm = async (schema, values) => {
  try {
    await schema.validate(values, { abortEarly: false });
    return {}; // No errors
  } catch (error) {
    const errors = {};
    error.inner.forEach((err) => {
      if (err.path) {
        errors[err.path] = err.message;
      }
    });
    return errors;
  }
};
