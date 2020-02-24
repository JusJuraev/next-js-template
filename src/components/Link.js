import React from 'react'
import NextLink from 'next/link'
import styled from 'styled-components'

const StyledLink = styled('a')`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
`

const Link = props => {
  const { href, as, children, ...restProps } = props

  return (
    <NextLink href={href} as={as}>
      <StyledLink href={href} {...restProps}>
        {children}
      </StyledLink>
    </NextLink>
  )
}

export default Link
