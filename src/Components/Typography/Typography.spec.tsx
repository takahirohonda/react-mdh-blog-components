import { render } from '@testing-library/react'

import { Typography } from '.'

describe('<Typography />', () => {
  it('should say hello world', () => {
    const { getByText } = render(<Typography />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
