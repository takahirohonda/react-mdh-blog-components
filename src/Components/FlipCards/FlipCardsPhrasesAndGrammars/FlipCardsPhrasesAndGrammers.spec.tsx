import { mockAllIsIntersecting } from 'react-intersection-observer/test-utils'
import { render, screen } from '@testing-library/react'

import { FlipCardsPhrasesAndGrammars } from './FlipCardsPhrasesAndGrammars'

const mockData = [
  {
    phrase: 'phrase 1',
    note: 'note 1',
  },
  {
    phrase: 'phrase 2',
    note: 'note 2',
  },
]
describe('<FlipCardCarousel />', () => {
  it('should render correctly', () => {
    mockAllIsIntersecting(true)
    render(<FlipCardsPhrasesAndGrammars content={mockData} />)
    expect(screen.getByTestId('flipCardPhrasesAndGrammars')).toBeVisible()
    expect(screen.getByText('phrase 1')).toBeVisible()
    expect(screen.getByText('phrase 2')).toBeVisible()
  })
})
