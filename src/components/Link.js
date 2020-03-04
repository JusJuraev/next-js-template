import React from 'react'
import { Link as I18NLink } from 'components/I18N'
import styled from 'styled-components'

const StyledLink = styled('a')`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
`

const Link = props => {
  const { href, as, children, ...restProps } = props

  return (
    <I18NLink href={href} as={as}>
      <StyledLink href={href} {...restProps}>
        {children}
      </StyledLink>
    </I18NLink>
  )
}

export default Link
