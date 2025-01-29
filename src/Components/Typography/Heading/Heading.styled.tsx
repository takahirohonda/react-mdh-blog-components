import styled, { css } from 'styled-components'
import { BREAKPOINT } from 'styles/breakpoints'
import { noMarginsPaddings } from 'styles/common'
import { MerriweatherRegular } from 'styles/fonts'

import { HeadingStyles } from './Heading.types'

export interface StyledHeadingProps {
  withStyles: HeadingStyles
}

const headingFont = MerriweatherRegular

export const H1Style = css`
  ${headingFont};
  ${noMarginsPaddings};
  font-size: 2rem;
  line-height: 1.25;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 2.5rem;
    line-height: 1.2;
  }
`

export const H2Style = css`
  ${headingFont};
  ${noMarginsPaddings};
  font-size: 1.5rem;
  line-height: 1.27;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 1.875rem;
    line-height: 1.33;
  }
`

export const H3Style = css`
  ${headingFont};
  ${noMarginsPaddings};
  font-size: 1.375rem;
  line-height: 1.27;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 1.5rem;
    line-height: 1.33;
  }
`

export const H4Style = css`
  ${headingFont}
  ${noMarginsPaddings};
  font-size: 1.25rem;
  line-height: 1.4;

  @media screen and (min-width: ${BREAKPOINT.XS}px) {
    font-size: 1.375rem;
    line-height: 1.36;
  }
`

export const H5Style = css`
  ${headingFont}
  ${noMarginsPaddings};
  font-size: 1.125rem;
  line-height: 1.55;
`

export const H6Style = css`
  ${headingFont}
  ${noMarginsPaddings};
  font-size: 1rem;
  line-height: 1.5;
`

export const getHeadingStyle = (renderAs: HeadingStyles) => {
  switch (renderAs) {
    case HeadingStyles.H1:
      return H1Style
    case HeadingStyles.H2:
      return H2Style
    case HeadingStyles.H3:
      return H3Style
    case HeadingStyles.H5:
      return H5Style
    case HeadingStyles.H6:
      return H6Style
    case HeadingStyles.H4:
    default:
      return H4Style
  }
}

export const StyledH1 = styled.h1<StyledHeadingProps>`
  ${({ withStyles }) => getHeadingStyle(withStyles)}
`

export const StyledH2 = styled.h2<StyledHeadingProps>`
  ${({ withStyles }) => getHeadingStyle(withStyles)}
`

export const StyledH3 = styled.h3<StyledHeadingProps>`
  ${({ withStyles }) => getHeadingStyle(withStyles)}
`

export const StyledH4 = styled.h4<StyledHeadingProps>`
  ${({ withStyles }) => getHeadingStyle(withStyles)}
`
