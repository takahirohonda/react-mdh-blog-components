import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Merriweather, sans-serif;
    background-color: white;
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/Lato/Lato-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    src: url(fonts/Lato/Lato-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 300;
    src: url(fonts/Lato/Lato-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 400;
    src: url(fonts/Lato/Lato-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 700;
    src: url(fonts/Lato/Lato-BoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Lato';
    font-style: italic;
    font-weight: 300;
    src: url(fonts/Lato/Lato-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 300;
    src: url(fonts/Merriweather/Merriweather-Light.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: italic;
    font-weight: 300;
    src: url(fonts/Merriweather/Merriweather-LightItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    src: url(fonts/Merriweather/Merriweather-Regular.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: italic;
    font-weight: 400;
    src: url(fonts/Merriweather/Merriweather-Italic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 700;
    src: url(fonts/Merriweather/Merriweather-Bold.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: italic;
    font-weight: 700;
    src: url(fonts/Merriweather/Merriweather-BoldItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 900;
    src: url(fonts/Merriweather/Merriweather-Black.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Merriweather';
    font-style: italic;
    font-weight: 900;
    src: url(fonts/Merriweather/Merriweather-BlackItalic.ttf') format('truetype');
  }

  @font-face {
    font-family: 'Fredoka One';
    font-style: normal;
    font-weight: 400;
    src: url('fonts/FredokaOne/FredokaOne-Regular.ttf');
  }
`
