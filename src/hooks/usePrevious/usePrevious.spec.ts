import { renderHook } from '@testing-library/react-hooks'

import { usePrevious } from './usePrevious'

it('Should return previous values on subsequent rerenders', async () => {
  const { result, rerender } = renderHook((value) => usePrevious(value), {
    initialProps: 'zeller',
  })

  expect(result.current).toBeUndefined()
  rerender('business')
  expect(result.current).toBe('zeller')
  rerender('banking')
  expect(result.current).toBe('business')
  rerender()
  expect(result.current).toBe('banking')
})
