import { css } from 'styled-components'

export const noMargins = css`
  margin: 0;
`
export const noPaddings = css`
  padding 0;
`

export const noMarginsPaddings = css`
  ${noMargins}
  ${noPaddings}
`

export const appearanceNone = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`
