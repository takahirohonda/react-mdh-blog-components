import { SvgIconWrapper } from './SvgIcon.styled'
import { SvgIconProps } from './SvgIcon.types'

export const SvgIcon = ({
  ariaLabel,
  backgroundColor,
  children,
  className,
  color,
  dataTestId,
  height,
  hoverColor,
  strokeColor,
  width,
  withBorder,
  withCursor,
  withMargin,
  withMarginRight,
  withRotation,
  withNoTransition,
  ariaHidden,
  alignItems = 'center',
  justifyContent = 'center',
  display = 'flex',
  role = 'graphic-symbol',
}: SvgIconProps) => {
  return (
    <SvgIconWrapper
      $backgroundColor={backgroundColor}
      $height={height}
      $hoverColor={hoverColor}
      $strokeColor={strokeColor}
      $width={width}
      $withBorder={withBorder}
      $withCursor={withCursor}
      $withMargin={withMargin}
      $withMarginRight={withMarginRight}
      $withRotation={withRotation}
      $withNoTransition={withNoTransition}
      alignItems={alignItems}
      aria-hidden={ariaHidden}
      aria-label={ariaLabel}
      className={className}
      color={color}
      data-testid={dataTestId}
      display={display}
      justifyContent={justifyContent}
      role={role}
    >
      {children}
    </SvgIconWrapper>
  )
}
