import React from 'react'
import PropTypes from 'prop-types'
import NextLink from 'next/link'
import styled from 'styled-components'

const StyledLink = styled('a')`
  color: ${props => props.theme.colors.primary};
  font-weight: 500;
  text-decoration: none;
`

function Link (props) {
  const { href, as, children, locale, ...restProps } = props

  return (
    <NextLink href={href} as={as} locale={locale}>
      <StyledLink href={href} {...restProps}>
        {children}
      </StyledLink>
    </NextLink>
  )
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  as: PropTypes.string,
  locale: PropTypes.string
}

export default Link
