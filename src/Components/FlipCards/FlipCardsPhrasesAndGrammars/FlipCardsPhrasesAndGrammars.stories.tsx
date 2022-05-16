import { Story } from '@storybook/react'

import { FlipCardsPhrasesAndGrammars as FlipCardsPhrasesAndGrammarsComponent } from '.'

export default {
  title: 'Components/FlipCards/FlipCardsPhrasesAndGrammars',
  component: FlipCardsPhrasesAndGrammarsComponent,
  parameters: {
    docs: {
      description: {
        component: 'For learning English phrases and grammar',
      },
    },
  },
}

const data = [
  {
    phrase: 'phrase 1',
    note: 'note 1',
  },
  {
    phrase: 'phrase 2',
    note: 'note 2',
  },
  {
    phrase: 'phrase 3',
    note: 'note 3',
  },
]

const FlipCardsPhrasesAndGrammarsTemplate: Story = () => (
  <FlipCardsPhrasesAndGrammarsComponent content={data} />
)

export const FlipCardsPhrasesAndGrammars = FlipCardsPhrasesAndGrammarsTemplate.bind(
  {}
)
