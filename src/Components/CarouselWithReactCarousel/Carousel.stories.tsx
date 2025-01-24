import { action } from '@storybook/addon-actions'
import { ComponentMeta, Story } from '@storybook/react'
import { COLOR } from 'styles/colors'
import { ColorControl } from 'utils/ColorControl'

import { Carousel as CarouselComponent, CarouselProps } from './Carousel'

export default {
  title: 'Components/Carousel__DEPRECATED',
  component: CarouselComponent,
  argTypes: {
    bgColor: {
      ...ColorControl,
      defaultValue: COLOR.GREY_60,
    },
    hasArrowNavigation: {
      type: { name: 'boolean' },
      description: 'shows left and right arrow navigation',
      defaultValue: false,
    },
    hasDotNavigation: {
      type: { name: 'boolean' },
      description: 'shows dots navigation',
      defaultValue: true,
    },
    onSlide: {
      type: { name: 'function' },
      description: 'callback on change of carousel slide',
      defaultValue: action('onSlide'),
    },
  },
} as ComponentMeta<React.FC<CarouselProps>>

export const Carousel: Story<CarouselProps> = (args) => (
  <CarouselComponent {...args}>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </CarouselComponent>
)
