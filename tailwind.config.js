/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Enhanced responsive design system
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        // Container queries support
        '@container': {
          'sm': '384px',
          'md': '512px',
          'lg': '768px',
        }
      },
      
      // Enhanced spacing for better responsive design
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      
      // Typography improvements for mobile
      fontSize: {
        'xxs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      
      // Enhanced container configuration
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1.5rem',
          lg: '2rem',
          xl: '3rem',
          '2xl': '4rem',
        },
      },

      // Animation improvements
      transitionDuration: {
        '400': '400ms',
      },
      
      // Enhanced backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
    },
  },
  plugins: [
    // Add container queries plugin if needed in future
    // require('@tailwindcss/container-queries'),
  ],
}