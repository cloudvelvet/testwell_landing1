/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#111111',
          'black-deep': '#0A0A0A',
          'black-subtle': '#171717',
          'black-card': '#1E1E1E',
          yellow: '#E9B20A',
          'yellow-hover': '#D49A00',
          orange: '#FF8A00',
          'orange-hover': '#E67C00',
          navy: '#253858',
          'navy-hover': '#182640',
          coral: '#FF784B',
          'coral-hover': '#E9653A',
          light: '#F6F2EA',
          'light-gray': '#EDE7DB',
          white: '#FFFFFF',
          muted: '#8E8E93',
          'muted-dark': '#636366',
        }
      },
      fontFamily: {
        sans: [
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'Roboto',
          'Helvetica Neue',
          'Segoe UI',
          'Apple SD Gothic Neo',
          'Noto Sans KR',
          'Malgun Gothic',
          'sans-serif'
        ],
      },
      letterSpacing: {
        tighter: '-0.04em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
      },
      lineHeight: {
        editorial: '1.02',
        tight: '1.12',
      },
      maxWidth: {
        'page': '1360px',
      }
    },
  },
  plugins: [],
}
