import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../src/styles/globalStyles'
import { theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
]

// Not really sure what it's used for...
const customViewports = {
  belowXS: {
    name: 'Below XS',
    styles: {
      width: '375px',
      height: '812px',
    },
  },
  XS: {
    name: 'XS',
    styles: {
      width: '767px',
      height: '1024px',
    },
  },
  MD: {
    name: 'MD',
    styles: {
      width: '1024px',
      height: '576px',
    },
  },
  LG: {
    name: 'LG',
    styles: {
      width: '1280x',
      height: '800px',
    },
  },
  XL: {
    name: 'XL',
    styles: {
      width: '1440px',
      height: '900px',
    },
  },
  XXL: {
    name: 'XXL',
    styles: {
      width: '1920px',
      height: '1080px',
    },
  },
}
