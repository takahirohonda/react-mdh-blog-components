import { ReactElement } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { renderHook, RenderHookOptions } from '@testing-library/react-hooks'
import userEvent from '@testing-library/user-event'
import { ThemeProvider } from 'styled-components'

import { theme } from '../styles/theme'

// children: ReactNode will error after upgrading to node 20...
const ThemeWrapper = ({ children }: { children?: any }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ThemeWrapper, ...options })

const customRenderHook = <TProps, TResult>(
  callback: (props: TProps) => TResult,
  options?: RenderHookOptions<TProps>
) => renderHook(callback, { wrapper: ThemeWrapper, ...options })

export * from '@testing-library/react'
export {
  customRender as render,
  customRenderHook as renderHook,
  userEvent,
  ThemeWrapper,
}
