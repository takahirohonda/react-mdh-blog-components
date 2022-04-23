import { FlipCardCarousel as Carousel } from '../FlipCardCarousel'
import { FlipCard } from './FlipCard'
import words from './words.json'

export const FlipCards = () => {
  return (
    <Carousel
      width="350px"
      height="400px"
      content={words.words
        .sort(() => Math.random() - 0.5)
        .map((word) => (
          <FlipCard
            key={word.word}
            word={word.word}
            definition={word.definition}
            usage={word.usage}
          />
        ))}
    />
  )
}
