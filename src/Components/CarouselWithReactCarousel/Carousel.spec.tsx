import { render, screen, userEvent, waitFor } from '../../utils/test'
import { Carousel } from './Carousel'

describe('Carousel', () => {
  describe('uncontrolled component', () => {
    it('should render slides and dot navigation according to children number', () => {
      render(
        <Carousel.Uncontrolled>
          <div>Img1</div>
          <div>Img2</div>
          <div>Img3</div>
        </Carousel.Uncontrolled>
      )

      expect(screen.queryByText('1')).toBeVisible()
      expect(screen.queryByText('2')).toBeVisible()
      expect(screen.queryByText('3')).toBeVisible()
      expect(screen.queryByText('4')).toBeNull()

      expect(screen.queryByTestId('carousel-dot-navigation')).toBeVisible()
    })

    it('should not render arrow navigation by default', () => {
      const { container } = render(
        <Carousel.Uncontrolled>
          <div>Img1</div>
          <div>Img2</div>
          <div>Img3</div>
        </Carousel.Uncontrolled>
      )

      expect(
        container.getElementsByClassName('BrainhubCarousel__customArrows')
          .length
      ).toBe(0)
    })

    it('should not render dot navigation', () => {
      render(
        <Carousel.Uncontrolled hasDotNavigation={false}>
          <div>Img1</div>
          <div>Img2</div>
          <div>Img3</div>
        </Carousel.Uncontrolled>
      )

      expect(screen.queryByTestId('carousel-dot-navigation')).toBeNull()
    })

    it('should render arrow navigation', () => {
      render(
        <Carousel.Uncontrolled hasArrowNavigation>
          <div>Img1</div>
          <div>Img2</div>
          <div>Img3</div>
        </Carousel.Uncontrolled>
      )

      expect(screen.queryByTestId('navigation-arrow-left')).toBeVisible()
      expect(screen.queryByTestId('navigation-arrow-right')).toBeVisible()
    })

    it('should trigger handle slide callback when slide index changes', async () => {
      const handleSlide = jest.fn()

      render(
        <Carousel.Uncontrolled onSlide={handleSlide} hasArrowNavigation>
          <div>Img1</div>
          <div>Img2</div>
          <div>Img3</div>
        </Carousel.Uncontrolled>
      )

      const arrowRight = screen.getByTestId('navigation-arrow-right')
      expect(arrowRight).toBeVisible()

      userEvent.click(arrowRight)

      await waitFor(() => {
        expect(handleSlide).toHaveBeenCalledWith(1, 0)
      })

      const leftArrow = screen.getByTestId('navigation-arrow-left')

      userEvent.click(leftArrow)

      await waitFor(() => {
        expect(handleSlide).toHaveBeenCalledWith(0, 1)
      })

      expect(handleSlide).toHaveBeenCalledTimes(2)
    })
  })

  it('should not trigger handle slide callback when slide index does not change', async () => {
    const handleSlide = jest.fn()

    const { rerender } = render(
      <Carousel.Uncontrolled onSlide={handleSlide} hasArrowNavigation>
        <div>Img1</div>
        <div>Img2</div>
        <div>Img3</div>
      </Carousel.Uncontrolled>
    )

    const arrowRight = screen.getByTestId('navigation-arrow-right')
    expect(arrowRight).toBeVisible()

    userEvent.click(arrowRight)

    await waitFor(() => {
      expect(handleSlide).toHaveBeenCalledTimes(1)
    })

    rerender(
      <Carousel.Uncontrolled onSlide={handleSlide} hasArrowNavigation>
        <div>Img1</div>
        <div>Img2</div>
        <div>Img3</div>
      </Carousel.Uncontrolled>
    )

    expect(handleSlide).toHaveBeenCalledTimes(1)
  })

  describe('controlled component', () => {
    it('should render slides using controlled slide index property', () => {
      render(
        <Carousel slideIndex={2} setSlideIndex={jest.fn()}>
          <div>Img1</div>
          <div>Img2</div>
          <div>Img3</div>
        </Carousel>
      )

      expect(screen.queryByText('1')).toBeVisible()
      expect(screen.queryByText('2')).toBeVisible()
      expect(screen.queryByText('3')).toBeVisible()
      expect(screen.queryByText('4')).toBeNull()

      expect(screen.queryByTestId('carousel-dot-navigation')).toBeVisible()
    })

    it('should trigger controlled set slide index callback on change of slide', async () => {
      const setSlideIndex = jest.fn()

      render(
        <Carousel
          hasArrowNavigation
          setSlideIndex={setSlideIndex}
          slideIndex={1}
        >
          <div>Img1</div>
          <div>Img2</div>
          <div>Img3</div>
        </Carousel>
      )

      const arrowRight = screen.getByTestId('navigation-arrow-right')
      expect(arrowRight).toBeVisible()

      userEvent.click(arrowRight)

      await waitFor(() => {
        expect(setSlideIndex).toHaveBeenCalledWith(2)
      })

      expect(setSlideIndex).toHaveBeenCalledTimes(1)
    })
  })
})
