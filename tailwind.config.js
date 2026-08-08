/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
        },
        // Enhanced color palette for better contrast - flattened structure
        // Light mode - Bright and clean
        'light-bg': '#FFFFFF',
        'light-surface': '#FAFBFC',
        'light-surfaceElevated': '#F5F7FA',
        'light-text': '#111827',
        'light-textSecondary': '#374151',
        'light-border': '#D1D5DB',
        // Dark mode - Deep and rich (MUCH darker for contrast)
        'dark-bg': '#000000',
        'dark-surface': '#0A0A0F',
        'dark-surfaceElevated': '#111827',
        'dark-text': '#F9FAFB',
        'dark-textSecondary': '#E5E7EB',
        'dark-border': '#1F2937',
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at top, rgba(79,70,229,0.3) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(139,92,246,0.25) 0%, transparent 50%), radial-gradient(ellipse at center right, rgba(99,102,241,0.15) 0%, transparent 50%)',
        'hero-gradient-light': 'radial-gradient(ellipse at top, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at bottom, rgba(139,92,246,0.12) 0%, transparent 50%), linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.95) 100%)',
        'mesh-gradient': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'mesh-gradient-light': 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.4)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
        'inner-glow': 'inset 0 2px 4px rgba(99, 102, 241, 0.1)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 8s ease-in-out infinite',
        'gradient': 'gradient 15s ease infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(99, 102, 241, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(99, 102, 241, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}


