import React from 'react'
import styled from 'styled-components'
import Link from 'components/Link'

const Navigation = styled('div')`
  align-items: center;
  display:flex;
  margin-bottom: 20px;
  & > a {
    padding: 5px;
    &:not(:last-child) {
      margin-right: 15px;
    }
  }
`

export default () => {
  return (
    <Navigation>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About Page</Link>
    </Navigation>
  )
}
