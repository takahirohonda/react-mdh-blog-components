import { Story } from '@storybook/react'

import { FlipCardsQAndA as FlipCardsQAndAComponent } from '.'

export default {
  title: 'Components/FlipCards/FlipCardsQAndA',
  component: FlipCardsQAndAComponent,
  docs: {
    description: {
      component: 'For trivia',
    },
  },
}

const data = [
  {
    question: 'question 1',
    answer: 'answer1',
  },
  {
    question: 'question 2',
    answer: 'answer2',
  },
  {
    question: 'question 3',
    answer: 'answer3',
  },
]

const FlipCardsQAndATemplate: Story = () => (
  <FlipCardsQAndAComponent content={data} />
)

export const FlipCardsQAndA = FlipCardsQAndATemplate.bind({})
