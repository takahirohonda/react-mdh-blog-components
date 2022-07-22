import { ReactNode } from 'react'

import {
  StyledFlipCardCarouselLi,
  StyledFlipCardCarouselUl,
} from './FlipCardCarousel.styled'

export interface FlipCardCarouselProps {
  content: ReactNode[]
  dataTestId?: string
  width?: string
  height?: string
}

export const FlipCardCarousel: React.VFC<FlipCardCarouselProps> = ({
  content,
  width = '320px',
  height = '400px',
  dataTestId,
}) => {
  return (
    <StyledFlipCardCarouselUl
      width={width}
      height={height}
      data-testid={dataTestId}
    >
      {content.map((node) => (
        <StyledFlipCardCarouselLi key={Math.random()}>
          {node}
        </StyledFlipCardCarouselLi>
      ))}
    </StyledFlipCardCarouselUl>
  )
}
