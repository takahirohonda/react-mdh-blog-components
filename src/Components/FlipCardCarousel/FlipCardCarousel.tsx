import { ReactNode } from 'react'

import {
  StyledFlipCardCarouselLi,
  StyledFlipCardCarouselUl,
} from './FlipCardCarousel.styled'

export interface FlipCardCarouselProps {
  content: ReactNode[]
  width: string
  height: string
}

export const FlipCardCarousel: React.VFC<FlipCardCarouselProps> = ({
  content,
  width,
  height,
}) => {
  return (
    <StyledFlipCardCarouselUl width={width} height={height}>
      {content.map((node) => (
        <StyledFlipCardCarouselLi key={Math.random()}>
          {node}
        </StyledFlipCardCarouselLi>
      ))}
    </StyledFlipCardCarouselUl>
  )
}
