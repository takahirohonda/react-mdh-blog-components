interface HandleSlideActionArgs {
  currentSlideIndex: number
  setSlideIndex: React.Dispatch<React.SetStateAction<number>>
  onSlideCallback?: (activeIndex: number, previousIndex: number) => void
  isGoingNext?: boolean
}

export const handleSlideAction = ({
  currentSlideIndex,
  setSlideIndex,
  onSlideCallback,
  isGoingNext = true,
}: HandleSlideActionArgs) => {
  const slideUpdateValue = isGoingNext ? 1 : -1
  const nextSlideIndex = currentSlideIndex + slideUpdateValue
  setSlideIndex((prev) => prev + slideUpdateValue)
  onSlideCallback?.(currentSlideIndex, nextSlideIndex)
}
