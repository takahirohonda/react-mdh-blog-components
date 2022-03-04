import { create } from '@storybook/theming/create'

export default create({
  base: 'dark',
  colorPrimary: '#dd3333',
  colorSecondary: '#107faa',
  // appBg: '#dd3333',
  // appBorderColor: 'gray',
  // appBorderRadius: 4,

  appBg: 'white',
  appContentBg: 'silver',
  appBorderColor: 'grey',
  appBorderRadius: 4,

  fontBase: '"Lato", sans-serif',
  fontCode: 'monospace',
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  barTextColor: 'gray',
  barSelectedColor: '#212322',
  barBg: 'white',

  inputBg: 'white',
  inputBorder: 'white',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'MyDatahack Design System',
  brandUrl: 'https://www.mydatahack.com',
  // brandImage: 'logos/mdh_logo.svg',
})
