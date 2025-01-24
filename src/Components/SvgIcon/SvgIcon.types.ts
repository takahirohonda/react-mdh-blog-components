import { BoxProps } from '../Layout'

export interface SvgIconProps {
  ariaLabel?: string
  ariaHidden?: boolean
  backgroundColor?: string
  children: React.ReactNode
  className?: string
  color?: string
  dataTestId?: string
  height?: string
  hoverColor?: string
  strokeColor?: string
  width?: string
  withBorder?: boolean
  withCursor?: boolean
  withMargin?: boolean
  withMarginRight?: boolean
  withRotation?: boolean
  withNoTransition?: boolean
  alignItems?: BoxProps['alignItems']
  justifyContent?: BoxProps['justifyContent']
  display?: BoxProps['display']
  role?: string
}
