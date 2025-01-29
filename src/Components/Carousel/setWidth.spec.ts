import { setWidth } from './setWidth'

describe('setWidth', () => {
  let mockSetComputedWidth: jest.Mock
  let mockRequestAnimationFrame: jest.SpyInstance

  beforeEach(() => {
    mockSetComputedWidth = jest.fn()
    mockRequestAnimationFrame = jest
      .spyOn(window, 'requestAnimationFrame')
      .mockImplementation((callback) => {
        callback(0)
        return 1
      })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should call setComputedWidth with the new width when it differs from the previous width', () => {
    const mockEntries = ([
      {
        contentRect: {
          width: 500,
        },
      },
    ] as unknown) as ResizeObserverEntry[]

    mockSetComputedWidth.mockImplementation((callback) => callback(300))

    setWidth(mockEntries, mockSetComputedWidth)

    expect(mockRequestAnimationFrame).toHaveBeenCalled()
    expect(mockSetComputedWidth).toHaveBeenCalledWith(expect.any(Function))

    const callback = mockSetComputedWidth.mock.calls[0][0]
    expect(callback(300)).toBe(500)
  })

  it('should not update the width if it is the same as the previous width', () => {
    const mockEntries = ([
      {
        contentRect: {
          width: 400,
        },
      },
    ] as unknown) as ResizeObserverEntry[]

    mockSetComputedWidth.mockImplementation((callback) => callback(400))

    setWidth(mockEntries, mockSetComputedWidth)

    expect(mockRequestAnimationFrame).toHaveBeenCalled()
    expect(mockSetComputedWidth).toHaveBeenCalledWith(expect.any(Function))

    const callback = mockSetComputedWidth.mock.calls[0][0]
    expect(callback(400)).toBe(400)
  })

  it('should not call setComputedWidth if contentRect.width is 0', () => {
    const mockEntries = ([
      {
        contentRect: {
          width: 0,
        },
      },
    ] as unknown) as ResizeObserverEntry[]

    setWidth(mockEntries, mockSetComputedWidth)

    expect(mockRequestAnimationFrame).not.toHaveBeenCalled()
    expect(mockSetComputedWidth).not.toHaveBeenCalled()
  })
})
