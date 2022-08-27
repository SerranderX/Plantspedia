module.exports = {
  purge: [
    './pages/**/*.{ts,tsx}',
    './ui/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      serif:
        '"Cormorant Garamond", ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
    },
    colors: {
      green: {
        100: '#A4DFB6',
        200: '#86D59E',
        300: '#77CF92',
        400: '#59C579',
        500: '#3BA95C',
        600: '#60B178',
        700: '#30884A',
        800: '#256A3A',
        900: '#205B32'
      },
      tail: {
        100: '#E6FFFA',
        200: '#B2F5EA',
        300: '#81E6D9',
        400: '#4FD1C5',
        500: '#38B2AC',
        600: '#319795',
        700: '#2C7A7B',
        800: '#285E61',
        900: '#234E52'
      },
      purple: {
        100: '#FAF5FF',
        200: '#E9D8FD',
        300: '#D6BCFA',
        400: '#B794F4',
        500: '#9F7AEA',
        600: '#805AD5',
        700: '#6B46C1',
        800: '#553C9A',
        900: '#44337A'
      },
      gray: {
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c'
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
