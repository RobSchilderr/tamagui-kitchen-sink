import '@tamagui/core/reset.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import 'raf/polyfill' // const OriginalNextImage = NextImage.default
import { Preview } from '@storybook/react'
import { StorybookDecorator } from 'app/src/provider/StorybookDecorator'

const preview: Preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      title: 'Theme',
      description: 'Theme for your components',
      defaultValue: 'light',
      toolbar: {
        icon: 'paintbrush',
        dynamicTitle: true,
        items: [
          { value: 'light', left: '☀️', title: 'Light Mode' },
          { value: 'dark', left: '🌙', title: 'Dark Mode' },
        ],
      },
    },
  },
  decorators: [StorybookDecorator],
}

export default preview
