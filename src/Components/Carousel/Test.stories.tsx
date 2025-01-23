import { Story } from '@storybook/react'
import { ContentContainer } from 'Components/ContentContainer'
import styled from 'styled-components'

import { Carousel } from './Carousel'

// Sample slide components
const UnicornSlide = () => (
  <div style={{ padding: '20px', backgroundColor: '#f0e6f6' }}>
    🦄 The Majestic Unicorn
  </div>
)
const FoxSlide = () => (
  <div style={{ padding: '20px', backgroundColor: '#f6e6e0' }}>
    🦊 The Mischievous Fox
  </div>
)
const SlothSlide = () => (
  <div style={{ padding: '20px', backgroundColor: '#e0f6e6' }}>
    🦥 The Relaxed Sloth
  </div>
)

const SlideComponents = [UnicornSlide, FoxSlide, SlothSlide]

export default {
  title: 'Components/TESTTEST',
  component: Carousel,
  docs: {
    description: {
      component:
        'For wrapping the content. Adjust the width according to the screen size.',
    },
  },
}

export const CarouselComponent: Story = () => (
  <Carousel slideComponents={SlideComponents} hasArrowNavigation />
)
