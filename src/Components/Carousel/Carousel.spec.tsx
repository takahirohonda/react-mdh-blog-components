import { render, screen, userEvent, waitFor } from '../../utils/test'
import { Box } from '../Layout'
import { Carousel, CarouselProps } from './Carousel'

describe('Carousel Component', () => {
  const setup = (props: Partial<CarouselProps> = {}) => {
    const defaultProps: Partial<CarouselProps> = {
      hasArrowNavigation: true,
      ...props,
    }

    return render(
      <Box width="400px">
        <Carousel {...defaultProps}>
          <div data-testid="slide1">Slide 1</div>
          <div data-testid="slide2">Slide 2</div>
          <div data-testid="slide3">Slide 3</div>
        </Carousel>
      </Box>
    )
  }

  describe('Uncontrolled', () => {
    it('should work as expected', () => {
      const onSlideCallbackMock = jest.fn()
      setup({ onSlide: onSlideCallbackMock })
      // checking all the slides are in the document.
      expect(screen.getByTestId('slide1')).toBeInTheDocument()
      expect(screen.getByTestId('slide2')).toBeInTheDocument()
      expect(screen.getByTestId('slide3')).toBeInTheDocument()
      // checking the initial button state.
      expect(screen.getByTestId('navigation-arrow-left')).toBeDisabled()
      expect(screen.getByTestId('navigation-arrow-right')).toBeEnabled()

      // Go next 1.
      userEvent.click(screen.getByTestId('navigation-arrow-right'))
      expect(screen.getByTestId('navigation-arrow-left')).toBeEnabled()
      expect(screen.getByTestId('navigation-arrow-right')).toBeEnabled()
      expect(onSlideCallbackMock).toHaveBeenCalledTimes(1)

      // Go next 2.
      userEvent.click(screen.getByTestId('navigation-arrow-right'))
      expect(screen.getByTestId('navigation-arrow-left')).toBeEnabled()
      expect(screen.getByTestId('navigation-arrow-right')).toBeDisabled()
      expect(onSlideCallbackMock).toHaveBeenCalledTimes(2)

      // Go previous 1.
      userEvent.click(screen.getByTestId('navigation-arrow-left'))
      expect(screen.getByTestId('navigation-arrow-left')).toBeEnabled()
      expect(screen.getByTestId('navigation-arrow-right')).toBeEnabled()
      expect(onSlideCallbackMock).toHaveBeenCalledTimes(3)

      // Go previous - back to where we started.
      userEvent.click(screen.getByTestId('navigation-arrow-left'))
      expect(screen.getByTestId('navigation-arrow-left')).toBeDisabled()
      expect(screen.getByTestId('navigation-arrow-right')).toBeEnabled()
      expect(onSlideCallbackMock).toHaveBeenCalledTimes(4)
    })

    it('should not render the content when children are not react component', () => {
      render(<Carousel hasDotNavigation>{undefined}</Carousel>)

      expect(
        screen.queryByTestId('slider-content-container-0')
      ).not.toBeInTheDocument()
    })
  })

  describe('Controlled', () => {
    it('disables left arrow when on the first slide', () => {
      setup({ slideIndex: 0, hasArrowNavigation: true })
      expect(screen.getByTestId('navigation-arrow-left')).toBeDisabled()
    })

    it('disables right arrow when on the last slide', () => {
      const setSlideIndex = jest.fn()
      setup({ setSlideIndex, slideIndex: 2, hasArrowNavigation: true })
      expect(screen.getByTestId('navigation-arrow-right')).toBeDisabled()
    })

    it('calls goToNextSlide when right arrow is clicked', async () => {
      const setSlideIndex = jest.fn()
      const onSlideCallbackMock = jest.fn()
      setup({
        setSlideIndex,
        slideIndex: 0,
        hasArrowNavigation: true,
        onSlide: onSlideCallbackMock,
      })

      userEvent.click(screen.getByTestId('navigation-arrow-right'))
      expect(setSlideIndex).toHaveBeenCalledTimes(1)

      await waitFor(() => {
        expect(onSlideCallbackMock).toHaveBeenCalledTimes(1)
      })
    })

    it('calls goToPrevSlide when left arrow is clicked', async () => {
      const setSlideIndex = jest.fn()
      setup({ setSlideIndex, slideIndex: 1, hasArrowNavigation: true })

      userEvent.click(screen.getByTestId('navigation-arrow-left'))

      expect(setSlideIndex).toHaveBeenCalledTimes(1)
    })

    it('renders the dot navigation placeholder', () => {
      setup({ hasDotNavigation: true })
      expect(screen.getByText('DotNavigation')).toBeVisible()
      expect(screen.getByText('This will be implemented later.')).toBeVisible()
    })
  })
})
