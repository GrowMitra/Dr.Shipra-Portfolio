/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0a0a0f',
          50: '#1a1a24',
          100: '#111118',
        },
        accent: {
          cyan: '#00d4ff',
          blue: '#0066ff',
          purple: '#7c3aed',
        },
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-cyan': 'linear-gradient(135deg, #00d4ff 0%, #0066ff 100%)',
        'gradient-mesh': 'radial-gradient(at 40% 20%, rgba(0, 212, 255, 0.1) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(0, 102, 255, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(124, 58, 237, 0.05) 0px, transparent 50%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'slide-in-left': 'slideInLeft 0.8s ease-out forwards',
        'border-glow': 'borderGlow 3s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(0, 212, 255, 0.15)',
        'glow-lg': '0 0 60px rgba(0, 212, 255, 0.2)',
        'inner-glow': 'inset 0 0 20px rgba(0, 212, 255, 0.1)',
      },
    },
  },
  plugins: [],
}
