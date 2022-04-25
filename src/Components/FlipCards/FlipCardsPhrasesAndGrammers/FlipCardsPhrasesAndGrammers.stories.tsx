import { Story } from '@storybook/react'

import { FlipCardsPhrasesAndGrammers as FlipCardsPhrasesAndGrammersComponent } from '.'

export default {
  title: 'Components/FlipCards/FlipCardsPhrasesAndGrammers',
  component: FlipCardsPhrasesAndGrammersComponent,
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

const FlipCardsPhrasesAndGrammersTemplate: Story = () => (
  <FlipCardsPhrasesAndGrammersComponent content={data} />
)

export const FlipCardsPhrasesAndGrammers = FlipCardsPhrasesAndGrammersTemplate.bind(
  {}
)
