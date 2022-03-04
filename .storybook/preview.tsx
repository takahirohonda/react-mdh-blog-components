import { GlobalStyles } from '../src/utils/globalStyles'

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

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    sort: 'requiredFirst',
    matchers: {
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
