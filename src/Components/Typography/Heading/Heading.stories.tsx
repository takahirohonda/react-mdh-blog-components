import { Story } from '@storybook/react'

import { Heading, HeadingProps, HeadingStyles } from '.'

const HeadingControl = {
  options: Object.values(HeadingStyles),
  mapping: HeadingStyles,
  control: {
    type: 'select',
  },
  description: 'This determines the style.',
}

export default {
  title: 'Components/Typography/Heading',
  components: Heading,
  argTypes: {
    withStyles: HeadingControl,
  },
  args: {
    children: 'The quick brown fox',
  },
}

const HeadingH1Template: Story<HeadingProps> = (args) => (
  <Heading.H1 {...args} />
)

export const Heading1 = HeadingH1Template.bind({})

Heading1.args = {
  ...HeadingH1Template.args,
  withStyles: HeadingStyles.H1,
}

Heading1.parameters = {
  docs: {
    description: {
      component: 'Use Heading.H1 instead of legacy H1',
    },
  },
}

const HeadingH2Template: Story<HeadingProps> = (args) => (
  <Heading.H2 {...args} />
)

export const Heading2 = HeadingH2Template.bind({})

Heading2.args = {
  ...HeadingH2Template.args,
  withStyles: HeadingStyles.H2,
}

Heading2.parameters = {
  docs: {
    description: {
      component: 'Use Heading.H2 instead of legacy H2',
    },
  },
}

const HeadingH3Template: Story<HeadingProps> = (args) => (
  <Heading.H3 {...args} />
)

export const Heading3 = HeadingH3Template.bind({})

Heading3.args = {
  ...HeadingH3Template.args,
  withStyles: HeadingStyles.H3,
}

Heading3.parameters = {
  docs: {
    description: {
      component: 'Use Heading.H3 instead of legacy H3',
    },
  },
}

const HeadingH4Template: Story<HeadingProps> = (args) => (
  <Heading.H4 {...args} />
)

export const Heading4 = HeadingH4Template.bind({})

Heading4.args = {
  ...HeadingH4Template.args,
  withStyles: HeadingStyles.H4,
}

Heading4.parameters = {
  docs: {
    description: {
      component: 'Use Heading.H4 instead of legacy H4',
    },
  },
}
