import { Story } from '@storybook/react'
import styled from 'styled-components'

import { ContentContainer } from '.'

export default {
  title: 'Components/ContentContainer',
  component: ContentContainer,
  docs: {
    description: {
      component:
        'For wrapping the content. Adjust the width according to the screen size.',
    },
  },
}

const ContentPlaceHolder = styled.div`
  background-color: #5cabfa;
  border: 3px #288ff7 solid;
  width: 100%;
  height: 100vh;
`

const ContentContainerTemplate: Story = () => (
  <ContentContainer>
    <ContentPlaceHolder />
  </ContentContainer>
)

export { ContentContainerTemplate as ContentContainer }
