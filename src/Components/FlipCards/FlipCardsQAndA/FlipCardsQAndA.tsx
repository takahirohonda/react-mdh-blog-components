import { FlipCard } from 'Components/FlipCard'
import { FlipCardCarousel as Carousel } from 'Components/FlipCardCarousel'

import {
  QAndABackContent,
  QAndABackContentProps,
  QAndAFrontContent,
  QAndAFrontContentProps,
} from '../FlipCardContent'

export interface IFlipCardQAndA
  extends QAndAFrontContentProps,
    QAndABackContentProps {}

export interface FlipCardsQAndAProps {
  content: IFlipCardQAndA[]
}

export const FlipCardsQAndA: React.FC<FlipCardsQAndAProps> = ({ content }) => {
  return (
    <Carousel
      content={content
        .sort(() => Math.random() - 0.5)
        .map((element) => (
          <FlipCard
            key={element.question}
            frontContent={<QAndAFrontContent question={element.question} />}
            backContent={<QAndABackContent answer={element.answer} />}
          />
        ))}
    />
  )
}
