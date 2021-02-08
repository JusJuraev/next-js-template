import React from 'react'
import styled from 'styled-components'
import Header from 'components/Header'

const LayoutWrap = styled('div')`
  border: 1px solid #DDD;
  padding: 20px;
  margin: 20px;
`

export default function Layout (props) {
  return (
    <LayoutWrap>
      <Header />
      {props.children}
    </LayoutWrap>
  )
}
