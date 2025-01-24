# cloning element

1. cloning with styled component wrapper.

This might lead to issues if children are recursively re-rendered 😓.

```tsx
return (
  <styled.SliderContentContainer computedWidth={computedWidth}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null
      }

      return (
        <styled.SliderContentContainer computedWidth={computedWidth}>
          {React.cloneElement(child, {
            ...child.props,
          })}
        </styled.SliderContentContainer>
      )
    })}
  </styled.SliderContentContainer>
)

export const SliderContentContainer = styled.div<{
  computedWidth: number
}>`
  width: ${({ computedWidth }) => `${computedWidth}px`};
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: middle;
  scroll-snap-align: center;
  scroll-snap-stop: always;
`
```

2. Injecting style.

```tsx
  <styled.SliderContentContainer computedWidth={computedWidth}>
    {React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }

      // Inject the style directly into the child element
      return React.cloneElement(child, {
        ...child.props,
        style: {
          ...child.props.style, // Preserve existing styles on the child
          width: `${computedWidth}px`,
          display: 'flex',
          flexShrink: 0,
          justifyContent: 'center',
          alignItems: 'middle',
          scrollSnapAlign: 'center',
          scrollSnapStop: 'always',
        },
      });
    })}
  </styled.SliderContentContainer>
);
```
