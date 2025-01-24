import { COLOR } from 'styles/colors'

export const ColorControl = {
  options: Object.keys(COLOR),
  mapping: COLOR,
  control: {
    type: 'select',
  },
}
