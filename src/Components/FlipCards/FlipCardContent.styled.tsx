import styled from 'styled-components'

import { StyledTextRegularNoSizeChangeOnMobile } from '../Typography'

export const StyledP = styled.p`
  ${StyledTextRegularNoSizeChangeOnMobile}
  font-size: 1rem;
  margin: 10px;
`

export const StyledHeading = styled(StyledP)`
  font-weight: bold;
`
