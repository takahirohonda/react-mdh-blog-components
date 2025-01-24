import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'

// children: ReactNode will error after upgrading to node 20...
const ThemeWrapper = ({ children }: { children?: any }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ThemeWrapper, ...options })

export * from '@testing-library/react'
export { customRender as render, userEvent, ThemeWrapper }
