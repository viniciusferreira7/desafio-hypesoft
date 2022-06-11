import { theme } from '../src/styles/theme'
import { GlobalStyles } from '../src/styles/global-styles'

import { ThemeProvider } from 'styled-components'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {

    default: 'dark',
    value: [
      {
        name: 'light',
        value: theme.colors.white
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor
      },
    ]
  }

}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  )
]
