import { setWidth } from './setWidth'

describe('setWidth', () => {
  it('should call setComputedWidth with the width from the first entry', () => {
    const mockSetComputedWidth = jest.fn()
    const mockEntries: ResizeObserverEntry[] = [
      {
        contentRect: { width: 500 } as DOMRectReadOnly,
        target: {} as Element,
        borderBoxSize: [],
        contentBoxSize: [],
        devicePixelContentBoxSize: [],
      },
    ]

    setWidth(mockEntries, mockSetComputedWidth)

    expect(mockSetComputedWidth).toHaveBeenCalledWith(500)
  })

  it('should not call setComputedWidth if sectionWidth is undefined', () => {
    const mockSetComputedWidth = jest.fn()
    const mockEntries: ResizeObserverEntry[] = [
      {
        contentRect: { width: 0 } as DOMRectReadOnly,
        target: {} as Element,
        borderBoxSize: [],
        contentBoxSize: [],
        devicePixelContentBoxSize: [],
      },
    ]

    setWidth(mockEntries, mockSetComputedWidth)

    expect(mockSetComputedWidth).not.toHaveBeenCalled()
  })
})
