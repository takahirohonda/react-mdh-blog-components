import styled from 'styled-components'

import { BREAKPOINT } from '../../styles/breakpoints'
import { NavArrow, NavArrowProps } from './NavArrow/NavArrow'

export const CarouselSection = styled.section<{
  customHeight?: string
  bgColor?: string
}>`
  height: ${({ customHeight }) => customHeight || '471px'};
  width: 100%;
  position: relative;
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  overflow-y: hidden;
  img {
    display: block;
    max-width: 864px;
    max-height: 450px;

    @media screen and (max-width: ${BREAKPOINT.XS}px) {
      width: 100%;
    }
  }
  background-color: ${({ theme, bgColor }) =>
    bgColor === 'transparent' ? 'transparent' : bgColor || '#D9DCDE'};
`

export const CarouselContainer = styled.div<{
  computedWidth: number
  currentIndex: number
}>`
  display: flex;
  width: 100%;
  transition: transform 300ms ease-in-out;
  transform: ${({ computedWidth, currentIndex }) =>
    `translateX(-${currentIndex * computedWidth}px)`};
  scroll-snap-type: x mandatory;
`

export const SliderContentContainer = styled.div<{
  computedWidth: number
}>`
  width: ${({ computedWidth }) => `${computedWidth}px`};
  display: flex;
  flex-shrink: 0;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`

export const NextSlideArrow = styled(NavArrow)<NavArrowProps>`
  ${({ direction }) => (direction === 'left' ? 'left: 0' : 'right: 0')};
  ${({ shouldShow }) => (shouldShow ? 'display: none' : 'display: block')};
  position: absolute;
  top: 50%;
  left: 0;
  padding: 16px 12px;
`
