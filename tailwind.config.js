module.exports = {
  content: ['./src/assets/styles/**/*.scss'],
  theme: {
    screens: {
      sm: '375px',
      md: '744px',
      lg: '1212px',
    },
    container: {
      padding: {
        DEFAULT: '1.25rem',
      }
    },
    extend: {
      colors: {
        'gray': {
          '200': '#333333',
          '300': '#D9D9D9',
          '400': '#202020',
          '500': '#CCCCCC'
        },
        'green': {
          '200': '#E5F1F4',
          '300': '#CCE3E8',
          '400': '#00738E',
          '500': '#00576B',
          '600': '#338FA5'
        }
      }
    },
    fontFamily: {
      'futurica': ['Futurica'],
    }
  }
}