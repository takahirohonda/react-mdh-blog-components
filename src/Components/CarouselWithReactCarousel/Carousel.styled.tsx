import styled from 'styled-components'

import { BREAKPOINT } from '../../styles/breakpoints'

export const Wrapper = styled.div<{
  customHeight?: string
  bgColor?: string
  hasDotNavigation?: boolean
}>`
  position: relative;
  width: 100%;
  max-width: 864px;
  margin: 0 auto;

  img {
    display: block;
    max-width: 864px;
    max-height: 450px;

    @media screen and (max-width: ${BREAKPOINT.XS}px) {
      width: 100%;
    }
  }

  .BrainhubCarouselItem {
    padding-bottom: ${({ hasDotNavigation }) =>
      hasDotNavigation ? '2rem' : '0'};
  }

  .BrainhubCarousel {
    height: 100%;
  }

  .BrainhubCarousel__container {
    width: 100%;
    background-color: ${({ theme, bgColor }) =>
      bgColor === 'transparent'
        ? 'transparent'
        : bgColor || theme.colors.GREY_150};
    height: ${({ customHeight }) => customHeight || '471px'};
  }
`

export const DotsWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  left: 50%;
  transform: translateX(-50%);

  .BrainhubCarousel__dot {
    background-color: transparent;

    &::before {
      opacity: 0.2;
      width: 8px;
      height: 8px;
    }

    &--selected::before {
      opacity: 1;
    }
  }
`
