import { ReactComponent as LeftArrow } from '../../../assets/svg/chevron-left.svg'
import { ReactComponent as RightArrow } from '../../../assets/svg/chevron-right.svg'
import { StyledArrowIcon, StyledNavArrowButton } from './NavArrow.styled'

interface NavArrowProps {
  direction: 'left' | 'right'
  disabled?: boolean
}

export const NavArrow = ({ direction, disabled }: NavArrowProps) => {
  return (
    <StyledNavArrowButton
      type="button"
      data-testid={`navigation-arrow-${direction}`}
    >
      <StyledArrowIcon height="13" width="13" disabled={disabled}>
        {direction === 'left' ? <LeftArrow /> : <RightArrow />}
      </StyledArrowIcon>
    </StyledNavArrowButton>
  )
}
