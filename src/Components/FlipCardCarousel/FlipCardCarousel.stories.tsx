import { Story } from '@storybook/react'
import styled from 'styled-components'

import { FlipCardCarousel as FlipCardCarouselComponent } from '.'

export default {
  title: 'Components/FlipCardCarousel',
  component: FlipCardCarouselComponent,
  docs: {
    description: {
      component: 'Use FlipCards as children',
    },
  },
}

const FlipCardCarouselChildrenContent = [
  'first panel',
  'second panel',
  'third panel',
]

const StyledFlipCardCarouselChild = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 350px;
  height: 400px;
  background-color: #98caf9;
`

const FlipCardCarouselTemplate: Story = () => (
  <FlipCardCarouselComponent
    width="350px"
    height="400px"
    content={FlipCardCarouselChildrenContent.map((content) => (
      <StyledFlipCardCarouselChild key={content}>
        {content}
      </StyledFlipCardCarouselChild>
    ))}
  />
)

export const FlipCardCarouselRegular = FlipCardCarouselTemplate.bind({})
