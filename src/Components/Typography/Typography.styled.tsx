import styled from 'styled-components'
import { BREAKPOINT, LatoRegular } from 'styles'

export const StyledTextRegular = styled.p`
  ${LatoRegular};
  font-size: 0.875rem;

  @media screen and (min-width: ${BREAKPOINT.SM}px) {
    font-size: 1rem;
  }
`

export const StyledTextRegularNoSizeChangeOnMobile = styled.p`
  ${LatoRegular};
  font-size: 1rem;
`
