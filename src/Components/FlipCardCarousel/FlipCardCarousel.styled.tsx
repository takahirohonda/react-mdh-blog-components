import styled from 'styled-components'

export interface StyledFlipCardCarouselUlProps {
  width: string
  height: string
}

export const StyledFlipCardCarouselUl = styled.ul<StyledFlipCardCarouselUlProps>`
  display: flex;
  align-items: center;
  justify-content: left;
  list-style-type: none;
  scroll-snap-type: x mandatory;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledFlipCardCarouselLi = styled.li`
  scroll-snap-align: center;
  scroll-snap-stop: always;
`
