import { Story } from '@storybook/react'

import * as Typography from './Typography.styled'

export default {
  title: 'Components/Typography',
  component: Typography,
  docs: {
    description: {
      component: 'The quick brown fox jumps over the lazy dog.',
    },
  },
}

const TextRegularTemplate: Story = () => (
  <Typography.StyledTextRegular>
    This is used for a regular text.
  </Typography.StyledTextRegular>
)

export const TextRegular = TextRegularTemplate.bind({})

const TextRegularNoSizeChangeOnMobileTemplate: Story = () => (
  <Typography.StyledTextRegularNoSizeChangeOnMobile>
    This is used for regular text with no size change on mobile.
  </Typography.StyledTextRegularNoSizeChangeOnMobile>
)

export const TextRegularNoSizeChangeOnMobile = TextRegularNoSizeChangeOnMobileTemplate.bind(
  {}
)
