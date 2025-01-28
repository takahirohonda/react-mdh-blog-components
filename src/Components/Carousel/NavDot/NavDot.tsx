import { Flex } from 'reflexbox'

import { Dot } from './NavDot.styled'

interface NavDotProps {
  totalSlideNumber: number
  currentSlideIndex: number
  dotColour?: string
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>
}

export const NavDot = ({
  totalSlideNumber,
  currentSlideIndex,
  dotColour,
  setSlideIndex,
}: NavDotProps) => {
  const slideIndexArray = [...Array(totalSlideNumber).keys()]
  return (
    <Flex>
      {slideIndexArray.map((slideIndex) => {
        return (
          <Dot
            active={slideIndex === currentSlideIndex}
            onClick={() => setSlideIndex(slideIndex)}
            dotColour={dotColour}
            key={slideIndex}
          />
        )
      })}
    </Flex>
  )
}
