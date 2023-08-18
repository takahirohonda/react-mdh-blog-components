import { ReactNode } from 'react'

export type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4'

export enum HeadingStyles {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
}

export interface HeadingProps {
  /**
   * This comment will not be displayed in the storybook prop table
   * because withStyle has argTypes in the story
   * and it will override the auto docgen.
   */
  withStyles?: HeadingStyles
  className?: string
  children: ReactNode
  dataTestId?: string
}
