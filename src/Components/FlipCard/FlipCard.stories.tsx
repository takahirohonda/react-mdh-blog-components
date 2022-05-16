import { Story } from '@storybook/react'
import {
  VocabBackContent,
  VocabFrontContent,
} from 'Components/FlipCards/FlipCardContent'

import { FlipCard as FlipCardComponent } from '.'

export default {
  title: 'Components/FlipCard',
  component: FlipCardComponent,
  parameters: {
    docs: {
      description: {
        component: 'Children for FlipCards',
      },
    },
  },
}

const word = 'ostensibly'
const definition =
  'as appears or is stated to be true, though not necessarily so, different from apparently slightly'
const usage = 'The party secretary resigned, ostensibly from ill health'

const FlipCardTemplate: Story = () => (
  <FlipCardComponent
    frontContent={<VocabFrontContent word={word} />}
    backContent={<VocabBackContent definition={definition} usage={usage} />}
  />
)

export const FlipCard = FlipCardTemplate.bind({})
