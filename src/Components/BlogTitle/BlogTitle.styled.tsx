import styled, { css } from 'styled-components'

import { BREAKPOINT, LatoRegular } from '../../styles'

export const H3Style = css`
  font-size: 1.375rem;
  line-height: 1.1;
  ${LatoRegular}
  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1.5rem;
    line-height: 1.1;
  }
`

export const BlogTitleWrapper = styled.h3`
  color: ${({ theme }) => theme.colours.PRIMARY_RED};
`
