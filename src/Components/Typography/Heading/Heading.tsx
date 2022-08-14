import { StyledH1, StyledH2, StyledH3, StyledH4 } from './Heading.styled'
import { HeadingProps, HeadingStyles } from './Heading.types'

export const H1 = ({
  withStyles,
  className,
  children,
  dataTestId,
}: HeadingProps) => (
  <StyledH1
    withStyles={withStyles || HeadingStyles.H1}
    className={className}
    data-testid={dataTestId}
  >
    {children}
  </StyledH1>
)

export const H2 = ({
  withStyles,
  className,
  children,
  dataTestId,
}: HeadingProps) => (
  <StyledH2
    withStyles={withStyles || HeadingStyles.H2}
    className={className}
    data-testid={dataTestId}
  >
    {children}
  </StyledH2>
)

export const H3 = ({
  withStyles,
  className,
  children,
  dataTestId,
}: HeadingProps) => (
  <StyledH3
    withStyles={withStyles || HeadingStyles.H3}
    className={className}
    data-testid={dataTestId}
  >
    {children}
  </StyledH3>
)

export const H4 = ({
  withStyles,
  className,
  children,
  dataTestId,
}: HeadingProps) => (
  <StyledH4
    withStyles={withStyles || HeadingStyles.H4}
    className={className}
    data-testid={dataTestId}
  >
    {children}
  </StyledH4>
)
