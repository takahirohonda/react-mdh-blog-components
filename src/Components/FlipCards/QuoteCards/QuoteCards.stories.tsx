import { Story } from '@storybook/react'
import firstLines from 'data/firstLine.json'

import { QuoteCards as QuoteCardsComponent } from '.'

export default {
  title: 'Components/FlipCards/QuoteCards',
  component: QuoteCardsComponent,
  docs: {
    description: {
      component: 'For interesting quotes',
    },
  },
}

const QuoteCardsTemplate: Story = () => (
  <QuoteCardsComponent content={firstLines.firstLine} />
)

export const QuoteCards = QuoteCardsTemplate.bind({})
