import { Box as BaseBox } from 'reflexbox/styled-components'
import styled from 'styled-components'
import { border, color, compose, grid, position } from 'styled-system'

import { BoxProps } from './Box.types'

const StyledBox = styled(BaseBox)<BoxProps>`
  min-width: auto;
  ${compose(border, color, grid, position)}
`

export { StyledBox as Box }
