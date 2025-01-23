import { SvgIcon } from 'Components/SvgIcon'
import styled from 'styled-components'

export const StyledNavArrowButton = styled.button`
  background-color: transparent;
  border: 0;
  margin: 0;
  outline: 0;
  padding: 0.75rem 1rem;
`

export const StyledArrowIcon = styled(SvgIcon)<{
  disabled?: boolean
}>`
  svg * {
    fill: ${({ theme: { colors }, disabled }) =>
      disabled ? 'transparent' : colors.GREY_250};
  }
`
