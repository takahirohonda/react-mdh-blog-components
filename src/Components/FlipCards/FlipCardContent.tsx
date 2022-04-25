import { StyledHeading, StyledP } from './FlipCardContent.styled'

export interface VocabFrontContentProps {
  word: string
}

export const VocabFrontContent: React.FC<VocabFrontContentProps> = ({
  word,
}) => <StyledP>{word}</StyledP>

export interface VocabBackContentProps {
  definition?: string
  usage?: string
}

export const VocabBackContent: React.FC<VocabBackContentProps> = ({
  definition,
  usage,
}) => (
  <>
    {definition && (
      <>
        <StyledHeading>Definition:</StyledHeading>
        <StyledP>{definition}</StyledP>
      </>
    )}
    {usage && (
      <>
        <StyledHeading>Usage:</StyledHeading>
        <StyledP>{usage}</StyledP>
      </>
    )}
    {!definition && !usage && <StyledHeading>No content</StyledHeading>}
  </>
)

export interface QAndAFrontContentProps {
  question: string
}

export const QAndAFrontContent: React.FC<QAndAFrontContentProps> = ({
  question,
}) => <StyledP>{question}</StyledP>

export interface QAndABackContentProps {
  answer: string
}

export const QAndABackContent: React.FC<QAndABackContentProps> = ({
  answer,
}) => (
  <>
    <StyledHeading>Answer:</StyledHeading>
    <StyledP>{answer}</StyledP>
  </>
)

export interface PhrasesAndGrammersFrontContentProps {
  phrase: string
}

export const PhrasesAndGrammersFrontContent: React.FC<PhrasesAndGrammersFrontContentProps> = ({
  phrase,
}) => <StyledP>{phrase}</StyledP>

export interface PhrasesAndGrammersBackContentProps {
  note: string
}

export const PhrasesAndGrammersBackContent: React.FC<PhrasesAndGrammersBackContentProps> = ({
  note,
}) => (
  <>
    <StyledHeading>Note:</StyledHeading>
    <StyledP>{note}</StyledP>
  </>
)
