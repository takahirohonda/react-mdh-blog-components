import { Story } from '@storybook/react'

import { BlogTitle } from './BlogTitle'

export default {
  title: 'Components/BlogTitle',
  component: BlogTitle,
  docs: {
    description: {
      component: 'Blog title for MDH site.',
    },
  },
}

const BlogTitleComponent: Story = () => <BlogTitle />
export { BlogTitleComponent as BlogTitle }
