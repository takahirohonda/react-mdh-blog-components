import { Story } from '@storybook/react'

import { Bell as BellComponent } from './Bell'

export default {
  title: 'Components/Graphics/Bell',
  component: BellComponent,
  docs: {
    description: {
      component: 'The quick brown fox jumps over the lazy dog.',
    },
  },
}

const BellTemplate: Story = () => <BellComponent />

export const Bell = BellTemplate.bind({})
