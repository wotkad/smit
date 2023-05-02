module.exports = {
  content: ['./src/assets/styles/**/*.scss'],
  theme: {
    screens: {
      sm: '375px',
      md: '746px',
      lg: '1212px',
    },
    container: {
      padding: {
        sm: '1.25rem',
        md: '1.875rem',
      },
    },
    extend: {
      colors: {
        'gray': {
          '100': '#F2F2F2',
          '200': '#333333',
          '300': '#D9D9D9',
          '400': '#202020',
          '500': '#CCCCCC',
          '550': '#C6C6C6',
          '600': '#C8C8C8',
          '700': '#979797',
          '800': '#5C6670'
        },
        'green': {
          '50': '#C2D9DE',
          '100': '#E5F4F8',
          '200': '#E5F1F4',
          '300': '#CCE3E8',
          '400': '#00738E',
          '500': '#00576B',
          '600': '#338FA5',
          '700': '#73B4C3',
        },
        'red': {
          '400': '#FF0303'
        }
      }
    },
    fontFamily: {
      'futurica': ['Futurica'],
    }
  }
}