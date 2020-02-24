import React from 'react'
import App from 'next/app'
import Router from 'next/router'
import { ThemeProvider } from 'styled-components'
import NormalizedStyles from 'components/NormalizedStyles'
import GlobalStyles from 'components/GlobalStyles'

const theme = {
  colors: {
    primary: '#0070f3',
  }
}

export default class MyApp extends App {
  state = { pageLoading: true }

  componentDidMount () {
    const showLoading = () => this.setState({ pageLoading: true })
    const hideLoading = () => this.setState({ pageLoading: false })

    showLoading()

    Router.events.on('routeChangeStart', showLoading)
    Router.events.on('routeChangeComplete', hideLoading)
    Router.events.on('routeChangeError', hideLoading)
  }


  render () {
    const { Component, pageProps } = this.props
    const { pageLoading } = this.state

    return (
      <ThemeProvider theme={theme}>
        <NormalizedStyles />
        <GlobalStyles />

        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
