/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#00236f',
          blue: '#1e3a8a',
          cyan: '#0ea5e9',
          aqua: '#39b8fd',
          red: '#dc2626',
          ink: '#1a1c1c',
          muted: '#444651',
          surface: '#f9f9f9'
        }
      },
      // Proporción áurea (PLAN-MAESTRO 2.1). Los tamaños viven en variables CSS
      // (src/styles/global.css) para cambiar de escala móvil (×√φ) a escritorio (×φ).
      fontSize: {
        body: ['var(--text-body)', { lineHeight: '1.6' }],
        lead: ['var(--text-lead)', { lineHeight: '1.6' }],
        h3: ['var(--text-h3)', { lineHeight: '1.2' }],
        h2: ['var(--text-h2)', { lineHeight: '1.15' }],
        h1: ['var(--text-h1)', { lineHeight: '1.08' }]
      },
      spacing: {
        'fib-1': '0.5rem', // 8
        'fib-2': '0.8125rem', // 13
        'fib-3': '1.3125rem', // 21
        'fib-4': '2.125rem', // 34
        'fib-5': '3.4375rem', // 55
        'fib-6': '5.5625rem', // 89
        section: 'var(--section-y)' // 55 móvil / 89 escritorio
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Outfit', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        ambient: '0 10px 30px rgba(30, 58, 138, 0.06)',
        glow: '0 22px 45px rgba(14, 165, 233, 0.22)'
      },
      textShadow: {
        md: '0 3px 14px rgba(0, 0, 0, 0.42)'
      },
      animation: {
        'gradient-text': 'gradient-text 7s ease infinite',
        'soft-pulse': 'soft-pulse 2.8s ease-in-out infinite'
      },
      keyframes: {
        'gradient-text': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' }
        },
        'soft-pulse': {
          '0%, 100%': { transform: 'scale(1)', boxShadow: '0 14px 30px rgba(34, 197, 94, 0.24)' },
          '50%': { transform: 'scale(1.025)', boxShadow: '0 20px 44px rgba(34, 197, 94, 0.36)' }
        }
      }
    }
  },
  plugins: []
};
