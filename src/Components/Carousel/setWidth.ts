export const setWidth = (
  entries: ResizeObserverEntry[],
  setComputedWidth: React.Dispatch<React.SetStateAction<number>>
) => {
  const sectionWidth = entries[0].contentRect.width
  if (sectionWidth) {
    window.requestAnimationFrame(() => {
      setComputedWidth((prevWidth) =>
        prevWidth !== sectionWidth ? sectionWidth : prevWidth
      )
    })
  }
}
