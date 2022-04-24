import { FlipCard } from 'Components/FlipCard'
import { FlipCardCarousel as Carousel } from 'Components/FlipCardCarousel'

import {
  VocabBackContent,
  VocabBackContentProps,
  VocabFrontContent,
  VocabFrontContentProps,
} from '../FlipCardContent'

export interface IFlipCardVocab
  extends VocabFrontContentProps,
    VocabBackContentProps {}

export interface FlipCardsVocabProps {
  content: IFlipCardVocab[]
}

export const FlipCardsVocab: React.FC<FlipCardsVocabProps> = ({ content }) => {
  return (
    <Carousel
      content={content
        .sort(() => Math.random() - 0.5)
        .map((element) => (
          <FlipCard
            key={element.word}
            frontContent={<VocabFrontContent word={element.word} />}
            backContent={
              <VocabBackContent
                definition={element.definition}
                usage={element.usage}
              />
            }
          />
        ))}
    />
  )
}
