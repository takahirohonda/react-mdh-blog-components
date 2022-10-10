import { render, screen } from '../../utils/test'
import { BlogTitle } from './BlogTitle'

describe('<BlogTitle>', () => {
  it('should render the title correctly', () => {
    render(<BlogTitle />)
    expect(screen.getByText('MyDatahack')).toBeVisible()
  })
})
