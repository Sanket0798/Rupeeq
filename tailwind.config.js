/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'text-brand',
    'border-brand',
    'bg-brand',
    'hover:bg-brand',
    'hover:text-white',
    'text-custom-purple',
    'bg-custom-purple',
    'border-custom-purple',
    'text-custom-purple-light',
    'text-custom-purple-dark',
    'bg-custom-purple-light',
    'bg-custom-purple-dark',
    'text-custom-dark',
    'bg-custom-dark',
    'border-custom-dark',
    'text-custom-dark-light',
    'text-custom-dark-dark',
  ],
  theme: {
    container: {
      center: true,
      padding: '0',  // No default padding, we'll add it manually
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1416px',
      },
    },
    extend: {
      maxWidth: {
        'nav-container': '100%',
        'container': '1416px',        // Default container
        'container-sm': '1200px',     // Smaller sections
        'container-md': '1300px',     // Medium sections
        'container-lg': '1416px',     // Large sections (same as default)
        'container-xl': '1500px',     // Extra large sections
        'container-full': '100%',     // Full width sections
      },
      colors: {
        primary: {
          DEFAULT: '#6C5CE7',
          dark: '#5B4BC7',
          light: '#A29BFE',
        },
        secondary: {
          DEFAULT: '#00D9A3',
          dark: '#00B386',
          light: '#7FFFD4',
        },
        accent: {
          purple: '#8B5CF6',
          pink: '#EC4899',
          orange: '#F97316',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        // Custom brand blue color
        brand: {
          DEFAULT: '#124AD6',
          light: '#3B6FE8',
          dark: '#0D3AA3',
        },
        // Custom purple color
        'custom-purple': {
          DEFAULT: '#5528A9',
          light: '#7B4FD1',
          dark: '#3D1A7A',
        },
        // Custom dark color
        'custom-dark': {
          DEFAULT: '#100701',
          light: '#2A1F1A',
          dark: '#0A0500',
        },
        'custom-dark-text': {
          DEFAULT: '#132644',
        },
        'custom-dark-blue': {
          DEFAULT: '#5528A9',
        },
        'custom-grey': {
          DEFAULT: '#666A73',
        },
      },
      fontFamily: {
        sans: ['Delight', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '26px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '38px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '56px' }],
        '6xl': ['60px', { lineHeight: '68px' }],
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      lineHeight: {
        'none': '1',
        'tight': '1.25',
        'snug': '1.375',
        'normal': '1.5',
        'relaxed': '1.625',
        'loose': '2',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '26': '26px',
        '28': '28px',
        '30': '30px',
        '32': '32px',
        '38': '38px',
        '44': '44px',
        '50': '50px',
        '56': '56px',
        '68': '68px',
        '120': '1.2', // or '120%'. Unitless is generally recommended.
      },
      letterSpacing: {
        'tighter': '-0.05em',
        'tight': '-0.025em',
        'normal': '0em',
        'wide': '0.025em',
        'wider': '0.05em',
        'widest': '0.1em',
        '-3': '-0.03em',
        '-36': '-0.36px',
        '0': '0px',
        '0.5': '0.5px',
        '1': '1px',
        '1.5': '1.5px',
        '2': '2px',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'custom': '5px 5px 5px 0px rgba(0, 0, 0, 0.25)',
      },
      borderRadius: {
        'none': '0',
        'sm': '0.125rem',
        'DEFAULT': '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px',
        '24': '24px',
      },
      spacing: {
        '12': '12px',  // Custom 12px spacing for navbar
      },
    },
  },
  plugins: [],
}
