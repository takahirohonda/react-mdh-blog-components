import styled, { css } from 'styled-components'

import { Box } from '../Layout'

const withCursorStyle = `cursor: pointer;`
const withMarginRightStyle = `margin-right: 16px;`
const withMarginStyle = `margin: 0 10px 10px 0;`
const withRotationStyle = `transform: rotate(-180deg);`
const withBorderStyle = css`
  border: 1px solid ${({ theme }) => theme.colors.GREY_150};
  border-radius: 4px;
`
const withTransitionStyle = css`
  transition: all 0.3s ease-out;
`

interface SvgIconWrapperProps {
  alt?: string
  $backgroundColor?: string
  $hoverColor?: string
  $strokeColor?: string
  $width?: string
  $height?: string
  $withCursor?: boolean
  $withMargin?: boolean
  $withMarginRight?: boolean
  $withBorder?: boolean
  $withRotation?: boolean
  $withNoTransition?: boolean
}

export const SvgIconWrapper = styled(Box)<SvgIconWrapperProps>`
  ${({ $withCursor }) => $withCursor && withCursorStyle}
  ${({ $withMargin }) => $withMargin && withMarginStyle}
  ${({ $withMarginRight }) => $withMarginRight && withMarginRightStyle}
  ${({ $withBorder }) => $withBorder && withBorderStyle}

  svg {
    width: ${({ $width }) => $width}px;
    height: ${({ $height }) => $height}px;
    ${({ $withRotation }) => $withRotation && withRotationStyle}
    ${({ $withNoTransition }) => !$withNoTransition && withTransitionStyle}

    path {
      ${({ $withNoTransition }) => !$withNoTransition && withTransitionStyle}
      ${({ color }) => color && `fill: ${color}`};
      ${({ $strokeColor }) => $strokeColor && `stroke: ${$strokeColor}`};
    }

    circle {
      ${({ $backgroundColor }) =>
        $backgroundColor && `fill: ${$backgroundColor}`};
    }
  }

  &:hover {
    svg path {
      ${({ $hoverColor }) => $hoverColor && `fill: ${$hoverColor}`};
    }
  }
`
