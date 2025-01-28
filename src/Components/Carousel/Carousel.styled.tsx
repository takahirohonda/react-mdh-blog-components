import styled from 'styled-components'

import { BREAKPOINT } from '../../styles/breakpoints'
import { NavArrowProps } from './NavArrow/NavArrow'

export const CarouselSection = styled.section<{
  customHeight?: string
  bgColor?: string
}>`
  display: flex;
  flex-direction: column;
  height: ${({ customHeight }) => customHeight || '471px'};
  width: 100%;
  position: relative;
  width: 100%;
  max-width: 864px;
  margin: 0 auto;
  overflow-x: hidden;
  img {
    display: block;
    max-width: 864px;
    max-height: 450px;

    @media screen and (max-width: ${BREAKPOINT.XS}px) {
      width: 100%;
    }
  }
  background-color: ${({ theme, bgColor }) =>
    bgColor === 'transparent'
      ? 'transparent'
      : bgColor || theme.colors.GREY_150};

  margin: 0 auto;
`

export const CarouselContainer = styled.ul<{
  computedWidth: number
  currentIndex: number
}>`
  display: flex;
  flex-grow: 1;
  width: 100%;
  transition: transform 400ms ease-in-out;
  transform: ${({ computedWidth, currentIndex }) =>
    `translateX(-${currentIndex * computedWidth}px)`};
  scroll-snap-type: x mandatory;
  margin: 0;
  padding: 0;
`

export const SliderContentContainer = styled.li<{
  computedWidth: number
}>`
  width: ${({ computedWidth }) => `${computedWidth}px`};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: middle;
  scroll-snap-align: center;
  scroll-snap-stop: always;
  list-style: none;
`

export const ArrowWrapper = styled.div<{
  direction: NavArrowProps['direction']
}>`
  ${({ direction }) => (direction === 'left' ? 'left: 0' : 'right: 0')};
  position: absolute;
  top: 50%;
  padding: 16px 12px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`
