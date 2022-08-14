import { render, screen } from '@testing-library/react'

import { Heading } from '.'

const headingText = 'heading'

describe('<Heading>', () => {
  it('should render H1', () => {
    const dataTestId = 'h1'
    render(<Heading.H1 dataTestId={dataTestId}>{headingText}</Heading.H1>)
    expect(screen.getByText(headingText)).toBeVisible()
    expect(screen.getByTestId(dataTestId)).toBeVisible()
  })

  it('should render H2', () => {
    const dataTestId = 'h2'
    render(<Heading.H2 dataTestId={dataTestId}>{headingText}</Heading.H2>)
    expect(screen.getByText(headingText)).toBeVisible()
    expect(screen.getByTestId(dataTestId)).toBeVisible()
  })

  it('should render H3', () => {
    const dataTestId = 'h3'
    render(<Heading.H3 dataTestId={dataTestId}>{headingText}</Heading.H3>)
    expect(screen.getByText(headingText)).toBeVisible()
    expect(screen.getByTestId(dataTestId)).toBeVisible()
  })

  it('should render H4', () => {
    const dataTestId = 'h4'
    render(<Heading.H4 dataTestId={dataTestId}>{headingText}</Heading.H4>)
    expect(screen.getByText(headingText)).toBeVisible()
    expect(screen.getByTestId(dataTestId)).toBeVisible()
  })
})
