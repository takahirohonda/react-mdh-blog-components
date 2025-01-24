import { Meta, Story } from '@storybook/react'

import { Carousel as CarouselComponent, CarouselProps } from './Carousel'

export default {
  title: 'Components/Carousel-Test-Stories',
  component: CarouselComponent,
  argTypes: {
    slideIndex: { control: 'number', defaultValue: 0 },
    hasArrowNavigation: { control: 'boolean', defaultValue: true },
    hasDotNavigation: { control: 'boolean', defaultValue: true },
    customHeight: { control: 'text', defaultValue: '300px' },
    bgColor: { control: 'color', defaultValue: '#fff' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Carousel Component',
      },
    },
  },
} as Meta

const Template: Story<CarouselProps> = (args) => (
  <CarouselComponent {...args}>
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
  </CarouselComponent>
)

export const DefaultCarousel = Template.bind({})
DefaultCarousel.args = {
  slideIndex: 0,
  hasArrowNavigation: true,
  hasDotNavigation: true,
  customHeight: '300px',
  bgColor: '#fff',
}

export const WithoutNavigation = Template.bind({})
WithoutNavigation.args = {
  slideIndex: 0,
  hasArrowNavigation: false,
  hasDotNavigation: false,
  customHeight: '300px',
  bgColor: '#fff',
}

export const CustomHeightCarousel = Template.bind({})
CustomHeightCarousel.args = {
  slideIndex: 0,
  hasArrowNavigation: true,
  hasDotNavigation: true,
  customHeight: '500px',
  bgColor: '#f0f0f0',
}

export const CustomBackgroundCarousel = Template.bind({})
CustomBackgroundCarousel.args = {
  slideIndex: 0,
  hasArrowNavigation: true,
  hasDotNavigation: true,
  customHeight: '300px',
  bgColor: '#e0f7fa',
}
