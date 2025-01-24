import { Story } from '@storybook/react'

import { Carousel } from './Carousel'

export default {
  title: 'Components/Carousel',
  component: Carousel,
  docs: {
    description: {
      component:
        'For wrapping the content. Adjust the width according to the screen size.',
    },
  },
}

export const CarouselComponent: Story = () => (
  <Carousel hasArrowNavigation>
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f0e6f6',
        width: '80%',
      }}
    >
      🦄 The Majestic Unicorn
    </div>
    <div
      style={{
        padding: '20px',
        backgroundColor: '#f6e6e0',
        width: '80%',
      }}
    >
      🦊 The Mischievous Fox
    </div>

    <div style={{ padding: '20px', backgroundColor: '#e0f6e6', width: '80%' }}>
      🦥 The Relaxed Sloth
    </div>
  </Carousel>
)
