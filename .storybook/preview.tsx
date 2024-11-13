import React from 'react'
import type { Preview } from "@storybook/react"
import { ThemeProvider } from '../src/components/ThemeProvider'
import { ThemeSwitcher } from '../src/components/ThemeSwitcher'
import '../src/styles/base.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-4">
          <ThemeSwitcher />
          <div className="mt-4">
            <Story />
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
}

export default preview