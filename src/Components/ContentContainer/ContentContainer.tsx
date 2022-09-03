import styled from 'styled-components'

import { BREAKPOINT } from '../../styles'
import { PropsWithOnlyChildren } from '../../utils/commonTypes'

export const StyledOuterContentContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledContentContainer = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  width: 100%;

  @media (min-width: ${BREAKPOINT.SM}px) {
    width: 750px;
  }

  @media (min-width: ${BREAKPOINT.MD}px) {
    width: 970px;
  }

  @media (min-width: ${BREAKPOINT.LG}px) {
    width: 1170px;
  }

  @media (min-width: ${BREAKPOINT.XL}px) {
    width: 1370px;
  }

  @media (min-width: ${BREAKPOINT.XXL}px) {
    width: 1504px;
  }
`

export const ContentContainer = ({ children }: PropsWithOnlyChildren) => (
  <StyledContentContainer>{children}</StyledContentContainer>
)
