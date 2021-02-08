import React from 'react'
import { ThemeProvider } from 'styled-components'
import NormalizedStyles from 'components/NormalizedStyles'
import GlobalStyles from 'components/GlobalStyles'

const theme = {
  colors: {
    primary: '#0070f3',
  }
}

const App = props => {
  const { Component, pageProps } = props

  return (
    <ThemeProvider theme={theme}>
      <NormalizedStyles />
      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
