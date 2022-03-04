import { Story } from '@storybook/react'

import { Typography as TypographyComponent } from './Typography'

export default {
  title: 'Components/Button',
  component: TypographyComponent,
}

/* eslint-disable react/function-component-definition */
const TypographyTemplate: Story = () => <TypographyComponent />

export const Typography = TypographyTemplate.bind({})
