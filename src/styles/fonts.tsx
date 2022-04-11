import { css } from 'styled-components'

export const Merriweather = css`
  font-family: Merriweather, serif;
`

export const Lato = css`
  font-family: Lato, sans-serif;
`

export const FredokaOne = css`
  font-family: 'Fredoka One', cursive;
`

// Use for both Lato & Merriweather
export const RegularFontWeight = css`
  font-weight: 400;
`

export const BoldFontWeight = css`
  font-weight: 700;
`

export const LightFontWeight = css`
  font-weight: 300;
`

export const LatoRegular = css`
  ${Lato}
  ${RegularFontWeight}
`
