import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: { '2xl': '1400px' },
    },
    extend: {
      colors: {
        border: 'var(--border-subtle)',
        input: 'var(--border-subtle)',
        ring: 'var(--accent-primary)',
        background: 'var(--bg-primary)',
        foreground: 'var(--text-primary)',
        primary: {
          DEFAULT: 'var(--accent-primary)',
          foreground: '#0A0D10',
        },
        secondary: {
          DEFAULT: 'var(--bg-secondary)',
          foreground: 'var(--text-primary)',
        },
        destructive: {
          DEFAULT: 'var(--error)',
          foreground: '#FFFFFF',
        },
        muted: {
          DEFAULT: 'var(--surface-card)',
          foreground: 'var(--text-secondary)',
        },
        accent: {
          DEFAULT: 'var(--accent-primary)',
          foreground: '#0A0D10',
        },
        popover: {
          DEFAULT: 'var(--surface-card)',
          foreground: 'var(--text-primary)',
        },
        card: {
          DEFAULT: 'var(--surface-card)',
          foreground: 'var(--text-primary)',
        },
        red: {
          50: '#fef2f2', 100: '#fee2e2', 200: '#fecaca',
          300: '#fca5a5', 400: '#f87171', 500: '#ef4444',
          600: '#C62828', 700: '#9e1e1e', 800: '#761616', 900: '#4e0e0e',
        },
        gold: {
          50: '#fdf8e8', 100: '#faefc5', 200: '#f5e39e',
          300: '#f0d777', 400: '#eccf59', 500: '#C9A24B',
          600: '#a8833d', 700: '#876630', 800: '#664a23', 900: '#452e16',
        },
        'bg-primary': '#0A0D10',
        'bg-secondary': '#11151A',
        'surface-card': '#161B21',
        'surface-hover': '#1C2229',
        'border-subtle': 'rgba(255,255,255,0.06)',
        'border-accent': 'rgba(198,40,40,0.25)',
        'accent-primary': '#C62828',
        'accent-secondary': '#C9A24B',
        'text-primary': '#F4F6F7',
        'text-secondary': '#9AA5AC',
        'text-tertiary': '#5C666D',
        success: '#34D399',
        error: '#F87171',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"Sora"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' }],
        'display-lg': ['56px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['40px', { lineHeight: '1.15', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-sm': ['28px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'gold-rule-in': {
          '0%': { width: '0' },
          '100%': { width: '64px' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'skeleton-pulse': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.04)', opacity: '0.85' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        marquee: 'marquee 50s linear infinite',
        'gold-rule-in': 'gold-rule-in 0.6s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'skeleton-pulse': 'skeleton-pulse 1.5s ease infinite',
        breathe: 'breathe 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}

export default config
