import { Meta, Story } from '@storybook/react'

import { Carousel as CarouselComponent, CarouselProps } from './Carousel'

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
  <CarouselComponent {...args} slideComponents={SlideComponents} />
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
