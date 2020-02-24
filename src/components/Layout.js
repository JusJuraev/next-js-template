import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'

const Layout = styled('div')`
  border: 1px solid #DDD;
  padding: 20px;
  margin: 20px;
`

export default props => {
  return (
    <Layout>
      <Header />
      {props.children}
    </Layout>
  )
}
