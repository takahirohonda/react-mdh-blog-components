import {
  HTMLAttributes,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import * as styled from './Carousel.styled'
import { NavArrow } from './NavArrow/NavArrow'

export interface CarouselProps {
  slideComponents: (() => JSX.Element)[]
  bgColor?: string
  customHeight?: string
  forwardedDotsProps?: HTMLAttributes<HTMLElement>
  forwardedProps?: HTMLAttributes<HTMLElement>
  hasArrowNavigation?: boolean
  hasDotNavigation?: boolean
  setSlideIndex?: (slideIndex: number) => void
  slideIndex?: number
}

export const Carousel = ({
  slideComponents: SlideComponents,
  bgColor,
  customHeight,
  forwardedDotsProps,
  forwardedProps,
  hasArrowNavigation,
  hasDotNavigation,
  setSlideIndex,
  slideIndex,
}: CarouselProps) => {
  const carouselSectionRef = useRef<HTMLElement | null>(null)
  const [slideIndexUncontrolled, setSlideIndexUncontrolled] = useState(0)
  const [computedWidth, setComputedWidth] = useState(0)

  const totalSlideNumber = SlideComponents.length
  const currentIndex = setSlideIndex ? slideIndex : slideIndexUncontrolled
  const isFirstSlide = currentIndex === 0
  const isLastSlide = currentIndex === totalSlideNumber - 1

  const slides = SlideComponents.map((slideComponent, index) => ({
    key: `slide-${index}`,
    Component: slideComponent,
  }))

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      const sectionWidth = entries[0].contentRect.width
      if (sectionWidth) {
        setComputedWidth(sectionWidth)
      }
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
    if (setSlideIndex && slideIndex && slideIndex < totalSlideNumber - 1) {
      setSlideIndex(slideIndex + 1)
    } else if (slideIndexUncontrolled < totalSlideNumber - 1) {
      setSlideIndexUncontrolled((prev) => prev + 1)
    }
  }, [setSlideIndex, slideIndex, slideIndexUncontrolled, totalSlideNumber])

  const goToPrevSlide = useCallback(() => {
    if (setSlideIndex && slideIndex !== undefined && slideIndex > 0) {
      setSlideIndex(slideIndex - 1)
    } else if (slideIndexUncontrolled > 0) {
      setSlideIndexUncontrolled((prev) => prev - 1)
    }
  }, [setSlideIndex, slideIndex, slideIndexUncontrolled])

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
        {slides.map(({ key, Component }) => (
          <styled.SliderContentContainer
            key={key}
            computedWidth={computedWidth}
          >
            <Component />
          </styled.SliderContentContainer>
        ))}
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
    </styled.CarouselSection>
  )
}
