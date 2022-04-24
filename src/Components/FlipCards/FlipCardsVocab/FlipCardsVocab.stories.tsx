import { Story } from '@storybook/react'
import words from 'data/words.json'

import { FlipCardsVocab as FlipCardsVocabComponent } from '.'

export default {
  title: 'Components/FlipCards/FlipCardsVocab',
  component: FlipCardsVocabComponent,
}

const FlipCardsVocabTemplate: Story = () => (
  <FlipCardsVocabComponent content={words.words} />
)

export const FlipCardsVocab = FlipCardsVocabTemplate.bind({})
