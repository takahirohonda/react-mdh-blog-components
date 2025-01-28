import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import * as styled from './Carousel.styled'
import { handleSlideAction } from './handleSlideAction'
import { NavArrow } from './NavArrow/NavArrow'
import { setWidth } from './setWidth'

export interface CarouselProps {
  children: ReactNode
  bgColor?: string
  customHeight?: string
  hasArrowNavigation?: boolean
  /*
   * Not implemented yet
   */
  hasDotNavigation?: boolean
  setSlideIndex?: React.Dispatch<React.SetStateAction<number>>
  onSlide?: (activeIndex?: number, previousIndex?: number) => void
  slideIndex?: number
}

export const Carousel = ({
  children,
  bgColor,
  customHeight,
  hasArrowNavigation,
  hasDotNavigation = false,
  onSlide,
  setSlideIndex,
  slideIndex,
}: CarouselProps) => {
  const carouselSectionRef = useRef<HTMLElement | null>(null)
  const [slideIndexUncontrolled, setSlideIndexUncontrolled] = useState(0)
  const [computedWidth, setComputedWidth] = useState(0)

  const totalSlideNumber = React.Children.count(children)

  const currentIndex = setSlideIndex ? slideIndex : slideIndexUncontrolled
  const isFirstSlide = currentIndex === 0
  const isLastSlide = currentIndex === totalSlideNumber - 1

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      setWidth(entries, setComputedWidth)
    })

    const currentRef = carouselSectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const goToNextSlide = useCallback(() => {
    if (
      setSlideIndex &&
      slideIndex !== undefined &&
      slideIndex < totalSlideNumber
    ) {
      handleSlideAction({
        currentSlideIndex: slideIndex,
        setSlideIndex,
        onSlideCallback: onSlide,
      })
    } else if (slideIndexUncontrolled < totalSlideNumber) {
      handleSlideAction({
        currentSlideIndex: slideIndex ?? 0,
        setSlideIndex: setSlideIndexUncontrolled,
        onSlideCallback: onSlide,
      })
    }
  }, [
    onSlide,
    setSlideIndex,
    slideIndex,
    slideIndexUncontrolled,
    totalSlideNumber,
  ])

  const goToPrevSlide = useCallback(() => {
    if (setSlideIndex && slideIndex !== undefined && slideIndex >= 0) {
      handleSlideAction({
        currentSlideIndex: slideIndex,
        setSlideIndex,
        onSlideCallback: onSlide,
        isGoingNext: false,
      })
    } else if (slideIndexUncontrolled >= 0) {
      handleSlideAction({
        currentSlideIndex: slideIndex ?? 0,
        setSlideIndex: setSlideIndexUncontrolled,
        onSlideCallback: onSlide,
        isGoingNext: false,
      })
    }
  }, [onSlide, setSlideIndex, slideIndex, slideIndexUncontrolled])

  return (
    <styled.CarouselSection
      ref={carouselSectionRef}
      bgColor={bgColor}
      customHeight={customHeight}
    >
      <styled.CarouselContainer
        computedWidth={computedWidth}
        currentIndex={currentIndex ?? 0}
      >
        {React.Children.map(children, (child, index) => {
          if (!React.isValidElement(child)) {
            return null
          }

          return (
            <styled.SliderContentContainer
              computedWidth={computedWidth}
              data-testid={`slider-content-container-${index}`}
            >
              {React.cloneElement(child, {
                ...child.props,
              })}
            </styled.SliderContentContainer>
          )
        })}
      </styled.CarouselContainer>
      {hasArrowNavigation && (
        <>
          <styled.ArrowWrapper direction="left">
            <NavArrow
              direction="left"
              disabled={isFirstSlide}
              handleClick={goToPrevSlide}
            />
          </styled.ArrowWrapper>
          <styled.ArrowWrapper direction="right">
            <NavArrow
              direction="right"
              disabled={isLastSlide}
              handleClick={goToNextSlide}
            />
          </styled.ArrowWrapper>
        </>
      )}
      {hasDotNavigation && (
        <div>
          <div>DotNavigation</div>
          <div>This will be implemented later.</div>
        </div>
      )}
    </styled.CarouselSection>
  )
}
