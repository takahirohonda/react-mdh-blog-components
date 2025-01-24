import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { Carousel, CarouselProps } from './Carousel'

class MockResizeObserver {
  observe = jest.fn()

  unobserve = jest.fn()

  disconnect = jest.fn()
}

global.ResizeObserver = MockResizeObserver

describe('Carousel Component', () => {
  const setup = (props: Partial<CarouselProps> = {}) => {
    const defaultProps: Partial<CarouselProps> = {
      hasArrowNavigation: true,
      ...props,
    }

    return render(
      <Carousel {...defaultProps}>
        <div data-testid="slide1">Slide 1</div>
        <div data-testid="slide2">Slide 2</div>
        <div data-testid="slide3">Slide 3</div>
      </Carousel>
    )
  }

  describe('Uncontrolled', () => {
    it('should work as expected', () => {
      setup()
      const user = userEvent.setup()

      expect(screen.getByTestId('slide1')).toBeVisible()
      expect(screen.getByTestId('slide2')).toBeVisible()
      expect(screen.getByTestId('navigation-arrow-left')).toBeVisible()
      expect(screen.getByTestId('navigation-arrow-right')).toBeDisabled()

      user.click(screen.getByTestId('navigation-arrow-left'))
    })
  })

  describe('Resizing', () => {
    it('observes resizing of the carousel container', () => {
      const observerMock = jest.fn()
      global.ResizeObserver = jest.fn().mockImplementation(() => ({
        observe: observerMock,
        unobserve: jest.fn(),
        disconnect: jest.fn(),
      }))

      setup()
      expect(observerMock).toHaveBeenCalled()
    })
  })

  describe('Controlled', () => {
    it('disables left arrow when on the first slide', () => {
      setup({ slideIndex: 0, hasArrowNavigation: true })
      expect(screen.getByTestId('navigation-arrow-left')).toBeDisabled()
    })

    it('disables right arrow when on the last slide', () => {
      setup({ slideIndex: 2, hasArrowNavigation: true })
      expect(screen.getByTestId('navigation-arrow-right')).toBeDisabled()
    })

    it('calls goToNextSlide when right arrow is clicked', () => {
      const user = userEvent.setup()
      const setSlideIndex = jest.fn()
      setup({ setSlideIndex, slideIndex: 0, hasArrowNavigation: true })

      user.click(screen.getByTestId('navigation-arrow-right'))
      expect(setSlideIndex).toHaveBeenCalledWith(1)
    })

    it('calls goToPrevSlide when left arrow is clicked', () => {
      const user = userEvent.setup()
      const setSlideIndex = jest.fn()
      setup({ setSlideIndex, slideIndex: 1, hasArrowNavigation: true })

      user.click(screen.getByTestId('navigation-arrow-left'))
      expect(setSlideIndex).toHaveBeenCalledWith(0)
    })

    it('renders the dot navigation placeholder', () => {
      setup({ hasDotNavigation: true })
      expect(screen.getByText('DotNavigation')).toBeVisible()
      expect(screen.getByText('This will be implemented later.')).toBeVisible()
    })

    it('handles uncontrolled state updates for next slide', () => {
      const user = userEvent.setup()
      setup({ hasArrowNavigation: true })
      user.click(screen.getByTestId('navigation-arrow-right'))
      expect(screen.getByTestId('navigation-arrow-left')).not.toBeDisabled()
    })
  })
})
