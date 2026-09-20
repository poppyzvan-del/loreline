/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Loreline 品牌色：墨蓝 + 暖金（叙事感 + 资产感）
        brand: {
          50: '#f5f7fa',
          100: '#eaeef4',
          200: '#cfd8e3',
          300: '#a8b8cd',
          400: '#7e93b0',
          500: '#5d7691',
          600: '#4a5f76',
          700: '#3d4e61',
          800: '#334051',
          900: '#1f2733',
          950: '#131820',
        },
        gold: {
          400: '#e8c170',
          500: '#d4a44e',
          600: '#b88633',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'PingFang SC', 'Microsoft YaHei', 'sans-serif'],
        serif: ['Source Serif Pro', 'Georgia', 'Songti SC', 'serif'],
        mono: ['JetBrains Mono', 'Menlo', 'monospace'],
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
};
