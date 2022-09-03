export enum COLOR_NAME {
  PRIMARY_RED = 'PRIMARY_RED',
}

type ColorProps = {
  [key in COLOR_NAME]: string
}

export const COLOR: ColorProps = {
  [COLOR_NAME.PRIMARY_RED]: '#dd3333',
}
