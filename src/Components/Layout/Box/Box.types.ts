import { BoxProps as ReflexBoxTypes } from 'reflexbox/styled-components'
import * as StyledSystem from 'styled-system'

export interface BoxProps
  extends ReflexBoxTypes,
    StyledSystem.BorderProps,
    StyledSystem.ColorProps,
    StyledSystem.GridProps,
    StyledSystem.PositionProps {
  gap?: string
}
