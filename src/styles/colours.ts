export enum COLOUR_NAME {
  PRIMARY_RED = 'PRIMARY_RED',
}

type ColorProps = {
  [key in COLOUR_NAME]: string
}

export const colours: ColorProps = {
  [COLOUR_NAME.PRIMARY_RED]: '#dd3333',
}
