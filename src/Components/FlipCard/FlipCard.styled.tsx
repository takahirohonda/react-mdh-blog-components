import { motion } from 'framer-motion'
import styled from 'styled-components'

// This controls the size of the flip card
export const StyledCard = styled.div`
  position: relative;
  width: 340px;
  height: 280px;
  perspective: 500px;
  display: flex;
  justify-content: center;
`
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledFlipCardContainer = styled(motion.div)`
  position: absolute;
  width: 300px;
  height: 100%;
  transform-style: preserve-3d;
  color: #2a2727;
  border-radius: 20px;
  border: solid 1px #c7c7c7;
`

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledFlipCardFront = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
`

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const StyledFlipCardBack = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`
