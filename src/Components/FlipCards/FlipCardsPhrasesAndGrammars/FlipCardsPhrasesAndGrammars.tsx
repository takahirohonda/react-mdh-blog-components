import { FlipCard } from 'Components/FlipCard'
import { FlipCardCarousel as Carousel } from 'Components/FlipCardCarousel'

import {
  PhrasesAndGrammarsBackContent,
  PhrasesAndGrammarsBackContentProps,
  PhrasesAndGrammarsFrontContent,
  PhrasesAndGrammarsFrontContentProps,
} from '../FlipCardContent'

export interface IFlipCardPhrasesAndGrammars
  extends PhrasesAndGrammarsFrontContentProps,
    PhrasesAndGrammarsBackContentProps {}

export interface FlipCardsPhrasesAndGrammarsProps {
  content: IFlipCardPhrasesAndGrammars[]
}

export const FlipCardsPhrasesAndGrammars: React.FC<FlipCardsPhrasesAndGrammarsProps> = ({
  content,
}) => {
  return (
    <Carousel
      dataTestId="flipCardPhrasesAndGrammars"
      content={content
        .sort(() => Math.random() - 0.5)
        .map((element) => (
          <FlipCard
            key={element.phrase}
            frontContent={
              <PhrasesAndGrammarsFrontContent phrase={element.phrase} />
            }
            backContent={<PhrasesAndGrammarsBackContent note={element.note} />}
          />
        ))}
    />
  )
}
