import styled from 'styled-components'

export const Dot = styled.button<{
  active?: boolean
  dotColour?: string
}>`
  width: 8px;
  height: 8px;
  border-radius: 9999px;
  opacity: ${({ active }) => (active ? '1' : '0.2')};
  border: none;
  background-color: ${({ theme, dotColour }) =>
    dotColour ?? theme.colors.BLACK_900};
  margin-right: 16px;
  cursor: pointer;
  flex-shrink: 0;
`

export const StyledDot = styled.div`
  width: 6px;
  height: 6px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.BLACK_900};
  flex-shrink: 0;
`
