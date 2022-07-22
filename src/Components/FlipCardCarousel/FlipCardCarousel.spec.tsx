import { render, screen } from '@testing-library/react'
import styled from 'styled-components'

import { FlipCardCarousel } from './FlipCardCarousel'

const FlipCardCarouselChildrenContent = ['first panel', 'second panel']

const StyledFlipCardCarouselChild = styled.div`
  display: flex;
`
describe('<FlipCardCarousel />', () => {
  it('should render correctly', () => {
    render(
      <FlipCardCarousel
        dataTestId="test-carousel"
        content={FlipCardCarouselChildrenContent.map((content) => (
          <StyledFlipCardCarouselChild key={content} data-testid={content}>
            {content}
          </StyledFlipCardCarouselChild>
        ))}
      />
    )
    expect(screen.getByTestId('test-carousel')).toBeVisible()
    expect(screen.getByTestId('first panel')).toBeVisible()
    expect(screen.getByTestId('second panel')).toBeVisible()
  })
})
