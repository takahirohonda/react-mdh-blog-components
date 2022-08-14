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

// Based on https://tailwindcss.com/docs/responsive-design  + custom XXL
export const BREAKPOINT: BreakpointProps = {
  [BREAKPOINT_NAME.XS]: 640, // tablet - portrait
  [BREAKPOINT_NAME.SM]: 768, // tablet - landscape
  [BREAKPOINT_NAME.MD]: 1024, // laptop - smaller
  [BREAKPOINT_NAME.LG]: 1280, // laptop - medium
  [BREAKPOINT_NAME.XL]: 1536, // desktop
  [BREAKPOINT_NAME.XXL]: 1920, // desktop - extra wide
}
