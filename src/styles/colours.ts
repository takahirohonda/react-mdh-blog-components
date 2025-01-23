export enum COLOUR_NAME {
  PRIMARY_RED = 'PRIMARY_RED',
  GREY_150 = 'GREY_150',
}

type ColorProps = {
  [key in COLOUR_NAME]: string
}

export const colours: ColorProps = {
  [COLOUR_NAME.PRIMARY_RED]: '#dd3333',
  [COLOUR_NAME.GREY_150]: '#D9DCDE',
}
