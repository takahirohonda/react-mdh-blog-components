import { useCallback, useState } from 'react'
import { Meta, StoryObj } from '@storybook/react'

import { Flex } from '../Layout'
import { Carousel as CarouselComponent, CarouselProps } from './Carousel'

const meta: Meta<CarouselProps> = {
  title: 'Components/Carousel',
  component: CarouselComponent,
}

export default meta

const slides = [
  {
    content: '🦄 Slide 1',
    bg: '#f0e6f6',
  },
  {
    content: '🦊 Slide 2',
    bg: '#f6e6e0',
  },
  {
    content: '🦥 Slide 3',
    bg: '#e0f6e6',
  },
]

const CarouselUncontrolledUsage = () => (
  <CarouselComponent hasArrowNavigation>
    {slides.map((slide) => (
      <div
        key={slide.content}
        style={{ padding: '20px', backgroundColor: slide.bg, width: '80%' }}
      >
        {slide.content}
      </div>
    ))}
  </CarouselComponent>
)

export const CarouselUncontrolled: StoryObj<CarouselProps> = {
  render: () => <CarouselUncontrolledUsage />,
}

const CarouselUncontrolledUsageWithDotNav = () => (
  <CarouselComponent hasArrowNavigation hasDotNavigation>
    {slides.map((slide) => (
      <div
        key={slide.content}
        style={{ padding: '20px', backgroundColor: slide.bg, width: '80%' }}
      >
        {slide.content}
      </div>
    ))}
  </CarouselComponent>
)

export const CarouselUncontrolledWithDotNav: StoryObj<CarouselProps> = {
  render: () => <CarouselUncontrolledUsageWithDotNav />,
}

const CarouselControlledUsage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = useCallback(() => {
    if (currentIndex < 2) {
      setCurrentIndex((prev) => prev + 1)
    }
  }, [currentIndex])

  const handleBack = useCallback(() => {
    if (currentIndex >= 0) {
      setCurrentIndex((prev) => prev - 1)
    }
  }, [currentIndex])

  return (
    <Flex flexDirection="column">
      <CarouselComponent
        hasArrowNavigation
        slideIndex={currentIndex}
        setSlideIndex={setCurrentIndex}
      >
        {slides.map((slide) => (
          <div
            key={slide.content}
            style={{
              padding: '20px',
              backgroundColor: slide.bg,
              width: '80%',
            }}
          >
            {slide.content}
          </div>
        ))}
      </CarouselComponent>
      <Flex gridGap="24px">
        <button type="button" onClick={handleBack}>
          Back
        </button>
        <button type="button" onClick={handleNext}>
          Forward
        </button>
      </Flex>
    </Flex>
  )
}

export const CarouselControlled: StoryObj<CarouselProps> = {
  render: () => <CarouselControlledUsage />,
}
