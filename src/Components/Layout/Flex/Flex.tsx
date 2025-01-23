import styled from 'styled-components'

import { Box } from '../Box/Box'
import { BoxProps } from '../Box/Box.types'

const StyledFlex = styled(Box)<BoxProps>`
  display: flex;
  ${({ gap }) => gap && `gap: ${gap};`}
`

export { StyledFlex as Flex }
