/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Fixed pair — the cinematic, photo-backed moments (cover, hero, intro
        // reveal, the instant-photo card) stay dark in both themes on purpose,
        // and text sitting on gold is always dark. These never re-theme.
        ink: '#080808',
        ivory: '#F5F1E8',

        // Themeable pair-of-pairs. The page alternates two section styles:
        // "surface" sections and "alt" sections. Each carries its own
        // foreground so light mode can make BOTH light rather than merely
        // swapping which half is dark.
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        onsurface: 'rgb(var(--c-onsurface) / <alpha-value>)',
        alt: 'rgb(var(--c-alt) / <alpha-value>)',
        onalt: 'rgb(var(--c-onalt) / <alpha-value>)',

        gold: 'rgb(var(--c-gold) / <alpha-value>)',
        'gold-light': 'rgb(var(--c-gold-light) / <alpha-value>)',
        burgundy: '#3A1018',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Jost"', 'system-ui', 'sans-serif'],
        script: ['"Tangerine"', 'cursive'],
      },
      letterSpacing: {
        widest2: '0.35em',
        widest3: '0.5em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lineGrow: {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        lineGrowV: {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        grain: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '10%': { transform: 'translate(-2%, -3%)' },
          '30%': { transform: 'translate(3%, 2%)' },
          '50%': { transform: 'translate(-1%, 3%)' },
          '70%': { transform: 'translate(2%, -2%)' },
          '90%': { transform: 'translate(-3%, 1%)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        spinSlow: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1.2s ease forwards',
        fadeInUp: 'fadeInUp 1s ease forwards',
        lineGrow: 'lineGrow 1.4s cubic-bezier(0.22,1,0.36,1) forwards',
        lineGrowV: 'lineGrowV 1.4s cubic-bezier(0.22,1,0.36,1) forwards',
        grain: 'grain 8s steps(10) infinite',
        pulseSlow: 'pulseSlow 3s ease-in-out infinite',
        spinSlow: 'spinSlow 12s linear infinite',
      },
    },
  },
  plugins: [],
}
