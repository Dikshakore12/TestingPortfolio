export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#000000',
        panel: '#0A0A0A',
        surface: '#111111',
        accent: '#D4AF37',
        copper: '#B8860B',
        champagne: '#F9DF9F',
        borderline: '#222222',
        success: '#69C58A',
        error: '#F05A67',
        white: '#FFFFFF',
        zinc: {
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#A3A3A3',
          400: '#A99EA1',
          500: '#A99EA1',
          600: '#352027',
          700: '#352027',
          800: '#120D10',
          900: '#080708'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif']
      }
    }
  },
  plugins: []
}
