enum BREAKPOINT_NAME {
  XS = 'XS',
  SM = 'SM',
  MD = 'MD',
  LG = 'LG',
  XL = 'XL',
  XXL = 'XXL',
}

type BreakpointProps = {
  [key in BREAKPOINT_NAME]: number
}

export const BREAKPOINT: BreakpointProps = {
  [BREAKPOINT_NAME.XS]: 576,
  [BREAKPOINT_NAME.SM]: 768,
  [BREAKPOINT_NAME.MD]: 992,
  [BREAKPOINT_NAME.LG]: 1200,
  [BREAKPOINT_NAME.XL]: 1400,
  [BREAKPOINT_NAME.XXL]: 1919,
}
