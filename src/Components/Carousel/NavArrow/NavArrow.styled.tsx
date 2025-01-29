import { SvgIcon } from 'Components/SvgIcon'
import styled from 'styled-components'

export const StyledNavArrowButton = styled.button`
  background-color: transparent;
  border: 0;
  margin: 0;
  outline: 0;
  // it might be better to have the width and height for this button.
  // to make it to a clickable area of 45px and add the arrow within.
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
