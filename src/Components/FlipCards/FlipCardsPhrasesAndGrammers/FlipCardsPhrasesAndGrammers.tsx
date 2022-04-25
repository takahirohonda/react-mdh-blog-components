import { FlipCard } from 'Components/FlipCard'
import { FlipCardCarousel as Carousel } from 'Components/FlipCardCarousel'

import {
  PhrasesAndGrammersBackContent,
  PhrasesAndGrammersBackContentProps,
  PhrasesAndGrammersFrontContent,
  PhrasesAndGrammersFrontContentProps,
} from '../FlipCardContent'

export interface IFlipCardPhrasesAndGrammers
  extends PhrasesAndGrammersFrontContentProps,
    PhrasesAndGrammersBackContentProps {}

export interface FlipCardsPhrasesAndGrammersProps {
  content: IFlipCardPhrasesAndGrammers[]
}

export const FlipCardsPhrasesAndGrammers: React.FC<FlipCardsPhrasesAndGrammersProps> = ({
  content,
}) => {
  return (
    <Carousel
      content={content
        .sort(() => Math.random() - 0.5)
        .map((element) => (
          <FlipCard
            key={element.phrase}
            frontContent={
              <PhrasesAndGrammersFrontContent phrase={element.phrase} />
            }
            backContent={<PhrasesAndGrammersBackContent note={element.note} />}
          />
        ))}
    />
  )
}
