import '@brainhubeu/react-carousel/lib/style.css'

import { Children, useCallback, useEffect, useState } from 'react'
import * as ReactCarousel from '@brainhubeu/react-carousel'

import { usePrevious } from '../../hooks/usePrevious/usePrevious'
import * as styled from './Carousel.styled'
import { NavArrow } from './NavArrow/NavArrow'

export interface CarouselProps {
  bgColor?: string
  children?: React.ReactNode
  customHeight?: string
  forwardedDotsProps?: React.HTMLAttributes<HTMLElement>
  forwardedProps?: React.HTMLAttributes<HTMLElement>
  hasArrowNavigation?: boolean
  hasDotNavigation?: boolean
  onSlide?: (activeIndex: number, previousIndex: number) => void
  setSlideIndex: (slideIndex: number) => void
  slideIndex: number
}

// Workaround for vite dev interop issue.
// See https://npco-dev.atlassian.net/browse/BANK-5997 for more details.
const ReactCarouselDefault = ReactCarousel.default
const { Dots, arrowsPlugin } = ReactCarousel
const Slider =
  (ReactCarouselDefault as any).default === undefined
    ? ReactCarouselDefault
    : (ReactCarouselDefault as any).default

export const Carousel = ({
  bgColor,
  children,
  customHeight,
  forwardedProps,
  forwardedDotsProps,
  hasArrowNavigation,
  hasDotNavigation = true,
  onSlide: handleSlide,
  setSlideIndex,
  slideIndex,
}: CarouselProps) => {
  const onChange = useCallback((index: number) => setSlideIndex(index), [
    setSlideIndex,
  ])

  const previousSlideIndex = usePrevious(slideIndex)

  useEffect(() => {
    if (previousSlideIndex === undefined) {
      return
    }

    if (previousSlideIndex === slideIndex) {
      return
    }

    handleSlide?.(slideIndex, previousSlideIndex)
  }, [slideIndex, handleSlide, previousSlideIndex])

  return (
    <styled.Wrapper
      bgColor={bgColor}
      customHeight={customHeight}
      data-testid="carousel"
      hasDotNavigation={hasDotNavigation}
      {...forwardedProps}
    >
      <Slider
        onChange={onChange}
        {...(hasArrowNavigation && {
          plugins: [
            {
              resolve: arrowsPlugin,
              options: {
                arrowLeft: <NavArrow direction="left" />,
                arrowLeftDisabled: <NavArrow direction="left" disabled />,
                arrowRight: <NavArrow direction="right" />,
                arrowRightDisabled: <NavArrow direction="right" disabled />,
                addArrowClickHandler: true,
              },
            },
          ],
        })}
        value={slideIndex}
      >
        {children}
      </Slider>
      {hasDotNavigation && (
        <styled.DotsWrapper
          data-testid="carousel-dot-navigation"
          {...forwardedDotsProps}
        >
          <Dots
            number={Children.count(children)}
            onChange={onChange}
            value={slideIndex}
          />
        </styled.DotsWrapper>
      )}
    </styled.Wrapper>
  )
}

interface CarouselUncontrollerProps
  extends Omit<CarouselProps, 'slideIndex' | 'setSlideIndex'> {
  initialSlideIndex?: number
}

const CarouselUncontrolled = ({
  initialSlideIndex = 0,
  ...carouselProps
}: CarouselUncontrollerProps) => {
  const [slideIndex, setSlideIndex] = useState(initialSlideIndex)

  return (
    <Carousel
      {...carouselProps}
      slideIndex={slideIndex}
      setSlideIndex={setSlideIndex}
    />
  )
}

Carousel.Uncontrolled = CarouselUncontrolled
