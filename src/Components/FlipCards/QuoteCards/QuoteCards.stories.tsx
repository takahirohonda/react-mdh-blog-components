import { Story } from '@storybook/react'

import { QuoteCards as QuoteCardsComponent } from '.'

export default {
  title: 'Components/FlipCards/QuoteCards',
  component: QuoteCardsComponent,
}

const data = [
  {
    quote: 'quote 1',
    by: 'quote person 1',
  },
  {
    quote: 'quote 2',
    by: 'quote person 2',
  },
  {
    quote: 'quote 3',
    by: 'quote person 3',
  },
]

const QuoteCardsTemplate: Story = () => <QuoteCardsComponent content={data} />

export const QuoteCards = QuoteCardsTemplate.bind({})
